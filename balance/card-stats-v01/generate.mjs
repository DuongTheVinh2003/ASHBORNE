import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { classes, raceProfiles, weapons, elements, seals, jokers } from './catalog.mjs';

export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
export const out=path.join(root,'outputs/ashborne-card-balance-20261126');
// Positive stat arithmetic: tiny tolerance resolves binary .005 ties consistently with the workbook.
export const round=(n,d=0)=>Math.round((n+1e-9)*10**d)/10**d;
export const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export const config=JSON.parse(await fs.readFile(path.join(root,'balance/card-stats-v01/config.json'),'utf8'));
const combat=await fs.readFile(path.join(root,'Ashborne-Concept-The-Combat.md'),'utf8');
const racesText=await fs.readFile(path.join(root,'Ashborne-Chung-toc-va-Binh-chung.md'),'utf8');
const clean=t=>t.replace(/\*\*/g,'').replace(/^✦\s*/, '').trim();
const classKey={'Kiếm':'sword','Giáo':'spear','Khiên':'shield','Cung':'archer','Pháp':'mage'};
export const raceSeeds=[...racesText.matchAll(/^\| (\d{2}) \| (.*?) \| (.*?) \| (.*?) \|$/gm)].map(m=>({id:'R'+m[1],name:m[2],flavor:m[3],specialties:m[4].split(',').map(t=>classKey[t.trim()]),profile:raceProfiles[Number(m[1])-1]}));
let family='', weaponIndex=0;
export const weaponSeeds=[];
for(const line of combat.split('## Thẻ Nguyên tố')[0].split('\n')){
 if(line.startsWith('### ')) family=line.slice(4).trim();
 const m=line.match(/^\| (Trực tiếp|Kỹ năng|Sức mạnh) \| \*\*(.*?)\*\* \| (.*?) \|/);
 if(m){const stats=weapons[weaponIndex]; if(!stats)throw Error('Missing weapon template '+m[2]);weaponSeeds.push({id:'W'+String(++weaponIndex).padStart(2,'0'),family,group:m[1],name:m[2],sourceEffect:m[3],...stats});}
}
export const sealSeeds=[];
let suit='',si=0;
const suits={'♠':'Gió','♥':'Lửa','♦':'Nước','♣':'Đất'};
for(const line of combat.split('\n')){
 const sm=line.match(/^### ([♠♥♦♣])/);if(sm)suit=sm[1];
 const m=line.match(/^\| \*\*([A2-9JQK]|10)([♠♥♦♣])\*\* \| (.*?) \| \*\*(.*?)\*\* \| (.*?) \|/);
 if(m){sealSeeds.push({id:`S${{'♠':'S','♥':'H','♦':'D','♣':'C'}[m[2]]}${m[1]}`,rank:m[1],suit:m[2],family:suits[m[2]],name:clean(m[4]),sourceEffect:m[5],...seals[si++]});}
}
for(const [i,name] of ['Vô Diện Nuốt Tên','Bạch Diện Khai Ấn'].entries())sealSeeds.push({id:i?'JOKER-W':'JOKER-B',rank:'Joker',suit:i?'Trắng':'Đen',family:'Joker',name,...jokers[i]});
if(raceSeeds.length!==60||weaponSeeds.length!==48||sealSeeds.length!==54||weapons.length!==48||seals.length!==52)throw Error('Source inventory mismatch');

export const anchorDefault={damage:8,shield:9,heal:6,sealDamage:8,sealShield:9,sealHeal:6};
export function weaponParam(p,q,group,cfg=config){
 if(p.scale==='fixed')return p.value;
 if(p.scale==='duration')return p.value+q.durationBonus;
 const anchor=p.unit==='HP'?'heal':p.unit==='Khiên'?'shield':'damage';
 return Math.round(p.value*cfg.anchors[anchor]/anchorDefault[anchor]*q.effect);
}
export function elementParam(p,cfg=config,weak=false){
 if(['damage','shield','heal'].includes(p.scale))return Math.round(p.value*cfg.anchors[p.scale]/anchorDefault[p.scale]*(weak?cfg.elements.weakNumeric:1));
 return p.value;
}
export function sealParam(p,rank,cfg=config){return p.scale==='rank'?Math.round(cfg.anchors[p.anchor]*cfg.ranks[rank].power*p.coefficient):p.value;}
export function tooltip(template,values){return template.replace(/\{(\w+)\}/g,(_,k)=>{if(!(k in values))throw Error('Missing tooltip parameter '+k);const v=values[k];return /ratio|Threshold/.test(k)?`${Math.round(v*100)}%`:String(v);});}
export function generateWeapons(cfg=config){return weaponSeeds.flatMap(w=>cfg.qualities.map(q=>{
 const factor=w.group==='Trực tiếp'?q.direct:1;
 const v={damage:Math.round(w.damage*cfg.anchors.damage/8*factor),shield:Math.round(w.shield*cfg.anchors.shield/9*factor),heal:Math.round(w.heal*cfg.anchors.heal/6*factor)};
 const params=Object.fromEntries(w.params.map(p=>[p.key,weaponParam(p,q,w.group,cfg)]));
 return {...w,id:w.id+'-'+q.id,baseId:w.id,quality:q.name,qualityId:q.id,...v,params,description:tooltip(w.rule,{...v,...params})};
}));}
export function generateElements(cfg=config){return elements.map(e=>{const params=Object.fromEntries(e.params.map(p=>[p.key,elementParam(p,cfg)]));const weakParams=Object.fromEntries(e.params.map(p=>[p.key,elementParam(p,cfg,true)]));let weakRule=e.rule;
 if(e.id==='wind')weakRule='Chỉ xem lá đầu, không được đưa xuống đáy; không rút thêm.';
 if(e.id==='returnWind')weakParams.turns=1;
 return {...e,params,weakParams,description:tooltip(e.rule,params),weakDescription:tooltip(weakRule,weakParams),gaugeGain:cfg.elements.gain};});}
export function generateSeals(cfg=config){return sealSeeds.map(s=>{const params=Object.fromEntries(s.params.map(p=>[p.key,sealParam(p,s.rank,cfg)]));return {...s,mana:0,load:cfg.ranks[s.rank].load,params,description:tooltip(s.rule,params)};});}
export function racePower(r,cfg=config){const [h,a,d,s]=r.profile;return h**0.45*a**0.35*s**0.2*(1+cfg.economy.defenseWeight*cfg.anchors.armyDefense*d)/(1+cfg.economy.defenseWeight*cfg.anchors.armyDefense);}
export function makeArmy(r,c,cfg=config){
 const compatibility=cfg.severePairs.some(([a,b])=>a===r.id&&b===c.id)?'severe':r.specialties.includes(c.id)?'specialty':'off';
 const k=cfg.compatibility[compatibility], [h,a,d,s]=r.profile;
 // Compatibility rewards role output; physiology and speed remain race × class.
 const stats={hp:round(cfg.anchors.armyHp*h*c.hp,2),attack:round(cfg.anchors.armyAttack*a*c.attack*k.stat,2),defense:round(cfg.anchors.armyDefense*d*c.defense,2),speed:round(cfg.anchors.armySpeed*s*c.speed,2)};
 const recruitGold=Math.max(1,Math.round(cfg.anchors.recruitGold*racePower(r,cfg)**cfg.economy.costExponent*c.cost*k.cost));
 const supplyPerEight=Math.max(1,Math.ceil(cfg.anchors.supplyPerEight*racePower(r,cfg)*c.cost*k.cost));
 return {id:`${r.id}-${c.id}`,raceId:r.id,race:r.name,classId:c.id,className:c.name,compatibility,...stats,interval:round(1/stats.speed,3),range:c.range,move:c.move,radius:c.radius,recruitGold,supplyPerEight,locked:c.locked,behavior:c.behavior};
}
export function fuseArmy(parts,cfg=config){
 if(parts.length<2||parts.length>cfg.fusion.maxComponents)throw Error('Fusion needs 2..'+cfg.fusion.maxComponents+' flattened components');
 if(new Set(parts.map(x=>x.id)).size!==parts.length)throw Error('Duplicate fusion component');
 if(parts.some(x=>x.components))throw Error('Nested fusion forbidden: pass original flattened components');
 const base=parts[0], f=cfg.fusion,weights=parts.map((_,i)=>i?f.otherWeight:f.rootWeight),total=weights.reduce((a,b)=>a+b,0);
 const synergy=Math.min(f.synergyCap,f.synergyPerOther*parts.slice(1).filter(x=>x.classId!==base.classId).length);
 const result={...base,id:parts.map(x=>x.id).join('+'),components:parts.map(x=>x.id)};
 for(const key of ['hp','attack','defense','speed']){
  if(key===base.locked){result[key]=base[key];continue;}
  const avg=parts.reduce((n,p,i)=>n+p[key]*weights[i],0)/total;
  result[key]=round(clamp(avg*(1+synergy),base[key]*f.minRatio,base[key]*f.maxRatio),2);
 }
 result.interval=round(1/result.speed,3);
 result.recruitGold=Math.ceil(Math.max(base.recruitGold,parts.reduce((n,p,i)=>n+p.recruitGold*weights[i],0)/total)*f.pricePremium);
 result.supplyPerEight=Math.ceil(Math.max(base.supplyPerEight,parts.reduce((n,p,i)=>n+p.supplyPerEight*weights[i],0)/total)*f.pricePremium);
 return result;
}
export function makeData(cfg=config){const armies=raceSeeds.flatMap(r=>classes.map(c=>makeArmy(r,c,cfg)));return {version:cfg.version,date:cfg.date,status:cfg.status,counts:{raceCandidates:60,classes:5,baseWeapons:48,weaponVariants:48*cfg.qualities.length,elements:8,seals:54,armyCombinations:300},config:cfg,races:raceSeeds.map(r=>({...r,power:round(racePower(r,cfg),4)})),classes,weapons:generateWeapons(cfg),elements:generateElements(cfg),seals:generateSeals(cfg),armies,fusionExamples:[fuseArmy([armies.find(a=>a.id==='R05-shield'),armies.find(a=>a.id==='R03-archer')],cfg),fuseArmy([armies.find(a=>a.id==='R03-archer'),armies.find(a=>a.id==='R05-shield')],cfg)]};}
export function markdown(data){
 const rows=(heads,rs)=>'| '+heads.join(' | ')+' |\n| '+heads.map(()=>'---').join(' | ')+' |\n'+rs.map(r=>'| '+r.map(x=>String(x).replaceAll('|','/').replaceAll('\n',' ')).join(' | ')+' |').join('\n');
 return '# Ashborne Bảng chỉ số toàn bộ card bản thử 01\n\n'+data.status+'. Ngày '+data.date+'. Công thức và cách đổi nền: xem HUONG-DAN.md.\n\n'+
 '## Vũ khí\n\n'+rows(['Mã','Họ','Lá','Phẩm','Mana','Sát thương','Khiên','Hồi HP','Hiệu ứng'],data.weapons.map(w=>[w.id,w.family,w.name,w.quality,w.mana,w.damage,w.shield,w.heal,w.description]))+
 '\n\n## Nguyên tố\n\n'+rows(['Mã','Lá','Hệ','Phẩm','Mana','Hiệu ứng','Khi suy yếu'],data.elements.map(e=>[e.id,e.name,e.family,e.quality,e.mana,e.description,e.weakDescription]))+
 '\n\n## Ấn Thú\n\nTất cả Ấn: 0 mana, một lần/cả cuộc công thành. Tải dùng lúc trang bị.\n\n'+rows(['Mã','Hạng','Tên','Tải','Hiệu ứng'],data.seals.map(s=>[s.id,s.rank+s.suit,s.name,s.load,s.description]))+
 '\n\n## Chủng tộc\n\nHệ số tương đối, 1 là Nhân tộc. Không tự cấp nội tại như bay, tái sinh hoặc hút máu.\n\n'+rows(['Mã','Chủng','HP','ATK','DEF','SPD','Sở trường'],data.races.map(r=>[r.id,r.name,...r.profile,r.specialties.map(k=>classes.find(c=>c.id===k).name).join(', ')]))+
 '\n\n## Binh chủng\n\n'+rows(['Mã','Tên','HP ×','ATK ×','DEF ×','SPD ×','Tầm','Di chuyển','Chỉ số giữ'],data.classes.map(c=>[c.id,c.name,c.hp,c.attack,c.defense,c.speed,c.range,c.move,c.locked]))+
 '\n\n## 300 tổ hợp quân\n\nChỉ số trên một quân. SPD là hành động/giây; tầm và di chuyển dùng đơn vị chiến trường prototype. Vàng trên một quân, lương trên tám quân cho một lần triển khai.\n\n'+rows(['Mã','Chủng','Binh chủng','Tương thích','HP','ATK','DEF','SPD','Vàng/quân','Lương/8 quân'],data.armies.map(a=>[a.id,a.race,a.className,a.compatibility,a.hp,a.attack,a.defense,a.speed,a.recruitGold,a.supplyPerEight]))+'\n';
}
export async function writeData(){const data=makeData();await fs.mkdir(out,{recursive:true});await fs.writeFile(path.join(out,'ashborne-cards.json'),JSON.stringify(data,null,2)+'\n');await fs.writeFile(path.join(out,'BANG-CHI-SO.md'),markdown(data));console.log(JSON.stringify({out,counts:data.counts}));return data;}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await writeData();
