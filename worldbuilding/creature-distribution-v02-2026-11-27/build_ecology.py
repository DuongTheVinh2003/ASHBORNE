from pathlib import Path
import json,re,collections,hashlib
ROOT=Path(__file__).resolve().parents[2]
OUT=Path(__file__).resolve().parent
data=json.loads((OUT/'lineages-input.json').read_text(encoding='utf-8'))
source=(ROOT/'Ashborne-Concept-The-Combat.md').read_text(encoding='utf-8')
def clean(s): return s.replace('**','').replace('✦ ','').strip()
catalog={}
for line in source.splitlines():
    if not line.startswith('| **'): continue
    cols=[clean(c) for c in line.strip().strip('|').split('|')]
    if re.fullmatch(r'(A|[2-9]|10|J|Q|K)[♠♥♦♣]',cols[0]):
        catalog[cols[0]]={'motif':cols[1],'name':cols[2],'fullCardEffect':cols[3]}
    elif cols[0] in ['Joker Đen','Joker Trắng']:
        catalog[cols[0]]={'motif':'Sinh vật đặc biệt, không có loài gốc tự nhiên','name':cols[1],'fullCardEffect':cols[2]}
assert len(catalog)==54, len(catalog)
ids=[r['card'] for r in data['lineages']]
assert len(ids)==54 and len(set(ids))==54
assert set(ids)==set(catalog)
sourceids={s['id'] for s in data['sources']}
zones=data['zones']; realms=data['realms']
for row in data['lineages']:
    row.update(catalog[row['card']])
    row['founder']['realm']=zones[row['founder']['zone']][0]
    row['founder']['region']=zones[row['founder']['zone']][1]
    row['inheritance']='Mọi hậu duệ nhỏ hơn và yếu hơn thủy tổ; không có đủ toàn bộ bộ năng lực của Ấn gốc.'
    row['branchCount']=len(row['variants'])
    row['countsAsSpecies']=row['card']!='2♥'
    assert all(s in sourceids for s in row['evidence']),row['card']
    assert len(set(v['name'] for v in row['variants']))==len(row['variants'])
    assert any(v['ancestralPower']=='không có' for v in row['variants']),row['card']
    for i,v in enumerate(row['variants'],1):
        assert v['zone'] in zones, (row['card'],v['zone'])
        v['id']=row['card']+':'+str(i)
        v['realm']=zones[v['zone']][0];v['region']=zones[v['zone']][1]
        v['status']='Nhánh đề xuất; chưa tự đồng nhất với loài sinh học độc lập'
        v['designInference']=True
        v['crossRealmBiology']='Nội dung fantasy, không phải dữ kiện sinh học Trái Đất' if v['realm']!='W' else 'Thiết kế fantasy có tham khảo sinh thái'
        v['ancestorCard']=row['card']
        assert all(v['adaptivePower'].get(k) for k in ['name','effect','limit','origin']), (row['card'],v['name'])
        v['adaptivePower']['status']='Sáng tạo fantasy theo yêu cầu người dùng, không phải kết luận khoa học'

    row['descendantRealms']=sorted(set(v['realm'] for v in row['variants']))
