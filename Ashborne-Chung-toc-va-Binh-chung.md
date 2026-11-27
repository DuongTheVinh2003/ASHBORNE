# Ashborne — Chủng tộc và Binh chủng

Tài liệu concept cho hệ card quân đội ở Phase 1. Nội dung tổng hợp từ [Chủng tộc, Binh chủng và Công thức ghép](<Ashborne Chung toc Binh chung va Cong thuc ghep.docx>) và đồng bộ luật hiện hành với [GDD/FDD](Ashborne-GDD-va-FDD.md) cùng [Tổng hợp task gameplay](Ashborne-Tong-hop-task-lam-ro-gameplay.md). Các tài liệu Word gốc lưu lịch sử thiết kế.

- **Đã chốt** — Quyết định thiết kế dùng làm căn cứ khi phát triển hệ quân.
- **Định hướng** — Ràng buộc hoặc mục tiêu thiết kế hiện tại, còn cần cụ thể hóa.
- **Đề xuất** — Phương án hoặc ví dụ để duyệt.
- **Chưa chốt** — Cần quyết định trước khi đặc tả hoặc triển khai phần tương ứng.

## 1. Cấu trúc một đơn vị

| Thành phần | Quyết định điều gì |
| --- | --- |
| Chủng tộc | Đặc tính tự nhiên và mức phù hợp với từng binh chủng. |
| Binh chủng | Vai trò và cách chiến đấu. |
| Bậc | Mức tinh nhuệ của binh chủng. |

Ví dụ tên đơn vị **Cự nhân núi Khiên binh bậc III**. Bậc III dùng để minh họa. Tinh nhuệ là mức phát triển. Sĩ quan thuộc nhóm chỉ huy, trọng giáp là đặc tính trang bị và hộ vệ là vai trò.

## 2. Luật ghép đã chốt

- **Nâng bậc Binh chủng.** Ghép các lá cùng binh chủng và cùng bậc để tạo một lá cùng binh chủng ở bậc kế tiếp. Công thức tổng quát là `n × Binh chủng X bậc k → Binh chủng X bậc k+1`. Khác loại hoặc khác bậc không thỏa công thức này.
- **Tạo quân.** Ghép `Chủng tộc R + Binh chủng X bậc k → quân R thuộc binh chủng X bậc k`. Quân lấy bậc từ lá Binh chủng. Muốn có quân bậc cao, nâng lá Binh chủng trước khi ghép với Chủng tộc.
- **Tương thích.** Tổ hợp ngoài sở trường vẫn tạo được. Chi phí cao và hiệu quả thấp tùy tổ hợp. Bậc và tương thích là hai yếu tố độc lập.
- **Phạm vi.** Dân binh đã bị loại khỏi hướng hiện tại. Có Pháp binh. Tạo quân không mở thêm card vào Library.

### Dung hợp và chỉ số đạo quân đã chốt

Nâng bậc trước khi dung hợp. Nâng bậc tăng chỉ số mặc định, các chỉ số phụ tăng theo phần trăm. Chồng bài là dung hợp, lấy lá dưới cùng làm gốc. Mỗi đạo quân có bộ chỉ số gọn, tối đa 3–4 chỉ số. Một chỉ số đặc trưng của lá gốc giữ nguyên trong dung hợp. Các chỉ số còn lại tăng hoặc giảm dựa trên bộ chỉ số của các lá tham gia theo quy ước chung sẽ thiết kế sau.

Binh chủng và chủng tộc có đặc điểm riêng để xác định chỉ số đặc trưng. Bộ binh mở đường có thể thiên về HP hoặc DEF cao, sát thương thấp và chi phí rẻ. Cung thủ thiên về tầm xa, sát thương cao, HP thấp và chi phí cao. Chọn chỉ số gốc và cách kết hợp đặc tính chủng tộc với binh chủng sau khi hoàn thiện bộ chỉ số hai hệ.

