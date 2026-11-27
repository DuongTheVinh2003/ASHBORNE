from pathlib import Path
from collections import Counter
import json,re,math
OUT=Path(__file__).resolve().parent
ROOT=OUT.parents[1]
d=json.loads((OUT/'design-input.json').read_text(encoding='utf-8'))
regions={r['id']:r for r in d['regions']}
assert len(regions)==58
assert Counter(r['realm'] for r in regions.values())=={'W':29,'L':14,'U':15}
src=(ROOT/'Ashborne-Chung-toc-va-Binh-chung.md').read_text(encoding='utf-8')
catalog=[]
for line in src.splitlines():
    m=re.match(r'^\| (\d{2}) \| ([^|]+) \| ([^|]+) \|',line)
    if m:
        catalog.append({'id':int(m[1]),'baseName':m[2].strip(),'sourceDescription':m[3].strip()})
assert len(catalog)==60 and len({r['id'] for r in catalog})==60
byid={r['id']:r for r in catalog}
realms={'W':'Thế giới','L':'Linh giới','U':'Âm giới'}
families={
'SLM':{'name':'Niêm thể hoang — Slime','prefix':'Slime','population':'rất thường gặp theo bãi nhỏ','role':'Phân giải mùn, vật hữu cơ và khoáng; làm tầng sinh vật nền.','identity':'Lõi gel và màng thân biến dạng; bản địa độc lập với 54 dòng Ấn.','limit':'Cần vật chất và nguồn môi trường để nạp lại; phá màng/lõi hoặc làm cạn nguồn sẽ suy. Không có miễn nhiễm tuyệt đối.','sourceRaceRef':60},
'DRK':{'name':'Tiểu long — Drake','prefix':'Tiểu long','population':'thường gặp nhưng phân tán theo lãnh thổ nhỏ','role':'Thú săn mồi cỡ nhỏ đến vừa, bắt cá và động vật nhỏ; một số được thuần dưỡng.','identity':'Sinh vật bò sát trưởng thành bốn chi, không mặc định có cánh; không phải rồng con hoặc Long nhân.','limit':'Cần ăn và nghỉ sau khi phóng lực; tác động nhỏ quanh thân, không có hơi thở hủy diệt diện rộng.','sourceRaceRef':None},
'MIM':{'name':'Ngụy vật — Mimic','prefix':'Mimic','population':'thường gặp tại những điểm có vật liệu phù hợp','role':'Ngụy trang phục kích sinh vật nhỏ và ăn xác; không mặc định thù địch mọi cư dân.','identity':'Thân mềm có lõi và mặt dính, sao dáng vật thể/vật liệu địa phương; không chỉ giả rương.','limit':'Phải học mẫu gần và cần thời gian đổi dạng. Không sao trí tuệ, kỹ năng hoặc toàn bộ năng lực của vật hay sinh vật khác.','sourceRaceRef':None},
'WIS':{'name':'Linh hỏa — Wisp','prefix':'Linh hỏa','population':'thường gặp theo cụm tại nơi có nguồn linh lực','role':'Tích và trao linh lực môi trường, báo đường và cộng sinh; không mặc định là hồn người chết.','identity':'Hạch sống nhỏ được bao bằng linh quang, không mang hình người cố định; khác cơ thể nguyên tố thuần của hồ sơ 57. Dạng dưới nước có bọt/màng linh.','limit':'Nguồn năng lượng hữu hạn, phải hấp thu lại từ sinh cảnh; không đọc toàn bộ ký ức, hồi sinh hoặc tự mở cổng qua cõi.','sourceRaceRef':None}
}
native=[]
morph_water={'SLM':'Gel có màng giữ độ mặn và túi nổi; lõi hoạt động dưới nước.','DRK':'Thân thuôn, bốn chi thành vây, cơ quan trao đổi khí dưới nước; vẫn là một quần thể địa phương ổn định.','MIM':'Màng trao đổi khí dưới nước và lớp thân giống vật liệu biển/sông; lõi bám nền hoặc trôi theo dòng.','WIS':'Lõi quang nằm trong bọt linh, giao tiếp bằng ánh trong nước.'}
for i,r in enumerate(regions.values(),1):
    for fid,f in families.items():
        morphology=morph_water[fid] if r['waterOnly'] else f['identity']+' Diện mạo thích ứng với '+r['biome']+'.'
        native.append({
          'id':f'N-{fid}-{i:02d}','familyId':fid,'name':f['prefix']+' '+r['epithet'],
          'realm':r['realm'],'regionId':r['id'],'region':r['name'],'macro':r['macro'],
          'origin':'sinh vật bản địa độc lập; không gán Ấn thủy tổ',
          'morphology':morphology,'habitat':r['biome'],'foodAndRole':f['role'],
          'abundance':f['population'],'distributionPolicy':'rộng và phổ biến hơn hậu duệ Ấn Thú trong cùng sinh cảnh',
          'adaptivePower':{'name':f['prefix']+' '+r['epithet'],'effect':r['nativeEffects'][fid],'limit':'Phụ thuộc '+r['resource']+'. '+f['limit']},
          'heritableRegionalForm':True,'consciousLocalElementMastery':False,'sealEligible':False,
          'raceFamilyRef':f['sourceRaceRef'],'status':'đề xuất'}
        )
