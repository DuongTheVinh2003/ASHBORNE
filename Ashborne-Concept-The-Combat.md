# Thiết kế thẻ combat Ashborne

Tài liệu tổng hợp **48 lá Vũ khí** của tám họ, **4 hệ Nguyên tố** với 8 mẫu lá theo phẩm và **54 lá Ấn Thú**. Danh sách ghi điều kiện kích hoạt và công dụng của từng lá để dùng khi đặc tả combat PvE ở Phase 2. Luật chồng bài, công thành và độ khó hiện hành nằm trong [GDD/FDD](Ashborne-GDD-va-FDD.md). Thông số, chi phí và công thức còn mở sẽ đặc tả sau.

## Thẻ Vũ khí

Mỗi vũ khí có **6 lá**, gồm 2 lá Trực tiếp, 2 lá Kỹ năng và 2 lá Sức mạnh.

| Nhóm | Cấu trúc mỗi lá | Khi tăng phẩm |
|---|---|---|
| **Trực tiếp** | Tạo ngay tối đa 2 chỉ số thuộc sát thương, Khiên và hồi HP. | Tăng chỉ số trực tiếp. |
| **Kỹ năng** | Có chỉ số trực tiếp và 1–2 hiệu ứng đi kèm, có thể có lợi hoặc bất lợi. | Tăng hiệu quả của hiệu ứng. |
| **Sức mạnh** | Đặt tối đa 3 buff hoặc debuff có điều kiện kích hoạt. | Tăng tác dụng, thời gian duy trì hoặc số lần kích hoạt tùy lá. |

### Đại Kiếm

**Lấy đà và dồn sức vào một cú chém.** Hợp với người thích chuẩn bị trước rồi tung một đòn nặng đúng lúc.

| Nhóm | Lá | Tác dụng |
|---|---|---|
| Trực tiếp | **Chém Bổ** | Gây sát thương lớn lên một địch. |
| Trực tiếp | **Đại Hoành Trảm** | Gây sát thương vừa lên tất cả địch đang giao tranh. |
| Kỹ năng | **Ép Lưỡi** | Gây sát thương. Nếu là hành động đầu tiên trong lượt, tăng sát thương lá Đại Kiếm gây sát thương kế tiếp trong lượt. |
| Kỹ năng | **Chém Dồn Lực** | Gây sát thương lớn. Lá Đại Kiếm kế tiếp chơi trong cùng lượt tốn thêm tài nguyên hành động. |
| Sức mạnh | **Thế Vung Kiếm** | Nếu từ lúc đặt thế đến hết lượt này bạn chưa gây thêm sát thương, đòn Đại Kiếm đầu tiên ở lượt sau được tăng sát thương. |
| Sức mạnh | **Một Đòn Định Thế** | Trong hai lượt của bạn, hành động Đại Kiếm tiêu đủ lượng tài nguyên quy định được tăng sát thương. Kích hoạt tối đa một lần mỗi lượt. |

### Cung

**Chọn con mồi và giữ tầm ngắm qua lượt.** Hợp với người thích ưu tiên một mục tiêu và chuẩn bị phát bắn quyết định.

| Nhóm | Lá | Tác dụng |
|---|---|---|
| Trực tiếp | **Thẳng Tên** | Gây sát thương lớn lên một địch. |
| Trực tiếp | **Bắn Lui** | Gây sát thương nhẹ lên một địch và tạo Khiên cho bản thân. |
| Kỹ năng | **Bắn Ghim** | Gây sát thương và làm đòn tấn công kế tiếp của mục tiêu gây ít sát thương hơn. |
| Kỹ năng | **Bắn Thăm Dò** | Gây sát thương và đánh dấu mục tiêu đến hết lượt sau của bạn. Khi phát Cung kế tiếp trúng mục tiêu, xóa dấu và gây thêm sát thương. |
| Sức mạnh | **Giữ Tầm Ngắm** | Chọn một địch. Nếu từ lúc chọn đến đầu lượt sau bạn chưa gây sát thương lên địch khác, phát Cung đầu tiên đánh trúng mục tiêu trong lượt đó được tăng sát thương. |
| Sức mạnh | **Săn Đầu Đàn** | Chọn một địch. Nếu hạ mục tiêu bằng Cung trong hai lượt của bạn, lá Cung gây sát thương kế tiếp trong trận được giảm chi phí. |

### Giáo

**Giữ tầm, chặn địch lao vào và đâm trả khi nó hở thế.** Hợp với người thích đọc ý đồ và chủ động chọn kẻ cần chặn.

**Giữ Khoảng Cách** đặt lên một địch. Nếu nó tung đòn cận chiến vào bạn trong thời hạn, **hủy cả đòn đó**, xóa Giữ Khoảng Cách và đặt **Hở Thế** lên nó. Hở Thế tồn tại đến hết lượt kế tiếp của bạn.

