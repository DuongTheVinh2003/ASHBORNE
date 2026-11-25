# Ashborne · Đặc tả giao diện và tài nguyên

[Bộ màn UI/UX](art/v2/ui-atlas.html) cho phép chọn màn, đổi trạng thái minh họa và lọc danh mục. [Demo Thành Kính Lạnh](art/v2/index.html) kiểm chứng luồng mở đầu và HUD chiến đấu. [Hướng mỹ thuật](Ashborne-Art-Direction.md) ghi vật liệu, tương phản, sắc độ và tranh đã dùng. Luật gameplay trong tài liệu này đã đồng bộ với [GDD/FDD](Ashborne-GDD-va-FDD.md). Bố cục và bản demo là tham chiếu cho đợt định hình lại art, cần đối chiếu luật hiện hành khi làm UI tiếp.

## Phân vùng qua ảnh tham chiếu

| Màn | Bố cục của Ashborne |
| --- | --- |
| Menu | Tên game và hành động chính thành một cụm trên mảng nền tối, điểm nhấn minh họa nằm ngoài vùng chữ. Hồ sơ và tùy chọn mở từ nút riêng khi cần. |
| Chọn vũ khí | Tên, công dụng, thẻ và chi phí ở trái. Tranh ở phải, họ vũ khí ở dải dưới. Bộ bài chiến đấu, Ấn Thú và di vật là các lớp chuẩn bị với điều kiện khác nhau. |
| Sa đồ | Giữ ảnh, bốn vùng và mốc tọa độ. Hậu cần bên trái, tuyến và chú giải theo ngữ cảnh bên phải, bản đồ ở giữa. |
| Công thành | Đọc tài nguyên, lá Chủng tộc/Binh chủng, kết quả nâng bậc và dung hợp. Xem đội hình trước khi bắt đầu mô phỏng, sau đó nhận kết quả công thành. |
| Combat | Dải mỏng trên cùng là HUD của trận. HP, địa vực và di vật ở trái. Tiện ích mở bảng tại chỗ ở phải. Nhân vật và ý đồ chiếm sân giữa. Mana có huy hiệu riêng ở dưới trái, chồng rút và chồng bỏ ở hai góc, tay bài và dự tính chồng ở giữa, kết lượt ở phải. |

## Đối chiếu toàn bộ nhóm tài nguyên