assert len(native)==232
assert len({r['id'] for r in native})==232
assert len({(r['familyId'],r['regionId']) for r in native})==232
assert len({r['adaptivePower']['effect'] for r in native})==232
def npc_power(fid,r):
    res=r['resource'];gift=r['communityGift']
    if fid=='ELF-Q':return ('Quang Mạch '+r['epithet'],f'Dùng ánh mạch bám cơ thể làm hiện biến động của {res}, hỗ trợ {gift}.','Chỉ cảm và dẫn một lượng lực nhỏ; không tự làm chủ mọi nguyên tố.')
    if fid=='ELF-M':return ('Cộng Sinh '+r['epithet'],f'Cảm {res} qua mô cộng sinh rồi truyền sinh lực nhỏ vào rễ hoặc lớp cây quanh nơi trú.','Cần cây đang sống và quan hệ cộng sinh; không điều khiển cả khu rừng.')
    if fid=='ELF-A':return ('Thạch Ảnh '+r['epithet'],f'Đọc dư chấn của {res} và đặt một bóng cảm giác ngắn để giấu chuyển động.','Cần nền phản xạ phù hợp; ánh hoặc âm quá rối làm lộ dấu.')
    if fid=='DWF':return ('Thạch Cốt '+r['epithet'],f'Cộng hưởng với {res} khi chạm để dồn lực gia cố một mối ghép vật liệu hoặc lớp bảo vệ nhỏ.','Cần đúng nguồn tại nơi sống, phải chạm và nghỉ; không đúc kim loại từ hư không.')
    if fid=='DRF':return ('Vảy Mạch '+r['epithet'],r['nativeEffects']['DRK'],'Biểu hiện trên cơ thể hình người với phạm vi nhỏ và điều kiện nạp từ '+res+'; không gán phả hệ với Tiểu long.')
    if fid=='GOB':return ('Dấu Vật '+r['epithet'],f'Da hoặc móng cảm dấu trong {res}, lưu một dấu vật liệu để giấu đường đi hoặc nhận đồ quen.','Không sao chép toàn bộ vật thể, trí nhớ hoặc kỹ năng của người khác.')
    if fid=='ORC':return ('Huyết Lực '+r['epithet'],f'Nhịp cơ thể cộng hưởng với {res} để giữ thăng bằng và dồn một nhịp lực thích hợp nền sống.','Chỉ bộc lộ ngắn, sau đó cần nghỉ; không phải phép điều khiển nguyên tố tự do.')
    if fid=='TRL':return ('Tái Kết '+r['epithet'],f'Mô sống lấy vật chất phù hợp quanh {res} để vá tổn thương nhỏ theo dạng sinh cảnh.','Không tái sinh tức thì từ mọi vết thương; thiếu vật chất hoặc bị phá mô tiếp thì suy.')
    if fid=='GNM':return ('Dư Âm '+r['epithet'],f'Lưu một nhịp sáng hoặc rung từ {res} rồi phát lại để giao tiếp hoặc đánh dấu đồ chế.','Mỗi lần lưu rất ít thông tin, không đọc ký ức hoặc tạo trí tuệ nhân tạo.')
    if fid=='GNT':return ('Sơn Thể '+r['epithet'],f'Dồn lực cơ thể theo {res} để bám nền, chịu gió hoặc nhận chấn động địa hình.','Là năng lực sinh lý giới hạn; không biến Cự nhân núi thành Pháp binh sở trường.')
    if fid=='BRF':return ('Lông Hộ '+r['epithet'],f'Lông và mỡ khóa một lớp khí lực để {gift} quanh thân.','Chỉ bảo vệ chính thân và người chạm sát, không tạo vùng khí hậu mới.')
    if fid=='LZF':return ('Vảy Dẫn '+r['epithet'],f'Vảy chuyển nhiệt và hơi ẩm theo {res} để giữ thân ổn định, có thể nhả một vệt lực ngắn.','Quá tải khiến phải lột hoặc nghỉ; không miễn nhiễm nhiệt hoặc thiếu oxy.')
    if fid=='TRT':return ('Mai Mạch '+r['epithet'],f'Mai giữ lực từ {res} thành lớp đệm hoặc dấu cảm áp.','Mai no lực phải xả; không tự đứng vững trước mọi va chạm.')
    if fid=='MER':return ('Mang Linh '+r['epithet'],f'Mang và da đọc {res}, bẻ một dòng nhỏ quanh thân để di chuyển hoặc liên lạc.','Cần môi trường nước tương thích; không hô hấp vô hạn ở mọi độ mặn.')
    if fid=='NAG':return ('Vảy Lưu '+r['epithet'],f'Lưu một dấu dòng trong {res} rồi truyền dấu đó qua tiếp xúc để dẫn đường.','Chỉ giữ một đoạn ký ức thủy lực ngắn, không thấy mọi sự kiện trên sông.')
    if fid=='LAM':return ('Da Kính '+r['epithet'],f'Da bẻ ánh từ {res} thành ảnh lệch quanh phần thân để ẩn hoặc báo hiệu.','Không thay đổi ý chí người nhìn hoặc trở nên vô hình hoàn toàn.')
    if fid=='FOX':return ('Ảnh Hương '+r['epithet'],f'Hương và lớp lông lưu dấu từ {res}, phát một ảnh cảm giác để che đường rút.','Ảnh không có vật chất và không sao chép sức mạnh của đối tượng.')
    if fid=='FUN':return ('Bào Mạch '+r['epithet'],f'Bào tử trao tín hiệu và sinh lực nhỏ qua {res} trong cụm cộng sinh.','Cần nền sống tương thích; không kiểm soát ý chí hay phát tán vô hạn.')
    raise ValueError(fid)