| Nhóm | Lá | Tác dụng |
|---|---|---|
| Trực tiếp | **Đâm Thẳng** | Gây sát thương tập trung lên một địch. |
| Trực tiếp | **Dựng Mũi Giáo** | Gây sát thương nhẹ lên một địch và tạo Khiên cho bản thân. |
| Kỹ năng | **Ghìm Mũi Giáo** | Gây sát thương và đặt **Giữ Khoảng Cách** lên mục tiêu đến hết lượt địch kế tiếp. Phẩm cao kéo dài thời hạn. |
| Kỹ năng | **Đâm Trả** | Gây sát thương. Nếu mục tiêu đang **Hở Thế**, tiêu trạng thái để gây thêm sát thương. Phẩm cao tăng sát thương cộng thêm. |
| Sức mạnh | **Thế Đón Đòn** | Vào thế đến hết lượt địch kế tiếp. Nếu **Giữ Khoảng Cách** chặn được một đòn trong thời gian này, cú **Đâm Trả** tiêu Hở Thế do đòn đó tạo ra được tăng thêm sát thương. Phẩm cao tăng phần thưởng phản đòn. |
| Sức mạnh | **Giữ Địch Ngoài Tầm** | Chọn một địch đang có ý đồ tấn công cận chiến. Đặt **Giữ Khoảng Cách** lên nó đến hết lượt địch kế tiếp. Phẩm cao kéo dài thời hạn. |

### Vũ Khí Đôi

**Mở sơ hở, khai thác ngay trong lượt rồi rút khỏi đòn trả.** Hợp với người thích xếp thứ tự lá và dồn nhiều hành động vào đúng một mục tiêu.

| Nhóm | Lá | Tác dụng |
|---|---|---|
| Trực tiếp | **Song Kích** | Gây sát thương lên một địch. |
| Trực tiếp | **Lướt Cắt** | Gây sát thương nhẹ lên một địch và tạo một ít Khiên cho bản thân. |
| Kỹ năng | **Nhử Sơ Hở** | Gây sát thương và đặt dấu **Sơ Hở** đến hết lượt. Lá Vũ Khí Đôi kế tiếp gây sát thương lên đúng mục tiêu tiêu dấu để gây thêm sát thương. |
| Kỹ năng | **Đâm Rút** | Gây sát thương. Nếu bạn đã tiêu dấu Sơ Hở trên chính mục tiêu trước khi chơi lá này trong lượt, đòn trực tiếp kế tiếp của mục tiêu gây ít sát thương hơn. |
| Sức mạnh | **Ẩn Mình** | Nếu bạn kết thúc lượt mà chưa gây thêm sát thương kể từ lúc chơi lá này, lá Vũ Khí Đôi gây sát thương đầu tiên ở lượt sau được tăng sát thương. |
| Sức mạnh | **Ra Tay Trong Chớp Mắt** | Trong hai lượt của bạn, lần đầu mỗi lượt tiêu dấu Sơ Hở, lá Vũ Khí Đôi kế tiếp đánh đúng mục tiêu đó trong cùng lượt được giảm chi phí. |

### Kiếm và Khiên

**Đón đòn bằng Khiên để mở đường phản công.** Hợp với người thích phòng thủ chủ động và đánh trả đúng kẻ vừa tấn công mình.

| Nhóm | Lá | Tác dụng |
|---|---|---|
| Trực tiếp | **Chém Tiến** | Gây sát thương lên một địch. |
| Trực tiếp | **Nâng Khiên** | Tạo lượng Khiên lớn cho bản thân. |
| Kỹ năng | **Gạt Khiên** | Tạo Khiên. Đòn trực tiếp kế tiếp nhắm vào bạn gây ít sát thương hơn. |
| Kỹ năng | **Phản Kích** | Gây sát thương. Tăng sát thương nếu chính mục tiêu này đã đánh vào Khiên của bạn trong lượt địch vừa qua. |
| Sức mạnh | **Thế Đỡ Phản** | Nếu Khiên hấp thụ trọn một đòn trực tiếp ở lượt địch kế tiếp, lá Kiếm và Khiên gây sát thương đầu tiên trong lượt của bạn sau đó được tăng sát thương. |
| Sức mạnh | **Giữ Tuyến** | Trong hai lượt địch kế tiếp, nếu bạn còn Khiên sau đòn trực tiếp đầu tiên nhận trong lượt, đòn trực tiếp kế tiếp trong cùng lượt đó gây ít sát thương hơn. |

### Trượng Phép

**Dành tài nguyên và chuẩn bị hiệu ứng cho lượt sau.** Hợp với người thích lên kế hoạch qua nhiều lượt và xen hồi phục với tấn công.

| Nhóm | Lá | Tác dụng |
|---|---|---|
| Trực tiếp | **Xung Phép** | Gây sát thương lên một địch. |
| Trực tiếp | **Hồi Quang** | Hồi HP và tạo một lượng Khiên nhỏ cho bản thân. |
| Kỹ năng | **Dấu Hẹn** | Gây sát thương và đặt dấu đến hết lượt sau của bạn. Khi dùng Trượng Phép đánh lại đúng mục tiêu trong lượt sau, tiêu dấu để gây thêm sát thương. |
| Kỹ năng | **Tĩnh Tâm** | Tạo Khiên. Giảm chi phí lá Trượng Phép đầu tiên chơi ở lượt sau của bạn. |
| Sức mạnh | **Tụ Lực** | Nếu kết thúc lượt với đủ lượng tài nguyên hành động chưa dùng, tăng chỉ số trực tiếp của lá Trượng Phép đầu tiên ở lượt sau. |
| Sức mạnh | **Nghi Thức Bảo Hộ** | Trong hai lượt của bạn, nếu đã chơi một lá Trượng Phép hồi HP, lá Trượng Phép gây sát thương đầu tiên chơi sau đó trong cùng lượt được tăng sát thương. |