Sau ghép quân, người chơi xếp đội hình rồi đợi hệ thống tự mô phỏng giao tranh theo hướng battle simulator hoặc formation strategy. Đạo quân dung hợp tồn tại đến hết Phase 1 theo logic game. Phá thành nhanh tạo buff nhẹ cho tướng vào Phase 2. Thông số và công thức cụ thể sẽ đặc tả sau.

### Định hướng về sở trường

Mỗi chủng có tối đa hai binh chủng sở trường. Một lá Chủng tộc dùng riêng đại diện cho quân chưa chuyên môn hóa, với mức tiêu hao dự kiến cao hơn phương án ghép đúng sở trường. Ghép đúng sở trường tăng hiệu quả theo vai trò. Mức thưởng và phạt cụ thể để lại cho đặc tả.

| Tổ hợp | Kết quả ở mức concept |
| --- | --- |
| Cự nhân núi + Khiên binh | Tổ hợp sở trường thiên về chống chịu. |
| Cự nhân núi + Pháp binh | Ví dụ tổ hợp rất yếu và đắt. Nâng bậc Pháp binh vẫn giữ bất lợi tương thích. |
| Mộc tinh linh + Cung binh | Hướng bắn xa chuyên dụng. |
| Mộc tinh linh + Giáo binh | Hướng giữ khoảng cách và đánh chặn. |

## 3. Phạm vi khởi đầu và binh chủng ứng viên

Phạm vi khởi đầu tập trung vào đánh gần và đánh xa, có thể giới thiệu một nhánh trước để thu gọn phần mở đầu. Các nhánh khác thu nhận về sau. Năm binh chủng dưới đây là danh mục ứng viên, thời điểm mở từng binh chủng sẽ thiết kế sau.

| Binh chủng | Vai trò dự kiến | Hình tượng |
| --- | --- | --- |
| Kiếm binh | Cận chiến cân bằng, đánh trực diện, sức công thành ổn định. | Kiếm khắc cổ ngữ, kiếm sĩ của vương quốc đã mất. |
| Giáo binh | Giữ tuyến, chống xung phong, đối phó sinh vật lớn. | Thợ săn dùng trường thương, vệ binh dùng giáo phong ấn. |
| Khiên binh | Che chắn, giữ tuyến và giảm tổn thất trước quân thủ thành. | Hộ vệ giáp nặng, đại khiên phù văn. |
| Cung binh | Đánh tầm xa, áp chế quân thủ thành và hỗ trợ tuyến trước. | Xạ thủ săn quái, cung từ vật liệu huyền bí. |
| Pháp binh | Dùng phép chiến trận, xử lý mục tiêu hoặc công sự ma thuật. | Pháp sư quân đội dùng trượng, pháp khí hoặc sách chú. |

Phạm vi của tên **Kiếm binh** còn mở nếu muốn bao gồm rìu, chùy và búa. Các nhóm mở rộng từng được nêu gồm quân cận chiến bổ sung, biến thể trường binh, phòng thủ và tầm xa, kỵ binh, quân công thành, quân hỗ trợ (quân y, tiếp tế, công binh), chỉ huy và quân fantasy đặc biệt. Muốn vai trò khắc chế hoặc xử lý công sự có tác dụng, mỗi thành cần đặc tính tương ứng.

## 4. Danh mục Chủng tộc — 60 hồ sơ ứng viên

Mã giữ theo tài liệu nguồn để dễ đối chiếu. Tên và sở trường trong bảng là đề xuất lựa chọn nội dung, bao gồm cả những hình thái lai, linh thể và trạng thái tồn tại có thể dùng chung cấu trúc lá Chủng tộc.

### Các chủng nền tảng

