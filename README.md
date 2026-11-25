# ASHBORNE

Game thẻ bài kết hợp xếp quân công thành. Repository lưu bản prototype hiện tại, tài nguyên mỹ thuật và tài liệu thiết kế của dự án.

## Chơi ngay trên máy

Tải repository về, giải nén nếu tải ZIP, rồi mở `prototype-v2/dist/index.html` bằng Chrome hoặc Edge. Bản này đã nhúng tài nguyên, không cần Internet hoặc cài thêm thư viện.

## Chạy mã nguồn

Cài Node.js có kèm npm, sau đó chạy:

```sh
cd prototype-v2
npm start
```

Mở <http://127.0.0.1:4174>.

```sh
npm test       # Kiểm tra gameplay
npm run build # Tạo lại prototype-v2/dist/index.html
```

Three.js 0.170.0 đã có sẵn trong `prototype-v2/vendor/`; không cần chạy `npm install` để chơi, kiểm tra hoặc build bản hiện tại.

## Cấu trúc

- `prototype-v2/`: mã nguồn, kiểm tra và bản game chơi được trong `dist/`.
- `art/`: hình ảnh, font chữ, concept và bản trình bày UI.
- `reference-review/`: tài liệu và hình ảnh tham khảo phục vụ thiết kế.
- Các tệp `.md` và `.docx` ở thư mục gốc: thiết kế gameplay, quyết định và quy tắc làm việc.

Xem [README của prototype](prototype-v2/README.md) để biết phạm vi gameplay đã triển khai và các phần còn ở dạng thử nghiệm.

## Giấy phép thành phần bên thứ ba

Three.js dùng giấy phép MIT, lưu tại `prototype-v2/THIRD-PARTY-LICENSES.txt` và `prototype-v2/vendor/LICENSE`. Nguồn và giấy phép font nằm trong từng thư mục thuộc `art/fonts/`.

Các thư mục sao lưu cục bộ `.backups/`, tệp kiểm tra trung gian `.artifacts/`, thông tin cấu hình riêng và bộ nhớ đệm được bỏ qua khi đưa lên Git.
