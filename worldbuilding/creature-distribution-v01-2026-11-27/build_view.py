from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[2]
OUT=Path(__file__).resolve().parent
data=json.loads((OUT/'lineages.json').read_text(encoding='utf-8'))
target=Path(r'C:\Users\Admin\.codex\visualizations\2026\11\26\01a2189c-d8c5-79f0-9dae-6fb6249c5322\ashborne-creature-distribution.html')
rows=[]
for r in data['lineages']:
    rows.append({k:r[k] for k in ['card','name','founder','naturalBasis','evidence','variants']})
compact={'realms':data['realms'],'rows':rows,'sources':[{'id':s['id'],'title':s['title'],'url':s['url']} for s in data['sources']]}
html=target.read_text(encoding='utf-8')
assert html.count('__ECO_DATA__')==1
html=html.replace('__ECO_DATA__',json.dumps(compact,ensure_ascii=False,separators=(',',':')).replace('</','<\\/'))
assert len(html.encode('utf-8'))<1000000
assert not html.lstrip().lower().startswith('<!doctype')
target.write_text(html,encoding='utf-8')
print('Inline bytes:',target.stat().st_size)