| Mã | Chủng hoặc nhánh | Hình tượng | Sở trường đề xuất |
| --- | --- | --- | --- |
| 01 | Human — Nhân tộc | Vương quốc, đế chế, tham vọng, kỷ luật; mạnh nhờ tổ chức và huấn luyện. | Giáo, Khiên |
| 02 | High Elf — Cao tinh linh | Cổ xưa, thanh lịch, kiêu hãnh, học thuật và ma thuật tinh vi. | Pháp, Kiếm |
| 03 | Wood Elf — Mộc tinh linh | Rừng sâu, thợ săn, kín đáo; bảo vệ thiên nhiên quyết liệt. | Cung, Giáo |
| 04 | Dark Elf — Hắc tinh linh | Cư dân rừng tối và hang đá; các nhánh NPC có mắt thích nghi thiếu sáng, nghe dư chấn và giấu dấu bằng bóng. Không mặc định cùng một đạo đức hoặc phe phái. | Kiếm, Pháp |
| 05 | Dwarf — Người lùn | Thành trì trong núi, lò rèn, giáp nặng, gia tộc và bền bỉ. | Khiên, Kiếm |
| 06 | Orc | Thể lực, chiến tranh, danh dự bộ tộc hoặc chinh phạt; đánh trực diện. | Kiếm, Giáo |
| 07 | Goblin | Nhỏ con, cơ hội, đông đúc, bẫy, đồ chế và mưu mẹo. | Cung, Pháp |
| 08 | Hobgoblin | Quân đoàn, đội hình, cấp bậc và kỷ luật quân sự. | Giáo, Khiên |
| 09 | Halfling — Tiểu nhân | Thôn quê, nhanh nhẹn, kín đáo, gan dạ dù vóc dáng nhỏ. | Cung, Kiếm |
| 10 | Gnome | Tò mò, phát minh, ảo thuật, cơ khí và phép vui quái. | Pháp, Cung |

Những hình tượng dễ nhận diện trong fantasy phương Tây. Elf được tách thành ba hồ sơ tham khảo; nếu đưa cả ba vào Ashborne, mỗi nhánh cần card và bản sắc riêng. Nhân tộc được giới hạn hai sở trường như các chủng khác, không mặc định được lợi ở cả năm binh chủng.

### Các chủng to lớn

| Mã | Chủng hoặc nhánh | Hình tượng | Sở trường đề xuất |
| --- | --- | --- | --- |
| 11 | Giant — Cự nhân núi | Cơ thể to lớn gắn với núi đá; các nhánh NPC Sơn Thạch dồn lực bám nền và cảm chấn qua thân, không biến thành chủng pháp sư. | Khiên, Giáo |
| 12 | Ogre — Quỷ khổng lồ | Nặng nề, phàm ăn, lính đánh thuê hoặc dùng sức áp đảo. | Kiếm, Khiên |
| 13 | Troll — Hướng tái sinh | Các nhánh NPC tái kết mô theo rêu đầm, nước ấm, hang ẩm hoặc băng ẩm; cần vật chất phù hợp, không hồi sinh vô hạn từ mọi tổn thương. | Kiếm, Khiên |
| 14 | Cyclops — Độc nhãn cự nhân | Giữ một mắt và thân hình lớn; hướng NPC Băng Nham sống ở Krynd, nghe băng và giữ lực cơ thể tại sườn đá lạnh. | Giáo, Khiên |
| 15 | Minotaur — Ngưu đầu nhân | Đầu bò, mê cung, xung phong, sức mạnh và uy hiếp. | Kiếm, Khiên |
| 16 | Oni — Quỷ sừng | Có sừng, hung dữ hoặc uy nghi, sức mạnh siêu nhiên. | Kiếm, Pháp |
| 17 | Bán cự nhân | Các cộng đồng thiểu số miền núi; hướng NPC Tuyết Lĩnh có lớp cơ thể giữ nhiệt, neo bước và truyền tín hiệu qua nền đá. | Giáo, Khiên |

Cự nhân núi là phiên bản được đề xuất để giữ công thức Cự nhân + Pháp binh bất lợi. Đây không phải quy luật của mọi fantasy: D&D có cự nhân mây dùng phép. Troll ở đây chọn hướng quái vật tái sinh; Oni có thể phát triển theo hướng chiến binh có văn hóa và kiếm thuật.

### Thú nhân và hình thái động vật phần một

