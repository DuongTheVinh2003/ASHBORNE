# Ashborne — Tổng hợp task làm rõ gameplay

Tài liệu ghi lại các quyết định và câu hỏi còn mở từ lúc ghép đạo quân đến khi chiếm xong một thành. Phạm vi của task là luật gameplay chính. Công thức, chỉ số, chi phí và thông số cân bằng sẽ được thiết kế sau. Đã ghi nhận các quyết định qua năm nhóm vấn đề. Cơ chế nạp lại Ấn Thú khi Quá tải và cách xử lý tiến trình, phần thưởng, tổn thất sau khi thua sẽ quyết định sau playtest. Những câu hỏi và phần đặc tả còn mở nằm trong từng mục. Luật đã được đồng bộ vào [GDD/FDD](Ashborne-GDD-va-FDD.md), [hệ quân](Ashborne-Chung-toc-va-Binh-chung.md) và [concept thẻ](Ashborne-Concept-The-Combat.md). Core Combat System và bản quyết định gameplay ngắn đã được gộp vào các tài liệu này, bản gốc lưu trong `.backups`.

## 1. Phase 1 — Ghép quân, xếp đội hình và công thành

### Đã chốt

- **Luồng chơi.** Ghép binh chủng → xếp đội hình → hệ thống tự mô phỏng giao tranh → nhận kết quả và kết thúc Phase 1. Nếu phá được phòng tuyến, chuyển sang Phase 2. Lối chơi Phase 1 theo hướng battle simulator hoặc formation strategy.
- **Nâng bậc trước, dung hợp sau.** Nâng bậc tăng chỉ số mặc định của lá, các chỉ số phụ chỉ tăng theo phần trăm. Luật ghép đã có trong tài liệu hệ quân cho phép ghép các lá cùng binh chủng, cùng bậc để lên bậc. Ghép lá Chủng tộc với lá Binh chủng tạo quân nhận bậc của lá Binh chủng. Tổ hợp ngoài sở trường vẫn tạo được quân với chi phí và hiệu quả tùy tổ hợp.
- **Chồng bài là dung hợp.** Phase 1 dùng quy ước tính chỉ số chung cho các lá tham gia, với lá dưới cùng làm gốc. Mỗi đạo quân có tối đa 3–4 chỉ số. Một chỉ số đặc trưng của lá gốc giữ nguyên lúc dung hợp. Các chỉ số còn lại tăng hoặc giảm dựa trên chỉ số các lá tham gia theo công thức sẽ thiết kế sau. Từng tổ hợp quân dùng chung quy ước này.
- **Vai trò định hình chỉ số gốc.** Binh chủng có đặc điểm riêng, lấy đặc điểm tiêu biểu làm cơ sở chọn chỉ số gốc. Ví dụ, bộ binh mở đường có HP hoặc DEF cao, sát thương thấp và chi phí rẻ. Cung thủ thiên về tấn công tầm xa, sát thương cao, HP thấp và chi phí cao. Áp dụng cùng nguyên tắc để xây bản sắc cho các binh chủng và chủng tộc. Chọn chỉ số cụ thể sau khi hoàn thiện bộ chỉ số hai hệ.
- **Đội quân khởi đầu.** Phạm vi ban đầu là đánh gần và đánh xa. Có thể giới thiệu một nhánh trước nếu hai nhánh mở đầu khiến phạm vi quá lớn. Các nhánh khác thu nhận về sau.
- **Thời hạn đạo quân dung hợp.** Ghép ở vòng nào thì dùng trong vòng đó, tồn tại đến hết Phase 1. Về bối cảnh, quân dưới quyền vẫn giao tranh trong lúc các thủ lĩnh đánh nhau cho đến khi chiếm xong thành.
- **Ảnh hưởng sang Phase 2.** Phá thành càng nhanh thì tướng càng ít bị bào mòn trong Phase 1, nên nhận một buff nhẹ khi vào Phase 2. Cách đo tốc độ, dạng buff và thời hạn sẽ xác định sau.

### Còn mở

