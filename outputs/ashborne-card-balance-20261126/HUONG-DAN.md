# Ashborne Bộ chỉ số và công thức sinh card bản thử 01

Ngày 26 tháng 11 năm 2026. Bộ này cung cấp số khởi điểm cho toàn bộ danh mục card hiện có và một bộ sinh để cân lại theo số nền. **Tất cả trị số mới, tên ba phẩm vũ khí, hệ số chủng tộc, tải Ấn và giới hạn bổ sung là đề xuất để playtest.** Không thay hồ sơ gameplay đã chốt hoặc mã prototype đang chạy.

## 1 Mở và sử dụng

- `Ashborne-Bo-Chi-So-v01.xlsx`: tra cứu, lọc card và thử sửa thông số bằng Excel. Bắt đầu ở sheet `BatDau`, sửa số nền tại `ThamSo`.
- `BANG-CHI-SO.md`: toàn bộ số và công dụng đã điền, đọc trực tiếp trong trình soạn thảo.
- `ashborne-cards.json`: cùng bộ dữ liệu dưới dạng có cấu trúc, thuận tiện đưa vào một bản game thử riêng sau này. Đây là dữ liệu thiết kế, chưa phải bộ thực thi hiệu ứng.
- `balance/card-stats-v01/config.json`: nguồn số nền và các đường tăng trưởng.
- `balance/card-stats-v01/catalog.mjs`: bảng vai trò, 60 hồ sơ hệ số và mẫu tham số hiệu ứng.
- `balance/card-stats-v01/generate.mjs`: bộ sinh không cần thư viện ngoài, lấy tên và công dụng từ các tài liệu dự án.

Chạy từ thư mục gốc dự án:

```powershell
node balance/card-stats-v01/generate.mjs
node balance/card-stats-v01/validate.mjs
```

Lệnh đầu sinh lại JSON và bảng Markdown ở thư mục này. Khi muốn sinh lại Excel, chạy `workbook.mjs` bằng Node và thư viện `@oai/artifact-tool` của runtime Codex. Bộ sinh JSON hoạt động độc lập với thư viện đó.

Excel là nơi thử số: sửa ô vàng sẽ cập nhật kết quả và nội dung công dụng trong workbook. **Sửa Excel không tự cập nhật `config.json`, `catalog.mjs` hoặc JSON đã xuất.** Khi đã chọn được số, ghi số đó về nguồn rồi sinh lại. Không có macro hoặc thao tác ghi vào game.

## 2 Phạm vi đã điền

| Nhóm | Đầu vào | Đầu ra |
| --- | --- | --- |
| Chủng tộc | 60 hồ sơ ứng viên đúng mã nguồn | Bốn hệ số nền, tối đa hai sở trường, hệ số tính giá |
| Binh chủng | Kiếm, Giáo, Khiên, Cung, Pháp | Bốn hệ số phân vai, tầm, di chuyển, chỉ số đặc trưng |
| Quân | 60 chủng × 5 binh chủng | 300 tổ hợp, đủ HP, ATK, DEF, SPD, giá tuyển và lương |
| Vũ khí | 8 họ × 6 mẫu | 48 lá cơ sở, 144 dòng theo ba phẩm thử |
| Nguyên tố | 4 hệ × 2 mẫu | 8 lá, số bình thường và mô tả khi suy yếu |
| Ấn Thú | 4 chất × 13 hạng + 2 Joker | 54 năng lực có số, thời hạn, mục tiêu và tải |

60 chủng vẫn là **danh mục ứng viên**, chưa thành danh sách nội dung phải sản xuất. Thạch tộc, Tro tộc và nhãn Tinh linh trong prototype là quân mẫu; không tự gán chúng thành Ma tượng, Niêm thể hay một nhánh Elf cụ thể. Bản này không tạo thêm chủng để lấp những nhãn mẫu đó.

Tuyệt kỹ và combo Ấn là **công thức tổ hợp**, không thuộc 175 mẫu card nguồn. Danh mục công thức đầy đủ của hai hệ này chưa tồn tại trong dự án; không tự nhân mọi tổ hợp thành một tuyệt kỹ. Mẫu Hỏa Liên Trảm trong prototype giữ vai trò ca tham chiếu, chưa được áp hàng loạt sang tám họ vũ khí.

