from pathlib import Path
import json,re
OUT=Path(__file__).resolve().parent
data=json.loads((OUT/'lineages.json').read_text(encoding='utf-8'))
target=Path(r'C:\Users\Admin\.codex\visualizations\2026\11\26\01a2189c-d8c5-79f0-9dae-6fb6249c5322\ashborne-creature-distribution.html')
compact={'realms':data['realms'],'rows':[{k:r[k] for k in ['card','name','founder','naturalBasis','evidence','variants']} for r in data['lineages']],'sources':[{'id':s['id'],'title':s['title'],'url':s['url']} for s in data['sources']]}
html=target.read_text(encoding='utf-8')
payload=json.dumps(compact,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
pattern=r'(<script type="application/json" id="ashborne-ecology-data">)[\s\S]*?(</script>)'
html,n=re.subn(pattern,lambda m:m.group(1)+payload+m.group(2),html,count=1)
assert n==1
assert len(html.encode('utf-8'))<1000000
assert 'v.adaptivePower' in html
target.write_text(html,encoding='utf-8')
print('Updated inline data:',len(data['lineages']),'lineages;',len(html.encode('utf-8')),'bytes')

