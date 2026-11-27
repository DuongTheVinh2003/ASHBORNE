import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {config,root,out,makeData,makeArmy,raceSeeds,weaponSeeds,sealSeeds,fuseArmy,generateWeapons,generateSeals} from './generate.mjs';
import {classes} from './catalog.mjs';
const d=makeData();
const copy=x=>JSON.parse(JSON.stringify(x));

test('covers exactly the source catalogue and every class combination',()=>{
 assert.equal(d.races.length,60);assert.equal(d.classes.length,5);assert.equal(d.weapons.length,144);assert.equal(d.elements.length,8);assert.equal(d.seals.length,54);assert.equal(d.armies.length,300);
 for(const list of [d.races,d.classes,d.weapons,d.elements,d.seals,d.armies])assert.equal(new Set(list.map(x=>x.id)).size,list.length);
 for(const r of raceSeeds)for(const c of classes)assert.ok(d.armies.some(a=>a.id===r.id+'-'+c.id));
 assert.ok(raceSeeds.every(r=>r.profile.length===4&&r.specialties.length<=2&&r.specialties.every(k=>classes.some(c=>c.id===k))))
});
test('all card names and semantic source records retain stable IDs',()=>{
 assert.equal(new Set(weaponSeeds.map(w=>w.name)).size,48);assert.equal(new Set(sealSeeds.map(s=>s.name)).size,54);
 for(const w of d.weapons)assert.equal(w.name,weaponSeeds.find(x=>x.id===w.baseId).name);
 for(const suit of ['♠','♥','♦','♣'])assert.equal(d.seals.filter(s=>s.suit===suit).length,13);
});
test('all card effects have resolved numbers, proper fees and nonnegative parameters',()=>{
 for(const x of [...d.weapons,...d.elements,...d.seals]){
  assert.ok(x.description.length>0,x.id);assert.ok(!/\{\w+\}|undefined|NaN|Infinity/.test(x.description),x.id);
  assert.ok(Number.isInteger(x.mana)&&x.mana>=0,x.id);
  for(const [key,value] of Object.entries(x.params))assert.ok(Number.isFinite(value)&&value>=0,`${x.id}/${key}`);
 }
 for(const w of d.weapons.filter(w=>w.group==='Trực tiếp'))assert.ok([w.damage,w.shield,w.heal].filter(v=>v>0).length<=2,w.id);
});
test('every army has four positive stats and bounded, integer costs',()=>{
 for(const a of d.armies){for(const k of ['hp','attack','defense','speed'])assert.ok(Number.isFinite(a[k])&&a[k]>0,`${a.id}/${k}`);assert.ok(a.range>0&&a.move>0);assert.ok(Number.isInteger(a.recruitGold)&&a.recruitGold>=1);assert.ok(Number.isInteger(a.supplyPerEight)&&a.supplyPerEight>=1);}
});
test('all roots and partner classes preserve fusion root identity and caps',()=>{
 for(const base of d.armies)for(const c of classes){
  const partner=d.armies.find(a=>a.classId===c.id&&a.id!==base.id),f=fuseArmy([base,partner]);
  assert.equal(f[base.locked],base[base.locked]);assert.equal(f.range,base.range);assert.equal(f.classId,base.classId);
  for(const k of ['hp','attack','defense','speed'])assert.ok(f[k]>=base[k]*0.8-0.00501&&f[k]<=base[k]*1.2+0.00501,`${f.id}/${k}`);
  assert.ok(f.recruitGold>=base.recruitGold);assert.ok(f.supplyPerEight>=base.supplyPerEight);
 }
});
test('fusion cannot recursively compound, duplicate components or accept four components',()=>{
 const a=d.armies[0],b=d.armies[1],c=d.armies[2],e=d.armies[3];assert.throws(()=>fuseArmy([a,a]));assert.throws(()=>fuseArmy([a,b,c,e]));assert.throws(()=>fuseArmy([fuseArmy([a,b]),c]));assert.equal(fuseArmy([a,b,c]).components.length,3);
});
test('severe incompatibility remains producible but weaker and dearer',()=>{
 const r=raceSeeds.find(x=>x.id==='R11'),c=classes.find(x=>x.id==='mage'),a=makeArmy(r,c);
 const changed=copy(config);changed.severePairs=[];const b=makeArmy(r,c,changed);
 assert.ok(a.attack<b.attack);assert.ok(a.recruitGold>=b.recruitGold);assert.equal(a.hp,b.hp);assert.equal(a.speed,b.speed);assert.ok(a.attack>0);
});
test('changing one damage anchor regenerates all appropriate values without changing discrete effects',()=>{
 const cfg=copy(config);cfg.anchors.damage=16;const v=generateWeapons(cfg);
 assert.equal(v.find(x=>x.id==='W01-q0').damage,36);assert.equal(v.find(x=>x.id==='W03-q0').params.bonus,10);
 assert.equal(v.find(x=>x.id==='W15-q0').params.enemyTurns,1);assert.equal(v.find(x=>x.id==='W12-q0').params.discount,1);
 assert.deepEqual(generateSeals(cfg),d.seals);
});
test('three compatibility anchors have exact expected cases',()=>{
 assert.equal(d.armies.find(a=>a.id==='R01-spear').compatibility,'specialty');assert.equal(d.armies.find(a=>a.id==='R01-mage').compatibility,'off');assert.equal(d.armies.find(a=>a.id==='R11-mage').compatibility,'severe');
});
test('the three prototype seal anchors retain the proposed reference values',()=>{
 const s=id=>d.seals.find(x=>x.id===id);
 assert.deepEqual(s('SD7').params,{ratio:0.5,cap:8});assert.equal(s('SD7').load,2);
 assert.equal(s('SCJ').params.breakShield,18);assert.equal(s('SCJ').load,4);assert.ok(s('SCJ').description.includes('Không gây sát thương HP'));
 assert.deepEqual(s('SHK').params,{damage:20,burst:7,turns:3});assert.equal(s('SHK').load,6);
 assert.equal(s('JOKER-B').load,s('JOKER-W').load);
});
test('seal load validation uses capacity and four slots, independent of activation mana',()=>{
 const fits=(ids,capacity)=>ids.length<=4&&new Set(ids).size===ids.length&&ids.reduce((n,id)=>n+d.seals.find(s=>s.id===id).load,0)<=capacity;
 assert.ok(fits(['SHK','SCJ','SD7'],12));assert.ok(!fits(['SHK','SCJ','SD7','SSA'],12));assert.ok(!fits(['SS2','SS3','SS4','SH2','SD2'],12));assert.ok(d.seals.every(s=>s.mana===0));
});
test('element weakness reduces magnitude without fractional card movement',()=>{
 const e=id=>d.elements.find(x=>x.id===id);assert.equal(e('water').weakParams.heal,3);assert.equal(e('earth').weakParams.shield,5);assert.equal(e('undercurrent').weakParams.ratio,0.5);assert.equal(e('returnWind').weakParams.turns,1);assert.ok(e('wind').weakDescription.includes('không được đưa xuống đáy'));
});
test('JSON delivered values match current generator exactly',async()=>{
 const disk=JSON.parse(await fs.readFile(path.join(out,'ashborne-cards.json'),'utf8'));assert.deepEqual(disk,d);
});
test('all original project files indexed before work are unchanged',async t=>{
 let manifest;
 try{manifest=JSON.parse(await fs.readFile(path.join(root,'.artifacts/card-balance-review-20261126/source-manifest.json'),'utf8'));}
 catch(e){if(e.code==='ENOENT'){t.skip('Local review fingerprint is not included in repository exports');return;}throw e;}
 for(const x of manifest){const bytes=await fs.readFile(path.join(root,x.path));assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),x.sha256,x.path);}
});