| Mã | Chủng hoặc nhánh | Hình tượng | Sở trường đề xuất |
| --- | --- | --- | --- |
| 18 | Wolfkin — Lang nhân | Săn theo bầy, trung thành, khứu giác tốt, quyết liệt. | Kiếm, Giáo |
| 19 | Catfolk — Miêu nhân | Linh hoạt, tò mò, độc lập, leo trèo và phản xạ nhanh. | Kiếm, Cung |
| 20 | Lionfolk — Sư nhân | Uy nghi, chiến binh quý tộc, danh dự và sức mạnh vương giả. | Kiếm, Khiên |
| 21 | Bearfolk — Hùng nhân | To khỏe, trầm ổn, bảo vệ cộng đồng, chịu đòn tốt. | Khiên, Kiếm |
| 22 | Boarfolk — Trư nhân | Bền sức, lì lợm, xung phong và văn hóa bộ tộc. | Giáo, Khiên |
| 23 | Ratfolk — Thử nhân | Hang ngầm, sinh tồn, nhanh trí; thương nhân hoặc quân bầy đàn. | Cung, Pháp |
| 24 | Gnoll — Linh cẩu nhân | Săn bầy, tiếng cười ghê rợn, cướp bóc hoặc sinh tồn khắc nghiệt. | Giáo, Cung |

Thú nhân là họ lớn; các nhánh bên dưới mới là ứng viên card Chủng tộc riêng. Lang nhân không bắt buộc đồng nghĩa với người mắc lời nguyền hóa sói. Ratfolk cũng không đồng nhất với Skaven; Skaven chỉ là một hướng tham khảo kinh dị, âm mưu và phản trắc.

### Thú nhân và hình thái động vật phần hai

| Mã | Chủng hoặc nhánh | Hình tượng | Sở trường đề xuất |
| --- | --- | --- | --- |
| 25 | Lizardfolk — Tích dịch nhân | Giữ hình bò sát và văn hóa cộng đồng; các nhánh NPC Tro Đảo hoặc Dạ Trạch có vảy điều tiết nhiệt, giữ ẩm và đọc dòng nước. | Giáo, Khiên |
| 26 | Kobold | Nhỏ, sống thành đàn, đào hang, đặt bẫy; một hướng nổi tiếng gắn với rồng. | Cung, Pháp |
| 27 | Dragonfolk — Long nhân | Vảy rồng, huyết thống cổ, kiêu hãnh và năng lực siêu nhiên. | Kiếm, Pháp |
| 28 | Turtlefolk — Quy nhân | Giữ mai và thân hình có thể dùng công cụ; các nhánh NPC Hải Nham hoặc Bắc Triều có mai điều áp và kết khoáng theo vùng biển sống. | Khiên, Pháp |
| 29 | Birdfolk — Điểu nhân | Độ cao, thị lực, bầu trời, trinh sát và cơ động. | Cung, Giáo |
| 30 | Insectfolk — Trùng nhân | Giáp ngoài, bầy đàn, phân công chức năng hoặc tư duy xa lạ. | Giáo, Khiên |
| 31 | Spiderfolk — Chu nhân | Tơ, độc, hang tối, phục kích; có thể có văn hóa dệt. | Cung, Pháp |

Các nhãn Long nhân, Điểu nhân và Trùng nhân còn rộng. Khi chọn sản xuất, cần chốt hình thể, văn hóa và cách cầm vũ khí. Cơ thể nhiều chi hoặc có cánh chưa tự động được tính là thêm một chuyên môn.

### Thần thoại và hình thể lai

