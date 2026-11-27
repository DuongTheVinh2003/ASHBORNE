# Hai ảnh UI của hai phase Ashborne

Ngày dựng: 26 tháng 11 năm 2026.

- [Phase 1 — Xếp quân công thành](Ashborne-Phase-1-Xep-Quan-v01.png): sân nhìn chếch, đạo quân quay về cổng, danh sách quân và thông tin đơn vị đang chọn.
- [Phase 2 — Giao tranh thẻ bài](Ashborne-Phase-2-Giao-Tranh-v01.png): Người Thừa Kế đối đầu Rùa Gương, intent riêng, chồng hai lá nổi gắn với mục tiêu và đếm ngược, mana khả dụng và đang giữ, tay bài, nguyên tố, bình và Ấn.

## Yêu cầu mỹ thuật của người dùng

Game dùng **2,5D hoàn toàn bằng sprite 2D**. Nhân vật, quân, quái, môi trường và vật thể được vẽ ở nhiều góc; chiều sâu đến từ lớp ảnh, phối cảnh, che khuất và bóng vẽ. Không dùng model 3D để thể hiện các thành phần đó. Đây là ràng buộc người dùng nhấn mạnh trong yêu cầu dựng hai ảnh.

Giữ chuẩn màu và mảng vẽ của [ảnh art đã duyệt](../../style-reference/approved-scene-v2.png), cùng hướng chữ [Ashborne Veil v0.3](../../fonts/ashborne-veil-v03/Ashborne-Veil-preview.png).

## Tệp và phạm vi

Hai ảnh PNG 1672×941 là mockup minh họa bố cục và art hoàn chỉnh để duyệt. Chữ được tạo theo mẫu typography; khi triển khai UI dùng tệp font Ashborne Veil v0.3 thật. Chỉ số trong ảnh minh họa trạng thái, không thay đặc tả cân bằng. Ảnh chưa được tách thành bộ sprite, không thay code hoặc tài nguyên game đang chạy.

Dùng công cụ image_gen tích hợp. [Bộ prompt gốc và lượt chỉnh](PROMPTS.txt) được lưu để dựng tiếp nhất quán.