## 3 Căn cứ và thứ tự ưu tiên

1. `Ashborne-Quyet-dinh-gameplay-da-chot-2026-11-24.md`: luật đã chốt về bốn chỉ số quân, bỏ nâng bậc bằng ghép lá, lưu đạo quân, dung hợp có trọng số, mana, bình và tải Ấn.
2. `prototype-v2/README.md`, `game.mjs`, `siege.mjs` và các kiểm tra: hành vi thực của bản thử, bao gồm điều chỉnh thao tác kéo lên địch 4 giây ngày 25/11. Những số prototype chưa được duyệt chỉ là mốc so sánh.
3. `Ashborne-Concept-The-Combat.md`: tên và công dụng của đủ 48 vũ khí, 8 nguyên tố và 54 Ấn.
4. `Ashborne-Chung-toc-va-Binh-chung.md`: 60 hồ sơ ứng viên, sở trường và năm binh chủng. Các đoạn nâng bậc cũ được thay bằng quyết định 24/11.
5. `Ashborne-Phase-1-Phan-tich-xep-quan-cong-thanh-2026-11-25.md`: vị trí, tiếp cận, che chắn và tầm thực.
6. GDD/FDD, tài liệu UI/art hiện hành, Word gốc và tài liệu tham khảo: đối chiếu ngữ cảnh. Số minh họa trên art không làm đầu vào cân bằng.

Các bản Word đã được trích nội dung để đối chiếu lịch sử. Bộ bốn A đã duyệt là mẫu art; không sửa tên, hình hoặc ghi thêm chỉ số lên các ảnh đó.

## 4 Các số nền nên chỉnh trước

| Nhóm | Giá trị ban đầu | Ý nghĩa |
| --- | --- | --- |
| Tướng | 45 HP, 4 mana, rút 5 | Mốc nền hiện có của PvE |
| Bài | 8 sát thương, 9 Khiên, 6 hồi HP | Ba neo độc lập cho hiệu ứng số |
| Quân | 12 HP, 3 ATK, 2 DEF, 1 hành động/giây | Nền Nhân tộc Kiếm trước thưởng tương thích |
| Ấn | 8 sát thương, 9 Khiên, 6 hồi HP | Neo riêng vì Ấn không trả mana và dùng một lần/cả thành |
| Kinh tế quân | 2 vàng/quân nền, 1 lương/8 quân nền | Đơn vị thử cho sản xuất và triển khai |

Đổi nhịp sát thương bài bằng `damage`; đổi sức chống chịu quân bằng `armyHp`; đổi mức mạnh của Ấn bằng `sealDamage`, `sealShield`, `sealHeal`. Không cần nhân cả game bằng một hệ số chung.

HP tướng, mana và số rút là mốc để đánh giá độ mạnh; đổi chúng không tự suy ra một bộ card mới. Nếu thay lớn, chạy lại playtest về độ dài trận và sức hồi phục.

## 5 Công thức quân đội

### 5.1 Chủng tộc và vai trò

Gọi `Rh, Ra, Rd, Rs` là hệ số chủng; `Ch, Ca, Cd, Cs` là hệ số binh chủng. Mỗi giá trị cuối làm tròn hai chữ số:

```text
HP  = 12 × Rh × Ch
ATK =  3 × Ra × Ca × TươngThích
DEF =  2 × Rd × Cd
SPD =  1 × Rs × Cs
Khoảng cách giữa hai hành động = 1 / SPD giây
```

Tương thích chỉ nhân ATK trong bản thử này. Nhờ vậy, ngoài sở trường vẫn giữ được sinh lý của chủng và nhược điểm nhịp đánh, đồng thời mất hiệu quả hành động. Giảm cả bốn chỉ số và tăng giá cùng lúc sẽ làm nhiều tổ hợp gần như không có cửa dùng.

| Tương thích | ATK × | Giá × |
| --- | --- | --- |
| Đúng sở trường | 1,08 | 1,00 |
| Ngoài sở trường | 0,92 | 1,30 |
| Rất kém | 0,60 | 1,80 |

