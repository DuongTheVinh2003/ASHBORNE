// Spatial Phase 1. Simulation positions are the only positions used by the view.
export const FIELD={width:20,height:14,columns:5,rows:4,maxArmies:6,step:0.1,maxTicks:750};
export const UNITS={
  shield:{name:'Thạch tộc · Khiên',short:'Khiên',role:'Đánh chặn',icon:'⬡',hp:18,attack:1.8,defense:4,interval:1.2,move:1.35,range:0.15,radius:0.62,color:0xc6aa74,description:'Chặn quân cận chiến tại vị trí tiếp xúc. Không bảo vệ được cánh khác.'},
  spear:{name:'Nhân tộc · Giáo',short:'Giáo',role:'Hỗ trợ cận chiến',icon:'⚑',hp:12,attack:2.7,defense:2,interval:1,move:1.6,range:0.95,radius:0.55,color:0x77a8ab,description:'Tầm vươn dài: có thể đâm từ sau tuyến Khiên nếu mục tiêu vào tầm.'},
  archer:{name:'Tinh linh · Cung',short:'Cung',role:'Bắn xa',icon:'➶',hp:8,attack:3.5,defense:0,interval:1.3,move:1.4,range:4.8,radius:0.5,color:0x94b797,description:'Chỉ bắn khi mục tiêu vào tầm. Đặt quá sâu sẽ tham chiến muộn.'},
  mage:{name:'Tro tộc · Pháp',short:'Pháp',role:'Sát thương vùng',icon:'✦',hp:7,attack:4.3,defense:0,interval:1.8,move:1.2,range:4.3,splash:1.8,radius:0.5,color:0xc09ab6,description:'Biến thể Lửa Tro: đánh các cụm trong bán kính 1.8 quanh mục tiêu.'}
};
export function initialArmies(){return [
  {id:'shield-a',name:'Khiên A',type:'shield',count:8,capacity:8,race:'Thạch tộc',formula:'Thạch tộc × Khiên'},
  {id:'shield-b',name:'Khiên B',type:'shield',count:8,capacity:8,race:'Thạch tộc',formula:'Thạch tộc × Khiên'},
  {id:'spear-a',name:'Giáo A',type:'spear',count:8,capacity:8,race:'Nhân tộc',formula:'Nhân tộc × Giáo'},
  {id:'archer-a',name:'Cung A',type:'archer',count:8,capacity:8,race:'Tinh linh',formula:'Tinh linh × Cung'},
  {id:'archer-b',name:'Cung B',type:'archer',count:7,capacity:7,race:'Tinh linh',formula:'Tinh linh × Cung'},
  {id:'mage-a',name:'Pháp Tro',type:'mage',count:6,capacity:6,race:'Tro tộc',formula:'Tro tộc × Pháp · Lửa Tro'}
];}
export function initialFormation(){const a=Array(20).fill(null);a[1]='shield-a';a[3]='shield-b';a[7]='spear-a';a[11]='archer-a';a[13]='archer-b';a[17]='mage-a';return a;}
export function cellPosition(slot){return {x:3+(slot%5)*3.5,y:8+Math.floor(slot/5)*1.2};}
export function defense(castle){return castle===0?[
  {id:'enemy-shield',name:'Khiên thủ tả',type:'shield',count:7,x:6.5,y:4.5},
  {id:'enemy-spear',name:'Giáo thủ hữu',type:'spear',count:7,x:13.2,y:4.5},
  {id:'enemy-bow',name:'Cung thủ thành',type:'archer',count:6,x:6.5,y:1.8}
]:[
  {id:'enemy-shield',name:'Khiên thủ trái',type:'shield',count:8,x:5.5,y:4.5},
  {id:'enemy-spear',name:'Giáo thủ giữa',type:'spear',count:8,x:10,y:4.3},
  {id:'enemy-bow',name:'Cung thủ phải',type:'archer',count:6,x:15.5,y:2},
  {id:'enemy-mage',name:'Pháp Lò Tro',type:'mage',count:5,x:7,y:1.8}
];}
function actor(q,side){const u=UNITS[q.type];return {...q,side,initial:q.count,hp:q.count*u.hp,maxHp:q.count*u.hp,radius:u.radius,cooldown:0,target:null,damageDealt:0,firstHit:null,nearMelee:false,stuck:0,alive:true};}
export function setup(state,trial=false){const squads=state.formation.map((id,slot)=>{const a=state.armies.find(q=>q.id===id);return a?.count>0?actor({...a,...cellPosition(slot),slot},'ally'):null;}).filter(Boolean);
  return {trial,tick:0,initial:squads.reduce((n,a)=>n+a.count,0),squads,defenders:defense(state.castle).map(a=>actor(a,'enemy')),gate:state.castle===0?180:235,maxGate:state.castle===0?180:235,gatePosition:{id:'gate',type:'gate',x:10,y:0.7,radius:0.9,side:'enemy'},losses:0,committed:false,dominant:false,events:[],effects:[],result:null};}
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
function reach(a,t){return UNITS[a.type].range+a.radius+t.radius;}
function count(a){return Math.max(0,Math.ceil(a.hp/UNITS[a.type].hp));}
function event(b,text,extra={}){b.events.push({tick:b.tick,text,...extra});if(b.events.length>160)b.events.shift();}
function segmentDistance(p,a,t){const dx=t.x-a.x,dy=t.y-a.y,len=dx*dx+dy*dy;if(!len)return {distance:distance(p,a),fraction:0};const fraction=((p.x-a.x)*dx+(p.y-a.y)*dy)/len;return {distance:Math.hypot(p.x-a.x-Math.max(0,Math.min(1,fraction))*dx,p.y-a.y-Math.max(0,Math.min(1,fraction))*dy),fraction};}
function chooseTarget(b,a,foes){const nearest=foes.slice().sort((p,q)=>distance(a,p)-distance(a,q)||p.id.localeCompare(q.id))[0];
  const current=foes.find(q=>q.id===a.target);
  if(current&&distance(a,current)<=reach(a,current)+1.3)return current;
  if(a.side==='enemy')return nearest;
  if(nearest&&distance(a,nearest)<=reach(a,nearest)+1.4)return nearest;
  // A local open route may reach the gate while far-away defenders remain alive.
  const gate=b.gatePosition;
  const blocker=foes.filter(q=>{const p=segmentDistance(q,a,gate);return p.fraction>0&&p.fraction<1&&p.distance<a.radius+q.radius+0.15;}).sort((p,q)=>distance(a,p)-distance(a,q))[0];
  if(blocker)return blocker;
  return gate;
}
function moveActor(b,a,target,all){const u=UNITS[a.type],d=distance(a,target);if(d<=reach(a,target))return;let dx=(target.x-a.x)/d,dy=(target.y-a.y)/d;
  // Local separation, followed by collision rejection. No actor can cross an enemy.
  for(const q of all){if(q===a||q.hp<=0)continue;const sep=distance(a,q),limit=a.radius+q.radius+0.18;if(sep<limit&&sep>0.001){const force=(limit-sep)/limit;dx+=(a.x-q.x)/sep*force*1.8;dy+=(a.y-q.y)/sep*force*1.8;}}
  const norm=Math.hypot(dx,dy)||1,step=u.move*FIELD.step;
  const candidates=[[dx/norm,dy/norm],[-dy/norm,dx/norm],[dy/norm,-dx/norm]];
  let moved=false;
  for(const [vx,vy] of candidates){const p={x:Math.max(.7,Math.min(19.3,a.x+vx*step)),y:Math.max(1,Math.min(13.3,a.y+vy*step))};
    if(all.some(q=>q!==a&&q.hp>0&&distance(p,q)<(a.radius+q.radius)*.91&&distance(p,q)<distance(a,q)-.001))continue;
    a.x=p.x;a.y=p.y;moved=true;break;
  }
  a.stuck=moved?0:a.stuck+1;if(a.stuck>20){a.target=null;a.stuck=0;}
}
function damageActor(b,attacker,target,amount,splash=false){const before=count(target);target.hp=Math.max(0,target.hp-amount);target.alive=target.hp>0;attacker.damageDealt+=amount;if(attacker.firstHit===null)attacker.firstHit=b.tick;
  b.effects.push({from:{x:attacker.x,y:attacker.y},to:{x:target.x,y:target.y},tick:b.tick,type:attacker.type,splash:splash?UNITS[attacker.type].splash:0,damage:Math.round(amount)});
  if(target.side==='ally'&&['archer','mage'].includes(target.type)&&UNITS[attacker.type].range<2&&!target.nearMelee){target.nearMelee=true;event(b,`${target.name} bị ${attacker.name} áp sát tại cánh ${target.x<10?'trái':'phải'}.`,{type:'breach',army:target.id});}
  if(before>count(target))event(b,`${attacker.name} → ${target.name}: mất ${before-count(target)} quân${splash?' (vùng)':''}.`,{type:'loss',source:attacker.id,army:target.id});
  if(!target.alive)event(b,`${target.name} đã tan rã.`,{type:'destroyed',army:target.id});
}
export function step(b){if(b.result)return b.result;b.tick++;b.effects=b.effects.filter(e=>b.tick-e.tick<9);const all=[...b.squads,...b.defenders];
  for(const a of all){if(a.hp<=0)continue;const foes=(a.side==='ally'?b.defenders:b.squads).filter(q=>q.hp>0);a.cooldown=Math.max(0,a.cooldown-FIELD.step);const target=chooseTarget(b,a,foes);if(!target)continue;a.target=target.id;
    if(distance(a,target)>reach(a,target)){moveActor(b,a,target,all);continue;}
    if(a.cooldown>0)continue;a.cooldown=UNITS[a.type].interval;const u=UNITS[a.type];
    if(target.id==='gate'){const dmg=count(a)*u.attack*.55;b.gate=Math.max(0,b.gate-dmg);a.damageDealt+=dmg;if(a.firstHit===null)a.firstHit=b.tick;b.effects.push({from:{x:a.x,y:a.y},to:{x:target.x,y:target.y},tick:b.tick,type:a.type,damage:Math.round(dmg)});if(b.gate<=0){b.result='won';event(b,'Cổng thành bị phá. Các đạo quân còn đứng trên chiến trường dừng giao chiến.',{type:'gate'});break;}}
    else {const dmg=Math.max(1,count(a)*(u.attack-UNITS[target.type].defense*.25)*.55);if(u.splash){const affected=foes.filter(q=>distance(q,target)<=u.splash+q.radius);for(const q of affected)damageActor(b,a,q,dmg,true);}else damageActor(b,a,target,dmg);}
  }
  b.losses=b.squads.reduce((n,a)=>n+a.initial-count(a),0);
  if(!b.result&&(!b.squads.some(a=>a.hp>0)||b.tick>=FIELD.maxTicks)){b.result='lost';event(b,b.tick>=FIELD.maxTicks?'Hết giới hạn 750 nhịp: chưa phá được cổng.':'Không còn đạo quân có thể tiếp tục.');}
  if(b.result==='won')b.dominant=b.tick<=300&&b.losses/Math.max(1,b.initial)<=.3;
  return b.result;
}
export function commit(state){const b=state.siege;if(b.committed||b.trial)return false;for(const a of b.squads){const record=state.armies.find(q=>q.id===a.id);record.count=count(a);}b.committed=true;return true;}
export function survivors(a){return count(a);}
export function troopSummary(s){return s.armies.reduce((result,a)=>{result[a.type]=(result[a.type]||0)+a.count;return result;},{shield:0,spear:0,archer:0,mage:0});}
