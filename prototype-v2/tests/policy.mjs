import * as G from '../game.mjs';
export function policy(s){const b=s.battle;
  if(b.pending){if(b.pending.kind==='scry')G.resolveScry(s,G.CARDS[b.pending.card.id].kind==='weapon'?false:true);else G.resolveRetain(s,b.hand.find(c=>G.CARDS[c.id].damage)?.uid||null);return;}
  const alive=b.enemies.filter(e=>e.hp>0),small=alive.find(e=>e.maxHp<30);G.targetEnemy(s,(small||alive[0]).key);let enemy=b.enemies.find(e=>e.key===b.target);
  if(s.hp<=35&&b.mana>0&&!b.potionUsed&&s.potions)G.potion(s);
  if(enemy.shield>=8&&s.equipped.includes('breach')&&!s.usedSeals.includes('breach'))G.useSeal(s,'breach');
  if(s.phase!=='combat')return;
  if((s.encounter===1||s.hp<20)&&s.equipped.includes('fang')&&!s.usedSeals.includes('fang'))G.useSeal(s,'fang');
  if(s.phase!=='combat')return;
  if(s.hp<30&&s.equipped.includes('mirror')&&!s.usedSeals.includes('mirror'))G.useSeal(s,'mirror');
  for(let i=0;i<10&&s.phase==='combat'&&!b.pending;i++){
    enemy=b.enemies.find(e=>e.key===b.target&&e.hp>0);if(!enemy)break;
    const actions=b.hand.map(c=>[c]);for(const a of b.hand)for(const e of b.hand)if(G.CARDS[a.id].kind==='weapon'&&G.elementOf(e.id))actions.push([a,e]);
    const slashes=b.hand.filter(c=>c.id==='slash'),fire=b.hand.find(c=>c.id==='fire');if(slashes.length>=2&&fire)actions.push([slashes[0],slashes[1],fire]);
    let choice,score=-Infinity;const incoming=b.enemies.filter(e=>e.hp>0).reduce((n,e)=>n+G.intentDamage(s,e),0),need=Math.max(0,incoming-b.shield);
    for(const cards of actions){b.selected=cards.map(c=>c.uid);const p=G.preview(s);if(p.error||p.kind==='invalid')continue;
      let value=Math.min(enemy.hp+enemy.shield,p.damage)+Math.min(45-s.hp,p.heal)*1.6+Math.min(need,p.shield)*1.55-p.cost*.5;
      for(const c of cards){if(c.id==='pin'||c.id==='keep')value+=enemy.intent.melee?G.intentDamage(s,enemy)*1.7:0;if(c.id==='returnWind')value+=b.returnWind?0:3;if(c.id==='wind')value+=1;if(c.id==='foundation')value+=b.foundation?0:5;if(c.id==='undercurrent')value+=b.undercurrent?0:Math.min(12,45-s.hp);if(c.id==='stance')value+=b.shield>=incoming&&incoming>0?5:0;if(c.id==='parry')value+=Math.min(3,incoming);if(c.id==='ember')value+=b.enemies.length>1?5:3;if(c.id==='spearStance')value+=enemy.spacing?5:0;if(c.id==='hold')value+=b.hold?0:2;}
      if(value>score){score=value;choice=cards;}
    }
    b.selected=[];if(!choice)break;const usedBefore=s.stats.cards;for(const card of choice)G.queueCard(s,card.uid,b.target);const outcome=G.advanceCast(s,G.CAST_WINDOW_MS);if(s.stats.cards===usedBefore&&!outcome?.played)break;
  }
  if(s.phase==='combat'&&!b.pending)G.endTurn(s);
}
export function campaign(seed,style='shield'){const s=G.createGame(seed);s.deckStyle=style;for(let i=0;i<3000&&s.phase!=='complete'&&s.phase!=='defeat';i++){
  if(s.phase==='camp'){G.replenish(s);if(s.ownedSeals.includes('mirror')&&!s.equipped.includes('mirror'))G.toggleSeal(s,'mirror');G.startSiege(s);}else if(s.phase==='siege')G.siegeTick(s);else if(s.phase==='breach'||s.phase==='encounterWon')G.startEncounter(s);else if(s.phase==='combat')policy(s);else if(s.phase==='castleWon')G.nextCastle(s);
  }return s;}