Rất kém hiện gồm Cự nhân núi + Pháp, Ogre + Pháp và Hoạt thi + Pháp. Cặp Cự nhân núi + Pháp giữ ví dụ bất lợi trong concept; hai cặp sau là đề xuất mới, chỉnh tại `severePairs`. Mọi cặp vẫn tạo quân được.

Chủng không tự nhận tái sinh, bay, hút máu hoặc miễn sát thương vì tên gọi. Những nội tại đó cần đặc tả riêng. Mộc tinh linh + Cung giữ tầm từ Cung, không được cộng tầm miễn phí chỉ vì là tinh linh.

### 5.2 Tầm, phòng ngự và thiệt hại

Tầm, tốc độ di chuyển, bán kính và cách chọn mục tiêu thuộc binh chủng, tách khỏi bốn chỉ số lõi. Khiên chặn đường tiếp cận thực; Cung phải vào tầm mới bắn; Pháp nền trong bảng là đơn mục tiêu. Biến thể Pháp Tro đánh vùng của prototype là mẫu riêng, không tự áp lên toàn bộ 60 tổ hợp Pháp.

Nếu thử các số này với mô hình sát thương cấp cụm hiện có, dùng mốc:

```text
HP cụm = quân số ban đầu × HP mỗi quân
Quân còn = CEIL(HP cụm còn / HP mỗi quân)
Sát thương mỗi hành động = MAX(1, quân còn × (ATK − DEF địch × 0,25) × 0,55)
Sát thương vào cổng      = quân còn × ATK × 0,55
```

Hai hệ số 0,25 và 0,55 lấy từ `siege.mjs`, không phải khẳng định mô hình cuối. Cần bản mô phỏng riêng để nhận đủ hồ sơ 300 tổ hợp; prototype hiện lấy chỉ số từ bốn loại quân cố định, nên không thể chỉ chép JSON vào là chạy đúng.

### 5.3 Giá tuyển và lương

```text
P = Rh^0,45 × Ra^0,35 × Rs^0,20 × (1 + 0,15 × 2 × Rd) / (1 + 0,15 × 2)
Giá/quân = MAX(1, ROUND(2 × P^0,65 × HệSốGiáBinhChủng × GiáTươngThích))
Lương/8 quân = MAX(1, CEIL(1 × P × HệSốGiáBinhChủng × GiáTươngThích))
Giá bổ sung = số quân thiếu × giá/quân của hồ sơ
Lương triển khai = CEIL(quân mang đi / 8) × lương/8 quân
```

`P` chỉ phục vụ định giá, không phải dự báo thắng thua. Giá dùng nền sức mạnh **trước phạt tương thích** để tổ hợp kém không được giảm giá ngược. Trung thành không nhân tiếp vào HP/ATK/DEF/SPD.

Phí này là đơn vị thử; giá tài nguyên và thu nhập cả chiến dịch chưa được mô phỏng. Không tự trừ đồng thời lương tuyển và lương triển khai nếu giao dịch chưa được định nghĩa.

### 5.4 Dung hợp

Mỗi công thức có 2–3 thành phần **gốc**, trọng số lá đáy là 2, mỗi thành phần còn lại là 1. Vai trò, tầm và một chỉ số đặc trưng theo lá đáy. Khiên giữ DEF; bốn binh chủng còn lại giữ ATK trong bản thử.

```text
TB_j = SUM(chỉ số j của thành phần × trọng số) / SUM(trọng số)
S = MIN(6%, 3% × số thành phần phụ có vai trò khác gốc)
Nếu j là chỉ số giữ: KếtQuả_j = Gốc_j
Nếu không: KếtQuả_j = CLAMP(TB_j × (1+S), 80% × Gốc_j, 120% × Gốc_j)
Giá/quân = CEIL(MAX(giá gốc, giá trung bình có trọng số) × 1,15)
Lương/8 quân tính tương tự giá
```

Các quy tắc 2–3 thành phần, chọn chỉ số giữ và trần 20% là **đề xuất cụ thể hóa** luật dung hợp, không phải quyết định cũ. Cấm lấy kết quả dung hợp làm một đầu vào mới để chồng tiếp trần 20%; muốn sửa công thức phải trải phẳng về các thành phần gốc và tính lại một lần. Không lặp cùng một thành phần để lấy thưởng phối hợp.