| Mã | Chủng hoặc nhánh | Hình tượng | Sở trường đề xuất |
| --- | --- | --- | --- |
| 32 | Centaur — Nhân mã | Nửa người nửa ngựa, thảo nguyên, săn bắn; hoang dã hoặc thông thái. | Cung, Giáo |
| 33 | Satyr hoặc Faun — Dương nhân | Rừng, âm nhạc, vui thú, tinh nghịch và phép mê hoặc. | Pháp, Cung |
| 34 | Merfolk — Ngư nhân | Vương quốc dưới biển, dòng nước, san hô, đẹp hoặc xa lạ. | Giáo, Pháp |
| 35 | Naga — Xà linh | Gắn với thủy vực và đền bờ nước; các nhánh NPC Kính Thủy hoặc Vong Thủy dùng vảy lưu dấu dòng để dẫn đường, giữ sinh cảnh riêng. | Giáo, Pháp |
| 36 | Lamia — Xà nhân | Giữ thân người và đuôi rắn; các nhánh NPC Cát Kính hoặc Hàn Uyên biến đổi da và điều nhiệt, tạo ảnh lệch theo nền sống. | Kiếm, Pháp |

Satyr và Faun được gom để tham khảo hình tượng, không khẳng định là một loài trong mọi truyền thống. Naga và Lamia được tách hồ sơ vì hướng văn hóa và vai trò khác nhau, dù có thể cùng dùng hình thể người lai rắn. Naga có truyền thống gắn với nước và bảo hộ.

### Linh thể và fantasy phương Đông

| Mã | Chủng hoặc nhánh | Hình tượng | Sở trường đề xuất |
| --- | --- | --- | --- |
| 37 | Harpy — Điểu yêu | Thân lai chim, móng vuốt, vách đá, tiếng kêu và tập kích từ không trung. | Kiếm, Cung |
| 38 | Kitsune hoặc Hồ ly | Các nhánh NPC Mộng Triều, rừng lạnh hoặc Vực Câm lưu hương và ảnh cảm giác theo sinh cảnh; không sao chép trọn sức mạnh của sinh vật khác. | Pháp, Kiếm |
| 39 | Tengu — Thiên cẩu | Núi thiêng, chim hoặc quạ, võ nghệ, kiêu hãnh và phép thuật. | Kiếm, Pháp |
| 40 | Jinn — Tinh linh kiểu Tây Á | Vô hình, biến hóa, quyền năng, giao ước; không chỉ ban điều ước. | Pháp, Kiếm |
| 41 | Yaksha — Dạ xoa | Linh thể bảo hộ hoặc đáng sợ; thiên nhiên, kho báu và nơi linh thiêng. | Khiên, Pháp |

Hình tượng trong tín ngưỡng, thần thoại và tác phẩm giải trí có thể khác nhau. Hồ ly biến hình có mặt trong nghệ thuật truyền thống; Tengu có truyền thuyết dạy kiếm thuật. Kitsune và Hồ ly được gom làm hướng tham khảo, không xóa khác biệt giữa các truyền thống.

### Rừng thực vật và cổ tích

| Mã | Chủng hoặc nhánh | Hình tượng | Sở trường đề xuất |
| --- | --- | --- | --- |
| 42 | Fairy hoặc Pixie — Tiểu tiên | Nhỏ, có cánh, đẹp nhưng khó lường, mê hoặc và trò đùa. | Pháp, Cung |
| 43 | Dryad — Mộc linh | Linh hồn cây, vẻ đẹp tự nhiên, bảo vệ rừng hoặc trả thù khi cây bị hại. | Pháp, Cung |
| 44 | Treant — Thụ nhân | Cây sống lâu đời, chậm nhưng mạnh, canh giữ rừng. | Khiên, Giáo |
| 45 | Nymph — Tự nhiên linh | Hiện thân của suối, hồ, núi hoặc rừng; duyên dáng, huyền bí. | Pháp |
| 46 | Fungusfolk — Nấm nhân | Các nhánh NPC Bào Linh sống cộng sinh ở rừng cổ hoặc khe rừng hóa thạch; bào tử truyền tín hiệu và chuyển mùn, không mặc định là dịch bệnh. | Pháp, Khiên |

Hợp với khu rừng bị xâm chiếm, thiên nhiên trả thù hoặc nền văn minh cổ đã mất. Mộc linh và Thụ nhân nên có hình thể và cách đánh riêng để tránh trùng nhau. Không bắt buộc chủng nào cũng phải có đủ hai sở trường; Nymph hiện chỉ được đề xuất Pháp.

