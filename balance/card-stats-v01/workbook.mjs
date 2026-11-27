import fs from 'node:fs/promises';
import path from 'node:path';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';
import {config,root,out,makeData,raceSeeds,weaponSeeds,sealSeeds,anchorDefault,writeData} from './generate.mjs';
import {classes,elements} from './catalog.mjs';

const data=await writeData();
const wb=Workbook.create();
const names=['BatDau','VuKhi','NguyenTo','AnThu','QuanDoi','DungHop','ThamSo','ChungToc','CoSoVuKhi'];
const sheets=Object.fromEntries(names.map(n=>[n,wb.worksheets.add(n)]));
const col=n=>{let s='';for(n++;n;n=Math.floor((n-1)/26))s=String.fromCharCode(65+(n-1)%26)+s;return s;};
const cell=(s,c,r)=>s.getRange(`${col(c)}${r}`);
const set=(s,c,r,v)=>{cell(s,c,r).values=[[v]];};
const formula=(s,c,r,v)=>{cell(s,c,r).formulas=[[v]];};
const ref=(s,c,r)=>`'${s}'!$${col(c)}$${r}`;
const lookup=(sheet,id,keyCol,valueCol,start,end)=>`INDEX('${sheet}'!$${valueCol}$${start}:$${valueCol}$${end},MATCH(${id},'${sheet}'!$${keyCol}$${start}:$${keyCol}$${end},0))`;
const quote=t=>`"${t.replaceAll('"','""')}"`;
const fmt={head:'#353D4A',text:'#263240',muted:'#64748B',input:'#FFF1CC',paper:'#F3F6F9'};
function title(s,text,note){set(s,0,2,text);cell(s,0,2).format.font={size:16,bold:true,color:fmt.text};if(note)set(s,0,3,note);}
function table(s,headers,rows,start=5,widths=[]){
 const end=start+rows.length;
 s.getRange(`A${start}:${col(headers.length-1)}${start}`).values=[headers];
 if(rows.length)s.getRange(`A${start+1}:${col(headers.length-1)}${end}`).values=rows;
 const used=s.getRange(`A${start}:${col(headers.length-1)}${end}`);
 used.format.rowHeight=24;used.format.verticalAlignment='center';used.format.font={name:'Arial',size:10,color:fmt.text};
 const head=s.getRange(`A${start}:${col(headers.length-1)}${start}`);
 head.format={fill:fmt.head,font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'},rowHeight:34,wrapText:true,horizontalAlignment:'center',verticalAlignment:'center'};
 for(let c=0;c<headers.length;c++)s.getRange(`${col(c)}${start}:${col(c)}${end}`).format.columnWidth=widths[c]||14;
 if(rows.length){const t=s.tables.add(`A${start}:${col(headers.length-1)}${end}`,true,`T${s.name}${start}`);t.style='TableStyleLight1';s.freezePanes.freezeRows(start);}
 return end;
}
function inputs(s,range){s.getRange(range).format.fill=fmt.input;}
function number(s,range,format='0.00'){s.getRange(range).setNumberFormat(format);}
function makeText(s,row,column,template,refs){
 const parts=[],regex=/\{(\w+)\}/g;let last=0,m;
 while((m=regex.exec(template))){if(m.index>last)parts.push(quote(template.slice(last,m.index)));const key=m[1];if(!refs[key])throw Error(`Missing ${s.name}/${row}/${key}`);parts.push(/ratio|Threshold/.test(key)?`TEXT(${refs[key]},"0%")`:refs[key]);last=m.index+m[0].length;}
 if(last<template.length)parts.push(quote(template.slice(last)));
 formula(s,column,row,`=CONCATENATE(${parts.join(',')})`);
}
for(const s of Object.values(sheets)){s.showGridLines=false;s.tabColor=['BatDau','VuKhi','NguyenTo','AnThu','QuanDoi','DungHop'].includes(s.name)?'#35485F':'#9CA8B5';s.getRange('A1:Z4').format.font={name:'Arial',size:10,color:fmt.text};}

// One owner for global anchors, compatibility, rank and role controls.
const ts=sheets.ThamSo;
title(ts,'Thông số nền chỉnh tại ô vàng','Cấu hình thử 01. Sửa ô vàng để tính lại các card liên quan.');
const controls=[...Object.entries(config.anchors).map(([k,v])=>[k,v]),
 ['specialtyStat',config.compatibility.specialty.stat],['offStat',config.compatibility.off.stat],['severeStat',config.compatibility.severe.stat],
 ['specialtyCost',config.compatibility.specialty.cost],['offCost',config.compatibility.off.cost],['severeCost',config.compatibility.severe.cost],
 ['costExponent',config.economy.costExponent],['defenseWeight',config.economy.defenseWeight],['armyPack',config.economy.armyPack],
 ['rootWeight',config.fusion.rootWeight],['otherWeight',config.fusion.otherWeight],['minRatio',config.fusion.minRatio],['maxRatio',config.fusion.maxRatio],['synergyPerOther',config.fusion.synergyPerOther],['synergyCap',config.fusion.synergyCap],['pricePremium',config.fusion.pricePremium],
 ['gaugeMax',config.elements.gaugeMax],['gaugeGain',config.elements.gain],['restraint',config.elements.restraint],['weakNumeric',config.elements.weakNumeric]];
const labels={heroHp:'HP tướng',mana:'Mana mỗi lượt',draw:'Số lá rút mỗi lượt',damage:'Sát thương nền bài',shield:'Khiên nền bài',heal:'Hồi HP nền bài',armyHp:'HP nền quân',armyAttack:'ATK nền quân',armyDefense:'DEF nền quân',armySpeed:'SPD nền quân (hành động/giây)',recruitGold:'Vàng tuyển một quân nền',supplyPerEight:'Lương cho tám quân nền',sealDamage:'Sát thương nền Ấn',sealShield:'Khiên nền Ấn',sealHeal:'Hồi HP nền Ấn',specialtyStat:'ATK đúng sở trường ×',offStat:'ATK ngoài sở trường ×',severeStat:'ATK rất kém tương thích ×',specialtyCost:'Giá đúng sở trường ×',offCost:'Giá ngoài sở trường ×',severeCost:'Giá rất kém tương thích ×',costExponent:'Số mũ giá theo sức mạnh',defenseWeight:'Trọng số DEF trong giá',armyPack:'Quân trong một gói',rootWeight:'Trọng số gốc dung hợp',otherWeight:'Trọng số mỗi thành phần phụ',minRatio:'Sàn chỉ số phụ/gốc',maxRatio:'Trần chỉ số phụ/gốc',synergyPerOther:'Thưởng mỗi vai trò khác',synergyCap:'Trần thưởng phối hợp',pricePremium:'Phụ phí dung hợp ×',gaugeMax:'Ngưỡng Quá tải',gaugeGain:'Tích thanh mỗi lá',restraint:'Lượng Tiết Chế khi gắn hợp lệ',weakNumeric:'Hiệu lực số khi suy yếu ×'};
table(ts,['Mã thông số','Giá trị','Ý nghĩa'],controls.map(([k,v])=>[k,v,labels[k]]),5,[24,16,48]);inputs(ts,`B6:B${controls.length+5}`);
const ctl=Object.fromEntries(controls.map(([k],i)=>[k,ref('ThamSo',1,i+6)]));
table(ts,['Phẩm','Tên','Trực tiếp ×','Hiệu ứng ×','Thêm thời hạn'],config.qualities.map(q=>[q.id,q.name,q.direct,q.effect,q.durationBonus]),45,[18,20,18,18,20]);inputs(ts,'C46:E48');
table(ts,['Hạng','Sức mạnh ×','Tải'],Object.entries(config.ranks).map(([k,v])=>[k,v.power,v.load]),52,[18,18,18]);inputs(ts,'B53:C66');
table(ts,['Binh chủng','Tên','HP ×','ATK ×','DEF ×','SPD ×','Tầm','Di chuyển','Giá ×','Giữ chỉ số'],classes.map(c=>[c.id,c.name,c.hp,c.attack,c.defense,c.speed,c.range,c.move,c.cost,c.locked]),70,[18,20,12,12,12,12,12,14,12,16]);inputs(ts,'C71:I75');
set(ts,0,79,'Nguồn');set(ts,1,79,'Quyết định gameplay 24/11/2026 §4–9; Concept Thẻ Combat; README prototype-v2; số mới là đề xuất 26/11/2026.');ts.getRange('B79:J79').merge();ts.getRange('B79').format.wrapText=true;ts.getRange('A79:J79').format.rowHeight=42;
ts.getRange('C5:C79').format.columnWidth=48;
const qRef=(q,field)=>lookup('ThamSo',quote(q),'A',field,46,48);
const rankRef=(r,field)=>lookup('ThamSo',quote(r),'A',field,53,66);

const race=sheets.ChungToc;
title(race,'60 chủng tộc ứng viên','Hệ số HP, ATK, DEF, SPD được đề xuất theo hình tượng; 1 là Nhân tộc. Sở trường giữ từ danh mục.');
table(race,['ID','Chủng','HP ×','ATK ×','DEF ×','SPD ×','Sở trường 1','Sở trường 2','Sức mạnh tính giá'],raceSeeds.map(r=>[r.id,r.name,...r.profile,r.specialties[0],r.specialties[1]||'',null]),5,[12,51,12,12,12,12,17,17,20]);inputs(race,'C6:F65');number(race,'C6:F65');
for(let r=6;r<=65;r++)formula(race,8,r,`=C${r}^0.45*D${r}^0.35*F${r}^0.2*(1+${ctl.defenseWeight}*${ctl.armyDefense}*E${r})/(1+${ctl.defenseWeight}*${ctl.armyDefense})`);
number(race,'I6:I65','0.0000');set(race,0,68,'Nguồn: Ashborne-Chung-toc-va-Binh-chung.md §4 (tên, sở trường). Các hệ số là thiết kế mới.');

// Authored base weapon data, a single editable source for all qualities.
const base=sheets.CoSoVuKhi;
title(base,'48 vũ khí cơ sở','Số gốc ở mốc damage 8, shield 9, heal 6. Ô vàng là đầu vào; thông số cố định và khóa điều kiện nằm trong catalog.mjs.');
const baseHeads=['ID','Họ','Tên','Nhóm','Mana','ST gốc','Khiên gốc','Hồi gốc'];
for(let i=0;i<5;i++)baseHeads.push(`Hiệu ứng ${i+1}`,`Giá trị ${i+1}`,`Kiểu ${i+1}`);
table(base,baseHeads,weaponSeeds.map(w=>{const r=[w.id,w.family,w.name,w.group,w.mana,w.damage,w.shield,w.heal];for(let i=0;i<5;i++){const p=w.params[i];r.push(p?.key||'',p?.value??null,p?.scale||'');}return r;}),5,[12,24,29,17,12,12,12,12,...Array(15).fill(16)]);inputs(base,'E6:H53');for(let i=0;i<5;i++)inputs(base,`${col(9+i*3)}6:${col(9+i*3)}53`);
set(base,0,56,'Nguồn: Ashborne-Concept-The-Combat.md, mục Thẻ Vũ khí. Tên và công dụng giữ nguyên; trị số mới là đề xuất.');

const vk=sheets.VuKhi;
title(vk,'Vũ khí theo ba phẩm','48 mẫu, 144 biến thể. Phẩm là ba mốc thử; mana cố định. Trực tiếp tăng số trực tiếp, Kỹ năng/Sức mạnh tăng phần hiệu ứng.');
const wh=['ID','Họ','Tên','Phẩm','Mana','Sát thương','Khiên','Hồi HP','Công dụng'];for(let i=0;i<5;i++)wh.push(`Hiệu ứng ${i+1}`,`Số ${i+1}`);
table(vk,wh,data.weapons.map(w=>[w.id,w.family,w.name,w.quality,null,null,null,null,null,...Array(10).fill(null)]),5,[16,24,29,18,10,12,12,12,110,...Array(10).fill(16)]);
vk.getRange('I6:I149').format.wrapText=true;
for(let i=0;i<data.weapons.length;i++){
 const w=data.weapons[i],seed=weaponSeeds.find(x=>x.id===w.baseId),r=i+6;
 const get=c=>lookup('CoSoVuKhi',quote(w.baseId),'A',c,6,53);
 formula(vk,4,r,`=${get('E')}`);
 const refs={};
 for(const [j,key,src] of [[5,'damage','F'],[6,'shield','G'],[7,'heal','H']]){const fact=seed.group==='Trực tiếp'?qRef(w.qualityId,'C'):'1';formula(vk,j,r,`=IF(ISNUMBER(${ctl[key]}),ROUND(${get(src)}*${ctl[key]}/${anchorDefault[key]}*${fact},0),NA())`);refs[key]=`${col(j)}${r}`;}
 for(let j=0;j<seed.params.length;j++){
  const p=seed.params[j],v=`${col(10+j*2)}${r}`,original=get(col(9+j*3));set(vk,9+j*2,r,p.key);
  let f=original;if(p.scale==='duration')f=`${original}+${qRef(w.qualityId,'E')}`;
  else if(p.scale!=='fixed'){const anchor=p.unit==='HP'?'heal':p.unit==='Khiên'?'shield':'damage';f=`ROUND(${original}*${ctl[anchor]}/${anchorDefault[anchor]}*${qRef(w.qualityId,'D')},0)`;}
  formula(vk,10+j*2,r,'='+f);refs[p.key]=v;if(/ratio|Threshold/.test(p.key))number(vk,v,'0%');
 }
 makeText(vk,r,8,seed.rule,refs);vk.getRange(`A${r}:S${r}`).format.rowHeight=Math.max(28,Math.ceil(w.description.length/105)*14+12);
}

const nt=sheets.NguyenTo;
title(nt,'Tám mẫu Nguyên tố','Thường/Cao là tám thiết kế riêng, giữ số lượng thao tác rời rạc. Tích thanh và Tiết Chế dùng ThamSo.');
const eh=['ID','Tên','Hệ','Phẩm','Mana','Tích thanh','Công dụng','Khi suy yếu'];for(let i=0;i<3;i++)eh.push(`Hiệu ứng ${i+1}`,`Gốc ${i+1}`,`Số ${i+1}`,`Suy yếu ${i+1}`);
table(nt,eh,data.elements.map(e=>[e.id,e.name,e.family,e.quality,e.mana,null,null,null,...Array(12).fill(null)]),5,[18,23,12,14,10,14,110,110,...Array(12).fill(16)]);
nt.getRange('G6:H13').format.wrapText=true;inputs(nt,'E6:E13');
for(let i=0;i<elements.length;i++){
 const e=elements[i],r=i+6,refs={},weak={};formula(nt,5,r,`=${ctl.gaugeGain}`);
 for(let j=0;j<e.params.length;j++){
  const p=e.params[j],c=8+j*4;set(nt,c,r,p.key);set(nt,c+1,r,p.value);inputs(nt,`${col(c+1)}${r}`);
  const calc=['damage','heal','shield'].includes(p.scale)?`ROUND(${col(c+1)}${r}*${ctl[p.scale]}/${anchorDefault[p.scale]},0)`:`${col(c+1)}${r}`;
  formula(nt,c+2,r,'='+calc);refs[p.key]=`${col(c+2)}${r}`;
  const wf=['damage','heal','shield'].includes(p.scale)?`ROUND(${refs[p.key]}*${ctl.weakNumeric},0)`:e.id==='returnWind'&&p.key==='turns'?`MAX(1,${refs[p.key]}-1)`:refs[p.key];
  formula(nt,c+3,r,'='+wf);weak[p.key]=`${col(c+3)}${r}`;
  if(/ratio|Threshold/.test(p.key))number(nt,`${col(c+1)}${r}:${col(c+3)}${r}`,'0%');
 }
 makeText(nt,r,6,e.rule,refs);makeText(nt,r,7,e.id==='wind'?'Chỉ xem lá đầu, không được đưa xuống đáy; không rút thêm.':e.rule,weak);nt.getRange(`A${r}:T${r}`).format.rowHeight=Math.max(32,Math.ceil(Math.max(data.elements[i].description.length,data.elements[i].weakDescription.length)/105)*14+12);
}
set(nt,0,16,'Nguồn: Concept Thẻ Combat, mục Thẻ Nguyên tố; Quyết định 24/11 §7. Phí Mạch Nguồn/Mạch Ngầm và thời hạn là đề xuất mới.');

const an=sheets.AnThu;
title(an,'54 Ấn Thú','Tải dùng khi trang bị. Mọi Ấn 0 mana, một lần/cả thành, tối đa 4 lá. Hạng A có vai trò riêng, Joker cùng tải.');
const ah=['ID','Hạng','Tên','Hệ','Tải','Mana','Công dụng'];for(let i=0;i<5;i++)ah.push(`Hiệu ứng ${i+1}`,`Gốc ${i+1}`,`Số ${i+1}`);
table(an,ah,data.seals.map(s=>[s.id,s.rank+s.suit,s.name,s.family,null,0,null,...Array(15).fill(null)]),5,[16,12,34,14,10,10,110,...Array(15).fill(16)]);
an.getRange('G6:G59').format.wrapText=true;
for(let i=0;i<sealSeeds.length;i++){
 const s=sealSeeds[i],r=i+6,refs={};formula(an,4,r,'='+rankRef(s.rank,'C'));
 for(let j=0;j<s.params.length;j++){
  const p=s.params[j],c=7+j*3;set(an,c,r,p.key);set(an,c+1,r,p.scale==='rank'?p.coefficient:p.value);inputs(an,`${col(c+1)}${r}`);
  const calc=p.scale==='rank'?`ROUND(${ctl[p.anchor]}*${rankRef(s.rank,'B')}*${col(c+1)}${r},0)`:`${col(c+1)}${r}`;
  formula(an,c+2,r,'='+calc);refs[p.key]=`${col(c+2)}${r}`;if(/ratio|Threshold/.test(p.key))number(an,`${col(c+1)}${r}:${col(c+2)}${r}`,'0%');
 }
 makeText(an,r,6,s.rule,refs);an.getRange(`A${r}:V${r}`).format.rowHeight=Math.max(32,Math.ceil(data.seals[i].description.length/105)*14+12);
}
set(an,0,62,'Nguồn: Concept Thẻ Combat, danh mục 54 Ấn; Quyết định 24/11 §9. Tải, hệ số, ngưỡng và thời hạn là đề xuất mới.');

const qd=sheets.QuanDoi;
title(qd,'300 tổ hợp Chủng tộc và Binh chủng','Bốn chỉ số trên một quân. SPD hành động/giây; 1/SPD là giây/hành động. Tầm và di chuyển thuộc binh chủng.');
const qh=['ID','Chủng','Binh chủng','Tương thích','HP','ATK','DEF','SPD','Giây/đòn','Vàng/quân','Lương/8 quân','Tầm','Di chuyển','Giữ chỉ số','Mã chủng','Mã binh','Hệ số ATK','Hệ số giá'];
table(qd,qh,data.armies.map(a=>[a.id,a.race,a.className,a.compatibility,null,null,null,null,null,null,null,null,null,null,a.raceId,a.classId,null,null]),5,[20,51,20,18,12,12,12,12,13,15,16,12,14,16,13,13,15,15]);number(qd,'E6:I305');
for(let i=0;i<data.armies.length;i++){
 const a=data.armies[i],r=i+6,raceLookup=c=>lookup('ChungToc',`O${r}`,'A',c,6,65),cl=c=>lookup('ThamSo',`P${r}`,'A',c,71,75);
 formula(qd,16,r,`=IF(D${r}="specialty",${ctl.specialtyStat},IF(D${r}="severe",${ctl.severeStat},${ctl.offStat}))`);
 formula(qd,17,r,`=IF(D${r}="specialty",${ctl.specialtyCost},IF(D${r}="severe",${ctl.severeCost},${ctl.offCost}))`);
 for(const [c,key,rc,cc,extra] of [[4,'armyHp','C','C',''],[5,'armyAttack','D','D',`*Q${r}`],[6,'armyDefense','E','E',''],[7,'armySpeed','F','F','']])formula(qd,c,r,`=ROUND(${ctl[key]}*${raceLookup(rc)}*${cl(cc)}${extra}+1E-9,2)`);
 formula(qd,8,r,`=ROUND(1/H${r},3)`);
 formula(qd,9,r,`=MAX(1,ROUND(${ctl.recruitGold}*${raceLookup('I')}^${ctl.costExponent}*${cl('I')}*R${r},0))`);
 formula(qd,10,r,`=MAX(1,ROUNDUP(${ctl.supplyPerEight}*${raceLookup('I')}*${cl('I')}*R${r},0))`);
 formula(qd,11,r,'='+cl('G'));formula(qd,12,r,'='+cl('H'));formula(qd,13,r,'='+cl('J'));
}

// Inspectable two-part fusion calculator. Component IDs remain editable and lookups follow IDs.
const dh=sheets.DungHop;
title(dh,'Thử dung hợp hai thành phần','Chọn ID từ QuanDoi. Vai trò, tầm và chỉ số đặc trưng thuộc lá gốc. Không cộng toàn bộ chỉ số.');
table(dh,['Thành phần','ID tổ hợp','Trọng số','Chỉ số giữ','HP','ATK','DEF','SPD','Vàng/quân','Lương/8 quân','Binh chủng'],[['Gốc','R05-shield',null,null,null,null,null,null,null,null,null],['Phụ','R03-archer',null,null,null,null,null,null,null,null,null]],5,[20,25,14,17,14,14,14,14,16,18,20]);
inputs(dh,'B6:B7');dh.getRange('B6:B7').dataValidation={rule:{type:'list',formula1:"'QuanDoi'!$A$6:$A$305"}};
for(let r=6;r<=7;r++){
 formula(dh,2,r,'='+ctl[r===6?'rootWeight':'otherWeight']);
 for(const [c,src] of [[3,'N'],[4,'E'],[5,'F'],[6,'G'],[7,'H'],[8,'J'],[9,'K'],[10,'P']])formula(dh,c,r,'='+lookup('QuanDoi',`B${r}`,'A',src,6,305));
}
set(dh,0,10,'Thưởng phối hợp');formula(dh,1,10,`=IF(K6=K7,0,MIN(${ctl.synergyCap},${ctl.synergyPerOther}))`);number(dh,'B10','0%');
table(dh,['Chỉ số','Gốc','TB trọng số','Sau phối hợp','Kết quả','Tỷ lệ/gốc'],['hp','attack','defense','speed'].map(k=>[k,null,null,null,null,null]),12,[20,17,20,22,18,18]);
for(let i=0;i<4;i++){
 const r=i+13,src=col(i+4);formula(dh,1,r,`=${src}6`);formula(dh,2,r,`=SUMPRODUCT(${src}6:${src}7,$C$6:$C$7)/SUM($C$6:$C$7)`);formula(dh,3,r,`=C${r}*(1+$B$10)`);
 formula(dh,4,r,`=IF($B$6=$B$7,NA(),IF(A${r}=$D$6,B${r},ROUND(MAX(B${r}*${ctl.minRatio},MIN(B${r}*${ctl.maxRatio},D${r}))+1E-9,2)))`);formula(dh,5,r,`=E${r}/B${r}`);
}
number(dh,'B13:E16');number(dh,'F13:F16','0%');
set(dh,0,19,'Giá dung hợp/quân');formula(dh,1,19,`=IF(B6=B7,NA(),ROUNDUP(MAX(I6,SUMPRODUCT(I6:I7,C6:C7)/SUM(C6:C7))*${ctl.pricePremium},0))`);
set(dh,0,20,'Lương/8 quân');formula(dh,1,20,`=IF(B6=B7,NA(),ROUNDUP(MAX(J6,SUMPRODUCT(J6:J7,C6:C7)/SUM(C6:C7))*${ctl.pricePremium},0))`);
set(dh,0,22,'Trùng thành phần');formula(dh,1,22,'=IF(B6=B7,"Không hợp lệ","Hợp lệ")');
set(dh,0,24,'Mẫu tính không tiêu quân. Bộ sinh hỗ trợ tối đa 3 thành phần gốc, cấm dung hợp lặp đầu ra để vượt trần.');
dh.getRange('A24:K25').merge();dh.getRange('A24').format.wrapText=true;

const bd=sheets.BatDau;
title(bd,'Ashborne Bộ chỉ số card bản thử 01','26/11/2026. Đề xuất cân bằng có thể chỉnh; chưa áp dụng vào prototype.');
table(bd,['Nhóm','Số mẫu cơ sở','Kết quả sinh','Mở sheet'],[
 ['Chủng tộc ứng viên',60,'60 hồ sơ nền','ChungToc'],['Binh chủng',5,'5 vai trò','ThamSo'],['Vũ khí',48,'144 biến thể / 3 phẩm','VuKhi'],['Nguyên tố',8,'8 mẫu / suy yếu từng lá','NguyenTo'],['Ấn Thú',54,'54 hiệu ứng và tải','AnThu'],['Quân tạo thành',300,'60 chủng × 5 binh chủng','QuanDoi']
 ],5,[28,22,39,23]);
const guidance=[
 ['1. Chỉnh nền','Mở ThamSo, sửa ô vàng. Từng nhóm dùng nền riêng, tránh làm quân và tướng tăng cùng thang.'],
 ['2. Chỉnh một card','Vũ khí: CoSoVuKhi. Nguyên tố/Ấn: các cột Gốc bên phải công dụng. Chủng: ChungToc.'],
 ['3. Dung hợp','Mở DungHop, thay hai ID. Kết quả giữ chỉ số đặc trưng và giới hạn 80–120% lá gốc.'],
 ['4. Lưu lâu dài','Chỉnh config.json hoặc catalog.mjs rồi chạy generate.mjs. Excel là bản tính thử, không tự ghi ngược vào JSON.'],
 ['Phẩm vũ khí','Thường / Tinh luyện / Tinh hoa là ba mốc đề xuất. Nguyên tố Thường/Cao là hai mẫu khác công dụng.'],
 ['Luật Ấn','Tối đa 4 lá, tổng tải không quá sức chứa. Mỗi Ấn 1 lần/cả thành, 0 mana; không trừ tải khi dùng.'],
 ['Phạm vi','Có số cho tất cả mẫu đã có trong danh mục. Không sinh tên Tuyệt kỹ, combo Ấn hoặc binh chủng mới.'],
 ['Cần playtest','Đã kiểm công thức và dữ liệu. Chưa kiểm cân bằng toàn bộ hiệu ứng trong combat thực.'],
 ['Màu ô','Vàng nhạt: đầu vào số. Ô trắng: kết quả tính hoặc danh tính card.'],
 ['Giới hạn chỉnh','Chỉ sửa số nền / hệ số. Thêm card, đổi loại hiệu ứng, sở trường hoặc bậc phẩm: sửa nguồn và sinh lại.']
];
table(bd,['Cách dùng','Thực hiện'],guidance,15,[28,115]);bd.getRange('B16:B25').format.wrapText=true;bd.getRange('A16:B25').format.rowHeight=45;
bd.freezePanes.unfreeze();

// Verify calculated values against the separate plain-JS generator and perturb the actual inputs.
wb.recalculate();
const get=(s,c,r)=>cell(s,c,r).values[0][0];
const near=(a,b,msg)=>{if(typeof a!=='number'||Math.abs(a-b)>0.00001)throw Error(`${msg}: ${a} != ${b}`);};
for(let i=0;i<data.weapons.length;i++){const w=data.weapons[i],r=i+6;for(const [c,k] of [[5,'damage'],[6,'shield'],[7,'heal']])near(get(vk,c,r),w[k],w.id+'/'+k);if(get(vk,8,r)!==w.description)throw Error('Weapon text mismatch '+w.id);}
for(let i=0;i<data.armies.length;i++){const a=data.armies[i],r=i+6;for(const [c,k] of [[4,'hp'],[5,'attack'],[6,'defense'],[7,'speed'],[9,'recruitGold'],[10,'supplyPerEight']])near(get(qd,c,r),a[k],a.id+'/'+k);}
for(let i=0;i<data.elements.length;i++){const e=data.elements[i],r=i+6;if(get(nt,6,r)!==e.description||get(nt,7,r)!==e.weakDescription)throw Error('Element text mismatch '+e.id);}
for(let i=0;i<data.seals.length;i++){const s=data.seals[i],r=i+6;near(get(an,4,r),s.load,s.id+'/load');if(get(an,6,r)!==s.description)throw Error('Seal text mismatch '+s.id);}
const damageRow=controls.findIndex(([k])=>k==='damage')+6;
set(ts,1,damageRow,16);wb.recalculate();near(get(vk,5,6),36,'Damage anchor sensitivity');
set(ts,1,damageRow,0);wb.recalculate();near(get(vk,5,6),0,'Zero damage is a real zero');
cell(ts,1,damageRow).clear({applyTo:'contents'});wb.recalculate();if(!String(get(vk,5,6)).includes('#N/A'))throw Error('Blank damage must expose missing input');set(ts,1,damageRow,8);
const hpRow=controls.findIndex(([k])=>k==='armyHp')+6;
set(ts,1,hpRow,24);wb.recalculate();near(get(qd,4,6),24,'Army HP sensitivity');set(ts,1,hpRow,12);
set(dh,1,6,'R03-archer');set(dh,1,7,'R05-shield');wb.recalculate();
const swapped=data.fusionExamples[1];for(let i=0;i<4;i++)near(get(dh,4,i+13),swapped[['hp','attack','defense','speed'][i]],'Fusion swapped');set(dh,1,6,'R05-shield');set(dh,1,7,'R03-archer');
wb.recalculate();
const scan=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:30},maxChars:3000});
console.log(scan.ndjson);
const previewDir=path.join(root,'.artifacts/card-balance-review-20261126/previews');await fs.mkdir(previewDir,{recursive:true});
for(const name of names){const range={BatDau:'A1:D11',VuKhi:'A1:I9',NguyenTo:'A1:H9',AnThu:'A1:G9',QuanDoi:'A1:N10',DungHop:'A1:K25',ThamSo:'A1:C18',ChungToc:'A1:I12',CoSoVuKhi:'A1:H12'}[name];const blob=await wb.render({sheetName:name,range,scale:1.3,format:'png'});await fs.writeFile(path.join(previewDir,name+'.png'),new Uint8Array(await blob.arrayBuffer()));}
const book=await SpreadsheetFile.exportXlsx(wb);await book.save(path.join(out,'Ashborne-Bo-Chi-So-v01.xlsx'));
await fs.writeFile(path.join(root,'.artifacts/card-balance-review-20261126/workbook-verification.json'),JSON.stringify({checkedWeaponRows:144,checkedArmyRows:300,checkedElementTexts:16,checkedSealRows:54,perturbations:['damage 8 -> 16 -> 0 -> blank -> 8','armyHp 12 -> 24 -> 12','fusion root swap and restore'],engine:'Artifact Tool',excelDesktopChecked:false,scan:scan.ndjson},null,2));
try{await fs.rename(path.join(out,'Ashborne-Bo-Chi-So-v01.xlsx.inspect.ndjson'),path.join(root,'.artifacts/card-balance-review-20261126/export-inspect.ndjson'));}catch(e){if(e.code!=='ENOENT')throw e;}
console.log('Workbook exported: '+path.join(out,'Ashborne-Bo-Chi-So-v01.xlsx'));
