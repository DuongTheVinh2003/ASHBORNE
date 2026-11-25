# Ashborne · Prototype v2

Mở `dist/index.html` bằng Chrome hoặc Edge. Thư mục `dist` chỉ có một file, đã nhúng Three.js và toàn bộ tài nguyên; không cần Internet hoặc server.

## Tài liệu dùng để sửa gameplay

- Phase 1: `../Ashborne-Phase-1-Phan-tich-xep-quan-cong-thanh-2026-11-25.md`. Người dùng đã chọn “Dùng hướng này cho bản thử” trong chat: bàn 5×4, đạo quân độc lập, di chuyển/tầm đánh/đánh chặn thực và cổng có vị trí.
- Phase 2: `../Ashborne-GDD-va-FDD.md` §04–07, `../Ashborne-Concept-The-Combat.md` cho tên/công dụng thẻ, và `../Core Combat System.docx` làm nguồn gốc luồng.
- `../Ashborne-Quyet-dinh-gameplay-da-chot-2026-11-24.md` ưu tiên khi mâu thuẫn: sai công thức chỉ lá đầu chạy, tối đa 4 Ấn theo tải, không tiêu điểm khi dùng Ấn, bình 2 lần/cả thành, thua công lại cả thành, luật Quá tải liên tiếp.

## Phạm vi đã dựng

Phase 1 dùng chung tọa độ cho luật và hình 2D nhìn từ trên. Có sáu đạo quân với ID riêng (gồm hai Khiên và hai Cung), kéo thả/chọn rồi đặt vào 20 ô. Ô đã chiếm từ chối thả, không tự đổi quân. Chọn quân xem tầm đánh; thu hồi trả về danh sách. Địch hiện trước trận, có cụm phòng thủ độc lập. Quân tiến đến tầm mới đánh; va chạm và đánh chặn tại chỗ; Pháp Tro đánh vùng theo khoảng cách. Có thể công cổng trong khi quân thủ xa còn sống. Thắng khi phá cổng, thua khi hết quân hoặc 750 nhịp. Thế chủ động: thắng ≤300 nhịp và mất ≤30% quân, +1 mana tối đa suốt Phase 2. Đây là ngưỡng thử mới, không bê ngưỡng 20 nhịp từ v1.

Có trận thử tại trại không tiêu lực lượng thật, không thưởng và không tính lịch hồi nguyên tố. Báo cáo liệt kê quân mất theo đạo quân, nhịp đánh đầu và sự kiện thật (áp sát, sát thương vùng, tan rã). Hai cách xếp cùng quân số có thể thắng khác nhau về thời gian/tổn thất. Tốc độ xem chỉ đổi nhịp phát lại.

Phase 2 có bộ Kiếm & Khiên và bộ Giáo, mỗi bộ đủ sáu công dụng vũ khí theo concept, cùng tám thẻ Nguyên tố đúng tên/công dụng. Mỗi bộ 20 lá, đầu lượt rút 5. Theo chỉnh sửa trực tiếp của người dùng ngày 25/11: kéo lá đầu lên đầu kẻ địch, bắt đầu đếm ngược 4 giây; kéo thêm lá đè lên chồng trên chính mục tiêu đó; đủ 3 lá hoặc ghép sai công thức thì kích hoạt ngay; còn 1–2 lá hợp lệ mới chờ hết giờ. Hai lá là tiền tố đúng của công thức 3 lá vẫn chờ lá cuối để không chặn Tuyệt kỹ. Lá đang chồng chuyển từ tay lên chồng nổi trên đầu địch. Không có khay chốt, bấm chọn bài hoặc nút thi triển. Cửa sổ tính từ lần thả đầu, thêm lá không nạp lại giờ. Tạm dừng hoặc mở hướng dẫn dừng cả đếm ngược. Mana được giữ cho chồng, chỉ trừ thật khi thi triển. Vũ khí và Nguyên tố có thể cường hóa theo cả hai thứ tự; các công thức Tuyệt kỹ vẫn xét thứ tự riêng. Mốc 4 giây là cấu hình thử. Hơi Gió có lựa chọn giữ/đưa lá đầu xuống đáy; Gió Hồi chọn vũ khí trước khi bỏ cuối lượt; Mạch Ngầm dựa trên HP mất thật; Nền Đá giữ Khiên dư. Phản Kích xét đúng mục tiêu vừa đánh Khiên, Giáo hủy đòn cận chiến → Hở Thế → Đâm Trả. Boss có thể kèm quân, có chọn mục tiêu và ý đồ riêng. Nanh Tro là K♥ với than vương ấn; Nứt Thành phá Khiên/chặn dựng lại, không tự gây sát thương HP; Rùa Gương hồi một phần chênh lệch ở đầu lượt sau.

Hai thành, bốn chạm trán, HP/bình/lượt Ấn xuyên trận, thưởng không cấp trùng, lịch Quá tải/suy yếu/khóa và thử lại toàn thành vẫn được giữ.

## Phần vẫn là cấu hình thử hoặc chưa mở rộng

Chỉ số quân, tầm, di chuyển, thời lượng, chi phí, tải Ấn, công thức và trị số Tuyệt kỹ, buff/debuff Quá tải là cấu hình thử để chơi, không cập nhật hồ sơ thiết kế đã chốt. Hai họ vũ khí, tám Nguyên tố và ba Ấn là lát cắt thử; chưa có đủ 48 vũ khí/54 Ấn, combo Ấn, sản xuất/dung hợp tại trại, trinh sát hoặc bản đồ thế giới. Quân có sẵn tại trại phù hợp phạm vi Phase 1 §09 của tài liệu mới. Tránh thêm nội dung chưa có đặc tả để thay công dụng đã viết.

## Kiểm tra và chạy nguồn

`npm test`: 30 kiểm tra, gồm che chắn theo cánh, độ sâu, AoE, cổng khi còn địch, quân cùng loại độc lập, thử quân không mất tài nguyên, ghi tổn thất một lần; các công dụng thẻ; và 40 hành trình dùng kéo bài vào chồng và tự thi triển hết giờ (20 seed × 2 họ vũ khí), hoàn tất cả hai thành.

`npm run build` tạo lại `dist/index.html`. `npm start` phục vụ nguồn tại http://127.0.0.1:4174. Không cần cài thêm thư viện: Three.js 0.170.0 có sẵn trong `vendor/`, giấy phép được nhúng trong file HTML.

Theo yêu cầu dọn bản cũ, chỉ giữ bản chơi hiện tại trong `prototype-v2/`; bản v1, dist v1 và bản sao lưu v1 đã được chuyển vào Thùng rác. Bản sao lưu trước khi sửa thao tác nằm trong một archive khôi phục `../.backups/prototype-v2-before-target-drag-20261125.zip`, không tạo thêm thư mục prototype chơi song song.


Điều chỉnh kích hoạt mới nhất: đủ ba lá hoặc tổ hợp không còn là công thức hợp lệ/tiền tố hợp lệ sẽ giải quyết ngay ở lần thả đó, trừ mana và đưa các lá vào chồng bỏ đúng một lần. Sao lưu trước lượt sửa này: ../.backups/prototype-v2-before-instant-combo-20261125.zip.