Dung hợp ở đây tạo **hồ sơ sản xuất** tại trại. Người chơi chọn quân số cần tuyển và trả giá của hồ sơ mới; phép tính không tự cộng, tiêu hay biến đổi quân số các đạo quân đang sở hữu. Chuyển đổi quân đã tuyển sang hồ sơ mới cần luồng riêng, chưa được thêm vào game. Giữ nhiều đạo quân độc lập vẫn có giá trị vì che chắn, chia cánh và số hướng tiếp cận không sinh ra từ việc tăng chỉ số một cụm.

## 6 Công thức vũ khí theo từng họ

Mỗi lá giữ mẫu định lượng riêng trong `catalog.mjs`: mana, hệ số sát thương/Khiên/hồi HP, các tham số hiệu ứng và điều kiện. Sau khi chọn mẫu, công thức sinh hoàn toàn xác định.

```text
Trực tiếp: Số = ROUND(SốGốc × NeoHiệnTại / NeoThamChiếu × HệSốPhẩmTrựcTiếp)
Kỹ năng:   số trực tiếp giữ nền; phần hiệu ứng = ROUND(HiệuỨngGốc × Neo/NeoThamChiếu × HệSốPhẩmHiệuỨng)
Sức mạnh:  phần lợi ích số tăng bằng hệ số hiệu ứng; điều kiện/rủi ro giữ nguyên
```

| Phẩm đề xuất | Trực tiếp × | Hiệu ứng × | Thêm lượt cho tham số cho phép tăng thời hạn |
| --- | --- | --- | --- |
| Thường | 1,00 | 1,00 | 0 |
| Tinh luyện | 1,15 | 1,25 | 1 |
| Tinh hoa | 1,30 | 1,50 | 1 |

Không tự nhân số lá rút, số lần hủy đòn, số mục tiêu, phần trăm ngưỡng HP, giảm mana hoặc phản lực. Nếu lá chỉ có tham số rời rạc, một số phẩm có thể cùng trị số. Cụ thể Săn Đầu Đàn, Ra Tay Trong Chớp Mắt và Tĩnh Tâm giữ phần giảm phí 1 mana ở cả ba phẩm; chúng là các mốc tương đương trong bản thử, không được coi là nâng cấp sức mạnh để thu giá cao hơn. Cần thiết kế nâng cấp riêng khi mở tiến trình phẩm cho các lá này.

| Họ | Neo và mẫu chủ đạo ở phẩm Thường | Điều bắt buộc giữ |
| --- | --- | --- |
| Đại Kiếm | Chém Bổ 18/2 mana; AoE 10/2; Ép Lưỡi 6 và thưởng 5 | Thưởng lấy đà có thời điểm; Chém Dồn Lực 22 vẫn tăng phí lá sau |
| Cung | Thẳng Tên 9/1; Bắn Lui 4 + 4 Khiên | Dấu và giữ ngắm theo đúng mục tiêu |
| Giáo | Đâm Thẳng 9/1; Ghìm 5/2; Đâm Trả 7 + 9 | Hủy một hành động cận chiến rồi tiêu trạng thái, không giảm một phần sát thương |
| Vũ Khí Đôi | Song Kích 8/1; Nhử 4 + dấu 5 | Dấu không tự kích trên đòn vừa đặt; hai vũ khí không nhân đôi kích hoạt |
| Kiếm và Khiên | Chém 8; Khiên 9; Phản Kích 7 + 7 | Đúng kẻ đã đánh Khiên; Khiên đỡ trọn mới kích Thế Đỡ Phản |
| Trượng | Xung 8; Hồi Quang hồi 2 + Khiên 4 | Tụ Lực cần mana chưa dùng; không tự giữ mana qua lượt |
| Rìu | Bổ 18/2; Kết Liễu 7 + 6 khi địch dưới 40% | Cuồng Chiến tăng rủi ro; Cướp Sức chỉ hồi khi chính lá kết liễu |
| Búa và Chùy | Nện 18/2; Đập Vỡ 6 + phá 6 Khiên | Khiên phải từ dương về 0; mục tiêu vốn không Khiên không tính đã phá |

