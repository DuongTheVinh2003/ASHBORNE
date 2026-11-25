# Reference — Bố cục UI/UX và biểu diễn trạng thái

**Slay the Spire 2 · Phạm vi 00:00–04:25 · Bản tổng hợp để duyệt**

Tài liệu tổng hợp các màn và lớp giao diện đã thấy trong [video Royal Gaming](https://www.youtube.com/watch?v=NhfIsNV_Oew), từ đầu video đến 04:25. Không coi đây là danh mục toàn bộ màn của game. Mô tả vị trí là tương đối theo ảnh quay 1920×1080; chưa phải kích thước pixel, hitbox hoặc đặc tả responsive.

Tài liệu đi cùng: [Flow gameplay](REF-Flow-Gameplay.md), [bộ ảnh đối chiếu](BO-ANH-DOI-CHIEU.md), [phân tích gốc](PHAN-TICH-UI-UX-TUTORIAL.md). Các mục “cần chú ý” là nhận xét thiết kế; chưa tự trở thành quyết định UI của Ashborne.

## 1. Nguyên tắc tổ chức xuyên màn

1. **Thông tin có vị trí ổn định:** HUD chuyến đi ở trên, tình huống ở giữa, thao tác combat ở dưới.
2. **Thông tin gắn với chủ thể:** intent trên địch; HP/Khiên và trạng thái sát nhân vật; chi phí ngay trên lá.
3. **Đọc theo nhiều mức:** nhìn icon/số để quyết định nhanh; rê để xem lá lớn và tooltip khi cần.
4. **Tách sự kiện với trạng thái:** animation và chữ nổi báo chuyện vừa xảy ra; icon/số cho biết hiệu lực còn lại.
5. **Một nhiệm vụ chính mỗi màn:** chọn thưởng, đọc sự kiện, chọn bài hoặc xác nhận thay đổi được chia thành bước rõ.
6. **Dùng lớp tối để đổi điểm nhìn:** tutorial, loot và preview nổi lên trong khi bối cảnh vẫn còn phía sau.

## 2. Danh mục màn và lớp giao diện đã quan sát

| Màn / lớp UI | Mốc tham chiếu | Nhiệm vụ chính |
| --- | --- | --- |
| Menu chính. | 00:00. | Chọn chế độ chơi hoặc tiện ích. |
| Chọn nhân vật. | 00:03–00:04. | Xem nhân vật và thông tin khởi đầu, xác nhận. |
| Hộp bật tutorial. | 00:05–00:09. | Chọn có nhận hướng dẫn hay không. |
| Bản đồ + giới thiệu chương. | 00:15, 01:35, 03:10. | Nhận biết vị trí, tuyến, loại nút và chọn phòng. |
| Ba trang Combat Basics. | 00:25, 00:30, 00:35. | Đọc luật cơ bản. |
| Sân combat và HUD. | 00:40, 01:45, 03:25. | Quyết định và thực hiện hành động. |
| Lá phóng lớn / ngắm mục tiêu / tooltip. | 00:45–00:50, 01:43–01:46. | Đọc bài, kiểm tra luật và đối tượng chịu tác động. |
| Lời nhắc theo ngữ cảnh. | 00:17, 00:55, 02:50, 03:47. | Giải thích một cơ chế đúng lúc gặp. |
| Bảng chiến lợi phẩm. | 01:22, 02:46, 03:45. | Nhận từng khoản thưởng. |
| Chọn bài thưởng. | 01:25, 02:55, 03:50. | So sánh ba lá, chọn một hoặc bỏ qua. |
| Sự kiện và lựa chọn. | 03:00, 04:00. | Đọc tình huống và hệ quả từng hướng. |
| Danh sách bài để Enchant. | 04:06–04:10. | Tìm và chọn đối tượng cần thay đổi. |
| So sánh trước/sau và xác nhận. | 04:11–04:19. | Kiểm tra thay đổi trước khi chốt. |
| Phản hồi kết quả sự kiện. | 03:08–03:09, 04:20–04:22. | Thấy lựa chọn đã áp dụng và tiếp tục. |

## 3. Menu chính

**Bố cục:** logo lớn ở vùng giữa; nhóm Singleplayer, Multiplayer, Settings, Quit xếp dọc phía dưới logo. Hồ sơ nằm trên trái, minh họa tòa tháp chiếm phần nền bên phải.

**Thứ bậc đọc:** nhận diện game → hành động bắt đầu chơi → các lựa chọn phụ. Các mục menu thành một cụm thay vì phân tán trên nền tranh. Khi rê lựa chọn, có dấu nhấn quanh dòng đang tương tác.

**Cần chú ý:** tranh phải chừa vùng đủ rõ cho chữ. Chỉ xác nhận các mục xuất hiện; chưa khảo sát bố cục trang Settings hoặc Multiplayer sau khi mở.

Ảnh: [00:00](images/00-00.jpg).

## 4. Chọn nhân vật

| Vùng | Nội dung |
| --- | --- |
| Trái. | Tên, HP, vàng, mô tả và di vật khởi đầu. |
| Phải. | Tranh nhân vật cỡ lớn. |
| Dưới giữa. | Hàng chân dung; nhân vật khả dụng và các ô khóa. |
| Mép trái. | Nút quay lại. |
| Mép phải. | Nút xác nhận bằng dấu kiểm. |

Thông tin cơ chế được gom thành một cụm đọc; tranh tạo nhận diện và cảm xúc. Hàng chân dung tạo chỗ chuyển nhân vật mà không giành diện tích của phần mô tả.

**Cần chú ý:** trạng thái đang chọn, có thể chọn và bị khóa cần khác nhau. Ảnh chỉ cho biết có ô khóa, chưa cho biết điều kiện mở hoặc phản hồi khi bấm ô khóa.

Ảnh: [00:03](images/00-03.jpg), [00:04](images/00-04.jpg).

## 5. Hộp bật tutorial

Hộp xanh xám nằm giữa, nền chọn nhân vật bị làm tối. Tiêu đề và nội dung nằm trong một cột; cuối hộp có No bên trái màu đỏ, Yes bên phải màu xanh. Khi rê nút, viền nổi rõ hơn.

**Vai trò UX:** chỉ để lại một quyết định trước khi vào chơi. Bối cảnh nhân vật vẫn nhận ra phía sau, nên không mất cảm giác mình đang ở đâu.

**Cần chú ý:** phân biệt hai lựa chọn bằng chữ, vị trí và viền, không chỉ bằng màu. Không suy ra trạng thái focus mặc định hoặc quy tắc bàn phím từ hình.

Ảnh: [00:05](images/00-05.jpg).

## 6. Bản đồ và giới thiệu chương

**Bố cục:** HUD ở trên; tấm bản đồ giấy sáng chiếm phần lớn giữa màn; chú giải đứng bên phải; nút quay lại ở mép trái. Tên Act/địa vực xuất hiện lớn ngang giữa khi vào chương.

| Thành phần | Dấu hiệu / công dụng |
| --- | --- |
| Nút phòng. | Biểu tượng theo loại nội dung. |
| Tuyến nối. | Đường nét đứt cho biết quan hệ giữa các nút. |
| Tiến độ. | Nút đã đi được khoanh; vị trí hiện tại có dấu chỉ. |
| Legend. | Ghép icon với tên loại nút: chưa biết, thương nhân, kho báu, nghỉ, địch, elite. |
| Nhắc lần đầu. | Hộp nhỏ và mũi tên chỉ vào nút cần chọn. |

**Thứ bậc đọc:** vị trí hiện tại → các nhánh nối tiếp → loại nội dung của từng nút → thông tin chuyến đi trên HUD. Đây là diễn giải thiết kế từ bố cục, không phải kết quả đo mắt người chơi.

**Cần chú ý:** biểu tượng xuất hiện trong Legend không chứng minh đã thấy màn đích tương ứng. Mẫu có thể học là cách đánh dấu vị trí và tuyến, còn luật di chuyển của Ashborne phải theo sa đồ riêng.

Ảnh: [00:15](images/00-15.jpg), [00:17](images/00-17.jpg), [bảng ảnh có mốc 01:35](atlas/080-099.jpg).

## 7. Ba trang hướng dẫn combat

Hướng dẫn nằm trên lớp tối phủ sân. Hình minh họa ở trái, giải thích ở phải, nút tiếp ở mép phải; các trang sau có nút lùi ở mép trái. Tên nhóm và chỉ số 1/3, 2/3, 3/3 ở dưới giữa.

| Trang | Trọng tâm hình ảnh | Cách dẫn điểm nhìn |
| --- | --- | --- |
| Dùng bài và Energy. | Lá tấn công, tay bài và địch. | Đường ngắm trong hình nối bài với mục tiêu. |
| Block. | Defend và người chơi. | Phóng rõ lá và liên hệ với chủ thể nhận phòng thủ. |
| Intent. | Địch với icon và số trên đầu. | Mũi tên xanh chỉ chính xác biểu tượng cần đọc. |

Nền sân vẫn hiện mờ để giữ ngữ cảnh. Số trang báo trước lượng nội dung phải đọc. Từ khóa và phần cảnh báo thời hạn được nhấn màu.

**Cần chú ý:** mũi tên trong ảnh minh họa chưa phải thao tác người chơi tự làm. Chưa thấy bài kiểm tra thực hành giữa các trang. Thứ tự tutorial và tiêu chí học được mô tả ở [file flow](REF-Flow-Gameplay.md).

Ảnh: [00:25](images/00-25.jpg), [00:30](images/00-30.jpg), [00:35](images/00-35.jpg).

## 8. Combat — cấu trúc ba tầng

```text
┌─────────────────────────────────────────────────────────┐
│ Nhân vật · HP · Vàng · Potion · Tiến độ     Tiện ích      │
│ Di vật                                                  │
├─────────────────────────────────────────────────────────┤
│                                   Intent từng địch      │
│ Người chơi         Bài/hiệu ứng       Địch  Địch  Địch   │
│ HP + Block                            HP của từng con   │
│ Buff/debuff                           Buff/debuff       │
├─────────────────────────────────────────────────────────┤
│ Energy               Tay bài                End Turn    │
│ Chồng rút                                   Chồng bỏ    │
└─────────────────────────────────────────────────────────┘
```

Sơ đồ là mô tả vị trí tương đối, không theo tỷ lệ và không thể hiện mọi lớp cùng một lúc.

### 8.1. HUD chuyến đi

Từ trái sang phải thấy nhận diện nhân vật, HP hiện tại/tối đa, vàng, ô potion và thông tin tiến độ. Các tiện ích như bản đồ, bộ bài và cài đặt nằm bên phải. Di vật thành một cụm dưới mép trên trái.

HUD giữ vị trí qua combat, bản đồ và sự kiện. HP ở đây theo dõi sức khỏe chuyến đi; HP sát nhân vật phục vụ đọc tình huống chiến đấu. Hai nơi phải phản ánh cùng dữ liệu.

### 8.2. Sân và chủ thể

Người chơi bên trái, địch bên phải; sân giữa dành chỗ cho bài đang dùng, số damage và thông báo lượt. Khi có nhiều địch, mỗi con giữ cụm thông tin riêng. Nền rừng tối giúp chủ thể, lá bài và số nổi bật hơn.

**Cần chú ý:** phải thử bố cục ở tình huống nhiều địch đồng thời có nhiều trạng thái và tooltip. Bố cục thoáng ở trận một địch chưa chứng minh đủ chỗ trong mọi trận.

### 8.3. Vùng thao tác dưới

| Thành phần | Vị trí | Mục đích |
| --- | --- | --- |
| Energy hiện tại/tối đa. | Huy hiệu lớn dưới trái. | Kiểm tra khả năng tiếp tục hành động. |
| Chồng rút và số bài. | Góc dưới trái. | Theo dõi lượng bài có thể rút. |
| Tay bài. | Dưới giữa, xòe và chồng mép. | Đọc lựa chọn đang có, nâng lá khi xem. |
| End Turn và số lượt. | Dưới phải, trên chồng bỏ. | Hành động kết lượt ở chỗ cố định. |
| Chồng bỏ và số bài. | Góc dưới phải. | Theo dõi bài đã bỏ/dùng theo vòng bài. |
| Bộ đếm tím xuất hiện với Exhaust. | Phía trên vùng chồng bỏ. | Theo dõi riêng bài đã bị loại khỏi combat. |

**Cần chú ý:** Energy 0 vẫn có thể còn bài trên tay. Trạng thái nút và lá phải giúp đọc được sự khác biệt giữa thiếu tài nguyên, đang chọn, đang rê và có thể dùng; video chưa khảo sát đầy đủ mọi trạng thái lỗi.

Ảnh: [00:40](images/00-40.jpg), [01:45](images/01-45.jpg), [02:40](images/02-40.jpg).

## 9. Lá bài, chọn mục tiêu và tooltip

### 9.1. Cấu trúc lá bài

Chi phí nằm trong huy hiệu góc trên trái; tên ở trên; hình ở nửa trên; loại bài là nhãn giữa hình và nội dung; mô tả cơ chế ở dưới. Từ khóa có màu nhấn. Trên tay, bài chồng mép; khi rê, lá nâng lên và phóng lớn để đọc.

Không suy ra toàn bộ hệ thống độ hiếm từ màu khung của một số lá. Nội dung damage trên lá có thể thay đổi theo trạng thái hiện tại; chưa xác minh mọi công thức làm tròn.

### 9.2. Các mức tương tác

| Mức | Dấu hiệu quan sát |
| --- | --- |
| Nghỉ trong tay. | Lá nằm trong dải xòe, lộ tên/phí và hình. |
| Đang xem. | Lá nâng lên, lớn hơn; viền xanh nổi; có thể mở tooltip. |
| Đang ngắm ra khoảng trống. | Có đường ngắm xám. |
| Trỏ đúng địch. | Đường ngắm đỏ, dấu góc vàng quanh mục tiêu, tên sát đối tượng. |
| Thi triển. | Lá nổi trên sân, animation chủ thể và kết quả xuất hiện. |
| Rời tay. | Lá có chuyển động về vùng bài; bộ đếm liên quan cập nhật. |

Các dấu hiệu trả lời liên tục: **đang xem lá nào → đang dùng lên ai → lá nào vừa gây hiệu ứng → kết quả là gì → lá đi đâu**.

### 9.3. Tooltip

Tooltip mở cạnh đối tượng đang tra: lá, intent, trạng thái hoặc lựa chọn sự kiện. Có thể thấy các giải thích về Block, Vulnerable, Strength, Shrink, Exhaust, Unplayable, Sown và End Turn. Khi có nhiều từ khóa, các hộp có thể xếp thành cụm dọc.

**Cần chú ý:** tooltip phải ở gần nguồn nhưng không che mất dữ liệu cần so sánh. Lá phóng lớn và tooltip có thể che một phần sân. Đoạn ref chỉ cho thao tác chuột; chưa chứng minh cách tra cứu khi không có hover.

Ảnh: [00:45](images/00-45.jpg), [00:49](images/00-49.jpg), [03:28](images/03-28.jpg).

## 10. Thể hiện trạng thái nhân vật

### 10.1. Phân vai theo vị trí

| Loại thông tin | Vị trí / cách biểu diễn |
| --- | --- |
| Sắp làm gì. | Intent trên đầu địch: icon hành động và số, có tooltip. |
| Đang còn gì. | HP/Block sát chân chủ thể; buff/debuff dưới HP. |
| Vừa xảy ra gì. | Số nổi, chữ hiệu ứng, hit flash, animation trên chủ thể. |
| Đang là lượt ai. | Banner giữa sân, số lượt, Energy, End Turn và tay bài. |

Intent “sẽ tăng sức mạnh” và buff “đã có Strength” là hai lớp thông tin khác nhau. Không gộp mọi icon thành một hàng mà mất vai trò thời gian của chúng.

### 10.2. Bảng biểu diễn đã quan sát

| Trạng thái / sự kiện | Phản hồi ngay khi xảy ra | Dấu còn lại để kiểm tra |
| --- | --- | --- |
| Nhận Block. | Khiên xanh phủ lên người. | Huy hiệu khiên có số sát HP; lớp hiển thị quanh thanh đổi khi có Block. |
| Chặn hết đòn. | Chữ báo chặn và phản hồi va chạm. | HP không giảm, lượng Block còn lại cập nhật. |
| Damage vượt Block. | Số damage lọt qua nổi trên người. | Block tiêu hao, HP giảm tương ứng ở trường hợp quan sát. |
| Địch nhận damage. | Người chơi vung kiếm, hit flash và số nổi gần địch. | Thanh và số HP địch giảm. |
| Nhận Vulnerable. | Tên trạng thái hiện gần địch. | Icon đỏ kèm số dưới HP; khi hết có thông báo. |
| Nhận Strength. | Chữ/hiệu ứng trên người chơi hoặc địch. | Icon kiếm kèm số; giá trị tấn công liên quan thay đổi. |
| Strength tạm thời hết. | Chữ báo hết hiệu lực khi chuyển lượt. | Icon và giá trị liên quan cập nhật. |
| Nhận Slimed. | Hiện chính các lá Status được thêm, phản hồi xanh trên người chơi. | Lá xuất hiện trong vòng bài/tay bài; dùng Exhaust có bộ đếm riêng. |
| Nhận Shrink. | Người chơi bị thu nhỏ rõ rệt. | Hình nhỏ còn tồn tại, icon dưới HP, tooltip ghi tác dụng và điều kiện. |
| Shrink hết. | Báo hết khi Beetle chết. | Hình người trở về kích thước bình thường. |
| Hồi phục. | Số xanh, dấu cộng và hiệu ứng trên người chơi. | HP trên HUD và sát nhân vật cập nhật tới trần. |
| Địch chết. | Gục/bẹt; có chữ báo chết trong khoảnh khắc hạ Slime. | Cụm HP hoạt động biến mất; chuyển thưởng khi hết địch. |

### 10.3. Hồ sơ trạng thái cần đọc được

Mỗi trạng thái cần trả lời: **nguồn gây, chủ thể nhận, tác dụng, giá trị, thời hạn hoặc điều kiện kết thúc**. Hình thể giúp nhận ra nhanh; icon và tooltip bổ sung độ chính xác. Ví dụ Shrink có hình người nhỏ, nhưng tooltip mới cho biết giảm 30% damage Attack khi Beetle còn sống.

**Cần chú ý:** con số trên icon phải làm rõ là số tầng, số lượt hay số lần kích hoạt. Đoạn ref chưa kiểm chứng bố cục khi số lượng icon vượt chỗ hiển thị.

Ảnh: [00:42](images/00-42.jpg), [00:50](images/00-50.jpg), [02:05](images/02-05.jpg), [03:28](images/03-28.jpg), [03:33](images/03-33.jpg).

## 11. Lời nhắc theo ngữ cảnh

Hộp nhắc nhỏ nằm gần vùng liên quan, nền tối lại và mũi tên lớn trỏ chính đối tượng; nút xác nhận đóng lời nhắc. Khác với ba trang combat, loại này giải quyết một cơ chế tại thời điểm phát sinh.

| Trường hợp | Điểm được làm nổi |
| --- | --- |
| Chọn phòng lần đầu. | Nút đầu trên bản đồ. |
| Hết chồng rút. | Hai chồng rút/bỏ ở hai góc. |
| Gặp Power. | Lá Inflame ở màn thưởng. |
| Nhận potion. | Ô potion mới được lấp trên HUD. |

**Cần chú ý:** mũi tên chỉ đúng mục tiêu, tránh cạnh tranh với nhiều hiệu ứng khác. Không dùng bấm xác nhận lời nhắc làm bằng chứng người chơi đã hiểu.

Ảnh: [00:55](images/00-55.jpg), [02:50](images/02-50.jpg), [03:47](images/03-47.jpg).

## 12. Bảng chiến lợi phẩm

Panel đặt giữa trên nền combat làm tối; tiêu đề ở đầu; từng khoản thưởng thành một hàng có icon và nội dung. Nút Skip/Proceed nằm riêng phía phải dưới theo bước hiện tại. Khi nhận một khoản, bảng và dữ liệu đích thay đổi; ô potion trên HUD được lấp khi nhận Fire Potion.

**Thứ bậc:** biết đây là phần thưởng → đọc từng khoản → nhận → kiểm tra còn khoản nào → tiếp tục.

**Cần chú ý:** trạng thái chưa nhận, đã nhận và bỏ qua cần phân biệt. Chưa khảo sát toàn bộ cảnh báo hoặc quy tắc khi rời màn lúc còn thưởng.

Ảnh: [03:45](images/03-45.jpg), [03:46](images/03-46.jpg).

## 13. Chọn bài thưởng

Tiêu đề nhiệm vụ ở trên giữa; ba lá thành một hàng giữa màn; Skip ở dưới giữa. Nền sân tối lại. Lá đang rê được phóng lớn, tooltip mở bên cạnh; các lá khác vẫn đủ nhận diện để so sánh.

**Vai trò UX:** số lựa chọn nhỏ, cấu trúc lá nhất quán, có thể tra luật trước khi nhận. Sau chọn có phản hồi lá đi vào bộ bài, nối với bộ đếm ở HUD.

**Cần chú ý:** giữ quyền bỏ qua rõ ràng; dự trù chỗ cho lá lớn và tooltip mà không che mất toàn bộ lựa chọn cạnh nó.

Ảnh: [01:25](images/01-25.jpg), [02:50](images/02-50.jpg), [03:50](images/03-50.jpg).

## 14. Sự kiện và kết quả lựa chọn

Tranh lớn bên trái; tên sự kiện, đoạn chuyện và các lựa chọn bên phải; HUD giữ trên cùng. Lựa chọn xếp dọc, mỗi hàng có tên hành động và dòng hệ quả. Rê lựa chọn làm viền sáng; có thể hiện tooltip hoặc lá liên quan tại chỗ.

Người chơi đọc theo quan hệ **tình huống → phương án → lợi ích/hệ quả**. Kết quả được phản ánh trên dữ liệu thật: tăng Max HP cập nhật HUD; Enchant trình bày lá đã đổi. Sau khi giải quyết, các lựa chọn chuyển thành bước tiếp tục.

**Cần chú ý:** mô tả cốt truyện không thay thế dòng hệ quả cơ chế. Các từ khóa mới cần tra được ngay ở lựa chọn; không bắt rời màn đi tìm định nghĩa.

Ảnh: [03:00](images/03-00.jpg), [03:01](images/03-01.jpg), [04:00](images/04-00.jpg), [04:20](images/04-20.jpg).

## 15. Chọn bài để Enchant

Danh sách bộ bài thành lưới ở vùng giữa, có thanh cuộn bên phải. Dòng nhắc nhiệm vụ ở dưới giữa; thông tin Sown ở dưới phải. HUD và bối cảnh sự kiện còn nhận ra phía sau. Lá đang rê có thể lớn hơn và mở tooltip.

**Vai trò UX:** ở bước này người chơi chỉ phải chọn đối tượng chịu thay đổi. Có thể xem nhiều bản sao cùng loại bài như những lá riêng.

**Cần chú ý:** giữ dòng nhiệm vụ khi cuộn; cho người chơi nhận biết chính xác bản sao đang chọn; bài ở hàng cuối và tooltip không nên bị cắt ngoài vùng xem.

Ảnh: [04:07](images/04-07.jpg), [04:10](images/04-10.jpg).

## 16. So sánh trước/sau và xác nhận

Nền lưới tối lại; lá gốc bên trái, lá sau thay đổi bên phải, mũi tên nối giữa. Tooltip có thể xếp bên phải lá mới. Nút quay lại ở mép trái, xác nhận ở mép phải. Lá mới bổ sung dấu Sown và dòng hiệu ứng để nhận biết phần thay đổi.

**Vai trò UX:** so sánh trực tiếp, giảm yêu cầu nhớ lá gốc. Người chơi có thể xem kết quả trước khi xác nhận; sau xác nhận, lá mới xuất hiện trên nền sự kiện để đóng vòng thao tác.

**Cần chú ý:** phần thay đổi phải đọc được, phân biệt với phần giữ nguyên. Nếu dùng mẫu này cho nâng bậc/dung hợp của Ashborne, bổ sung chi phí và hệ quả theo luật thật, không chỉ sao bố cục hai lá.

Ảnh: [04:15](images/04-15.jpg), [04:18](images/04-18.jpg), [04:20](images/04-20.jpg).

## 17. Chữ, màu, vật liệu và chuyển động

| Thành phần | Cách xử lý quan sát | Điểm cần chú ý |
| --- | --- | --- |
| Tiêu đề/logo/thông báo lượt. | Chữ có chân, cỡ lớn; vàng hoặc màu phân biệt lượt. | Dễ nhận cấp thông tin, nhưng banner không nên che hoặc chồng thông báo lượt khác. |
| Nội dung và tooltip. | Chữ nhỏ hơn trên nền tối/xanh xám tương đối phẳng. | Giữ đủ tương phản; kiểm tra khi câu dài hoặc nhiều tooltip. |
| Panel và nút. | Mép đá/giấy, đầu cắt, viền nổi khi tương tác. | Vật liệu nhất quán nhưng không làm giảm độ rõ của trạng thái nút. |
| Bản đồ. | Giấy sáng trên nền tối, ký hiệu và đường tuyến. | Giữ khả năng phân biệt đã đi/hiện tại/có thể chọn. |
| Bài. | Khung đỏ nâu, hình trên, chữ dưới, phí góc trái, nhãn loại ở giữa. | Giữ cấu trúc ổn định qua các loại và trạng thái. |
| Màu cơ chế. | Đỏ cho nhiều tín hiệu tấn công/debuff, xanh cho Khiên, xanh lá cho hồi/buff, xanh sáng cho tương tác. | Một màu có thể mang nhiều vai trò; cần chữ, hình và vị trí hỗ trợ. |
| Animation luân chuyển bài. | Đường sáng nối tay bài với các vùng bài. | Giải thích đường đi nhưng có thể cắt ngang intent/HP; nên giảm cường độ khi lặp. |
| Phản hồi nhân vật. | Vung kiếm, va chạm, khiên phủ, hồi phục, thu nhỏ, gục. | Sau animation vẫn cần dữ liệu tĩnh để đọc lại. |

Khoảng 00:40–00:41 có lúc banner Player Turn và Enemy Turn chồng chữ trong bản quay. Đây là tình huống cần tránh khi thiết kế chuyển lượt; chưa có căn cứ để kết luận nguyên nhân kỹ thuật của ref.

## 18. Các điểm cần giữ khi triển khai từ ref

- Thứ bậc màn rõ, một hành động chính dễ nhận biết ở mỗi bước.
- Vị trí thông tin ổn định xuyên lượt và xuyên các màn có cùng vai trò.
- Hiệu ứng luôn xác định được chủ thể nhận; nhiều địch không làm lẫn cụm HP/intent/status.
- Có cả phản hồi tức thời lẫn dấu trạng thái tồn tại sau animation.
- Tra cứu từ khóa tại chỗ; không đánh đổi thông tin cốt lõi để lấy khoảng trống trang trí.
- Xem trước thay đổi và chi phí trước xác nhận trong các thao tác thay đổi thẻ.
- Thử tình huống đông nhất: nhiều địch, nhiều icon, bài lớn, tooltip dài và animation đồng thời.
- Đối chiếu hướng mỹ thuật và luật riêng của Ashborne trước khi chuyển bài học thành đặc tả.

**Chưa xác minh:** toàn bộ màn Settings, shop, nghỉ, thư viện/bộ bài mở từ HUD, boss, thất bại, kết thúc lượt chơi, mobile/gamepad, giảm chuyển động, hitbox, responsive và mọi đường thao tác lỗi. Không tự bổ sung bố cục cho những màn này như thể đã thấy trong ref.
