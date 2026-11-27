from pathlib import Path
import json
OUT=Path(__file__).resolve().parent
ROOT=OUT.parents[1]
OLD=ROOT/'worldbuilding/creature-distribution-v01-2026-11-27'
data=json.loads((OLD/'lineages-input.json').read_text(encoding='utf-8'))
powers=json.loads((OUT/'adaptive-powers.json').read_text(encoding='utf-8'))
assert len(powers)==54
assert set(powers)=={r['card'] for r in data['lineages']}
for row in data['lineages']:
    p=powers[row['card']]
    assert len(p)==len(row['variants']),(row['card'],len(p),len(row['variants']))
    for v,a in zip(row['variants'],p):
        assert all(a.get(k) for k in ['name','effect','limit','origin','expression'])
        v['adaptivePower']=a
        v['adaptivePower']['environment']=v['adaptation']
        if row['card']=='2♥':
            v['adaptivePower']['expression']='Năng lực định hướng cho các dòng hình người ở cụm này; cần gán theo từng chủng, không mặc định mọi cá thể cùng một phép.'
        else:
            v['adaptivePower']['expression']='Đặc tính thường gặp của nhánh; mức biểu hiện khác nhau giữa cá thể, không mặc định là dị biến cực hiếm.'
    row['powerModel']='Hai nguồn độc lập: thừa hưởng nguyên thủy và thích nghi môi trường. Mất nguồn nguyên thủy vẫn có thể có năng lực thích nghi.'
