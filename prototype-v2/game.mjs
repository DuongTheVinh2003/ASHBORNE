import * as Siege from './siege.mjs';
export const VERSION=2;
export const CAST_WINDOW_MS=4000;
export const FIELD=Siege.FIELD;
export const UNITS=Siege.UNITS;
export const ELEMENTS=['fire','water','wind','earth'];
export const ELEMENT_NAMES={fire:'Lửa',water:'Nước',wind:'Gió',earth:'Đất'};
export const CARDS={
  slash:{name:'Chém Tiến',kind:'weapon',family:'shield',icon:'⚔',cost:1,damage:8,text:'Gây 8 sát thương lên mục tiêu.'},
  guard:{name:'Nâng Khiên',kind:'weapon',family:'shield',icon:'⬡',cost:1,shield:9,text:'Nhận 9 Khiên.'},
  parry:{name:'Gạt Khiên',kind:'weapon',family:'shield',icon:'◩',cost:1,shield:5,text:'Nhận 5 Khiên. Đòn địch kế tiếp giảm 3 sát thương.'},
  counter:{name:'Phản Kích',kind:'weapon',family:'shield',icon:'↗',cost:1,damage:7,text:'Gây 7. Gây 14 nếu chính mục tiêu này đã đánh vào Khiên ở lượt địch trước.'},
  stance:{name:'Thế Đỡ Phản',kind:'weapon',family:'shield',icon:'⟲',cost:1,text:'Nếu Khiên đỡ trọn một đòn lượt địch tới, đòn Kiếm & Khiên đầu lượt sau +6 sát thương.'},
  hold:{name:'Giữ Tuyến',kind:'weapon',family:'shield',icon:'▥',cost:1,text:'Trong 2 lượt địch: nếu còn Khiên sau đòn đầu, đòn kế tiếp giảm 4.'},
  thrust:{name:'Đâm Thẳng',kind:'weapon',family:'spear',icon:'↟',cost:1,damage:9,text:'Gây 9 sát thương lên mục tiêu.'},
  raise:{name:'Dựng Mũi Giáo',kind:'weapon',family:'spear',icon:'⚑',cost:1,damage:4,shield:5,text:'Gây 4 sát thương và nhận 5 Khiên.'},
  pin:{name:'Ghìm Mũi Giáo',kind:'weapon',family:'spear',icon:'↥',cost:1,damage:5,text:'Gây 5. Đặt Giữ Khoảng Cách: hủy đòn cận chiến kế tiếp của mục tiêu, tạo Hở Thế.'},
  returnThrust:{name:'Đâm Trả',kind:'weapon',family:'spear',icon:'↗',cost:1,damage:7,text:'Gây 7. Nếu địch Hở Thế: tiêu dấu, gây 16.'},
  spearStance:{name:'Thế Đón Đòn',kind:'weapon',family:'spear',icon:'⟲',cost:1,text:'Nếu Giữ Khoảng Cách chặn đòn lượt tới, Đâm Trả tiêu Hở Thế đó +6 sát thương.'},
  keep:{name:'Giữ Địch Ngoài Tầm',kind:'weapon',family:'spear',icon:'↔',cost:1,text:'Mục tiêu phải có ý đồ cận chiến. Đặt Giữ Khoảng Cách đến hết lượt địch tới.'},
  fire:{name:'Tàn Lửa',kind:'fire',icon:'♨',cost:1,text:'Cường hóa đòn vũ khí +4 sát thương. Dùng lẻ: chờ đòn vũ khí kế tiếp trong lượt.'},
  ember:{name:'Than Truyền',kind:'fire',icon:'✹',cost:1,text:'Đòn kế tiếp gieo than 3 lượt. Mỗi lượt, lần đầu đánh trúng: bùng 4. Bùng hạ địch thì truyền than.'},
  water:{name:'Mạch Nguồn',kind:'water',icon:'◈',cost:1,heal:6,text:'Hồi 6 HP. Khi ghép vào đòn: hồi sau khi đòn giải quyết.'},
  undercurrent:{name:'Mạch Ngầm',kind:'water',icon:'≋',cost:1,text:'Trong 3 lượt, đầu lượt hồi 50% HP mất trong lượt địch vừa qua, tối đa 5.'},
  wind:{name:'Hơi Gió',kind:'wind',icon:'≋',cost:1,text:'Xem lá trên cùng chồng rút. Chọn giữ nguyên hoặc đưa xuống đáy; không rút thêm.'},
  returnWind:{name:'Gió Hồi',kind:'wind',icon:'⤴',cost:1,text:'Trong 2 lượt, trước khi bỏ bài cuối lượt, được chọn 1 lá vũ khí chưa dùng đặt lên đầu chồng rút.'},
  earth:{name:'Vỏ Đá',kind:'earth',icon:'◆',cost:1,shield:9,text:'Nhận 9 Khiên. Khi ghép vào đòn: nhận Khiên sau khi đòn giải quyết.'},
  foundation:{name:'Nền Đá',kind:'earth',icon:'▰',cost:1,text:'Trong 3 lần chuyển lượt, giữ 50% Khiên dư, tối đa 8. Khiên bị đánh vỡ thì hết.'}
};
export const SEALS={
  fang:{name:'Nanh Tro',rank:'K♥',load:6,text:'Gây 20 sát thương, gieo than vương ấn 3 lượt. Hạ kẻ mang than: truyền sang địch kế và bùng 7, mỗi địch một lần.'},
  breach:{name:'Nứt Thành',rank:'J♣',load:4,text:'Phá tối đa 18 Khiên. Nếu phá hết, địch không dựng lại Khiên ở hành động kế tiếp.'},
  mirror:{name:'Rùa Gương',rank:'7♦',load:2,text:'Ghi HP hiện tại. Đầu lượt sau hồi 50% chênh lệch HP đã mất từ mốc này, tối đa 8.'}
};
export const CASTLES=[
  {name:'Thành Kính Lạnh',region:'FROZEN CATHEDRAL',subtitle:'Cánh phải ít quân giữ, cung thủ địch đứng sâu bên trái.',reward:85,seal:'mirror',enemies:[
    {id:'turtle',name:'Rùa Gương',label:'Hộ vệ cổng trong',hp:45,pattern:[{type:'shield',value:8,name:'Mai Kính'},{type:'attack',value:9,name:'Húc Băng',melee:true},{type:'attack',value:13,name:'Sóng Lạnh'}]},
    {id:'dragon',name:'Long Nữ Băng',label:'Chủ thành',hp:120,pattern:[{type:'shield',value:10,name:'Vảy Băng'},{type:'attack',value:12,name:'Hơi Lạnh'}],adds:[{id:'iceguard',name:'Vệ Binh Băng',hp:24,pattern:[{type:'attack',value:5,name:'Giáo Băng',melee:true},{type:'shield',value:5,name:'Dựng Khiên'}]}]}
  ]},
  {name:'Thành Tro Tàn',region:'ASHLANDS',subtitle:'Quân giữ ba hướng; Pháp Tro đánh vùng từ tuyến sau bên trái.',reward:110,seal:null,enemies:[
    {id:'guard',name:'Vệ Binh Tro',label:'Hộ vệ nội thành',hp:65,pattern:[{type:'attack',value:9,name:'Chém Tro',melee:true},{type:'shield',value:10,name:'Giáp Lò'},{type:'attack',value:15,name:'Bổ Nặng',melee:true}]},
    {id:'warden',name:'Kẻ Giữ Tàn Hỏa',label:'Chủ thành',hp:125,pattern:[{type:'attack',value:10,name:'Lưỡi Lửa',melee:true},{type:'shield',value:12,name:'Giáp Tro'},{type:'charge',value:0,name:'Tụ Tàn Hỏa'},{type:'attack',value:22,name:'Hỏa Bộc'}],adds:[{id:'spark',name:'Tàn Hỏa',hp:22,pattern:[{type:'attack',value:4,name:'Đốm Cháy'}]}]}
  ]}
];
const clone=x=>JSON.parse(JSON.stringify(x));
export function createGame(seed=Date.now()){const armies=Siege.initialArmies();return {version:VERSION,seed:seed>>>0,phase:'camp',castle:0,encounter:0,hp:45,maxHp:45,gold:100,loyalty:85,armies,formation:Siege.initialFormation(),troops:Siege.troopSummary({armies}),ownedSeals:['fang','breach'],equipped:['fang','breach'],deckStyle:'shield',history:Object.fromEntries(ELEMENTS.map(e=>[e,{remaining:0,locked:false,streak:0,last:false}])),rewards:[],cleared:[],log:[],stats:{cards:0,combos:0,turns:0,kills:0},campAidUsed:false};}
export function validSave(s){return s?.version===VERSION&&Array.isArray(s.armies)&&s.formation?.length===20&&CASTLES[s.castle];}
export function note(s,msg){s.log.push(msg);if(s.log.length>100)s.log.shift();}
export function random(s){s.seed=(Math.imul(s.seed,1664525)+1013904223)>>>0;return s.seed/4294967296;}
function shuffle(s,a){for(let i=a.length-1;i>0;i--){const j=Math.floor(random(s)*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function elementOf(id){return ELEMENTS.includes(CARDS[id]?.kind)?CARDS[id].kind:null;}
export function elementStatus(s,e){const h=s.history[elementOf(e)||e];return h?.remaining>0?(h.locked?'locked':'weak'):'normal';}
export function setFormation(s,slot,id){if(s.phase!=='camp'||slot<0||slot>=20)return false;if(id===null){s.formation[slot]=null;return true;}const army=s.armies.find(a=>a.id===id);if(!army?.count||s.formation[slot]&&s.formation[slot]!==id)return false;const prev=s.formation.indexOf(id);if(prev>=0)s.formation[prev]=null;s.formation[slot]=id;return true;}
export function toggleSeal(s,id){if(s.phase!=='camp'||!s.ownedSeals.includes(id))return false;if(s.equipped.includes(id)){s.equipped=s.equipped.filter(x=>x!==id);return true;}if(s.equipped.length>=4||s.equipped.reduce((n,x)=>n+SEALS[x].load,0)+SEALS[id].load>12)return false;s.equipped.push(id);return true;}
export function replenishCost(s){return s.armies.reduce((n,a)=>n+(a.capacity-a.count)*2,0);}
export function replenish(s){const cost=replenishCost(s);if(s.phase!=='camp'||s.gold<cost)return false;s.gold-=cost;s.armies.forEach(a=>a.count=a.capacity);s.troops=Siege.troopSummary(s);s.loyalty=Math.min(100,s.loyalty+10);return true;}
export function campAid(s){if(s.phase!=='camp'||s.campAidUsed)return false;s.campAidUsed=true;s.gold+=40;s.armies.forEach(a=>a.count=Math.max(a.count,4));s.troops=Siege.troopSummary(s);return true;}
export function defense(s){return Siege.defense(s.castle);}
export function cellPosition(slot){return Siege.cellPosition(slot);}
export function survivors(a){return Siege.survivors(a);}
export function startSiege(s,trial=false){if(s.phase!=='camp'||!s.formation.some(id=>s.armies.find(a=>a.id===id)?.count>0))return false;s.phase='siege';s.siege=Siege.setup(s,trial);if(!trial){s.encounter=0;s.hp=45;s.maxMana=4;s.potions=2;s.usedSeals=[];s.overloaded=[];s.gauges=Object.fromEntries(ELEMENTS.map(e=>[e,0]));s.attemptFinished=false;s.log=[];}note(s,trial?'Mô phỏng tại trại: không mất quân thật, không thưởng, không ghi Quá tải.':`Bắt đầu công ${CASTLES[s.castle].name}.`);return true;}
export function siegeTick(s){if(s.phase!=='siege')return false;const result=Siege.step(s.siege);if(!result)return true;if(s.siege.trial){s.phase='trialResult';return true;}Siege.commit(s);s.troops=Siege.troopSummary(s);for(const e of s.siege.events.slice(-9))note(s,`Nhịp ${e.tick}: ${e.text}`);if(result==='won'){s.maxMana=s.siege.dominant?5:4;s.phase='breach';}else finishAttempt(s,false);return true;}
export function deckList(style){const weapons=style==='spear'?['thrust','thrust','thrust','raise','raise','raise','pin','pin','returnThrust','returnThrust','spearStance','keep']:['slash','slash','slash','guard','guard','guard','parry','parry','counter','counter','stance','hold'];return [...weapons,'fire','ember','water','undercurrent','wind','returnWind','earth','foundation'];}
function makeEnemy(e,i){return {...clone(e),key:'enemy-'+i,hp:e.hp,maxHp:e.hp,shield:0,intentIndex:0,ember:0,emberTriggered:-1,royal:0,royalVisited:false,noShield:0,spacing:0,exposed:0,blockedLast:false,dragonStep:0,zeroWeakened:false};}
export function startEncounter(s){if(!['breach','encounterWon'].includes(s.phase))return false;if(s.phase==='encounterWon')s.encounter++;const encounter=CASTLES[s.castle].enemies[s.encounter];s.phase='combat';s.battle={turn:1,shield:0,mana:s.maxMana,hand:[],draw:shuffle(s,deckList(s.deckStyle).map((id,i)=>({id,uid:`${s.castle}-${s.encounter}-${i}`}))),discard:[],selected:[],cast:null,target:'enemy-0',enemies:[encounter,...(encounter.adds||[])].map(makeEnemy),potionUsed:false,pending:null,pendingElement:null,damageThisTurn:0,enemyLoss:0,mirror:null,undercurrent:0,foundation:0,returnWind:0,parry:0,hold:0,stance:false,counterBonus:0,spearStance:false,spearBonus:0,spacingBlocked:false};
  for(const id of [s.deckStyle==='spear'?'thrust':'slash',s.deckStyle==='spear'?'pin':'guard','fire']){const i=s.battle.draw.findIndex(c=>c.id===id);s.battle.hand.push(s.battle.draw.splice(i,1)[0]);}draw(s,2);for(const e of s.battle.enemies)chooseIntent(e);note(s,`Trận ${s.encounter+1}: ${encounter.name}. Rút 5 lá/lượt. HP và lượt Ấn giữ xuyên thành.`);return true;}
export function draw(s,n){const b=s.battle;while(n--&&b.hand.length<10){if(!b.draw.length){if(!b.discard.length)break;b.draw=shuffle(s,b.discard.splice(0));}b.hand.push(b.draw.pop());}}
function chooseIntent(e){if(e.id==='dragon'&&e.hp<=60){const cycle=[{type:'charge',value:0,name:'Báo trước · Absolute Zero'},{type:'attack',value:24,name:'Absolute Zero'},{type:'attack',value:10,name:'Hồi Nhịp'}];e.intent=clone(cycle[e.dragonStep++%3]);}else e.intent=clone(e.pattern[e.intentIndex%e.pattern.length]);}
export function targetEnemy(s,key){if(s.phase!=='combat'||s.battle.pending||s.battle.cast||!s.battle.enemies.some(e=>e.key===key&&e.hp>0))return false;s.battle.target=key;return true;}
function target(s){return s.battle.enemies.find(e=>e.key===s.battle.target&&e.hp>0)||s.battle.enemies.find(e=>e.hp>0);}
export function selectCard(s,uid){if(s.phase!=='combat'||s.battle.pending||s.battle.cast)return false;const b=s.battle,c=b.hand.find(c=>c.uid===uid);if(!c||elementStatus(s,c.id)==='locked')return false;const i=b.selected.indexOf(uid);if(i>=0)b.selected.splice(i,1);else if(b.selected.length<3)b.selected.push(uid);return true;}
export function queueCard(s,uid,targetKey){
  if(s.phase!=='combat'||s.battle.pending)return false;
  const b=s.battle,card=b.hand.find(c=>c.uid===uid),enemy=b.enemies.find(e=>e.key===targetKey&&e.hp>0);
  if(!card||!enemy||elementStatus(s,card.id)==='locked')return false;
  if(b.cast&&(b.cast.target!==targetKey||b.selected.includes(uid)||b.selected.length>=3))return false;
  const oldTarget=b.target,oldSelected=b.selected.slice();
  b.target=targetKey;b.selected=b.cast?[...b.selected,uid]:[uid];
  const outcome=preview(s);
  if(outcome.error){b.target=oldTarget;b.selected=oldSelected;return false;}
  if(!b.cast)b.cast={target:targetKey,remainingMs:CAST_WINDOW_MS,totalMs:CAST_WINDOW_MS};
  if(shouldResolveCast(s,outcome))resolveCast(s);
  return true;
}
export function reservedMana(s){return s.battle?.cast?preview(s).cost:0;}
function recipeContinuation(s){const ids=s.battle.selected.map(uid=>s.battle.hand.find(c=>c.uid===uid)?.id);const recipe=[['slash','slash','fire']].find(full=>ids.length<full.length&&ids.every((id,i)=>id===full[i]));return recipe?.slice(ids.length)||null;}
function shouldResolveCast(s,outcome=preview(s)){return s.battle.selected.length>=3||outcome.kind==='invalid'&&!recipeContinuation(s);}
export function castPreview(s){const outcome=preview(s),remaining=outcome.kind==='invalid'?recipeContinuation(s):null;return remaining?{...outcome,kind:'prefix',name:'Đang ghép · thêm '+remaining.map(id=>CARDS[id].name).join(' → ')}:outcome;}
function resolveCast(s){const b=s.battle,outcome=preview(s);b.cast=null;const played=play(s);if(!played){b.selected=[];note(s,'Hủy chồng không còn hợp lệ, không tiêu mana hoặc bài.');}return {played,name:outcome.name};}
export function advanceCast(s,elapsedMs,paused=false){
  const b=s.battle;if(s.phase!=='combat'||!b.cast||b.pending||paused||!Number.isFinite(elapsedMs)||elapsedMs<=0)return null;
  if(shouldResolveCast(s))return resolveCast(s);
  b.cast.remainingMs=Math.max(0,b.cast.remainingMs-elapsedMs);
  if(b.cast.remainingMs>0)return null;
  return resolveCast(s);
}
export function moveSelected(s,index,direction){const a=s.battle.selected,j=index+direction;if(j<0||j>=a.length)return false;[a[index],a[j]]=[a[j],a[index]];return true;}
function scale(s,id,n){return elementStatus(s,id)==='weak'?Math.ceil(n/2):n;}
export function preview(s){const b=s.battle;if(!b)return null;const cards=b.selected.map(uid=>b.hand.find(c=>c.uid===uid)).filter(Boolean),ids=cards.map(c=>c.id);if(!ids.length)return {empty:true,cost:0,name:'Kéo bài lên đầu kẻ địch',text:'Thả lá đầu để mở 4 giây chồng bài. Hết giờ tự thi triển.'};let first=CARDS[ids[0]];const enemy=target(s);let p={name:first.name,kind:'single',cost:ids.reduce((n,id)=>n+CARDS[id].cost,0),damage:first.damage||0,shield:first.shield||0,heal:first.heal||0,ids,elements:elementOf(ids[0])?[ids[0]]:[],base:ids[0]};
  if(ids.join(',')==='slash,slash,fire'){p={...p,name:'Hỏa Liên Trảm · đầy đủ',kind:'full',damage:18+scale(s,'fire',10),elements:['fire']};}
  else if(ids.join(',')==='slash,fire'){p={...p,name:'Hỏa Liên Trảm · bản thiếu',kind:'partial',damage:10+scale(s,'fire',8),elements:['fire']};}
  else if(ids.length===2&&first.kind==='weapon'&&elementOf(ids[1])&&(first.damage||first.shield&&!['fire','ember'].includes(ids[1]))){p.kind='enhance';p.name=`${first.name} + ${CARDS[ids[1]].name}`;p.elements=[ids[1]];if(ids[1]==='fire')p.damage+=scale(s,'fire',4);if(ids[1]==='water')p.heal=scale(s,'water',6);if(ids[1]==='earth')p.shield+=scale(s,'earth',9);}
  else if(ids.length===2&&elementOf(ids[0])&&CARDS[ids[1]].kind==='weapon'&&(CARDS[ids[1]].damage||CARDS[ids[1]].shield&&!['fire','ember'].includes(ids[0]))){const elementId=ids[0],weaponId=ids[1];first=CARDS[weaponId];p={...p,base:weaponId,name:`${CARDS[elementId].name} + ${first.name}`,kind:'enhance',damage:first.damage||0,shield:first.shield||0,heal:first.heal||0,elements:[elementId]};if(elementId==='fire')p.damage+=scale(s,'fire',4);if(elementId==='water')p.heal=scale(s,'water',6);if(elementId==='earth')p.shield+=scale(s,'earth',9);}
  else if(ids.length>1){p.kind='invalid';p.name='Sai công thức · chỉ lá đầu kích hoạt';}
  if(p.base==='counter'&&enemy?.blockedLast)p.damage+=7;
  if(p.base==='returnThrust'&&enemy?.exposed)p.damage+=9+(b.spearBonus||0);
  if(p.damage&&first.family==='shield')p.damage+=b.counterBonus;
  if(p.damage&&s.overloaded.includes('fire'))p.damage+=3;
  if(p.damage&&s.overloaded.includes('water'))p.damage=Math.max(0,p.damage-2);
  if(p.damage&&b.pendingElement==='fire')p.damage+=scale(s,'fire',4);
  if(['single','invalid'].includes(p.kind)&&elementOf(p.base)){p.heal=scale(s,p.base,p.heal);p.shield=scale(s,p.base,p.shield);}
  p.error=p.cost>b.mana?'Không đủ mana':ids.some(id=>elementStatus(s,id)==='locked')?'Hệ đang khóa':p.base==='keep'&&!(enemy?.intent.type==='attack'&&enemy.intent.melee)?'Mục tiêu không chuẩn bị đòn cận chiến':null;
  p.text=[p.cost+' mana',p.damage?p.damage+' sát thương':null,p.shield?'+'+p.shield+' Khiên':null,p.heal?'hồi '+p.heal+' HP':null,p.kind==='single'||p.kind==='enhance'?first.text:null].filter(Boolean).join(' · ');return p;}
function transferRoyal(s,e){const next=s.battle.enemies.find(q=>q.hp>0&&!q.royalVisited);if(e.royal>0&&next){next.royalVisited=true;next.royal=e.royal;hit(s,next,7,false);note(s,`Than vương ấn truyền sang ${next.name}, bùng 7.`);}}
function hit(s,e,damage,direct=true){if(!e||e.hp<=0)return 0;const blocked=Math.min(e.shield,damage);e.shield-=blocked;const dealt=Math.min(e.hp,Math.max(0,damage-blocked));e.hp-=dealt;if(direct){s.battle.damageThisTurn+=dealt;if(e.ember>0&&e.emberTriggered!==s.battle.turn&&damage>0){e.emberTriggered=s.battle.turn;const fire=Math.min(e.hp,4);e.hp-=fire;note(s,`Than Truyền bùng ${fire} trên ${e.name}.`);if(e.hp<=0){const next=s.battle.enemies.find(q=>q.hp>0);if(next)next.ember=e.ember;}}}if(e.hp<=0)transferRoyal(s,e);return dealt;}
function element(s,id){const e=elementOf(id),opposite={fire:'water',water:'fire',wind:'earth',earth:'wind'}[e];if(!e)return;if(!s.overloaded.includes(opposite))s.gauges[opposite]=Math.max(0,s.gauges[opposite]-2);if(s.overloaded.includes(e))return;s.gauges[e]=Math.min(6,s.gauges[e]+2);if(s.gauges[e]===6){const last=s.encounter===CASTLES[s.castle].enemies.length-1&&s.battle.enemies.every(q=>q.hp<=0);if(!last){s.overloaded.push(e);note(s,`Quá tải ${ELEMENT_NAMES[e]} đến hết thành.`);}else s.gauges[e]=4;}}
function applyElement(s,id,attached,enemy){const b=s.battle;switch(id){case 'fire':if(!attached)b.pendingElement='fire';break;case 'ember':if(attached){if(enemy?.hp>0)enemy.ember=3;}else b.pendingElement='ember';break;case 'wind':if(!b.draw.length&&b.discard.length)b.draw=shuffle(s,b.discard.splice(0));if(b.draw.length)b.pending={kind:'scry',card:b.draw[b.draw.length-1],weak:elementStatus(s,id)==='weak'};break;case 'undercurrent':b.undercurrent=3;b.waterWeak=elementStatus(s,id)==='weak';break;case 'foundation':b.foundation=3;b.earthWeak=elementStatus(s,id)==='weak';break;case 'returnWind':b.returnWind=elementStatus(s,id)==='weak'?1:2;break;}element(s,id);}
export function resolveScry(s,bottom){const b=s.battle;if(b.pending?.kind!=='scry')return false;if(bottom&&!b.pending.weak)b.draw.unshift(b.draw.pop());b.pending=null;return true;}
export function play(s){if(s.phase!=='combat'||s.battle.pending||s.battle.cast)return false;const b=s.battle,p=preview(s);if(p.empty||p.error)return false;const enemy=target(s),spent=b.selected.map(uid=>b.hand.find(c=>c.uid===uid));b.hand=b.hand.filter(c=>!b.selected.includes(c.uid));b.discard.push(...spent);b.selected=[];b.mana-=p.cost;s.stats.cards+=spent.length;if(!['single','invalid'].includes(p.kind))s.stats.combos++;
  const dealt=hit(s,enemy,p.damage);b.shield+=p.shield;s.hp=Math.min(45,s.hp+p.heal);
  if(p.damage){if(b.pendingElement==='ember'&&enemy?.hp>0)enemy.ember=3;b.pendingElement=null;if(CARDS[p.base].family==='shield')b.counterBonus=0;}
  if(p.base==='parry')b.parry+=3;if(p.base==='stance')b.stance=true;if(p.base==='hold')b.hold=2;if(p.base==='pin'||p.base==='keep')enemy.spacing=1;if(p.base==='returnThrust'&&enemy.exposed){enemy.exposed=0;b.spearBonus=0;}if(p.base==='spearStance')b.spearStance=true;
  for(const id of p.elements)applyElement(s,id,p.kind!=='single'&&p.kind!=='invalid',enemy);
  if(p.damage&&s.overloaded.includes('fire'))s.hp=Math.max(0,s.hp-(s.history.fire.last?2:1));
  note(s,`${p.name}: ${p.text}${p.damage?` → ${enemy.name} mất ${dealt} HP`:''}.`);checkResult(s);return true;}
export function potion(s){const b=s.battle;if(s.phase!=='combat'||b.pending||b.cast||!s.potions||b.potionUsed||b.mana<1||s.hp===45)return false;s.hp=Math.min(45,s.hp+8);s.potions--;b.mana--;b.potionUsed=true;note(s,'Bình: hồi 8 HP, 1 mana.');return true;}
export function useSeal(s,id){if(s.phase!=='combat'||s.battle.pending||s.battle.cast||!s.equipped.includes(id)||s.usedSeals.includes(id))return false;const b=s.battle,e=target(s);s.usedSeals.push(id);if(id==='fang'){e.royalVisited=true;e.royal=3;hit(s,e,20);}if(id==='breach'){const initial=e.shield;e.shield=Math.max(0,e.shield-18);if(initial>0&&e.shield===0)e.noShield=1;}if(id==='mirror')b.mirror=s.hp;note(s,`Khai Ấn ${SEALS[id].rank} ${SEALS[id].name}.`);checkResult(s);return true;}
export function intentDamage(s,e){return e.intent.type==='attack'?(e.intent.name==='Absolute Zero'&&e.zeroWeakened?12:e.intent.value)+(s.overloaded.includes('wind')?2:0):0;}
export function endTurn(s){if(s.phase!=='combat'||s.battle.pending||s.battle.cast)return false;const b=s.battle;if(b.returnWind>0&&b.hand.some(c=>CARDS[c.id].kind==='weapon')){b.pending={kind:'retain'};return true;}finishTurn(s);return true;}
export function resolveRetain(s,uid){const b=s.battle;if(b.pending?.kind!=='retain')return false;if(uid){const i=b.hand.findIndex(c=>c.uid===uid&&CARDS[c.id].kind==='weapon');if(i<0)return false;b.draw.push(b.hand.splice(i,1)[0]);}b.pending=null;finishTurn(s);return true;}
function finishTurn(s){const b=s.battle;b.selected=[];b.pendingElement=null;const before=s.hp;let first=true,reduceNext=0;let nextCounter=0,nextSpear=0;
  for(const e of b.enemies){e.blockedLast=false;if(e.hp<=0)continue;e.shield=0;
    if(e.intent.type==='attack'){
      if(e.spacing&&e.intent.melee){e.spacing=0;e.exposed=2;b.spacingBlocked=true;if(b.spearStance)nextSpear=6;note(s,`${e.name}: đòn cận chiến bị Giữ Khoảng Cách hủy; Hở Thế đến hết lượt sau.`);}
      else {let dmg=Math.max(0,intentDamage(s,e)-b.parry-reduceNext);b.parry=0;reduceNext=0;const blocked=Math.min(b.shield,dmg);b.shield-=blocked;s.hp=Math.max(0,s.hp-dmg+blocked);e.blockedLast=blocked>0;if(b.stance&&blocked===dmg&&dmg>0)nextCounter=6;if(first&&b.hold>0&&b.shield>0)reduceNext=4;first=false;note(s,`${e.name}: ${e.intent.name} ${dmg}, mất ${dmg-blocked} HP.`);}
    }else if(e.intent.type==='shield'){if(e.noShield){e.noShield=0;note(s,`${e.name} không dựng được Khiên do Nứt Thành.`);}else e.shield+=e.intent.value;}
    else if(e.intent.type==='charge'){e.zeroWeakened=b.damageThisTurn>=15;note(s,`${e.name} tụ lực. ${e.id==='dragon'?`Sát thương HP ${b.damageThisTurn}/15; Absolute Zero ${e.zeroWeakened?12:24}.`:''}`);}
    e.noShield=0;e.spacing=0;e.ember=Math.max(0,e.ember-1);e.royal=Math.max(0,e.royal-1);e.exposed=Math.max(0,e.exposed-1);
    if(checkResult(s))return;
  }
  b.enemyLoss=before-s.hp;b.discard.push(...b.hand.splice(0));b.turn++;s.stats.turns++;b.potionUsed=false;b.damageThisTurn=0;b.counterBonus=nextCounter;b.spearBonus=nextSpear;b.stance=false;b.spearStance=false;b.parry=0;
  b.shield=b.foundation>0?Math.min(b.earthWeak?4:8,Math.floor(b.shield*(b.earthWeak?.25:.5))):0;if(s.overloaded.includes('earth'))b.shield+=6;
  if(b.undercurrent>0)s.hp=Math.min(45,s.hp+Math.min(b.waterWeak?3:5,Math.floor(b.enemyLoss*(b.waterWeak?.25:.5))));
  if(b.mirror!==null){s.hp=Math.min(45,s.hp+Math.min(8,Math.ceil(Math.max(0,b.mirror-s.hp)*.5)));b.mirror=null;}
  if(s.overloaded.includes('water'))s.hp=Math.min(45,s.hp+2);
  for(const key of ['foundation','undercurrent','returnWind','hold'])b[key]=Math.max(0,b[key]-1);
  b.mana=s.maxMana;draw(s,5+(s.overloaded.includes('wind')?1:0)-(s.overloaded.includes('earth')?1:0));for(const e of b.enemies){if(e.hp>0){e.intentIndex++;chooseIntent(e);}}}
function checkResult(s){if(s.hp<=0){finishAttempt(s,false);return true;}const b=s.battle;if(b.enemies.every(e=>e.hp<=0)){s.stats.kills+=b.enemies.length;b.pending=null;const key=`${s.castle}:${s.encounter}`;if(!s.rewards.includes(key)){s.rewards.push(key);s.gold+=15;}if(s.encounter===CASTLES[s.castle].enemies.length-1)finishAttempt(s,true);else s.phase='encounterWon';return true;}if(!b.enemies.some(e=>e.key===b.target&&e.hp>0))b.target=b.enemies.find(e=>e.hp>0).key;return false;}
function finishHistory(s){for(const e of ELEMENTS){const h=s.history[e];if(s.overloaded.includes(e)){h.streak=h.last?h.streak+1:1;h.last=true;h.remaining=2;h.locked=h.streak>=2;}else{h.last=false;h.remaining=Math.max(0,h.remaining-1);if(!h.remaining){h.locked=false;h.streak=0;}}}}
function finishAttempt(s,won,retreated=false){if(s.attemptFinished)return;s.attemptFinished=true;finishHistory(s);if(won){const c=CASTLES[s.castle];if(!s.cleared.includes(s.castle)){s.cleared.push(s.castle);s.gold+=c.reward;if(c.seal&&!s.ownedSeals.includes(c.seal))s.ownedSeals.push(c.seal);}s.phase='castleWon';}else{s.phase='defeat';s.loyalty=Math.max(0,s.loyalty-(retreated?3:8));if(!retreated){const deployed=new Set(s.formation.filter(Boolean));for(const a of s.armies)if(deployed.has(a.id))a.count=Math.max(0,a.count-1);}s.troops=Siege.troopSummary(s);note(s,retreated?'Rút lui: trung thành -3; không phạt thêm quân ngoài tổn thất mô phỏng.':'Thua: trung thành -8; mỗi đạo quân tham gia mất thêm tối đa 1 quân khi rút lui.');}}
export function retreat(s){if(s.phase==='siege'&&s.siege.trial){s.phase='camp';return true;}if(!['siege','breach','combat','encounterWon'].includes(s.phase))return false;if(s.phase==='siege')Siege.commit(s);finishAttempt(s,false,true);return true;}
export function returnCamp(s){if(!['defeat','trialResult'].includes(s.phase))return false;s.phase='camp';s.hp=45;s.battle=null;s.campAidUsed=false;return true;}
export function nextCastle(s){if(s.phase!=='castleWon')return false;if(s.castle===1){s.phase='complete';return true;}s.castle++;s.phase='camp';s.battle=null;s.hp=45;s.campAidUsed=false;return true;}