### Bất tử lời nguyền và kinh dị

| Mã | Chủng hoặc nhánh | Hình tượng | Sở trường đề xuất |
| --- | --- | --- | --- |
| 47 | Skeleton — Khô lâu | Quân xương, tàn tích chiến tranh, phục tùng và chiến đấu sau cái chết. | Giáo, Cung |
| 48 | Zombie — Hoạt thi | Chậm, đông, dai dẳng, mục rữa và chiến tranh tiêu hao. | Khiên, Kiếm |
| 49 | Ghoul — Thực thi quỷ | Đói khát, ăn xác, nhanh và hung hãn hơn zombie chậm chạp. | Kiếm, Giáo |
| 50 | Vampire — Huyết tộc | Quý tộc suy đồi, bất tử, hút máu, mê hoặc và săn mồi. | Kiếm, Pháp |
| 51 | Ghost hoặc Wraith — U linh | Oán niệm, phi vật chất, lạnh lẽo, ám ảnh và sợ hãi. | Pháp, Kiếm |
| 52 | Mummy — Xác ướp | Lăng mộ, vương triều cổ, nghi lễ, lời nguyền và bảo vệ người chết. | Khiên, Pháp |
| 53 | Revenant — Vong binh phục hận | Trở về vì lời thề hoặc món nợ, giữ ký ức và ý chí chiến đấu. | Kiếm, Khiên |

Đây thường là trạng thái tồn tại hoặc biến đổi, không hẳn chủng tộc sinh học. Có thể dùng chung cấu trúc card Chủng tộc để đơn giản hóa công thức. Lich chưa tách thành chủng nền vì hình tượng đã bao gồm pháp sư bất tử cao cấp, dễ trùng với Pháp binh và bậc tinh nhuệ.

### Nhân tạo thiên giới và ngoại giới

| Mã | Chủng hoặc nhánh | Hình tượng | Sở trường đề xuất |
| --- | --- | --- | --- |
| 54 | Golem — Ma tượng | Đá, đất sét hoặc kim loại được ban chuyển động; nặng, bền, tuân lệnh. | Khiên, Giáo |
| 55 | Living Construct — Nhân tạo có ý thức | Binh khí biết suy nghĩ, linh hồn trong thân máy, ký ức và thân phận. | Kiếm, Cung |
| 56 | Gargoyle — Thạch quỷ | Tượng đá thức tỉnh, kiến trúc cổ, canh giữ và tập kích từ trên cao. | Khiên, Kiếm |
| 57 | Elemental — Nguyên tố thể | Cơ thể từ lửa, nước, gió hoặc đất; đặc tính tự nhiên rõ nét. | Pháp, Khiên |
| 58 | Celestial — Thiên giới tộc | Ánh sáng, phán xét, bảo hộ, vẻ đẹp uy nghi hoặc xa cách. | Khiên, Pháp |
| 59 | Fiend — Ma giới tộc | Giao kèo, cám dỗ, hủy diệt, hình thể đáng sợ và quyền năng cấm. | Kiếm, Pháp |
| 60 | Slime — Niêm thể | Cơ thể mềm, hấp thụ, biến dạng; từ quái yếu đến sinh thể tiến hóa mạnh. | Khiên, Pháp |

Elemental, Celestial và Fiend là họ rất rộng: cần chọn một phiên bản cụ thể trước khi sản xuất. Phân nhánh nguyên tố không tự động cho phép vượt giới hạn hai sở trường. Hình thể không cầm được vũ khí cần cách diễn giải hành động tương ứng.

## 5. Quân hai chuyên môn — đề xuất

Hai sở trường cho một chủng hai hướng ghép hiệu quả. Để tạo một đơn vị mang đồng thời hai chuyên môn, phương án đang cân nhắc là ghép một lá Chủng tộc với hai lá Binh chủng khác loại, cùng bậc. Ví dụ **Mộc tinh linh + Cung binh + Giáo binh** có thể bắn xa và chống xung phong.