Ví dụ Chém Bổ có 18 → 21 → 23 sát thương. Đổi `damage` từ 8 lên 10 sẽ sinh lại cả ba phẩm và các phần thưởng sát thương liên quan. Đổi một lá thì sửa mẫu của lá đó, không phải sửa 144 dòng đầu ra.

## 7 Nguyên tố

Hai phẩm Nguyên tố là **hai mẫu cơ chế**, không dùng đường tăng phẩm của vũ khí. Mạch Nguồn không được nhân lên thành Mạch Ngầm, vì một lá hồi tức thì còn một lá đo tổn thương qua lượt.

| Lá | Số đề xuất | Suy yếu |
| --- | --- | --- |
| Tàn Lửa | 1 mana, +4 sát thương cho một hành động | +2 |
| Than Truyền | 1 mana, bùng 4, 3 lượt địch, lần đầu vũ khí trúng mỗi lượt | Bùng 2, thời hạn giữ |
| Mạch Nguồn | 2 mana, hồi 6 | Hồi 3 |
| Mạch Ngầm | 2 mana, 2 lần đầu lượt, hồi 50% HP mất, trần 4/lần | Giữ 50%, trần 2/lần |
| Hơi Gió | 1 mana, xem 1 lá, giữ hoặc đưa đáy | Chỉ xem, không đưa đáy |
| Gió Hồi | 1 mana, 2 lượt, mỗi cuối lượt đưa 1 vũ khí chưa dùng lên đầu | Còn 1 lượt |
| Vỏ Đá | 1 mana, 9 Khiên | 5 Khiên, làm tròn gần nhất |
| Nền Đá | 1 mana, 3 lần chuyển, giữ 50% dư, trần 8 | Giữ 50%, trần 4 |

Mạch Nguồn tăng từ 1 mana của prototype lên 2 để giảm khả năng hồi miễn rủi ro bằng cách kéo dài trận. Mạch Ngầm giảm từ 3 lần/trần 5 xuống 2 lần/trần 4. Ghìm Mũi Giáo tăng từ 1 lên 2 mana vì vừa gây sát thương vừa hủy cả hành động. Đây là các thay đổi số **đề xuất trong bộ mới**, chưa áp vào prototype.

Tích thanh tham chiếu 2/lá, đầy ở 6. Tiết Chế giảm 2 của hệ đối nghịch khi gắn một Nguyên tố vào vũ khí thành công; dùng Nguyên tố lẻ không được hưởng Tiết Chế. Mỗi Nguyên tố thật sự kích hoạt mới tích thanh, không phải mọi lá bị trả phí trong chồng sai. Buff/debuff Quá tải cụ thể không được sinh từ công thức card; giữ lịch suy yếu/khóa đã chốt và kiểm trong bản mô phỏng riêng.

## 8 Công thức Ấn Thú

```text
Hiệu ứng số = ROUND(NeoẤnTheoLoại × HệSốHạng × HệSốVaiTròCủaHiệuỨng)
```

Hệ số vai trò nằm cạnh từng hiệu ứng của Ấn. Nhờ vậy, khi tăng nền Ấn, cả bộ cập nhật có kiểm soát; không phải suy lại từ đầu 54 năng lực. Gió dùng bảng thao tác cố định, không chuyển “xem bài” thành sát thương để cố ép cùng thang.

| Hạng | Hệ số sức mạnh | Tải đề xuất |
| --- | --- | --- |
| A | 1,00, đổi cách chơi trong lượt | 2 |
| 2 / 3 / 4 / 5 | 0,50 / 0,65 / 0,80 / 1,00 | 1 / 1 / 1 / 2 |
| 6 / 7 / 8 | 1,10 / 1,20 / 1,35 | 2 / 2 / 2 |
| 9 / 10 | 1,50 / 1,65 | 3 / 3 |
| J / Q / K | 2,00 / 2,25 / 2,50 | 4 / 5 / 6 |
| Hai Joker | Theo năng lực luật lớn, không nhân hiệu ứng sao chép | 6 |

Tải được thiết kế theo nhóm hạng cho bản thử, với ba neo giữ gần prototype: Rùa Gương tải 2, Nứt Thành 4, Nanh Tro 6. Khi có dữ liệu thực, được chỉnh tải riêng từng Ấn thay vì giữ cùng hạng cùng tải bằng mọi giá.

