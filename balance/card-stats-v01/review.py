from pathlib import Path
from zipfile import ZipFile
import xml.etree.ElementTree as ET
import json, hashlib, re

root = Path(__file__).resolve().parents[2]
out = root / '.artifacts/card-balance-review-20261126'
out.mkdir(parents=True, exist_ok=True)
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
manifest = []
for p in sorted(root.rglob('*')):
    rel = p.relative_to(root).as_posix()
    if not p.is_file() or any(x in p.parts for x in ('.git', '.backups', '.artifacts', 'node_modules', 'dist', 'vendor', 'outputs', 'balance')):
        continue
    if p.suffix not in ('.md', '.docx', '.mjs', '.js', '.html', '.css', '.json', '.txt'):
        continue
    if p.suffix == '.docx':
        with ZipFile(p) as z:
            tree = ET.fromstring(z.read('word/document.xml'))
        text = '\n'.join(''.join(t.text or '' for t in el.findall('.//w:t', ns)) for el in tree.findall('.//w:p', ns))
        (out / (p.stem + '.txt')).write_text(text, encoding='utf-8')
    else:
        text = p.read_text(encoding='utf-8-sig')
    manifest.append({'path': rel, 'sha256': hashlib.sha256(p.read_bytes()).hexdigest(), 'characters': len(text), 'headings': re.findall(r'^#{1,4} .+', text, re.M)})
(out/'source-manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps({'source_files':len(manifest),'characters':sum(x['characters'] for x in manifest)},ensure_ascii=False))