Hướng cân bằng là tăng chi phí để đổi lấy tính linh hoạt, với hiệu quả từng vai trò thấp hơn quân chuyên dụng. Điều kiện cùng bậc, khả năng dùng chuyên môn ngoài sở trường và chi phí đều cần chốt.

Hai ý tưởng chủng riêng của Ashborne đang ở mức hình tượng là thụ nhân sống nhờ tro của khu rừng cháy và sinh thể nhân tạo vận hành bằng ký ức người lính.

## 6. Các điểm để đặc tả sau concept

| Chủ đề | Quyết định còn mở |
| --- | --- |
| Nội dung khởi đầu | Chọn những chủng, binh chủng và bậc xuất hiện trong bộ bài mở đầu. |
| Nâng bậc | Chốt số lá cần ghép, bậc tối đa và trạng thái lá đầu vào sau ghép. Tỷ lệ 2 thành 1 trong tài liệu nguồn là ví dụ. |
| Chi phí và chỉ số | Hoàn thiện bộ 3–4 chỉ số, xác định chỉ số đặc trưng giữ nguyên trong dung hợp và ma trận hiệu quả theo tương thích. Công thức tăng bậc và cộng trừ khi dung hợp sẽ thiết kế sau. |
| Bố trí đạo quân | Chốt vị trí và tương tác đội hình trong mô phỏng tự động, vai trò sau dung hợp và tác dụng của từng binh chủng đối với công sự hoặc quân thủ thành. |
| Liên kết với PvE | Đã chốt buff nhẹ theo tốc độ phá thành. Cách đo tốc độ, dạng buff và thời hạn sẽ đặc tả sau. |
| Quân hai chuyên môn | Chốt có triển khai hay không, công thức hợp lệ, chi phí và cách vận hành. |

## 7. Quan hệ với tài liệu gameplay

### Phạm vi các nhánh thích nghi trong thế giới — ngày 27/11/2026

Theo yêu cầu người dùng, **các nhánh thích nghi địa phương là NPC hoặc cộng đồng thiểu số**, không tạo thẻ bài, chỉ số chiến đấu hoặc sở trường binh chủng riêng. Hướng phân bố tại nhiều vùng không đồng nghĩa là đa số dân cư ở những vùng đó. Các tên như Quang Mạch, Thạch Ảnh, Băng Nham, Tro Đảo hoặc Hải Nham trong mô tả là hướng thể hiện NPC, không tự thay tên hoặc số lượng 60 hồ sơ nền.

Giữ riêng bộ 60 hồ sơ và luật quân đội hiện hành. Ngoại hình, văn hóa, nơi ở và năng lực thích nghi của nhánh NPC được dùng cho kể chuyện và khám phá. Năng lực bẩm sinh không tự trao quyền điều khiển mọi nguyên tố, không biến Cự nhân núi thành Pháp binh sở trường và không tự mở thêm lá vào Library.

Xem [Chủng tộc thích nghi và sinh vật bản địa](Ashborne-Chung-Toc-Thich-Nghi-va-Sinh-Vat-Ban-Dia-De-xuat-v01.md). Họ Niêm thể ở hồ sơ 60 được đối chiếu chung với Slime bản địa, không tính thành hai họ sinh vật độc lập.

[GDD/FDD §03](Ashborne-GDD-va-FDD.md#03-fdd-công-thành) ghi luồng Phase 1 từ chuẩn bị, nâng bậc, dung hợp và xếp đội hình đến mô phỏng công thành và chuyển buff sang Phase 2. Tài liệu này giữ danh mục chủng, binh chủng, luật tạo quân và các hướng mở rộng.

Quân thủ thành riêng, cơ chế lưu tổ hợp, số ô và tương tác đội hình còn mở. Các thông số cần hoàn thiện bộ chỉ số trước khi quyết định. Nội dung đã chốt và nội dung còn mở được theo dõi trong [Tổng hợp task gameplay](Ashborne-Tong-hop-task-lam-ro-gameplay.md).