Sức chứa thử có thể dùng 4 → 8 → 12 → 16 → 20 → 24 để thử các bộ bốn lá cùng tải 1 → 6. Đây là **các mốc thử theo nguyên tắc nâng cấp đã chốt**, không gắn thêm cây kỹ năng hay chi phí mở khóa. Trang bị tối đa 4 Ấn và tổng tải không vượt sức chứa; dùng Ấn không tiêu mana, không tiêu tải, không trả lại ô.

| Neo kiểm tra | Kết quả bản này |
| --- | --- |
| Rùa Gương 7♦ | 50% chênh lệch HP ròng từ lúc mở tới đầu lượt sau, trần 8 |
| Nứt Thành J♣ | Phá 18 Khiên, chặn tạo Khiên ở một hành động sau nếu đã phá sạch Khiên dương, 0 sát thương HP |
| Nanh Tro K♥ | Gây 20, than 3 lượt địch, truyền bùng 7, mỗi địch chỉ nhận một lần |
| Joker Đen | Lặp một năng lực Ấn lẻ đã dùng trong chính trận; không lặp Joker hoặc combo, không hoàn lượt dùng |
| Joker Trắng | Giải trừ buff có thể xóa; giữ hành động đã báo và tính lại phần cường hóa bị mất |

Tải cao không có nghĩa mọi tình huống đều mạnh hơn hạng thấp. Ấn phá Khiên có thể không hữu dụng khi địch không Khiên. A chỉ có một cửa kích hoạt theo lượt. Joker Đen cần đã dùng Ấn khác trong trận đó.

## 9 Quy tắc giải quyết hiệu ứng dùng chung

- Một hành động vũ khí tương ứng một lá hoặc một kết quả công thức, không phải từng khung hoạt ảnh. Đòn nhiều hit/diện rộng không tự nhân số lần kích hoạt. Giảm đòn trực tiếp và hủy cận chiến áp cho toàn bộ một hành động, không chỉ hit đầu.
- Dấu đặt bởi một hành động chỉ được kích hoạt từ hành động sau. Dấu Sơ Hở, Hở Thế và các đánh dấu mục tiêu không được tiêu nhầm trên địch khác.
- Mỗi buff cùng tên trên cùng chủ thể không cộng tầng trừ khi ghi rõ. Dùng lại lấy giá trị mạnh hơn và thời hạn còn lại dài hơn, không cộng hai thời hạn. Nhiều nguồn giảm phí cho cùng lần chơi lấy mức giảm cao nhất, sàn 0 mana; không tạo mana.
- Một lớp Giữ Khoảng Cách chỉ hủy một hành động cận chiến, hết sau lần hủy hoặc hết hạn. Đặt lại không tích nhiều lượt hủy miễn phí. Hở Thế tạo ra có thể dùng tới hết lượt bạn kế tiếp.
- Lượng Khiên bị hấp thụ phải theo dõi nguồn từ cũ tới mới khi một Ấn yêu cầu phần Khiên riêng của nó. Giữ Khiên qua lượt chỉ chọn kết quả giữ lớn nhất trong các nguồn đang có, không cộng nhiều tỷ lệ giữ lên cùng Khiên.
- Thiêu Đốt gây số đã ghi ở đầu lượt địch, trừ HP và bỏ qua Khiên; than bùng là sát thương phụ qua Khiên. Thiêu Đốt và các dấu than khác tên có thể cùng tồn tại, mỗi loại theo giới hạn riêng. Cùng một Thiêu Đốt nhận mới lấy số mỗi tick và thời hạn lớn hơn, không cộng vô hạn. Đây là quy ước đề xuất để làm rõ các Ấn Lửa.
- Với thưởng sát thương lên đòn diện rộng, sát thương gốc ghi trên lá áp cho từng mục tiêu; phần thưởng cộng thêm từ buff hoặc gắn nguyên tố là một ngân sách cho cả hành động, dồn lên mục tiêu chính được chọn trước. Nếu mục tiêu đó đã chết thì chuyển sang địch còn sống theo thứ tự công bố. Không chia nhân thưởng tự động cho cả bàn.
- “Trúng” nghĩa là hành động sát thương hợp lệ tác động vào HP hoặc Khiên của mục tiêu. “Mất HP” chỉ tính HP thực giảm sau Khiên, kháng và giới hạn HP còn. Hồi theo sát thương không dùng sát thương thừa.
- Hồi HP chặn ở HP tối đa và không hồi sinh nhân vật đã 0 HP. Theo dõi tổn thương theo sự kiện trước các lần hồi, riêng Rùa Gương dùng chênh lệch ròng hai mốc HP.
- Buff “hai lượt của bạn” bao gồm lượt đặt và lượt bạn sau, cùng các lượt địch xen kẽ nếu buff có thể phản ứng lúc đó. “Hai lượt bạn kế tiếp” bắt đầu ở lượt sau. “Lượt địch kế tiếp” không tính lượt địch đã qua.
- Buff, dấu và Ấn còn thời hạn trong trận hết khi trận kết thúc, trừ Dư Chấn Chiến Thắng và các trạng thái xuyên thành đã chốt. Đã dùng Ấn vẫn giữ dấu qua trận; buff không dùng hết không hoàn lượt Ấn. Hai bản sao hiệu ứng từ Joker cũng tuân quy tắc không cộng tầng.
- Chồng sai công thức chỉ kích hoạt lá đầu và vẫn trả tổng mana. Công thức đầy đủ, bản thiếu hoặc cường hóa tạo một kết quả; không cộng lại toàn bộ lợi ích của các lá thành phần. Luật này không được nới ra vì có bảng chỉ số mới.