### Rìu

**Canh HP của cả hai bên để đánh liều hoặc kết liễu.** Hợp với người thích chấp nhận rủi ro, dồn ép địch thấp máu và hồi sức khi hạ mục tiêu.

| Nhóm | Lá | Tác dụng |
|---|---|---|
| Trực tiếp | **Bổ Dọc** | Gây sát thương lớn lên một địch. |
| Trực tiếp | **Vung Rìu** | Gây sát thương vừa lên tất cả địch đang giao tranh. |
| Kỹ năng | **Kết Liễu** | Gây sát thương. Tăng sát thương nếu HP của mục tiêu đã dưới ngưỡng trước khi trúng đòn. |
| Kỹ năng | **Cướp Sức** | Gây sát thương. Nếu chính lá này hạ mục tiêu, hồi HP cho bản thân. |
| Sức mạnh | **Cuồng Chiến** | Trong hai lượt của bạn, khi HP bản thân dưới ngưỡng, các lá Rìu gây thêm sát thương và bạn chịu thêm sát thương trực tiếp từ địch. |
| Sức mạnh | **Dư Chấn Chiến Thắng** | Nếu hạ một địch bằng Rìu trong trận này, lá Rìu gây sát thương đầu tiên ở trận kế tiếp trong cùng lần công thành được tăng sát thương. |

### Búa Chiến và Chùy

**Phá Khiên rồi đánh vào khoảng trống vừa mở.** Hợp với người thích tính thứ tự đòn để hạ mục tiêu có phòng ngự dày.

| Nhóm | Lá | Tác dụng |
|---|---|---|
| Trực tiếp | **Nện Xuống** | Gây sát thương lớn lên một địch. |
| Trực tiếp | **Quét Búa** | Gây sát thương vừa lên tất cả địch đang giao tranh. |
| Kỹ năng | **Đập Vỡ** | Gây sát thương. Nếu mục tiêu có Khiên, phá thêm một phần Khiên trước khi áp sát thương. |
| Kỹ năng | **Nện Tiếp** | Gây sát thương. Nếu Khiên của mục tiêu đã bị phá sạch trong lượt này, tăng sát thương đòn. |
| Sức mạnh | **Vết Rạn** | Đặt debuff lên một địch trong hai lượt của bạn. Lần kế tiếp đòn của bạn đánh Khiên của nó về 0, đòn trực tiếp tiếp theo lên nó được tăng sát thương. |
| Sức mạnh | **Dồn Trọng Lượng** | Nếu kết thúc lượt mà chưa gây sát thương lên địch, lá Búa Chiến / Chùy gây sát thương đầu tiên ở lượt sau được tăng sát thương. |

## Thẻ Nguyên tố

**Lửa cháy và lan, Nước hồi sinh lực, Gió đổi nhịp rút bài, Đất dựng và giữ Khiên.** Phẩm thường cho một tác động nhẹ trong một nhịp. Phẩm cao mới mở buff hoặc debuff kéo dài nhiều lượt.

