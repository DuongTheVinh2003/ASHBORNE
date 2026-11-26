# Các quyết định UI của Ashborne

Mốc lưu ngày 26 tháng 11 năm 2026, áp dụng cho [wireframe v05](index.html). Đây là hướng UI hiện hành được chọn lưu để tiếp tục hoàn thiện game.

## Cách dựng thế giới và trại

Game dùng sprite 2D, với nhiều góc vẽ, lớp cảnh và che khuất để tạo cảm giác 2.5D. Nhân vật, công trình và vật thể được thiết kế theo cách này.

Thế giới là khu vực để điều khiển nhân vật đi khám phá. Người chơi tới gần NPC, trại, thành hoặc lối nối rồi tương tác. Bản đồ vùng phục vụ xem vị trí và theo dõi mục tiêu.

Trại cũng là khu vực 2.5D có thể đi lại. Quân doanh mở quản lý lực lượng; bàn chiến thuật mở chuẩn bị bài và Ấn; thợ rèn mở rèn luyện; lửa trại mở thông tin tình trạng. Các bảng mở ngay trên cảnh, đóng lại giữ vị trí nhân vật.

## Bốn bối cảnh chơi

Bốn bối cảnh chính là khám phá, trại, công thành Phase 1 và giao tranh bài Phase 2. Menu và các lớp thông tin hỗ trợ vòng chơi này.

Bố cục tham khảo cách tổ chức thông tin và tương tác trong [15 phút đầu video Slay the Spire](https://www.youtube.com/watch?v=NhfIsNV_Oew). Phần combat đặt nhân vật và địch trên sân, ý đồ sát địch, HP và trạng thái sát chủ thể, tay bài tập trung ở đáy. Hệ thống gameplay riêng của Ashborne tiếp tục theo các quyết định đã chốt.

## Giữ trọng tâm và ngữ cảnh

Mỗi thời điểm có một việc chính. Thông tin phụ xuất hiện khi cần, cạnh đối tượng hoặc trong bảng đang dùng.

- Quản lý, bổ sung, chế tạo và dung hợp quân cùng nằm trong bảng quân doanh. Xem chi phí và xác nhận bổ sung ngay tại lựa chọn.
- Chuẩn bị bài và bộ Ấn cùng một bảng. Đọc công dụng lá hoặc thay Ấn vẫn giữ lựa chọn đang chỉnh.
- Sổ bài, công thức, Ấn, di vật và nhật ký dùng vùng đọc theo ngữ cảnh; chọn mục để xem ngay trong bảng.
- Cửa hàng giữ hàng hóa, giá, điều kiện và manh mối trong cùng cuộc tương tác. Sự kiện giữ lựa chọn và kết quả đã biết cùng hội thoại.
- Ý đồ và trạng thái trong combat có giải thích cạnh đối tượng. Pause và hướng dẫn dừng đồng hồ chồng bài, quay lại giữ thời gian còn.
- Cài đặt và thông tin lỗi lưu nằm trong cùng ngữ cảnh tạm dừng.

## Kết quả và popup

| Tình huống | Cách trình bày |
| --- | --- |
| Thắng Phase 1 | Báo cáo phá cổng, tổn thất, lợi thế và nút vào Phase 2 |
| Thắng một chạm trán trong thành | Thông báo gọn trên sân, giữ tài nguyên còn lại và đi tiếp |
| Hoàn thành thành | Gộp chiến lợi phẩm, thu phục Ấn và tổng kết trong một bảng |
| Thất bại | Hậu quả, phần được giữ và đường về trại để chuẩn bị lại |
| Rút lui | Xác nhận hậu quả rồi về trại trực tiếp |
| Hiệu ứng cần chọn bài | Bảng chọn tại chỗ, đóng lại giữ trạng thái trận |

Mỗi khoản thưởng đã nhận có dấu ghi nhận và không cấp trùng khi đánh lại. Ấn mới được chọn vào bộ tại lần chuẩn bị sau.

## Phần còn chờ đặc tả

Chi phí, danh sách dịch vụ thương nhân, giá, các cấp nâng và công thức chưa định nghĩa tiếp tục chờ dữ liệu thiết kế. Các con số, địa hình, góc camera và nhịp mô phỏng trong wireframe là ví dụ để đánh giá UI.

Việc lưu bản này không bổ sung luật gameplay mới hoặc đưa wireframe vào code game đang chạy.