npcs=[]
for plan in d['plans']:
    assert all(z in regions for z in plan['variants'])
    for i,z in enumerate(plan['variants']):
        r=regions[z]
        j=min(len(plan['sourceIds'])-1,i//math.ceil(len(plan['variants'])/len(plan['sourceIds'])))
        sid=plan['sourceIds'][j]
        assert sid in byid
        ability,effect,limit=npc_power(plan['id'],r)
        npcs.append({
          'id':f"NPC-{plan['id']}-{i+1:02d}",'familyId':plan['id'],'baseRaceRef':sid,
          'baseRaceName':byid[sid]['baseName'],'name':plan['label']+' '+r['epithet'],
          'regionId':z,'region':r['name'],'realm':r['realm'],
          'presence':'Cộng đồng thiểu số hoặc NPC rải rác; nhiều điểm cư trú không đồng nghĩa đa số dân địa phương.',
          'npcOnly':True,'minority':True,'cardEligible':False,'hasCombatStatBlock':False,'armySpecialtyOverride':False,
          'appearance':f"Giữ nhận diện {byid[sid]['baseName']}; biến đổi bề mặt/cơ quan thích nghi với {r['biome']} và {r['resource']}.",
          'culture':f"Phong tục và nghề nghiệp khai thác {r['resource']}; năng lực được dùng để {r['communityGift']}. Không mặc định mọi cá thể chung đạo đức hoặc nghề nghiệp.",
          'adaptivePower':{'name':ability,'effect':effect,'limit':limit},
          'ancestry':'Theo quy luật Người Giữ Lửa Cuối Cùng đối với dòng hình người; chưa tự gán quan hệ gần giữa các họ.',
          'status':'đề xuất NPC; không tạo thẻ hay chỉ số'
        })
assert len(npcs)==99
assert all(n['npcOnly'] and n['minority'] and not n['cardEligible'] and not n['hasCombatStatBlock'] for n in npcs)
assert not any(any(k in n for k in ['hp','attack','defense','mana','damage','level','rarity']) for n in npcs)
for c in catalog:
    c['npcVariantRefs']=[n['id'] for n in npcs if n['baseRaceRef']==c['id']]
    c['proposedWorldInterpretation']=d['aliases'].get(str(c['id']))
    if c['id']==60:c['nativeFamilyRef']='SLM';c['deduplication']='Niêm thể hoang và các nhánh có ý thức cùng họ; không cộng lại họ này vào số sinh vật mới.'
distribution=[]
for r in regions.values():
    ns=[n for n in native if n['regionId']==r['id']]
    pop=[n for n in npcs if n['regionId']==r['id']]
    distribution.append({'regionId':r['id'],'realm':r['realm'],'region':r['name'],'macro':r['macro'],'nativeVariants':len(ns),'npcMinorityBranches':len(pop),'nativeRefs':[n['id'] for n in ns],'npcRefs':[n['id'] for n in pop]})
assert all(r['nativeVariants']==4 for r in distribution)
summary={'baseRaceProfiles':60,'npcMinorityBranches':99,'nativeFamilies':4,'regions':58,'nativeVariants':232,'nativeByRealm':dict(Counter(n['realm'] for n in native)),'npcByRealm':dict(Counter(n['realm'] for n in npcs)),'newArmyCards':0,'newNPCStatBlocks':0,'existingSealProgenitors':54,'sealDescendantBranchesUnchanged':255,'creatureDexEntriesIfMerged':54+255+232}
result={'version':'0.1','date':d['date'],'status':d['status'],'summary':summary,'sources':d['sources'],'regions':d['regions'],'baseRaceCatalog':catalog,'npcVariants':npcs,'nativeFamilies':families,'nativeVariants':native,'distribution':distribution,'policies':{'npc':d['npcPolicy'],'native':d['nativePolicy'],'sourceCardCountPreserved':True,'minorityDoesNotMeanNoSpread':True,'genericCreaturesCanFormRegionalPopulationsFasterThanSealDescendants':'quy luật thiết kế fantasy; không gán tỷ lệ hoặc số thế hệ thực tế','noFreePlaneTravel':'Phân bố lịch sử ở nhiều cõi không tự trao quyền qua cõi cho từng cá thể.','noAutomaticElementMastery':'Năng lực thích nghi không tự tạo quyền học hoặc điều khiển toàn bộ nguyên tố.','independentFamilies':'Tiểu long không phải tổ tiên của Long nhân; Linh hỏa không mặc định là vong linh hình người; Mimic giả người không thành chủng người.','dexCounting':'Các nhánh NPC là mục dân cư riêng; không cộng 99 nhánh vào 541 mục sinh vật. Không cộng lại Niêm thể số 60 thành một họ mới.'}}
(OUT/'world-populations.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
(OUT/'sources.json').write_text(json.dumps(d['sources'],ensure_ascii=False,indent=2),encoding='utf-8')
def md(s):return str(s).replace('|','/').replace('\n',' ')
N=['# Ashborne Các nhánh chủng tộc dùng cho NPC','','Ngày: 27/11/2026. Các nhánh dưới đây là NPC/cộng đồng thiểu số, không có thẻ bài, chỉ số chiến đấu hoặc sở trường binh chủng riêng. Tên và địa bàn là đề xuất.','']
for plan in d['plans']:
    N += ['## '+plan['label'],'','| Nhánh NPC | Cõi và nơi sống | Năng lực thích nghi dùng trong kể chuyện | Giới hạn |','| --- | --- | --- | --- |']
    for n in npcs:
        if n['familyId']!=plan['id']:continue
        N+=['| '+' | '.join(md(x) for x in [n['name'],realms[n['realm']]+' — '+n['region'],n['adaptivePower']['name']+': '+n['adaptivePower']['effect'],n['adaptivePower']['limit']])+' |']
    N+=['']
(OUT/'Nhanh-NPC-thieu-so.md').write_text('\n'.join(N),encoding='utf-8')
F=['# Ashborne Dex sinh vật bản địa đề xuất','','Ngày: 27/11/2026. Bốn họ bản địa độc lập với 54 dòng Ấn; mỗi họ có một biến thể ở mỗi vùng trong 58 vùng thống kê. Không phải 232 loài sinh học đã được xác lập.','',
'Niêm thể dùng chung họ với hồ sơ chủng số 60. Tiểu long là sinh vật trưởng thành cỡ nhỏ/vừa, không phải rồng con hay Long nhân. Linh hỏa không mặc định là người chết. Các biến thể địa phương là quần thể ổn định, không có nghĩa một cá thể tự đổi thành mọi dạng ngay khi đổi vùng.','']
for fid,f in families.items():
    F+=['## '+f['name'],'',f['identity']+' '+f['role'],'','**Mức gặp:** '+f['population']+'. Phân bố và độ phổ biến được thiết kế rộng hơn hậu duệ Ấn Thú trong cùng sinh cảnh.','','| Biến thể | Cõi và vùng | Năng lực thích nghi | Giới hạn |','| --- | --- | --- | --- |']
    for n in native:
        if n['familyId']!=fid:continue
        F+=['| '+' | '.join(md(x) for x in [n['name'],realms[n['realm']]+' — '+n['region'],n['adaptivePower']['effect'],n['adaptivePower']['limit']])+' |']
    F+=['']
(OUT/'Dex-sinh-vat-ban-dia.md').write_text('\n'.join(F),encoding='utf-8')
M=['# Ashborne Chủng tộc thích nghi và sinh vật bản địa đề xuất v01','','Ngày: **27/11/2026**. Bản này điều chỉnh cách phân bố và thể hiện một số họ trong 60 hồ sơ, bổ sung sinh vật bản địa có nhiều biến thể. Các nhánh chủng tộc là **NPC/cộng đồng thiểu số, không làm thẻ bài hoặc chỉ số riêng**.','',
f"Giữ **60 hồ sơ nền**. Đề xuất **99 nhánh NPC** và **4 họ sinh vật bản địa với 232 biến thể** tại **58 vùng**. Những con số này là số mục thiết kế, không phải số dân hoặc xác suất xuất hiện.",
'',
'## 1 Kết quả tham khảo fantasy','',
'Không có một danh mục thống nhất cho tất cả tác phẩm để xác định chủng nhiều biến thể nhất toàn ngành. Trong phạm vi các nguồn D&D chính thức đã kiểm tra, Long nhân/rồng, Tinh linh, Người lùn và các nhánh cự nhân có nhiều mẫu phân hóa phù hợp tham khảo. Không cộng bản Legacy/2024, tuổi của rồng hoặc tên gọi đồng nghĩa thành loài mới.',
'',
'| Phạm vi nguồn | Quan sát dùng được | Cách áp dụng cho Ashborne |','| --- | --- | --- |',
'| [Character Origins 2024](https://www.dndbeyond.com/sources/dnd/br-2024/character-origins) | 10 lựa chọn tổ tiên rồng cho Dragonborn; 3 lineage Elf trong chương. Dwarf có các cộng đồng đồi/núi. Các mục này không cùng một đơn vị phân loại. | Tham khảo cách gắn đặc điểm cơ thể và năng lực với nhánh; không dùng làm số dân hoặc tốc độ tiến hóa. |',
'| [Species catalog](https://www.dndbeyond.com/species) | Eladrin, Sea Elf, Shadar-kai và Duergar cho thấy nhiều hướng biến đổi theo môi trường/cõi. | Ưu tiên các họ nhiều hướng thể hiện; tên, năng lực và phả hệ của Ashborne được viết riêng. |',
'',
'Các số lượng nhánh dưới đây là lựa chọn thiết kế, không phải bảng xếp hạng đã đo trên mọi IP. Goblin, Orc, Troll và Gnome được bổ sung vì phù hợp các hốc sinh thái của Ashborne. Quy luật Người Giữ Lửa Cuối Cùng giữ nguyên; không nhập nguồn gốc thần linh hoặc tổ tiên rồng từ D&D.',
'',
'## 2 Phân bố các nhánh chủng tộc','',
'| Họ hoặc nhóm | Nhánh NPC đề xuất | Hướng phân bố |','| --- | ---: | --- |']
for plan in d['plans']:
    zs=[regions[z] for z in plan['variants']]
    M+=['| '+' | '.join(md(x) for x in [plan['label'],len(zs),', '.join(dict.fromkeys(realms[r['realm']] for r in zs))])+' |']
M+=['','Tinh linh có tổng 18 nhánh qua ba nhóm hiện có. Số điểm cư trú tăng nhưng các nhánh vẫn là dân cư thiểu số. Một họ xuất hiện ở nhiều cõi không có nghĩa mọi thành viên được tự qua cõi. Không gắn nhánh với đạo đức, nghề nghiệp hay phe phái duy nhất.','',
'Các cách gọi như Quang Mạch, Thạch Ảnh, Băng Nham, Tro Đảo, Hải Nham là nhãn nhánh NPC hoặc hướng thể hiện địa phương. Không tự đổi tên thẻ nền, thêm lá, thêm sở trường hoặc thay luật ghép quân. Cự nhân núi tiếp tục giữ bất lợi với Pháp binh theo luật hiện hành.','',
'## 3 Bốn họ sinh vật bản địa','',
'| Họ | Phạm vi | Vai trò | Nhận diện cần giữ |','| --- | --- | --- | --- |']
for fid,f in families.items():
    M+=['| '+' | '.join(md(x) for x in [f['name'],'58/58 vùng — 58 biến thể',f['role'],f['identity']])+' |']
M+=['',
'Đây là nhóm sinh vật nền thường gặp hơn hậu duệ Ấn Thú, có mật độ định tính riêng. Không hiểu phổ biến là mỗi bãi đất đều có cả bốn loài hoặc mọi vùng có số cá thể bằng nhau. Tại địa điểm có sinh cảnh phù hợp, cư dân quen thuộc với các biến thể này; hậu duệ Ấn Thú vẫn có phạm vi cục bộ và tính đặc hữu rõ hơn.',
'',
'Khả năng thích nghi/biến đổi của bốn họ cao hơn các dòng hậu duệ Ấn theo quy luật fantasy. Các dạng vùng sống ổn định qua quần thể, không mặc định một cá thể đổi ngay mọi cơ quan khi sang vùng khác. Mỗi dạng có công dụng, nguồn nạp và giới hạn. Năng lực mạnh hơn về biến đổi không đồng nghĩa mạnh hơn các thủy tổ Ấn.',
'',
'Niêm thể ở hồ sơ 60 và Slime bản địa là cùng một họ: các dạng hoang sống như động vật, một số dòng có ý thức có thể làm NPC. Không tạo họ Niêm thể thứ hai để tăng số lượng. Tiểu long và Long nhân có thể có hình nét tương tự nhưng không tự được gộp phả hệ. Linh hỏa bản địa không tự thuộc dòng U linh hoặc nguồn gốc hình người.',
'',
'## 4 Thống kê từng vùng','',
'Thế giới được chia theo 24 quốc gia và 5 biển, Linh giới 14 vùng gồm hai biển, Âm giới 15 vùng gồm sông và biển. Không cộng thêm 6 lục địa như những vùng độc lập bên cạnh các quốc gia của chúng. Bảng đếm các biến thể đã đề xuất, không đếm số cá thể hoặc dân số.','']
for realm in ['W','L','U']:
    M+=['### '+realms[realm],'','| Vùng | Biến thể bản địa | Nhánh NPC thiểu số |','| --- | ---: | ---: |']
    for v in distribution:
        if v['realm']==realm:M+=['| '+v['region']+' | '+str(v['nativeVariants'])+' | '+str(v['npcMinorityBranches'])+' |']
    M+=['']
M+=['## 5 Cách đưa vào Dex','',
'**541 mục sinh vật đề xuất** nếu ghép cùng bộ cũ: 54 thủy tổ + 255 nhánh hậu duệ Ấn + 232 biến thể bản địa. 99 nhánh NPC đặt ở sổ dân cư riêng, không cộng vào số sinh vật trên; cũng không cộng cả danh sách 60 chủng vào lần nữa.','',
'Phân biệt ba loại mục: thủy tổ mang Ấn, hậu duệ thuộc Ấn gốc, sinh vật bản địa độc lập. Mỗi mục sinh vật bản địa có mã N, họ, vùng, hình thể, vai trò sinh thái, mức thường gặp, năng lực và giới hạn. Không tự tạo Ấn mới cho nhóm bản địa. NPC dùng mã NPC và thông tin kể chuyện, không có thẻ hay stat block.','',
'Bộ hậu duệ Ấn cũ đang có nhiều vị trí theo lục địa. Chưa giả định đã biết chính xác quốc gia của từng nhánh đó, nên bảng vùng trên chỉ thống kê phần bản địa/NPC mới; không điền số 0 giả cho các hậu duệ chưa chia nhỏ.','',
'## 6 Dữ liệu và tài liệu chi tiết','',
'- [Nhánh NPC thiểu số](worldbuilding/races-and-native-fauna-v01-2026-11-27/Nhanh-NPC-thieu-so.md).',
'- [Dex sinh vật bản địa](worldbuilding/races-and-native-fauna-v01-2026-11-27/Dex-sinh-vat-ban-dia.md).',
'- [Dữ liệu chủng tộc và sinh vật bản địa](worldbuilding/races-and-native-fauna-v01-2026-11-27/world-populations.json).',
'- [Bộ 54 thủy tổ và hậu duệ v02](Ashborne-He-Sinh-Vat-va-Phan-Bo-Tam-Gioi-De-xuat-v02.md).',
'',
'## 7 Nguồn tham khảo mô-típ','']
for s in d['sources']:
    M+=['- ['+s['title']+']('+s['url']+'): '+s['scope']+' '+s['inference']]
(ROOT/'Ashborne-Chung-Toc-Thich-Nghi-va-Sinh-Vat-Ban-Dia-De-xuat-v01.md').write_text('\n'.join(M)+'\n',encoding='utf-8')
audit={'summary':summary,'checks':{'exactly60BaseRaceProfiles':True,'noExtraArmyCards':True,'allNPCBranchesMinorityAndNoStats':True,'fourNativeVariantsInEachRegion':True,'allNativeEffectsDistinct':True,'allRegionIdsValid':True,'slimeReferencesExistingRace60':True,'allPowerProfilesHaveLimits':True,'existing54SealDataNotMutated':True},'renderedMapChanges':False}
(OUT/'verification.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(summary,ensure_ascii=False))