stats={
'founders':dict(collections.Counter(r['founder']['realm'] for r in data['lineages'])),
'founderTotal':len(ids),
'branchDescriptions':sum(r['branchCount'] for r in data['lineages']),
'ecologicalBranches':sum(r['branchCount'] for r in data['lineages'] if r['countsAsSpecies']),
'humanoidDistributionGroups':next(r['branchCount'] for r in data['lineages'] if r['card']=='2♥'),
'branchesByRealm':dict(collections.Counter(v['realm'] for r in data['lineages'] for v in r['variants'])),
'withoutAncestralPower':sum(v['ancestralPower']=='không có' for r in data['lineages'] for v in r['variants']),
'withAncestralPower':sum(v['ancestralPower']=='một phần' for r in data['lineages'] for v in r['variants']),
'withAdaptivePower':sum(bool(v.get('adaptivePower')) for r in data['lineages'] for v in r['variants']),
'lineagesRepresentedByDescendantsInAllThreeRealms':sum(len(r['descendantRealms'])==3 for r in data['lineages'])
}
assert stats['founderTotal']==sum(stats['founders'].values())==54
assert stats['withoutAncestralPower']+stats['withAncestralPower']==stats['branchDescriptions']
assert stats['ecologicalBranches']+stats['humanoidDistributionGroups']==stats['branchDescriptions']
assert stats['withAdaptivePower']==stats['branchDescriptions']==262
data['summary']=stats
(OUT/'lineages.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
(OUT/'sources.json').write_text(json.dumps(data['sources'],ensure_ascii=False,indent=2),encoding='utf-8')
def md(s): return str(s).replace('|','/').replace('\n',' ')
def src_ref(s):
    d=next(t for t in data['sources'] if t['id']==s)
    return '['+s+']('+d['url']+')'
def regionlist(row,realm):
    return ', '.join(dict.fromkeys(v['region'] for v in row['variants'] if v['realm']==realm)) or '—'
L=[
'# Ashborne Hệ sinh vật và phân bố Tam Giới đề xuất v02',
'',
'Ngày: **27/11/2026**. Phân bố và tên nhánh là đề xuất; mô-típ thủy tổ và thay đổi 2♥ ghi dưới đây là quyết định của người dùng.',
'',
f"Bộ phân bố gồm **54 thủy tổ**: **{stats['founders'].get('W',0)}** ở Thế giới, **{stats['founders'].get('L',0)}** ở Linh giới và **{stats['founders'].get('U',0)}** ở Âm giới. Có **{stats['ecologicalBranches']} nhánh hậu duệ sinh vật được phác thảo**, cùng **{stats['humanoidDistributionGroups']} cụm phân bố hậu duệ hình người của 2♥**. Nhánh sinh thái chưa tự động đồng nghĩa một loài sinh học độc lập.",
'',
'## 1 Quy luật thủy tổ đã thống nhất',
'',
'- Mỗi sinh vật mang Ấn là thủy tổ và cá thể mạnh nhất trong dòng của mình, mang đầy đủ đặc điểm trên thẻ.',
'- Hậu duệ nhỏ hơn, yếu hơn và chỉ thừa hưởng một phần sức mạnh, hoặc chỉ còn hình dáng mà không còn sức mạnh nguyên thủy.',
'- **Sức mạnh thích nghi là nguồn riêng.** Các nhánh đã phân hóa có thể hình thành năng lực từ sinh cảnh dù không còn năng lực nguyên thủy. Bản v02 bổ sung năng lực thích nghi cho mọi nhánh được liệt kê, không coi sức mạnh này là dị biến cực hiếm.',
'- Các quần thể chịu tác động của môi trường có thể phân hóa thành những nhánh mới. Nhánh có thể tiếp tục tồn tại ở nơi phát sinh.',
'- Các nhánh cùng quy về một Ấn gốc. Phân bố sinh vật không tự mở thêm lá, đổi điều kiện thu phục hoặc sửa chỉ số combat.',
'- Những thủy tổ mang mô-típ gần nhau vẫn là các dòng thiết kế riêng: A♠/K♠, A♦/K♦, A♥/K♥, A♣/K♣. Chưa mặc định dòng này sinh ra dòng kia.',
'- Một lãnh địa chính được đề xuất cho mỗi thủy tổ; hậu duệ có thể cư trú rộng hơn. Không coi mọi địa điểm có hậu duệ là có thêm một bản sao của thủy tổ.',
'',
'### Người Giữ Lửa Cuối Cùng',
'',
'**2♥ đổi tên thành Người Giữ Lửa Cuối Cùng và là thủy tổ của các chủng tộc hình người hiện tại.** Một số nhánh còn năng lực liên quan lửa, nhiều nhánh chỉ giữ hình dáng. Dấu vết văn hóa của dòng này gắn với thợ rèn, người giữ lửa, cộng đồng Người lùn và người nghiên cứu hỏa thuật.',
'',
'Chưa gán từng hồ sơ trong danh mục 60 chủng thành một nhánh phả hệ cụ thể. Nhân tạo có ý thức, trạng thái bất tử và hình thể lai cần được đối chiếu riêng. Bảy cụm phân bố của 2♥ không được tính là bảy loài mới. Hiệu ứng chiến đấu của 2♥ giữ nguyên.',
'',
'## 2 Cách dùng số liệu tự nhiên',
'',
'Phân bố rộng, đa dạng loài và tốc độ tiến hóa là ba khái niệm khác nhau. Các số dưới đây hỗ trợ lựa chọn nhóm cần nhiều nhánh và sinh cảnh, không chứng minh một loài dễ tiến hóa nhất. Số loài của cả bộ hoặc họ không phải khả năng thích nghi của một cá thể.',
'',
'| Nhóm hoặc kết quả nghiên cứu | Dữ liệu quan sát và phạm vi | Cách dùng trong thiết kế |',
'| --- | --- | --- |',
'| Độ rộng ổ sinh thái | Phân tích gộp 64 nghiên cứu có tương quan dương với phạm vi địa lý; không phải thước đo tốc độ tiến hóa. '+src_ref('NICH')+' | Xét thức ăn, nhiệt/ẩm và nơi sinh sản trước khi mở rộng phân bố. |',
'| Bọ cánh cứng | Khoảng 400.000 loài toàn bộ Coleoptera trong NatureScot 2025. '+src_ref('BEET')+' | Nhiều cơ hội phân nhánh, nhưng từng dòng bọ tê giác/bọ hươu vẫn chịu ràng buộc riêng. |',
'| Nhện lớn | World Spider Catalog ghi 1.199 loài Theraphosidae tại lần tra; đây là một họ. '+src_ref('SPID')+' | Cho dòng K♣ nhiều nhánh cục bộ, không tự gán khả năng phát tán xa như nhện nhỏ. |',
'| Thằn lằn và rắn | Reptile Database tháng 10/2026: Sauria 8.042 (có Amphisbaenia), rắn 4.252, rùa 365. '+src_ref('REPT')+' | Dòng 2♠ và các dòng rắn có nhiều nhánh; 10♦ không nhận độ rộng của mọi thằn lằn. |',
'| Bướm và ngài | Nghiên cứu 2019 dùng dữ liệu 2.098 gene/186 loài; nêu gần 160.000 loài Lepidoptera đã biết khi đó. '+src_ref('MOTH')+' | Nhiều nhánh Ngài Cánh Tro, nhưng sâu phải có cây chủ phù hợp. |',
'| Bọ ngựa | UC Davis nêu khoảng 2.500 loài đã mô tả. '+src_ref('MANT')+' | Các nhánh khác cách ngụy trang, nền sống và mồi; không phải con nào cũng có lửa. |',
'| Đom đóm | AMNH nêu hơn 2.000 loài, có nhánh dùng mùi thay vì chớp sáng. '+src_ref('FIRE')+' | Có hậu duệ sáng, sáng yếu hoặc không sáng; năng lực hồi phục là phần fantasy. |',
'| Phong lan | Kew 2022 nêu khoảng 28.000 loài/850 chi và sự phụ thuộc tác nhân thụ phấn ở một số nhánh. '+src_ref('ORCH')+' | Nhiều nhánh Lan Yêu nhưng có thể đặc hữu, khó di cư dù đa dạng cao. |',
'| Bọ cạp | Nghiên cứu AMNH 2026 ghi nhiều sinh cảnh, tới khoảng 4.900 m trên núi và khoảng 1 km trong hang. '+src_ref('SCOR')+' | Có nhánh cát, rừng, mỏ, đảo và hang; không mặc định ở băng vĩnh cửu. |',
'| Sói và lợn | USFWS mô tả sói dùng nhiều sinh cảnh khi đủ mồi; TPWD mô tả lợn ăn tạp cơ hội. '+src_ref('WOLF')+', '+src_ref('PIG')+' | Phủ nhiều vùng trên bản đồ, số dòng địa phương vừa phải. |',
'| Gấu Bắc Cực | Phụ thuộc băng biển và có đời sống sinh sản chậm. '+src_ref('POLAR')+' | Giữ ít nhánh, tập trung lạnh. Gấu Đá có khác biệt fantasy được ghi rõ. |',
'| Bọ ba thùy | Hơn 22.000 loài đã mô tả trong một nhóm động vật biển tuyệt chủng. '+src_ref('TRILO')+' | Dòng 7♠ là di tồn/phục tồn fantasy; không xếp hạng như loài đang sống ngoài đời. |',
'',
'Các lượng nhánh thiết kế trong bảng sau do người thiết kế chọn. Không nhân số loài Trái Đất với một hệ số để dự đoán số loài trong game. Những hồ sơ chỉ có NICH dùng nguyên tắc sinh cảnh chung, chưa có định danh loài đủ hẹp để xếp hạng đa dạng hóa.',
'',
'## 3 Phân bố theo ba bản đồ',
'',
'Bản đồ tham chiếu:',
'',
'- [Thế giới Aethran v03](art/concept/world-atlas-v03-2026-11-27/01-the-gioi-aethran-v03.png).',
'- [Linh giới v02](art/concept/world-atlas-v02-2026-11-26/02-linh-gioi-v02.png).',
'- [Âm giới v02](art/concept/world-atlas-v02-2026-11-26/03-am-gioi-v02.png).',
'',
'Các vùng hậu duệ trong bảng là những nơi đề xuất có quần thể ổn định. Không chỉ đếm cá thể đi lạc, thú nuôi được vận chuyển hoặc loài xâm nhập tạm thời. Hậu duệ ở nhiều cõi không tự có khả năng qua cõi; lịch sử phát tán và cơ chế nối cõi chưa được quyết định.',
'',
'### Thế giới',
'',
'- **Eldavar:** đồng ruộng, đô thị, vườn cây, sông và hệ núi tạo nhiều sinh cảnh. Đai núi băng phía bắc giữ các nhánh lạnh; Ashborne là nơi sinh sống của nhiều dòng hình người.',
'- **Vaelun:** trung tâm các nhánh rừng, gỗ mục, tán cây và nền ẩm; thích hợp bọ, nhện, chim rừng, dơi, hươu và thú săn phục kích.',
'- **Orvath:** nhánh lông dày, mùa hoạt động ngắn và sống dưới đường tuyết. Sinh vật vùng ấm chỉ có ở đai ấm hơn, không tự sống giữa băng.',
'- **Sarqesh:** nhánh chịu khô, đào hang hoặc hoạt động về đêm. Ếch và chuồn chuồn chỉ đặt gần nguồn nước hoặc ở nhánh có cơ chế fantasy rõ.',
'- **Namarai:** phân biệt biển, bờ đảo, rừng ẩm tái sinh, hang nguội và vành đai nhiệt. Không đồng nhất toàn quần đảo với dung nham đang chảy.',
'- **Krynd:** ít dòng chuyên lạnh; biển và bờ băng vẫn cần nguồn mồi và thực vật/tảo nền. Không ép bọ nhiệt đới phủ hết lục địa để cân số lượng.',
'',
'### Linh giới',
'',
'- **Cổ Linh Lâm, Thiên Diệp, Lộc Uyển:** nhiều nhánh rừng và thú ăn thực vật, cùng các loài săn chúng.',
'- **Bách Hoa, Mộng Triều:** thụ phấn, ngụy trang và tín hiệu giác quan phát triển; không tự cấp ảo thuật cho mọi con.',
'- **Ngân Phong, Vân Hải:** nhánh núi, gió và biển; Vân Hải có thủy vực thực sự cho sinh vật biển.',
'- **Hồ Linh Kính, Suối Minh Châu:** các dòng nước ngọt, không gộp sinh vật biển vào hồ chỉ vì cùng hệ Nước.',
'- **Bạch Thạch, Tịch Quang, Bến Vọng:** các nhánh nền đá, ánh sáng, dư chấn linh lực và dòng đặc biệt; vẫn có giới hạn sinh cảnh.',
'',
'### Âm giới',
'',
'- **Băng Mộ, Hàn Uyên:** nhánh lạnh, ít năng suất và mật độ thấp.',
'- **Cốt Sa, Hoang Lăng:** nhánh nền cát, hang đất, di tồn và sinh vật xử lý vật hữu cơ.',
'- **Tro Tàn, Hắc Nham:** nơi tập trung các dòng tro và nhiệt; hậu duệ thường sống ở rìa đã nguội hoặc khe ẩm, không mặc định chịu được dung nham.',
'- **Rừng Hóa Thạch, Đồng Vọng, Vực Câm, U Sơn:** nhánh hang, thính giác, cảm rung, ngụy trang và dòng đặc biệt.',
'- **Dạ Trạch, Vong Hà, Biển Tĩnh, Hắc Hải:** tách nước ngọt/nước mặn, oxy và nguồn mồi. Mực chỉ ở vùng biển; ốc, sứa và rắn có nhánh riêng thích hợp từng môi trường.',
'',
'Để các quần thể sinh vật tồn tại, một số vùng Âm giới trong phương án này còn nước, vật hữu cơ, nguồn mồi và ánh sáng phù hợp. Nếu về sau đổi quy luật môi trường đó, phải điều chỉnh các quần thể, không dùng tên Âm giới để bỏ qua chuỗi thức ăn.',
'',
'## 4 Danh mục 54 thủy tổ và vùng hậu duệ',
'',
'“Nhánh” là số mô tả đề xuất đã có, không phải số loài được chứng minh hoặc số asset bắt buộc phải sản xuất. 2♥ được đếm bằng cụm phân bố, không xếp chung số loài sinh vật.',
'']
for suit,title in [('♠','Bích và Gió'),('♥','Cơ và Lửa'),('♦','Rô và Nước'),('♣','Tép và Đất'),('Joker','Hai Joker')]:
    L+=['',f'### {title}','','| Lá và thủy tổ | Lãnh địa chính đề xuất | Hậu duệ ở Thế giới | Hậu duệ ở Linh giới | Hậu duệ ở Âm giới | Nhánh |','| --- | --- | --- | --- | --- | ---: |']
    subset=[r for r in data['lineages'] if (r['card'].startswith('Joker') if suit=='Joker' else r['card'].endswith(suit))]
    for r in subset:
        home=realms[r['founder']['realm']]+' — '+r['founder']['site']
        L+=['| '+' | '.join(md(x) for x in [r['card']+' '+r['name'],home,regionlist(r,'W'),regionlist(r,'L'),regionlist(r,'U'),str(r['branchCount'])+(' cụm' if r['card']=='2♥' else '')])+' |']
L+=['','## 5 Những dòng ưu tiên mở rộng','',
'Ưu tiên nhiều nhánh địa phương cho nhện nhỏ A♣, ngài 8♥, lan Q♥, bọ cạp 8♣, thằn lằn 2♠, bọ hung 10♠ và đom đóm 6♦. Các dòng bọ tê giác/bọ hươu có thể mở rộng ở nơi có nền sống phù hợp; dòng vương K vẫn giữ bản sắc và giới hạn riêng.',
'',
'Sói J♥ và lợn rừng 4♠ phân bố rộng vì sử dụng nhiều sinh cảnh, nhưng không cần biến thành hàng chục loài chỉ để lấp bản đồ. Lan có thể có nhiều nhánh đặc hữu nhưng mỗi nhánh chỉ ở một khu hẹp. Cá voi và mực đi xa trên biển nhưng không phủ đất liền.',
'',
'Không chia đều sinh vật theo diện tích 100:50:50. Độ đa dạng còn phụ thuộc số kiểu sinh cảnh, năng suất, cách ly và lịch sử phát tán.',
'',
'## 6 Hai nguồn sức mạnh của hậu duệ','',
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
'## 7 Tệp dữ liệu và tài liệu liên quan','',
'- [Danh mục chi tiết hậu duệ](worldbuilding/creature-distribution-v02-2026-11-27/Danh-muc-hau-due.md): tên nhánh, vùng, sức mạnh nguyên thủy, năng lực thích nghi và giới hạn.',
'- [Dữ liệu 54 dòng](worldbuilding/creature-distribution-v02-2026-11-27/lineages.json): giữ nguyên tên và công dụng thẻ hiện hành, kèm phân bố.',
'- [Nguồn sinh học](worldbuilding/creature-distribution-v02-2026-11-27/sources.json): ghi rõ dữ liệu nào ở cấp bộ, họ hoặc loài và ngày nguồn.',
'- [Concept thẻ combat](Ashborne-Concept-The-Combat.md): mô-típ thủy tổ và mô tả mới của 2♥.',
'',
'Bản đồ gốc được giữ nguyên. Tài liệu này phân bố bằng địa danh trên bản đồ, chưa vẽ đè hàng trăm ký hiệu lên ảnh và chưa xác lập vị trí tọa độ của từng cá thể.',
'',
'## 8 Nguồn tham khảo','']
for s in data['sources']:
    L += [f"- **{s['id']} — [{s['title']}]({s['url']})**, nguồn {s['sourceDate']}. {s['fact']} {s['limit']}"]
main=ROOT/'Ashborne-He-Sinh-Vat-va-Phan-Bo-Tam-Gioi-De-xuat-v02.md'
main.write_text('\n'.join(L)+'\n',encoding='utf-8')
A=['# Ashborne Danh mục các nhánh hậu duệ đề xuất','','Ngày: 27/11/2026. Mọi nhánh dưới đây nhỏ hơn và yếu hơn thủy tổ; tên, hình thái và phân bố là thiết kế đề xuất. Quy luật thủy tổ do người dùng xác định. Các dòng qua cõi là fantasy, không phải kết quả khoa học.','','“Không có” nghĩa là không còn năng lực nguyên thủy từ Ấn gốc; mỗi nhánh có thêm một nguồn thích nghi được mô tả riêng, kể cả khi nguồn nguyên thủy đã mất. Các cụm 2♥ chưa phải các loài mới.','']
for r in data['lineages']:
    A += [f"## {r['card']} {r['name']}",'',f"**Mô-típ:** {r['motif']}. **Lãnh địa:** {realms[r['founder']['realm']]} — {r['founder']['site']}.", '',f"**Đặc điểm tham khảo:** {r['naturalBasis']}"+(' '+', '.join(src_ref(s) for s in r['evidence']) if r['evidence'] else ''),'',f"**Toàn bộ công dụng Ấn hiện hành:** {r['fullCardEffect']}",'','| Nhánh hậu duệ | Cõi và vùng | Thích nghi nền | Sức mạnh nguyên thủy | Năng lực thích nghi | Giới hạn |','| --- | --- | --- | --- | --- | --- |']
    for v in r['variants']:
        A+=['| '+' | '.join(md(x) for x in [v['name'],realms[v['realm']]+' — '+v['region'],v['adaptation'],v['ancestralPower'],v['adaptivePower']['name']+' — '+v['adaptivePower']['effect'],v['adaptivePower']['limit']])+' |']
    A+=['']
(OUT/'Danh-muc-hau-due.md').write_text('\n'.join(A),encoding='utf-8')
audit={'checks':{'exactly54':True,'allSourceCardsCovered':True,'uniqueCards':True,'allRegionsValid':True,'allEvidenceIdsValid':True,'everyLineageHasDescendantWithoutAncestralPower':True,'allCardMechanicsReadFromCurrentSource':True,'everyBranchHasAdaptivePowerAndLimit':True},'summary':stats,'mainDocument':str(main),'sourceSha256':hashlib.sha256((ROOT/'Ashborne-Concept-The-Combat.md').read_bytes()).hexdigest(),'unmodifiedRuntimeCode':True}
(OUT/'verification.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(stats,ensure_ascii=False))
print('Main report:',main)