| Dữ liệu | Vị trí và lúc cần hiện | Nguồn |
| --- | --- | --- |
| HP hiện tại/tối đa, hồi và HP giữ qua trận, Khiên hai phe | HP chiến dịch ở tuyến, trại, điểm chuẩn bị và thanh trận. HP/Khiên của từng chủ thể sát nhân vật. Báo hồi, sát thương thường, bị chắn và xuyên Khiên. | GDD §§02, 04, 07, 09 |
| Mana hiện tại/tối đa, nâng mana, chi phí và giảm/tăng phí | Huy hiệu cạnh tay bài. Chi phí bài thường trên lá và tổng tại chồng. Điểm Ấn Thú có bộ đếm riêng trên khay ấn. Xem chênh lệch trước khi nâng hoặc qua trận. | GDD §§04, 06, 09, concept Vũ khí |
| Tay bài, chồng rút, chồng bỏ, bộ bài, bản sao | Tay giữa dưới. Hai chồng có bộ đếm và bảng kiểm tra khi được phép. Không lộ thứ tự chưa biết. Xáo, lá giữ lại, đưa lên đầu/đáy và rút thêm có phản hồi. | GDD §§04, 06, concept Nguyên tố/Ấn Thú |
| Vũ khí, phẩm, điều kiện, Trực tiếp/Kỹ năng/Sức mạnh | Màn chuẩn bị lọc theo tám họ, trang chi tiết từng lá. Cờ khi hạ mục tiêu, cuối lượt, lượt kế, lần đầu, đúng địch hoặc còn tài nguyên hiển thị cạnh hiệu ứng. | Concept §Thẻ Vũ khí |
| Bốn thanh, buff địa vực, hiệu ứng Nguyên tố, Tiết Chế và Quá tải | Cụm thanh và địa vực giữ vị trí tham chiếu. Thanh đầy báo Quá tải ngay, trạng thái kéo dài đến hết công thành. Dấu hiệu tĩnh đi cùng hiệu ứng. Hậu quả cụ thể sẽ đặc tả sau. | GDD §§04–05, concept Nguyên tố |
| Chồng, lá đáy, phần đóng góp, mục tiêu, thứ tự | Phase 1 xem kết quả dung hợp trước mô phỏng. Phase 2 hiển thị cửa sổ ngắn, thứ tự lá và tài nguyên. Hết cửa sổ một lá thì tự thi triển, chồng sai công thức chạy chuỗi. Thao tác hủy và chỉnh chồng sẽ đặc tả sau. | GDD §§03–04, 11 |
| Ý đồ, thứ tự địch, cộng dồn, thời hạn, kích hoạt còn lại, hồi chiêu, kháng/yếu, giai đoạn boss | Sân và bảng địch. Boss có đồng hồ nếu trận dùng. Với Absolute Zero, hiển thị lượt báo trước, tiến độ làm yếu, sát thương sau điều kiện. | GDD §§04, 07, 11, concept thẻ |
| Ba ô ấn, điểm riêng, dấu đã dùng xuyên trận và tổ hợp ấn | Khay ấn có bộ đếm điểm riêng và dấu mỗi lá đã dùng trong cả cuộc công thành. Hiển thị combo poker hoặc phương án nguyên tố khi có đặc tả. Chỉ đổi bộ sau khi chiếm thành. | GDD §06 |
| 54 ấn, hai Joker, nguồn gặp, manh mối, thu phục, đã sở hữu, ấn đang mang | Sổ Phong Ấn, săn và màn thưởng. Bốn chất giữ nhãn và màu, Joker có hồ sơ riêng. Trang chi tiết giữ điều kiện và các hiệu ứng liên quan. | GDD §§06, 09, concept Ấn Thú |
| Quân tổng, đạo quân, chỉ số gốc, chỉ số phụ, kết quả nâng bậc/dung hợp | Quân tổng ở hậu cần. Khi ghép, cho thấy lá đáy, chỉ số đặc trưng giữ nguyên và thay đổi chỉ số phụ. Hiển thị đội hình trước mô phỏng. Phân quân và trạng thái lá đầu vào sẽ đặc tả sau. | GDD §§03, 08 |
| Lương và hậu cần phụ gồm thuốc, vận tải, trang bị | Lương thường trực ở sa đồ, dự toán theo ô và tuyến. Hậu cần phụ xuất hiện khi nút hoặc chi phí sử dụng. | GDD §08 |
| Trung thành, tinh thần, danh tiếng, vương quyền | Bốn mục riêng trên hậu cần. Cách đưa trung thành/danh tiếng vào tính chi phí lập quân sẽ đặc tả sau. Tinh thần ở trại, sự kiện và rút lui. Vương quyền ở điều kiện vùng, ngoại giao, liên minh, tuyển tinh anh. | GDD §§03, 08–09 |
| Vàng, giá tuyến, giá mua/bán, tài nguyên sau giao dịch | Hậu cần, bảng nút và thương nhân. Có xem trước phần còn lại, giới hạn và lý do chặn. | GDD §§08–09 |
| Di vật, độ hiếm, chủng loại, thứ tự, khoản đã nhận | Túi và chuẩn bị. Chỉ di vật liên quan combat hiện trong bảng ở HUD. Chi tiết là mốc áp dụng và tác dụng lên hồi phục, sát thương, hậu cần hay nguyên tố. | GDD §08 |
| Chủng, sở trường, binh chủng, bậc, tương thích, trang bị, chỉ huy | Thư viện và công thành. Cả 60 ứng viên có thể tra. Phân biệt đánh gần và đánh xa trong phạm vi mở đầu, các binh chủng ứng viên mở về sau, nâng bậc và chi phí ngoài sở trường. | Chủng tộc và Binh chủng §§01–07 |
| Kết quả mô phỏng, tốc độ phá thành và buff chuyển Phase 2 | Màn kết quả Phase 1 thể hiện kết quả công thành, tốc độ phá thành và buff chuyển phase sau khi có đặc tả. Số ô và chỉ số mô phỏng sẽ thiết kế sau. | GDD §03 |
| Nút tuyến, điều kiện mở, nút đã đi, manh mối, cổng mở, đang giao tranh, đã giải phóng | Sa đồ, thông tin nút, nhật ký nhiệm vụ. Giá, phần thưởng và nguyên tố vùng xuất hiện trước khi xác nhận. | GDD §§02, 09 |
| Chiến lợi phẩm, khoản đã nhận, tổn thất, điều kiện thử lại, thống kê, tiến trình dài hạn | Kết quả sau trận và toàn cuộc công thành. Ghi riêng thưởng đã xác nhận, phí đã cam kết và phần còn giữ. | GDD §§02, 08–10, 12 |
| Hướng dẫn, điều khiển, trạng thái rút lui, nhạc/hiệu ứng/giọng, giảm hình động | Tutorial trong hành động. Tạm dừng và tùy chọn theo màn. Rút lui dự tính tổn thất và đích quay về. | GDD §§10–11 |