data['version']='0.2'
data['rules']['adaptivePower']='Sức mạnh thích nghi hình thành theo môi trường và là đặc tính của các nhánh đã phân hóa; không đồng nhất với sức mạnh thủy tổ. Các nhánh trong bản v02 đều có năng lực thích nghi được đề xuất, có điều kiện và giới hạn.'
data['rules']['ancestorCap']='Thủy tổ vẫn là cá thể mạnh nhất của dòng. Lợi thế chuyên biệt của hậu duệ ở sinh cảnh riêng không làm nó giữ trọn bộ quyền năng hoặc vượt tổng thể thủy tổ.'
data['rules']['individualVariation']='Không ấn định tỷ lệ di truyền hoặc mức sức mạnh đồng đều cho mọi cá thể. Cá thể yếu hoặc mất cả hai nguồn vẫn có thể tồn tại; không dùng cá thể bình thường làm mặc định cho mọi nhánh.'
(OUT/'lineages-input.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
s=(OLD/'build_ecology.py').read_text(encoding='utf-8')
s=s.replace('creature-distribution-v01-2026-11-27','creature-distribution-v02-2026-11-27')
s=s.replace('De-xuat-v01.md','De-xuat-v02.md').replace('Tam Giới đề xuất v01','Tam Giới đề xuất v02')
s=s.replace("'ordinaryBranches'","'withoutAncestralPower'").replace("'partialPowerBranches'","'withAncestralPower'")
s=s.replace("'everyLineageHasNonmagicalDescendant'","'everyLineageHasDescendantWithoutAncestralPower'")
anchor="        v['ancestorCard']=row['card']"
assert s.count(anchor)==1
s=s.replace(anchor,anchor+"""
        assert all(v['adaptivePower'].get(k) for k in ['name','effect','limit','origin']), (row['card'],v['name'])
        v['adaptivePower']['status']='Sáng tạo fantasy theo yêu cầu người dùng, không phải kết luận khoa học'
""")
anchor="'lineagesRepresentedByDescendantsInAllThreeRealms':"
assert s.count(anchor)==1
s=s.replace(anchor,"'withAdaptivePower':sum(bool(v.get('adaptivePower')) for r in data['lineages'] for v in r['variants']),\n"+anchor)
anchor="assert stats['ecologicalBranches']+stats['humanoidDistributionGroups']==stats['branchDescriptions']"
assert s.count(anchor)==1
s=s.replace(anchor,anchor+"\nassert stats['withAdaptivePower']==stats['branchDescriptions']==262")
anchor="'- Hậu duệ nhỏ hơn, yếu hơn và chỉ thừa hưởng một phần sức mạnh, hoặc chỉ còn hình dáng mà không còn sức mạnh nguyên thủy.',"
assert s.count(anchor)==1
s=s.replace(anchor,anchor+"\n'- **Sức mạnh thích nghi là nguồn riêng.** Các nhánh đã phân hóa có thể hình thành năng lực từ sinh cảnh dù không còn năng lực nguyên thủy. Bản v02 bổ sung năng lực thích nghi cho mọi nhánh được liệt kê, không coi sức mạnh này là dị biến cực hiếm.',")
start=s.index("'## 6 Phân biệt sức mạnh và biến đổi môi trường'")
end=s.index("'## 7 Tệp dữ liệu và tài liệu liên quan'",start)
s=s[:start]+"""'## 6 Hai nguồn sức mạnh của hậu duệ','',
'**Nguồn nguyên thủy** là phần quyền năng từ Ấn gốc còn được thừa hưởng. **Nguồn thích nghi** hình thành theo môi trường sống, có thể mang đặc tính khác với nguyên tố của thủy tổ.',
'',
f"Trong {stats['branchDescriptions']} mô tả, {stats['withoutAncestralPower']} nhánh/cụm không còn nguồn nguyên thủy và {stats['withAncestralPower']} giữ một phần. Cả {stats['withAdaptivePower']} đều có năng lực thích nghi được đề xuất. Đây là số mô tả thiết kế, không phải tỷ lệ di truyền hoặc tần suất gặp trong tự nhiên.",
'',
'Ví dụ, một nhánh rết đã mất lửa nguyên thủy vẫn có thể phát xung qua đất ẩm, kết giáp tro hấp nhiệt hoặc nhận hình vật qua lớp đá mỏng. Tương tự, nhện không giữ lực dựng Khiên của thủy tổ vẫn có thể dệt lưới giữ bóng, nuốt âm hoặc kết sương.',
'',
'Năng lực thích nghi phải phục vụ việc sống, săn mồi, tự vệ, sinh sản hoặc giao tiếp tại sinh cảnh đó. Mỗi năng lực có tên, tác dụng và giới hạn; không chỉ đổi màu, tăng kích thước hoặc gắn tên nguyên tố vào con vật. Sinh học tự nhiên hỗ trợ chọn nền sống; các năng lực siêu nhiên là sáng tạo của thế giới game.',
'',
'Thủy tổ vẫn là cá thể mạnh nhất. Hậu duệ có thể có lợi thế chuyên biệt trong môi trường riêng nhưng không mặc định vượt tổng thể thủy tổ, không có trọn bộ công dụng thẻ và không tạo thêm Ấn. Chưa thiết kế chỉ số sát thương, thời lượng hay xác suất di truyền.',
'',
'Với 2♥, các năng lực trong bảy cụm là hướng phân hóa cho những chủng hình người, không áp cùng một phép cho mọi dân cư trong một vùng. Phả hệ và cách biểu hiện của từng chủng sẽ được xác định riêng.',
'',
'Đổi màu đơn thuần chưa xác định loài mới trong sinh học. Tên nhánh ở đây tiếp tục là đề xuất sinh thái fantasy. Không suy rằng Thú nhân hình sói là hậu duệ trực tiếp của Sói Săn Tàn Hỏa khi chưa đối chiếu quy luật thủy tổ hình người.',
'',
""" +s[end:]
s=s.replace('Để các quần thể thường tồn tại','Để các quần thể sinh vật tồn tại')
s=s.replace('tên nhánh, vùng, thích nghi, phần sức mạnh còn lại.','tên nhánh, vùng, sức mạnh nguyên thủy, năng lực thích nghi và giới hạn.')
s=s.replace('những chức năng cơ thể tự nhiên như bay, tơ, độc hoặc ngụy trang vẫn có thể tồn tại.','mỗi nhánh có thêm một nguồn thích nghi được mô tả riêng, kể cả khi nguồn nguyên thủy đã mất.')
s=s.replace("'| Nhánh hậu duệ | Cõi và vùng | Thích nghi hoặc đặc tính đề xuất | Sức mạnh nguyên thủy |','| --- | --- | --- | --- |'","'| Nhánh hậu duệ | Cõi và vùng | Thích nghi nền | Sức mạnh nguyên thủy | Năng lực thích nghi | Giới hạn |','| --- | --- | --- | --- | --- | --- |'")
old="v['adaptation'],v['ancestralPower']])"
new="v['adaptation'],v['ancestralPower'],v['adaptivePower']['name']+' — '+v['adaptivePower']['effect'],v['adaptivePower']['limit']])"
assert s.count(old)==1
s=s.replace(old,new)
s=s.replace("'allCardMechanicsReadFromCurrentSource':True","'allCardMechanicsReadFromCurrentSource':True,'everyBranchHasAdaptivePowerAndLimit':True")
(OUT/'build_ecology.py').write_text(s,encoding='utf-8')
print('Prepared 54 lineages and',sum(len(r['variants']) for r in data['lineages']),'adaptive power profiles.')