- Có cần quân thủ thành riêng, hay có thể thể hiện phòng thủ bằng đặc tính công sự? Cân nhắc chi phí thiết kế khi khoảng 60 chủng tộc kết hợp với các binh chủng có thể tạo gần hoặc hơn 400 tổ hợp quân.
- Hoàn thiện chỉ số của chủng tộc và binh chủng rồi mới đặc tả chỉ số gốc của từng tổ hợp, vai trò sau dung hợp, công thức cộng trừ, xử lý lá đầu vào và giới hạn nâng bậc.
- Lưu tổ hợp để dùng lại ở trận sau là ý tưởng tùy chọn. Nếu đưa vào, cần chốt lưu cách ghép để ráp lại hay lưu đạo quân đã tạo.
- Chi tiết mô phỏng đội hình, điều kiện phá phòng tuyến và công thức buff theo tốc độ sẽ đặc tả sau.

Nguồn đối chiếu gồm [GDD §03](Ashborne-GDD-va-FDD.md#03-fdd-công-thành) và [Chủng tộc và Binh chủng](Ashborne-Chung-toc-va-Binh-chung.md).

## 2. Phase 2 — Chơi và chồng bài PvE

### Đã chốt

- **Nền theo lượt kiểu Slay the Spire.** Xem tay bài và ý đồ của địch, chọn lá hoặc combo, trả mana, dùng Khiên để đỡ đòn và kết thúc lượt. Trận tiếp diễn đến khi tướng hết HP hoặc tất cả địch trong trận bị hạ.
- **Cửa sổ chồng ngắn chỉ có ở Phase 2.** Khi kéo lá đầu tiên vào vùng kích hoạt, lá giữ ở đó trong một khoảng ngắn để người chơi có thể kéo thêm lá. Nếu hết thời gian và chỉ có một lá, lá đó tự thi triển công dụng riêng.
- **Tuyệt kỹ có công thức cụ thể.** Chồng khớp công thức tạo Tuyệt kỹ tương ứng. Danh sách và điều kiện từng công thức sẽ thiết kế sau.
- **Chồng sai công thức thi triển thành chuỗi.** Mỗi lá vũ khí giữ hoạt ảnh và hiệu ứng. Lá đặt trước xảy ra trước. Ví dụ, Đánh thường VK1 → Đánh thường VK2 thì thi triển VK1 rồi VK2. Đảo thứ tự đặt thì thi triển VK2 rồi VK1. Lá Nguyên tố trong chuỗi có quy tắc kích hoạt riêng ở mục 3.
- **Chuyển mục tiêu giữa chuỗi.** Nếu đòn trước hạ địch đang bị nhắm, đòn sau chuyển sang địch còn sống kế tiếp. Năng lực đặc biệt của địch có thể thay đổi cách xử lý.

### Để đặc tả sau

- Thời lượng cửa sổ, giới hạn số lá, chi phí mana, thao tác hủy chồng, xử lý khi một phần chồng khớp công thức và cách chọn mục tiêu với đòn diện rộng.
- Loại lá nào được tham gia từng công thức hoặc nhận hiệu ứng gắn Nguyên tố. Tên, nhóm và công dụng thẻ Vũ khí dùng danh mục concept khi đặc tả bộ bài.

Quyết định về thao tác và thứ tự xử lý đã được ghi vào [GDD §04](Ashborne-GDD-va-FDD.md#04-fdd-giao-tranh-pve). Nền gameplay tham chiếu nằm trong [Slay the Spire 2 Core Gameplay](Slay-the-Spire-2-Core-Gameplay.md).

## 3. Nguyên tố — Kích hoạt, Tiết Chế và Quá tải

### Đã chốt

- **Bản sắc và lá bài lấy từ concept.** Lửa gây sát thương và lan truyền (Tàn Lửa, Than Truyền). Nước hồi HP (Mạch Nguồn, Mạch Ngầm). Gió điều chỉnh chồng rút và chuyển lá sang lượt sau (Hơi Gió, Gió Hồi). Đất tạo và giữ Khiên (Vỏ Đá, Nền Đá). Bảng công dụng của tám lá đã được đưa vào GDD Markdown.
- **Chồng sai công thức có lá Nguyên tố.** Kích hoạt lá Nguyên tố ngay đầu chuỗi, rồi hiệu ứng đi cùng các chiêu sau đó. Thứ tự tương đối giữa các chiêu vũ khí giữ nguyên. Ví dụ, đặt VK1 → Tàn Lửa → VK2 thì xử lý kích hoạt Tàn Lửa → thi triển VK1 → thi triển VK2.
- **Tiết Chế chỉ khi thanh chưa đầy.** Hai cặp đối nghịch là Lửa ↔ Nước và Gió ↔ Đất. Gắn hệ đối nghịch vào đòn có thể giảm thanh trước khi nó đầy.
- **Thanh đầy lúc nào, Quá tải lúc đó**, kể cả giữa lượt. Quá tải duy trì đến hết cuộc công thành và đi theo người chơi qua các trận trong cùng thành. Nếu thanh đầy khi hạ một quái cuối lượt và trong thành vẫn còn quái phải hạ, Quá tải có hiệu lực ngay. Nếu thanh đầy đúng lúc hạ quái cuối cùng và hoàn tất công thành, người chơi không chịu hậu quả Quá tải.

### Để đặc tả sau

- Số lần hiệu ứng Nguyên tố áp lên các chiêu trong chuỗi và cách xử lý nhiều lá Nguyên tố trong cùng chồng.
- Ngưỡng và tốc độ tích lũy, lượng Tiết Chế, thời hạn và cường độ theo phẩm, vai trò của Nguyên tố trong công thức Tuyệt kỹ.
- Hậu quả cụ thể của Quá tải và tương tác với thẻ Nguyên tố, thẻ Vũ khí và Ấn Thú.

GDD §04–05 và các mục liên quan đã ghi luật xử lý hiện hành. Bảng lá và luật Quá tải đã được đồng bộ với concept. [GDD §05](Ashborne-GDD-va-FDD.md#05-fdd-nguyên-tố) · [Concept thẻ Nguyên tố](Ashborne-Concept-The-Combat.md#thẻ-nguyên-tố)

## 4. Ấn Thú

Tài liệu hiện có mô tả bộ 54 ấn, gồm bốn chất ứng với bốn hệ và hai Joker. Người chơi mang tối đa ba ấn trong khu vực riêng của Phase 2. Concept dùng ♠ Gió, ♥ Lửa, ♦ Nước và ♣ Đất. Các quyết định sử dụng và kết hợp ấn được ghi bên dưới.

### Đã chốt

- **Giới hạn theo cả cuộc công thành.** Mỗi lá Ấn Thú dùng một lần trong toàn bộ Phase 2 của một lần công thành. Dù thành có bao nhiêu quái hay trận nhỏ, lá đã dùng sẽ bị vô hiệu cho phần còn lại của cuộc công thành. Khả năng nạp lại khi Quá tải đang được cân nhắc ở phần dưới.
- **Nguồn điểm riêng.** Kích hoạt Ấn Thú cần một loại điểm riêng, độc lập với điểm dùng bài thường. Lượng điểm, chi phí và quy tắc hồi điểm sẽ thiết kế sau.
- **Hướng kết hợp.** Ưu tiên combo poker. Nếu khi triển khai hệ thống có quá nhiều luật, phương án dự phòng là kết hợp theo nguyên tố, số lá tham gia quyết định bội số sức mạnh. Các tổ hợp, số lá và công thức cụ thể sẽ thiết kế sau.
- **Đổi bộ ấn sau khi chiếm thành.** Bộ Ấn Thú đã chọn được giữ suốt cuộc công thành. Chỉ sau khi chiếm được thành, người chơi mới có thể mang bộ mới vào. Ấn vừa thu phục trong thành chỉ có thể được đưa vào bộ mới sau mốc này.

### Chờ playtest

- Khả năng nạp lại sức mạnh của Ấn Thú khi người chơi đang Quá tải để dùng lại lá đã vô hiệu sẽ quyết định sau khi thử nghiệm cơ chế. Điều kiện, số lần nạp và quan hệ với nguồn điểm riêng còn để mở.

[GDD §06](Ashborne-GDD-va-FDD.md#06-fdd-bộ-bài-và-ấn-thú) · [Concept Ấn Thú](Ashborne-Concept-The-Combat.md#ấn-thú)

## 5. Tiến trình trong thành

### Đã chốt

- **Số boss trong một thành.** Phase 2 có tối đa ba boss, gồm một boss chính và 0–2 boss phụ. Các cấu hình là chỉ có boss chính, một boss phụ cùng boss chính, hoặc hai boss phụ cùng boss chính. Boss phụ nằm trước boss chính.
- **Quái đi kèm.** Mỗi boss có thể xuất hiện một mình hoặc đi cùng quái phụ. Quái phụ đi kèm được tính riêng với số boss.
- **Một thanh HP xuyên suốt Phase 2.** Tướng dùng chung một thanh HP đến khi hạ hết boss trong thành. HP còn lại được giữ khi chuyển trận. Hồi phục sau khi hạ boss phụ thuộc vào hướng chơi và các hiệu ứng hồi phục người chơi có. Luật này buộc người chơi xây dựng cách đánh cho cả cuộc công thành.
- **Cân bằng.** Số lượng, sức mạnh quái phụ và độ khó của từng cấu hình sẽ thiết kế sau.

### Độ khó và phạm vi chơi lại đã chốt

Người chơi chọn một trong ba mốc độ khó. Các tên dưới đây dùng để mô tả phạm vi chơi lại. “Step-by-step” là cách gọi tạm của mốc chơi lại theo phase.

| Mốc | Khi thua |
| --- | --- |
| Theo phase (tạm gọi Step-by-step) | Thua ở phase nào thì chơi lại từ đầu phase đó. Thua Phase 1 thì làm lại Phase 1. Thua tại bất kỳ trận boss nào trong Phase 2 thì chơi lại toàn bộ Phase 2. |
| Theo thành | Thua ở bất kỳ giai đoạn nào trong cuộc công thành thì chơi lại cả thành đó, bắt đầu từ Phase 1. |
| Khắc nghiệt | Thua ở đâu cũng bắt đầu lại toàn bộ hành trình, theo định hướng người dùng liên hệ với Dead Cells. |

**Chủ động rút lui.** Ở mọi chế độ, rút lui khiến lần công thành tiếp theo bắt đầu lại cả thành đó từ Phase 1.

Quái có sẵn bộ kỹ năng. Định hướng điều chỉnh theo độ khó là mở dần các kỹ năng trong bộ đó, làm đa dạng bộ chiêu quái được sử dụng. Kỹ năng mở ở mỗi mốc và phần cân bằng sẽ thiết kế sau.

### Còn mở

1. **Chuyển trạng thái giữa các trận.** Chốt Khiên, bộ bài, mana và các hiệu ứng khác được giữ hoặc đặt lại khi chuyển trận. HP được giữ xuyên trận, hồi phục phụ thuộc hướng chơi theo quyết định ở trên. Luật Quá tải xuyên trận đã chốt ở mục 3, thời điểm được đổi bộ ấn đã chốt ở mục 4. Màn Thành Kính Lạnh dùng cùng luật HP, Quá tải và Ấn Thú đã chốt.
2. **Khôi phục trạng thái khi chơi lại.** Cách khôi phục HP, bộ bài, trạng thái ấn và tài nguyên tại mốc chơi lại sẽ đặc tả sau.

### Chờ playtest

- **Tiến trình, phần thưởng và tổn thất sau khi thua.** Chưa chốt phần nào được giữ hoặc mất sau thất bại. Đang cân nhắc cách xử lý khác nhau giữa thua sát nút và thua cách biệt. Tiêu chí phân biệt và hậu quả cụ thể sẽ quyết định sau playtest. Phạm vi chơi lại theo ba mốc độ khó vẫn theo bảng đã chốt ở trên.

[GDD §02](Ashborne-GDD-va-FDD.md#02-chiến-dịch-và-tiến-trình) · [Màn tham chiếu Thành Kính Lạnh](Ashborne-GDD-va-FDD.md#màn-tham-chiếu-thành-kính-lạnh)
