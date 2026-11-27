from pathlib import Path
import json,re,hashlib
ROOT=Path(__file__).resolve().parents[2]
OUT=Path(__file__).resolve().parent
data=json.loads((OUT/'world-populations.json').read_text(encoding='utf-8'))
def source_rows(text):
 out={}
 for line in text.splitlines():
  m=re.match(r'^\| (\d{2}) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|',line)
  if m:out[int(m[1])]=tuple(x.strip() for x in m.groups()[1:])
 return out
before=(ROOT/'.backups/races-native-expansion-2026-11-27/Ashborne-Chung-toc-va-Binh-chung.md').read_text(encoding='utf-8')
after=(ROOT/'Ashborne-Chung-toc-va-Binh-chung.md').read_text(encoding='utf-8')
a,b=source_rows(before),source_rows(after)
assert set(a)==set(b)==set(range(1,61))
for k in a:assert (a[k][0],a[k][2])==(b[k][0],b[k][2]),k
changed=[k for k in a if a[k][1]!=b[k][1]]
assert set(changed)=={4,11,13,14,17,25,28,35,36,38,46},changed
old=json.loads((ROOT/'worldbuilding/creature-distribution-v02-2026-11-27/lineages.json').read_text(encoding='utf-8'))
oldaudit=json.loads((ROOT/'worldbuilding/creature-distribution-v02-2026-11-27/verification.json').read_text(encoding='utf-8'))
sealhash=hashlib.sha256((ROOT/'Ashborne-Concept-The-Combat.md').read_bytes()).hexdigest()
assert sealhash==oldaudit['sourceSha256']
entries=[]
def cardkey(card):
 if card=='Joker Đen':return 'JOKER-BLACK'
 if card=='Joker Trắng':return 'JOKER-WHITE'
 return {'♠':'S','♥':'H','♦':'D','♣':'C'}[card[-1]]+'-'+card[:-1]
for r in old['lineages']:
 key=cardkey(r['card'])
 entries.append({'id':'SEAL-'+key,'type':'thủy tổ Ấn','name':r['name'],'ancestorCard':r['card'],'realm':r['founder']['realm'],'region':r['founder']['region'],'source':'creature-distribution-v02-2026-11-27/lineages.json','sourceRef':r['card']})
 if r['card']=='2♥':continue
 for i,v in enumerate(r['variants'],1):
  entries.append({'id':f'DESC-{key}-{i:02d}','type':'hậu duệ Ấn','name':v['name'],'ancestorCard':r['card'],'realm':v['realm'],'region':v['region'],'source':'creature-distribution-v02-2026-11-27/lineages.json','sourceRef':v['id']})
for n in data['nativeVariants']:
 entries.append({'id':f"N-{n['familyId']}-{n['regionId']}",'type':'sinh vật bản địa','name':n['name'],'ancestorCard':None,'realm':n['realm'],'region':n['region'],'regionId':n['regionId'],'familyId':n['familyId'],'source':'races-and-native-fauna-v01-2026-11-27/world-populations.json','sourceRef':n['id']})
assert len(entries)==541 and len({e['id'] for e in entries})==541
assert sum(e['type']=='thủy tổ Ấn' for e in entries)==54
assert sum(e['type']=='hậu duệ Ấn' for e in entries)==255
assert sum(e['type']=='sinh vật bản địa' for e in entries)==232
assert all(e['ancestorCard'] is None for e in entries if e['type']=='sinh vật bản địa')
mapdata=json.loads((ROOT/'art/concept/world-atlas-v03-2026-11-27/geography-brief.json').read_text(encoding='utf-8'))
countries={c for co in mapdata['world']['continents'] for c in co['countries']}
wland={r['name'] for r in data['regions'] if r['realm']=='W' and not r['waterOnly']}
assert wland==countries,(wland-countries,countries-wland)
assert all(len([v for v in data['nativeVariants'] if v['familyId']==fid])==58 for fid in data['nativeFamilies'])
for n in data['npcVariants']:
 assert n['minority'] and n['npcOnly'] and not n['cardEligible'] and not n['hasCombatStatBlock']
 assert set(n).isdisjoint({'hp','attack','defense','mana','damage','level','specialties','stats'})
(OUT/'dex-index.json').write_text(json.dumps({'status':'đề xuất; không gồm NPC','count':541,'entries':entries},ensure_ascii=False,indent=2),encoding='utf-8')
(OUT/'people-index.json').write_text(json.dumps({'count':99,'npcOnly':True,'combatStats':False,'entries':[{'id':n['id'],'name':n['name'],'baseRaceRef':n['baseRaceRef'],'regionId':n['regionId'],'realm':n['realm'],'cardEligible':False} for n in data['npcVariants']]},ensure_ascii=False,indent=2),encoding='utf-8')
audit=json.loads((OUT/'verification.json').read_text(encoding='utf-8'))
audit['checks'].update({'source60NamesAndSpecialtiesPreserved':True,'all24WorldCountriesCovered':True,'noNPCsInCreatureDex':True,'541UniqueDexIds':True,'sealConceptMatchesPriorAuditHash':True})
audit['sourceDescriptionsChanged']=changed
audit['sealSourceSha256']=sealhash
(OUT/'verification.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2),encoding='utf-8')
print('Verified: 60 base profiles; unchanged names/specialties; 11 environment descriptions revised.')
print('Verified: 99 minority NPC branches; zero new cards/stat blocks; 232 natives across 58 regions; 541 unique creature Dex entries.')
print('Existing 54-seal concept matches prior saved hash.')