Cảm hứng từ hình khối và chuyển động trong *Timaeus* của Plato, cùng tính ẩm dễ đổi hình và tính khô dễ giữ hình của Aristotle, được chuyển thành bốn cơ chế combat dưới đây. [Timaeus của Plato](https://www.gutenberg.org/files/1572/1572-h/1572-h.htm#link2H_4_0008) và [On Generation and Corruption của Aristotle, Quyển II](https://classics.mit.edu/Aristotle/gener_corr.2.ii.html)

| Nguyên tố | Lá phẩm thường | Lá phẩm cao |
|---|---|---|
| **Lửa — Cháy và lan** | **Tàn Lửa.** Đòn được cường hóa gây thêm một ít sát thương. | **Than Truyền.** Đòn gieo một đốm than lên địch trong vài lượt. Mỗi lượt, lần đầu bạn đánh trúng nó, than bùng lên gây thêm sát thương. Nếu chính cú bùng đó hạ mục tiêu, đốm than truyền sang một địch khác với thời hạn còn lại. |
| **Nước — Thấm và hồi sinh lực** | **Mạch Nguồn.** Hồi một ít HP. Khi gắn vào đòn, hồi HP sau khi đòn được giải quyết. | **Mạch Ngầm.** Trong vài lượt, đầu mỗi lượt của bạn, hồi lại **một phần HP đã mất trong lượt địch vừa qua**, có giới hạn mỗi lần. |
| **Gió — Luân chuyển** | **Hơi Gió.** Nhìn lá trên cùng của chồng rút. Giữ nó ở đó hoặc đưa xuống đáy. | **Gió Hồi.** Trong vài lượt, trước khi bỏ bài cuối lượt, bạn có thể chọn một lá vũ khí chưa dùng để đặt lên đầu chồng rút. Lá đó chiếm một lượt rút bình thường ở lượt sau. |
| **Đất — Giữ nền** | **Vỏ Đá.** Tạo một ít Khiên. Khi gắn vào đòn, nhận Khiên sau khi đòn được giải quyết. | **Nền Đá.** Trong vài lượt, khi Khiên sắp hết hạn, giữ lại một phần sang lượt sau, có giới hạn. Khiên đã bị địch đánh vỡ thì hết. |

### Dùng riêng và gắn đòn

**Dùng riêng** để kích hoạt lá hoặc đặt buff chờ cho đòn Đánh thường kế tiếp trong cùng lượt khi hiệu ứng cần đòn đánh. **Gắn vào đòn** để đổi nguyên tố của đòn và áp hiệu ứng gắn đòn. Cả hai cách đều góp điểm vào thanh nguyên tố tương ứng. Địa vực có thể giúp nguyên tố của vùng tích nhanh hơn.

- **Tuyệt kỹ.** Chồng khớp công thức cụ thể tạo Tuyệt kỹ. Điều kiện loại lá, số lá và vai trò của thanh Nguyên tố trong từng công thức sẽ thiết kế sau.
- **Tiết Chế.** Gắn hệ đối nghịch vào đòn có thể giảm thanh khi thanh còn dưới ngưỡng đầy. Hai cặp là **Lửa ↔ Nước** và **Gió ↔ Đất**. Ngưỡng đầy và lượng tăng giảm sẽ thiết kế sau.
- **Quá tải.** Thanh vừa đầy thì Quá tải kích hoạt ngay, kể cả giữa lượt, và duy trì đến hết cuộc công thành. Giữ Quá tải khi chuyển trận trong cùng thành. Nếu thanh đầy đúng lúc hạ quái cuối cùng và hoàn tất công thành, người chơi không chịu hậu quả. Hậu quả cụ thể và tương tác với bài sẽ đặc tả sau. Khả năng nạp lại Ấn Thú khi Quá tải chờ playtest.

Giáo có thể dùng **Gió Hồi** để giữ **Đâm Trả** cho lượt sau khi đã chặn đòn. Kiếm và Khiên có thể dùng **Nền Đá** để dành Khiên dư cho lượt kế tiếp.

Trong chồng sai công thức Tuyệt kỹ, lá Nguyên tố kích hoạt ngay đầu chuỗi và dẫn hiệu ứng theo các chiêu sau. Các chiêu vũ khí giữ thứ tự tương đối theo lúc đặt lá. Ví dụ, VK1 → Tàn Lửa → VK2 giải quyết Tàn Lửa → VK1 → VK2. Số lần áp hiệu ứng và xử lý nhiều lá Nguyên tố trong cùng chồng sẽ đặc tả sau. [GDD/FDD về Tuyệt kỹ và Nguyên tố](Ashborne-GDD-va-FDD.md#05-fdd-nguyên-tố)

## Ấn Thú

Mỗi lá ứng với **một sinh vật có thể phong ấn và một năng lực mượn từ sinh vật đó**. Bốn chất tương ứng với **♠ Gió, ♥ Lửa, ♦ Nước, ♣ Đất**. **Joker Đen** và **Joker Trắng** đứng ngoài bốn chất.

**Nguồn gốc sinh vật — quyết định ngày 27/11/2026.** Sinh vật mang Ấn là thủy tổ và cá thể mạnh nhất trong dòng hậu duệ của mình, mang đầy đủ đặc điểm và năng lực mô tả trên lá. Hậu duệ nhỏ hơn, yếu hơn, có thể thừa hưởng một phần sức mạnh hoặc chỉ giữ hình dáng mà không còn sức mạnh nguyên thủy. Các quần thể chịu ảnh hưởng lâu dài của môi trường có thể hình thành những nhánh mới tại nơi sinh sống. Số 54 chỉ số dòng thủy tổ của bộ Ấn, không giới hạn toàn bộ số loài trong thế giới. Mỗi nhánh hậu duệ tiếp tục quy về Ấn gốc; không tự sinh thêm Ấn hoặc đổi luật thu phục.

Người chơi mang tối đa ba ấn vào khu vực riêng của Phase 2. Kích hoạt ấn dùng điểm riêng, độc lập với mana hoặc Energy của bài thường. Mỗi ấn dùng một lần trong cả cuộc công thành, xuyên các trận. Chỉ sau khi chiếm thành mới được mang bộ mới vào. Khả năng nạp lại ấn khi Quá tải sẽ quyết định sau playtest.

**Hai nguồn sức mạnh của hậu duệ — bổ sung ngày 27/11/2026.** Sức mạnh nguyên thủy là phần quyền năng thừa hưởng từ thủy tổ và có thể khó biểu hiện hoặc mất hoàn toàn. Sức mạnh thích nghi hình thành theo môi trường sống, là đặc tính của những nhánh đã phân hóa và không mặc định là dị biến cực hiếm. Hậu duệ không còn quyền năng nguyên thủy vẫn có thể sở hữu năng lực thích nghi: tác động lên đất đá, nhiệt, nước, ánh sáng, âm thanh hoặc các thuộc tính khác phù hợp sinh cảnh. Mỗi năng lực có điều kiện và giới hạn riêng; màu sắc, kích thước hoặc khả năng sống sót thuần túy không thay thế cho mô tả năng lực fantasy. Thủy tổ tiếp tục là cá thể mạnh nhất của dòng; lợi thế chuyên biệt tại một sinh cảnh không tự làm hậu duệ vượt tổng thể thủy tổ. Hai nguồn này không tự sửa hiệu ứng thẻ, chỉ số combat, số lượng Ấn hoặc quy tắc thu phục.

Ưu tiên combo poker. Nếu triển khai có quá nhiều luật, phương án dự phòng là ghép theo nguyên tố, lấy số lá tham gia xác định bội số sức mạnh. Các tổ hợp áp dụng với bộ tối đa ba ấn và công thức cụ thể sẽ thiết kế sau.

### Thứ tự sức mạnh

Trong Kamen Rider Blade, Toei phân Undead thành bốn chất, mỗi chất từ A đến K. **A** là nhóm đặc biệt dùng để biến thân, còn **J, Q, K** thuộc nhóm Undead cấp cao. Joker gốc đứng ngoài bốn chất, và Albino Joker xuất hiện trong *Missing Ace* với năng lực chiến đấu tương đương Joker gốc. [Toei Phân loại Undead](https://www.kamen-rider-official.com/dictionaries/works_search?search_dictionaries_form%5Bicon%5D=15&search_dictionaries_form%5Bkamen_rider_id%5D=5&utf8=%E2%9C%93) và [Toei Category A](https://www.kamen-rider-official.com/dictionaries/keywords_search?search_dictionaries_form%5Bkeyword_for_title%5D=%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AAA&utf8=%E2%9C%93) và [Toei Albino Joker](https://www.kamen-rider-official.com/zukan/phantoms/690)

| Hạng | Vai trò trong Ashborne |
|---|---|
| **A** | **Ấn Khai Dạng.** Mượn một đặc tính của thú và đổi cách chơi trong một lượt. |
| **2–5** | Tăng dần từ quái thường lên quái nguy hiểm. Ấn có công dụng gọn, dễ dùng đúng lúc. |
| **6–10** | Tăng dần trong nhóm tinh anh. Ấn có thể tác động nhiều lượt, nhiều mục tiêu hoặc thay đổi nhịp trận. |
| **J → Q → K** | Ba cấp boss tăng dần trong mỗi chất. **J** tạo đột biến, **Q** buộc người chơi thích nghi với một cơ chế riêng, **K** là đỉnh sức mạnh của chất. |
| **Joker Đen / Trắng** | Hai cuộc săn riêng, cùng cấp. Mỗi Joker can thiệp vào một luật lớn của trận. |

Quy tắc trùng mô-típ áp dụng theo **nhóm sinh vật dễ nhận ra trên lá bài**, xét xuyên cả bốn chất. Lá thấp giữ mô-típ gốc. Lá cao chuyển thành quái fantasy cùng nhóm. Ví dụ, sư tử, báo đốm và hổ cùng nhóm mèo lớn. Lá **3♠** giữ hình tượng sư tử, còn **9♠** và **Q♣** thành hai quái fantasy khác nhau mang hình thái mèo lớn. Với hai Át cùng nhóm bọ cánh cứng, cả hai giữ hình tượng riêng vì chúng đồng hạng. Dấu **✦** đánh dấu các lá được đổi theo luật này. Cột *Gốc Blade* ghi mô-típ sinh vật để dễ đối chiếu. [Toei Danh mục Rouse Card của cả bốn chất](https://www.kamen-rider-official.com/zukan/items/mode/categories?item%5Bkamen_rider_id%5D=5&utf8=%E2%9C%93)

### ♠ Bích và Gió

Gió chi phối **thứ tự, nhịp hành động và thời điểm bài trở lại tay**. Từ hạng thấp lên hạng cao, sức mạnh đi từ chỉnh một lần rút đến sắp xếp cả tay bài kế tiếp.

| Lá | Gốc Blade | Ấn Thú Ashborne | Năng lực khi mở ấn |
|---|---|---|---|
| **A♠** | Bọ tê giác | **Giáp Dực Phong** | Khai Dạng trong lượt này. Sau hành động vũ khí đầu tiên, có thể đổi một lá trên tay lấy lá trên cùng chồng rút. |
| **2♠** | Thằn lằn | **Thằn Lằn Lướt Vách** | Xem lá trên cùng chồng rút và chọn giữ hoặc đưa xuống đáy. |
| **3♠** | Sư tử | **Sư Tử Gầm Đèo** | Tiếng gầm làm đòn trực tiếp kế tiếp của một địch yếu đi. |
| **4♠** | Lợn rừng | **Lợn Rừng Ngược Gió** | Gây sát thương. Có thể đưa một lá Trực tiếp vừa chơi từ chồng bỏ lên đầu chồng rút. |
| **5♠** | Châu chấu | **Châu Chấu Vượt Khe** | Rút một lá, rồi chọn một lá trên tay đặt xuống đáy chồng rút. |
| **6♠** | Hươu | **Hươu Sừng Sấm** | Chọn một lá vũ khí trên tay. Đặt nó lên đầu chồng rút và giảm chi phí lần chơi đầu tiên của nó ở lượt sau. |
| **7♠** | Bọ ba thùy | **Hóa Thạch Nghe Gió** | Xem trước ba lá đầu của chồng rút và sắp lại thứ tự. |
| **8♠** | Trâu | **Trâu Kéo Mây** | Chọn một lá vũ khí ở gần đáy chồng rút và đưa nó lên đầu. |
| **9♠** | Báo đốm | **✦ Miêu Ảnh Chín Vệt** | Mèo lớn tách thành dư ảnh. Trong hai lượt, lần đầu chơi hết các lá vũ khí trên tay, rút thêm một lá. |
| **10♠** | Bọ hung | **✦ Bọ Hung Giữ Khắc** | Bọ thần giữ một khắc trong vỏ. Chọn một địch đang chuẩn bị kỹ năng. Lùi kỹ năng đó sang lượt địch sau. |
| **J♠** | Đại bàng | **✦ Điểu Sư Vực Gió** | Griffin sà xuống. Rút ngay một lá vũ khí tự chọn từ ba lá đầu chồng rút. Nếu chơi ngay, lá đó được giảm chi phí. |
| **Q♠** | Dê | **Dê Chúa Sừng Mây** | Trong hai lượt, sau lần rút đầu tiên, có thể đổi một lá trên tay với một lá trong ba lá đầu chồng rút. |
| **K♠** | Bọ tê giác Caucasus | **✦ Vương Giáp Mắt Bão** | Chúa bọ giáp rỗng mang cả cơn bão bên trong. Chọn và xếp trước các lá sẽ rút ở lượt sau. Lá vũ khí đầu tiên trong tay đã xếp được giảm chi phí. |

### ♥ Cơ và Lửa

Lửa chi phối **áp lực và sự lan truyền**. Lá thấp châm lửa. Lá cao thưởng cho việc giữ lửa sống qua nhiều đòn hoặc chuyền nó sang mục tiêu mới.

| Lá | Gốc Blade | Ấn Thú Ashborne | Năng lực khi mở ấn |
|---|---|---|---|
| **A♥** | Bọ ngựa | **Đường Lang Lưỡi Hồng** | Khai Dạng trong lượt này. Đòn vũ khí đầu tiên gieo than, đòn kế tiếp vào cùng mục tiêu làm than bùng. |
| **2♥** | Người | **Người Giữ Lửa Cuối Cùng** | Châm lửa vào đòn vũ khí kế tiếp, cộng một ít sát thương. |
| **3♥** | Cá mập đầu búa | **Cá Đầu Búa Biển Tro** | Gây sát thương lên một địch. Tăng sát thương nếu mục tiêu đã bị thương trong lượt này. |
| **4♥** | Chuồn chuồn | **Chuồn Chuồn Kim Hỏa** | Gây sát thương nhẹ lên hai địch khác nhau. |
| **5♥** | Sò hoặc ốc có vỏ | **Ốc Lò Than** | Gieo than lên một địch. Đòn vũ khí kế tiếp của bạn vào mục tiêu làm than bùng. |
| **6♥** | Diều hâu | **Diều Hâu Ráng Đỏ** | Gây sát thương và châm Thiêu Đốt. Nếu lần Thiêu Đốt đầu tiên hạ địch, tàn lửa bắn sang một địch khác. |
| **7♥** | Thực vật | **Dây Gai Đỏ** | Trong hai lượt, lần đầu mục tiêu bị đánh trúng mỗi lượt, dây gai siết lại và gây thêm sát thương. |
| **8♥** | Bướm đêm | **Ngài Cánh Tro** | Rắc tro lên địch. Lần kế tiếp một trong số chúng nhận Thiêu Đốt trong thời hạn, tro cháy và gây sát thương nhẹ lên các mục tiêu còn lại đã bị rắc tro. |
| **9♥** | Lạc đà | **Lạc Đà Chở Than** | Trong hai lượt, lần đầu đánh trúng một địch đang cháy mỗi lượt, tăng lượng sát thương của lần Thiêu Đốt kế tiếp trên nó. |
| **10♥** | Rết | **Rết Trăm Đốt Hồng** | Gieo các đốt than lên một địch. Mỗi lần một lá vũ khí riêng đánh trúng nó trong lượt này, một đốt than nổ. |
| **J♥** | Sói | **Sói Săn Tàn Hỏa** | Gây sát thương mạnh lên địch đang cháy. Nếu hạ nó, chuyển lượng Thiêu Đốt còn lại sang một mục tiêu khác. |
| **Q♥** | Phong lan | **✦ Lan Yêu Hút Tro** | Lan ăn thịt bén rễ trong tro. Trong hai lượt, lần đầu Thiêu Đốt kích hoạt mỗi lượt, tạo một nụ lửa. Khi hết hạn, tất cả nụ nổ lên địch đang cháy. |
| **K♥** | Bọ ngựa ma | **✦ Nanh Tro** | Bọ ngựa tang lễ kết từ tro của cả một lò thiêu. Gây một đòn lớn và gieo than vương ấn. Nếu kẻ mang than bị hạ trong thời hạn, than nhảy sang địch kế tiếp và bùng ngay. Mỗi địch chỉ nhận vương ấn một lần. |

**Mô tả 2♥ — Người Giữ Lửa Cuối Cùng**

Người Giữ Lửa Cuối Cùng là thủy tổ mang hình người của các chủng tộc hình người hiện tại. Ngọn lửa nguyên thủy của ngài có thể truyền vào vũ khí, để lại sức mạnh mà các thế hệ sau chỉ thừa hưởng từng phần. Có hậu duệ còn giữ được khả năng liên quan đến lửa; có nhánh chỉ giữ hình dáng mà không còn sức mạnh ấy. Qua những môi trường sống khác nhau, các dòng hậu duệ tiếp tục phân hóa về hình thể và đặc tính. Trong thế giới hiện tại, dấu vết của thủy tổ gắn với những cộng đồng giữ lửa, thợ rèn và người nghiên cứu hỏa thuật. Quan hệ phả hệ cụ thể giữa từng chủng hình người sẽ được xác định riêng.

Hiệu ứng chiến đấu của 2♥ giữ nguyên như trong bảng. Hạng lá và lượng sức mạnh người chơi mượn được không tự xác định toàn bộ quy mô quyền năng hoặc vai trò lịch sử của thủy tổ.

### ♦ Rô và Nước

Nước chi phối **hồi HP và phục hồi sau tổn thương**. Các ấn cấp cao khác nhau ở thời điểm hồi, lượng thương tổn được ghi nhận và cách giữ phần hồi phục để dùng sau.

| Lá | Gốc Blade | Ấn Thú Ashborne | Năng lực khi mở ấn |
|---|---|---|---|
| **A♦** | Bọ hươu | **Giáp Hươu Mạch Suối** | Khai Dạng trong lượt này. Đòn vũ khí đầu tiên hồi một ít HP. Lượng hồi tăng nếu bạn mất HP ở lượt địch vừa qua. |
| **2♦** | Tatu | **Tatu Cuộn Sương** | Hồi một ít HP ngay. |
| **3♦** | Ếch | **Ếch Túi Mưa** | Hồi một ít HP khi kết thúc lượt này. |
| **4♦** | Chim gõ kiến | **Chim Gõ Mạch** | Đòn vũ khí kế tiếp trúng địch hồi HP. |
| **5♦** | Cá voi | **Cá Voi Bể Ngầm** | Hồi HP ngay, tăng lượng hồi khi HP hiện tại dưới ngưỡng. |
| **6♦** | Đom đóm | **✦ Bọ Đèn Triều** | Bọ đèn dẫn đường trong hang ngập nước. Hồi một ít HP ở đầu mỗi lượt trong hai lượt. |
| **7♦** | Rùa | **Rùa Gương** | Ghi lại HP lúc mở ấn. Đầu lượt sau, nếu HP thấp hơn mốc đó, hồi một phần chênh lệch. |
| **8♦** | Dơi | **Dơi Hang Nước** | Gây sát thương lên một địch và hồi HP theo một phần sát thương thực sự lấy khỏi HP của nó. |
| **9♦** | Ngựa vằn | **Mã Vằn Hai Dòng** | Hồi HP ngay. Nếu lần hồi này vượt HP tối đa, giữ một phần lượng dư để hồi sau lần kế tiếp bạn mất HP trong thời hạn. |
| **10♦** | Tắc kè hoa | **✦ Long Tắc Kè Kính** | Bò sát có da đổi màu theo vết thương. Ghi nhận lượng HP mất từ đòn trực tiếp đầu tiên trong lượt địch tới, rồi hồi lại một phần ở đầu lượt sau. |
| **J♦** | Công | **Công Bách Nhãn Thủy** | Xòe đuôi thành một trận mưa. Hồi HP ngay và đặt hai đợt hồi nhỏ ở đầu hai lượt kế tiếp. |
| **Q♦** | Rắn | **✦ Thủy Xà Lột Xác** | Đại xà thay da mỗi lần nước dâng. Hồi HP và gột một debuff. Nếu đã gột thành công, hồi thêm HP ở đầu lượt sau. |
| **K♦** | Bọ hươu Giraffa | **✦ Thủy Vương Hàm Lưỡi Liềm** | Chúa bọ hươu sống dưới hồ sâu. Trong hai lượt, ghi nhận HP bạn mất. Khi hết hạn, hồi lại một phần tổng lượng đã mất, tới giới hạn của ấn. |

### ♣ Tép và Đất

Đất chi phối **Khiên, thế đứng và phá kết cấu**. Cùng một chất có thể dựng thành để chịu đòn hoặc làm sập thành của đối phương.

| Lá | Gốc Blade | Ấn Thú Ashborne | Năng lực khi mở ấn |
|---|---|---|---|
| **A♣** | Nhện | **Nhện Dệt Nền** | Khai Dạng trong lượt này. Lá vũ khí đầu tiên tạo Khiên được tăng Khiên. |
| **2♣** | Ong | **Ong Hang Đất** | Tạo một ít Khiên ngay. |
| **3♣** | Chuột chũi | **Chuột Chũi Đào Hào** | Tạo Khiên nếu ý đồ hiện tại của địch có ít nhất một đòn cận chiến nhắm vào bạn. |
| **4♣** | Tê giác | **Tê Giác Húc Cổng** | Phá một phần Khiên của một địch. |
| **5♣** | Hổ mang | **Hổ Mang Cát Nén** | Tạo Khiên. Nếu Khiên từ lá này chưa bị phá hết khi sang lượt sau, giữ lại một phần. |
| **6♣** | Gấu Bắc Cực | **Gấu Đá Trắng** | Tạo Khiên lớn. Lần kế tiếp Khiên về 0 do đòn địch, tạo lại một lớp Khiên nhỏ sau khi đòn giải quyết. |
| **7♣** | Sứa | **Sứa Khoáng** | Tạo Khiên và giữ lại một phần Khiên dư qua hai lần chuyển lượt. |
| **8♣** | Bọ cạp | **Bọ Cạp Mỏ Quặng** | Ghim một địch. Lần kế tiếp Khiên của nó bị phá hết trong thời hạn, nó nhận một đòn từ đuôi bọ cạp. |
| **9♣** | Mực | **Mực Phun Bụi Mỏ** | Trong hai lượt, giảm lượng Khiên mà mục tiêu tự tạo ở mỗi hành động. |
| **10♣** | Heo vòi | **Heo Vòi Ăn Khoáng** | Bóc một phần Khiên địch và tạo Khiên cho bạn theo lượng thực sự bóc được, tới giới hạn. |
| **J♣** | Voi | **Nứt Thành** | Voi đá giẫm vỡ phòng tuyến. Phá một lượng lớn Khiên của một địch. Nếu phá hết, mục tiêu khó dựng lại Khiên ở hành động kế tiếp. |
| **Q♣** | Hổ | **✦ Hổ Quỷ Mặt Ngọc** | Quỷ mang mặt hổ giữ cổng đá. Trong hai lượt địch, lần đầu Khiên của bạn bị phá hết, phá Khiên của kẻ vừa ra đòn và dựng một lớp Khiên mới cho bạn sau đòn đó. |
| **K♣** | Nhện tarantula | **✦ Mẫu Nhện Dệt Thành** | Mẫu nhện dệt tường đá quanh bạn. Tạo Khiên lớn. Trong hai lượt kế tiếp, phần Khiên dư được giữ lại tới giới hạn và lần đầu lớp Khiên vỡ, tường đá tự dựng lại một phần. |

### Hai Joker

| Lá | Ấn Thú | Năng lực khi mở ấn |
|---|---|---|
| **Joker Đen** | **Vô Diện Nuốt Tên** | Chọn một Ấn Thú khác bạn đã dùng trong trận. Joker mượn năng lực lẻ của ấn đó và thực hiện thêm một lần. Hình tượng là một sinh vật không có gương mặt riêng, khoác hình của những thú đã bị phong ấn. |
| **Joker Trắng** | **Bạch Diện Khai Ấn** | Chọn một địch. Giải phóng toàn bộ hiệu ứng có lợi đang tồn tại trên nó. Nếu lượt đó địch đã công bố ý đồ được một trong các hiệu ứng ấy cường hóa, giải quyết ý đồ theo hiệu lực còn lại. Hình tượng là một sinh vật trắng nhợt chuyên mở những phong ấn đã khép. |

**Rùa Gương 7♦** chuyển từ tạo Khiên sang hồi HP. **Nứt Thành J♣** giữ vai trò phá Khiên. **Nanh Tro K♥** mang hình thái bọ ngựa tang lễ, biến thể fantasy của mô-típ bọ ngựa đã có ở A♥. [Ba ấn thử nghiệm trong GDD/FDD](Ashborne-GDD-va-FDD.md)

## Các phần cần đặc tả

- **Vũ khí.** Chốt sát thương, Khiên, hồi HP, chi phí, ngưỡng kích hoạt, mức tăng theo phẩm và thứ tự xử lý khi chồng bài.
- **Nguyên tố.** Chốt cường độ, thời hạn theo phẩm, công thức Tuyệt kỹ, số lần áp hiệu ứng trong chuỗi và tương tác với hậu quả Quá tải theo bản sắc của từng hệ.
- **Ấn Thú.** Chốt điều kiện săn và thu phục từng thú, độ mạnh theo hạng, chi phí và quy tắc hồi điểm riêng, combo poker hoặc phương án dự phòng theo nguyên tố. Khả năng nạp lại ấn khi Quá tải chờ playtest. [GDD/FDD](Ashborne-GDD-va-FDD.md#06-fdd-bộ-bài-và-ấn-thú)
- **Quân đội Phase 1.** Cần chốt danh sách quân đội khởi đầu theo luật ghép Chủng tộc và Binh chủng, gồm số bản sao, bậc, chỉ số, chi phí và điều kiện nâng bậc. [Chủng tộc và Binh chủng](Ashborne-Chung-toc-va-Binh-chung.md)
