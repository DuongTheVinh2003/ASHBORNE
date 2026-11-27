# Ashborne Vāryan chữ cổ và quy ước sử dụng

Ngày: 27/11/2026. Theo yêu cầu người dùng, dùng bảng chữ trong ảnh để phát triển ký tự cho pháp trận, cổ thư, di tích và các thành phần mang tính cổ xưa, huyền bí. Quyền năng, nguồn gốc và ngữ pháp của chữ chưa chốt.

## 1 Tham chiếu hình chữ

- [Ảnh Vāryan gốc được giữ nguyên](art/script-reference/varyan/varyan-script-reference.png).
- [Nguồn và mã kiểm tra ảnh](art/script-reference/varyan/SOURCE.json).
- [Chuẩn mỹ thuật chung](Ashborne-Style-Art-Chung.md).
- [Đặc tả sản xuất art](Ashborne-Dac-Ta-Art-Ingame.md).

Tên chính trên ảnh là Vāryan Script; ảnh cũng dùng cách gọi Varian. Tạm dùng Vāryan để tra cứu thống nhất, không suy ra hai hệ chữ khác nhau từ cách viết nhãn.

## 2 Những gì quan sát được từ ảnh

Ảnh trình bày 26 ký tự ứng với nhãn A–Z, một nhóm dấu phụ/nguyên âm biến thể, các dấu biến đổi và mười chữ số 0–9. Nhãn âm dưới C là k/s, dưới J là j/y; đây là ghi chú của bảng tham chiếu, chưa đủ để dựng đầy đủ quy tắc phát âm.

Hình chữ có trục đứng, nét gãy góc, các móc cong, chấm và vòng nhỏ. Nhiều ký tự có chân hoặc đầu nét mở rộng. Các dấu nằm trên/dưới thân cần khoảng riêng, không được cắt mất khi khắc lên đường tròn hoặc thu nhỏ.

Ảnh mô tả cảm hứng từ Rune, chữ Phạn và Cyrillic. Đây là mô tả thiết kế trong ảnh, không phải kết luận rằng Vāryan là một hệ chữ lịch sử có thật hoặc dùng ngữ pháp của ba nguồn ấy. Các câu ví dụ và bản dịch trong ảnh là nội dung tham chiếu, chưa tự trở thành câu chú chính thức của Ashborne.

Ảnh là bảng minh họa raster, chưa phải font hoặc bộ vector. Một số nét ở dấu phụ và ví dụ chưa đủ rõ để khẳng định cách ghép từng chữ. Khi cần văn bản dài có thể giải mã, phải dựng bảng glyph ổn định từ ảnh trước; không thay bằng những ký tự Unicode trông gần giống rồi gọi là đúng Vāryan.

## 3 Phạm vi áp dụng đã yêu cầu

Vāryan được dùng cho văn khắc, bia đá, cổ thư, pháp trận, phù chú và những vật mang nội dung cổ xưa, huyền bí khi phù hợp bối cảnh. Font UI, tên thẻ, mô tả luật, hội thoại và bản dịch vẫn theo Ashborne Veil v0.3.

Ảnh này chỉ định hướng hệ chữ. Kiến trúc tả chi tiết, texture đen–vàng và ánh sáng mạnh trong poster không thay chuẩn 2D vẽ tay của game. Khi đưa lên vật liệu, giữ hình chữ nhận diện được và diễn tả vật liệu bằng mảng màu theo ảnh approved-scene-v2.png.

## 4 Quy ước sản xuất đề xuất

| Dùng ở đâu | Cách thể hiện đề xuất |
| --- | --- |
| Bia, cột, cửa cổ | Chữ khắc to, nét chắc, vài dấu chính dễ nhận; độ mòn theo vật liệu. |
| Cổ thư | Cùng bộ glyph, nét bút linh hoạt hơn; dấu phụ và khoảng dòng rõ. |
| Pháp trận | Chia vòng thành các đoạn câu, có dấu phân cách và một vị trí bắt đầu đọc ổn định. Tránh rải ký tự ngẫu nhiên. |
| Vật phẩm nhỏ | Một cụm ngắn hoặc ký hiệu chức năng, giữ được ở kích thước chơi. |
| Nội dung người chơi phải hiểu | Có bản dịch hoặc diễn giải đọc được; không bắt giải mã toàn bộ bảng chữ để hiểu mục tiêu chính. |

Đề xuất chuẩn bị mỗi văn khắc có nghĩa bằng ba phần: nội dung tiếng Việt, cách phiên âm và chuỗi glyph cố định. Cùng một câu cần dùng cùng một chuỗi trên cổ thư, vật phẩm và pháp trận. Nội dung nền chưa cần dịch nên được ghi rõ là trang trí, không dùng để làm bằng chứng suy luận rồi tự đổi nghĩa sau.

Chữ có thể không phát sáng khi nghỉ; nếu phát sáng, màu và cường độ đi theo vật liệu hoặc cơ chế của cảnh. Không mặc định mọi chữ cổ đều vàng, cùng một nguyên tố hoặc cùng một phe.

## 5 Quan hệ với pháp thuật còn mở

Có thể dùng Vāryan để ghi công thức, lời thề, tên hoặc điều kiện trong pháp trận. Việc bản thân ký tự chứa quyền năng, chỉ mô tả quyền năng hay phải được nạp năng lượng mới vận hành cần được chọn khi thiết kế luật pháp trận.

Không tự gán người tạo chữ là năm tồn tại sơ khai, Người Giữ Lửa Cuối Cùng hoặc hội giữ phong ấn. Hội có thể sử dụng một văn tự cổ hơn hội nếu phương án đó được chọn sau.

## 6 Tình trạng bàn giao

Đã đọc trực tiếp ảnh, giữ bản sao nguyên vẹn và ghi quy tắc tham chiếu. Chưa tạo font, vector glyph, bộ pháp trận hoặc ảnh art mới. Lần sản xuất những tài nguyên đó phải dùng cả ảnh Vāryan và ảnh chuẩn mỹ thuật phù hợp; kiểm tra tính nhất quán ký tự riêng với kiểm tra phong cách tranh.