## Luật gameplay dùng khi làm UI tiếp

- **Ấn Thú.** Điểm riêng, mỗi lá dùng một lần xuyên suốt cuộc công thành. Giữ dấu đã dùng qua các trận. Chỉ sau khi chiếm thành mới được mang bộ mới vào. Nạp lại khi Quá tải chờ playtest. Hướng combo ưu tiên poker, phương án dự phòng dùng nguyên tố và số lá.
- **Công thành.** Tạo quân theo Chủng tộc × Binh chủng, nâng bậc trước dung hợp. Lá đáy làm gốc, bộ 3–4 chỉ số với một chỉ số đặc trưng giữ nguyên khi dung hợp. Xếp đội hình rồi mô phỏng tự động. Buff sang Phase 2 theo tốc độ phá thành, công thức sẽ thiết kế sau.
- **Chồng PvE.** Lá đầu giữ trong cửa sổ ngắn. Một lá tự thi triển khi hết thời gian. Khớp công thức tạo Tuyệt kỹ, sai công thức thi triển chuỗi theo thứ tự đặt và giữ hiệu ứng từng lá. Nguyên tố trong chồng sai công thức kích hoạt đầu chuỗi.
- **Nguyên tố.** Lấy công dụng từ concept. Thanh đầy kích hoạt Quá tải ngay và giữ đến hết công thành. Tiết Chế chỉ trước khi thanh đầy. Hậu quả và thông số cụ thể sẽ đặc tả sau.
- **Tiến trình thành.** Một boss chính, 0–2 boss phụ, mỗi boss có thể kèm quái. Tướng dùng một thanh HP xuyên suốt, hồi phục phụ thuộc hướng chơi. Ba mốc độ khó quyết định phạm vi chơi lại theo phase, thành hoặc hành trình. Rút lui ở mọi mốc đều đánh lại thành từ Phase 1.
- **Phần chờ đặc tả.** Khiên, mana, chồng bài và các hiệu ứng khác khi chuyển trận, khôi phục trạng thái khi chơi lại, hậu quả sau thất bại và nạp lại ấn khi Quá tải. Các số liệu, bố cục, ảnh và bản demo cũ là tham chiếu cho đợt làm lại art.

## Nguồn đã rà

- [GDD/FDD](Ashborne-GDD-va-FDD.md) cho vòng chơi, tài nguyên, số mẫu, trạng thái và tiếp cận.
- [Tổng hợp task gameplay](Ashborne-Tong-hop-task-lam-ro-gameplay.md) cho quyết định đã chốt và các phần chờ playtest.
- [Chủng tộc và Binh chủng](Ashborne-Chung-toc-va-Binh-chung.md) cho công thức và danh mục quân.
- [Concept thẻ combat](Ashborne-Concept-The-Combat.md) cho 48 lá Vũ khí, 8 mẫu Nguyên tố và 54 Ấn Thú.
- [Hướng mỹ thuật](Ashborne-Art-Direction.md), [bản v0.1](art/concept/archive/Ashborne-Art-Direction-v0.1.md) và [prompt tranh](art/v2/prompts.md) cho các bố cục cũ và phạm vi tranh có sẵn.