Những quy ước bổ sung trong mục này làm cho đề xuất tính được nhất quán. Khi triển khai cần duyệt cùng bộ trị số, vì chúng ảnh hưởng độ mạnh nhiều hơn một vài điểm sát thương.

## 10 Kiểm tra và cân bằng tiếp

Bộ kiểm tra đi kèm xác nhận số lượng và ID, đủ tham số công dụng, chỉ số hợp lệ, tên/sở trường khớp danh mục, số nguồn không bị ghi đè và các bất biến dung hợp. Workbook đã được đối chiếu với bộ sinh JS, quét lỗi công thức và thử đổi neo sát thương, HP quân, đảo gốc dung hợp. Việc tính lại được kiểm trong Artifact Tool, **chưa kiểm bằng ứng dụng Excel desktop**.

Các số này chưa được kiểm chứng cân bằng qua toàn bộ trận đấu. Không lấy 40 hành trình kiểm tra sẵn của prototype làm bằng chứng cho 48 vũ khí/54 Ấn mới: prototype mới thực thi hai họ vũ khí và ba Ấn.

| Ca playtest | Giữ cố định | Cần đo |
| --- | --- | --- |
| Tám họ vũ khí | 45 HP, 4 mana, cùng số lá, cùng seed và địch | Lượt hạ địch, HP mất, lượt có lá không dùng được |
| Giáo và boss cận chiến | Cùng ý đồ và tay bài | Số hành động bị hủy, chi phí để duy trì chuỗi chặn |
| Trượng và Nước | Cùng độ dài thành, hạn bình | Khả năng kéo dài trận để hồi đầy, HP hồi thực và hồi dư |
| Quân đúng/ngoài sở trường | Cùng ngân sách vàng và lương, không chỉ cùng quân số | Thời gian phá cổng, tỷ lệ mất quân và khả năng bổ sung |
| Dung hợp và quân độc lập | Cùng ngân sách và vị trí chiến trường | Hiệu quả giữ cánh, AoE nhận, tổn thất và giá trên mục tiêu |
| Ấn từng tải | Cùng sức chứa, tối đa 4 Ấn | Tỷ lệ dùng được, lợi ích thực, giá trị combo và Joker |
| Phẩm và sát thương vùng | Cùng số mục tiêu 1/2/3 | Có nhân ngoài ý muốn phần thưởng theo số hit/mục tiêu hay không |

Khi số đo lệch, ưu tiên đổi một neo hoặc một nhóm tham số rồi sinh lại. Những hiệu ứng đổi luật như hủy đòn, giữ bài hoặc sao chép vẫn cần đo theo cơ chế riêng; một công thức số chung không thể chứng minh chúng đã cân bằng.
