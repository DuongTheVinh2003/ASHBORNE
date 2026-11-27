# Ashborne

## Tài liệu thiết kế game và đặc tả tính năng

Ashborne là game thẻ bài chiến thuật PvE mang màu sắc dark fantasy, hướng tới PC và mobile. Người chơi vào vai người thừa kế cuối cùng của Ashborne, dựng lại quân đội, phá thành và trực tiếp giao chiến với những sinh vật nguyên tố đang chiếm giữ vương quốc.

## Cách dùng tài liệu

GDD/FDD tập hợp luật gameplay hiện hành, gồm nội dung của Core Combat System và bản quyết định gameplay ngắn đã được gộp vào đây. Các quyết định được đối chiếu với [Tổng hợp task làm rõ gameplay](Ashborne-Tong-hop-task-lam-ro-gameplay.md). Phần ghi rõ “tham chiếu”, “đề xuất”, “còn mở” hoặc “chờ playtest” cần được đặc tả hoặc duyệt trước khi triển khai.

[Chủng tộc và Binh chủng](Ashborne-Chung-toc-va-Binh-chung.md) lưu hệ quân và danh mục chủng. [Concept thẻ combat](Ashborne-Concept-The-Combat.md) lưu danh sách Vũ khí, Nguyên tố và Ấn Thú. Danh mục thẻ trong concept là cơ sở đối chiếu công dụng và tên thẻ, các thông số sẽ thiết kế sau.

Tài liệu Word gốc và các bản trong `.backups` lưu lịch sử thiết kế. Phần mỹ thuật và bố cục hiện có sẽ được rà lại khi định hình hướng art mới.

## Vòng chơi chính

Chọn tuyến và thành → chuẩn bị quân đội, bộ bài và bộ Ấn Thú → nâng bậc, dung hợp quân → xếp đội hình và mô phỏng công thành → đấu PvE theo lượt → hạ boss chính, chiếm thành và nhận thưởng → nâng cấp, chọn bộ ấn mới và đi tiếp.

Một cuộc công thành gồm Phase 1 và Phase 2. Phase 1 dùng chồng bài để dung hợp quân, sau đó xếp đội hình và để hệ thống mô phỏng giao tranh. Phá thành nhanh tạo buff nhẹ cho tướng khi bước vào Phase 2. Trong PvE, chồng bài trong cửa sổ ngắn để thực hiện chuỗi hành động hoặc tạo Tuyệt kỹ theo công thức. Hệ thống Nguyên tố và Ấn Thú vận hành trong Phase 2.

## Đối tượng và trụ cột

Hướng tới người thích xây bộ bài, đọc ý đồ địch và khám phá tương tác giữa các lá. Tay bài và thành phần đội quân cần cho phép người mới chơi lẻ hoặc ghép cơ bản trước khi khám phá tuyệt kỹ và bộ ấn.

- Quan sát. Người chơi đọc thông tin phòng thủ thành, nguồn lực, ý đồ địch và trạng thái nguyên tố trước khi cam kết.
- Ra quyết định. Người chơi quản lý lương, quân số, mana của bài thường, điểm Ấn Thú và những lá đã dùng. Chi phí cụ thể của ghép quân sẽ đặc tả sau.
- Kiểm soát và rủi ro. Tiết Chế giảm tích lũy khi thanh còn dưới ngưỡng. Thanh đầy kích hoạt Quá tải ngay.
- Cảm giác tạo combo. Trò chơi giải thích kết quả dự kiến và giữ đủ biến số để thứ tự lá, vũ khí và thời điểm sử dụng làm thay đổi kết quả.

## Mục lục

01 Thế giới và cốt truyện · 02 Chiến dịch và tiến trình · 03 Công thành · 04 Giao tranh PvE · 05 Nguyên tố · 06 Bộ bài và Ấn Thú · 07 Kẻ địch và boss · 08 Kinh tế và di vật · 09 Bản đồ và sự kiện · 10 Hướng dẫn và trải nghiệm · 11 Giao diện và âm thanh · 12 Dữ liệu và kiểm thử

## 01 Thế giới và cốt truyện

**Cập nhật 27/11/2026:** [Khung Tam Giới đã chốt](Ashborne-Khung-Tam-Gioi-Da-Chot-2026-11-27.md) là nguồn ưu tiên về lịch sử và quy luật thế giới. Ba cõi cùng năm tồn tại thời kỳ đầu có trước thủy tổ; các quốc gia hình thành sau thời kỳ phong ấn. Hội giữ phong ấn duy trì các phong ấn cổ và hạn chế người biết. Tuyến truyện, thủ phạm và vai trò Joker trong phần cũ bên dưới cần đối chiếu lại với khung này; [phương án biến cố mới](Ashborne-Loi-vao-Linh-Gioi-va-Bien-co-Phong-an-De-xuat-v01.md) vẫn là đề xuất.

### Vương quốc sau đại chiến

Trong khung biến cố đang phát triển, phong ấn vỡ giải phóng những sinh vật đang bị phong ấn và ảnh hưởng tới các thủy tổ vốn sống tự do. Không phải toàn bộ 54 thủy tổ từng bị giam giữ. Nguyên nhân, mức tàn phá và phân bố các thế lực chiếm thành cần xây lại dựa trên khung Tam Giới; chiến tranh giữa các vương triều chưa được xác nhận là nguyên nhân chính thức.

Người thừa kế mất gia đình, quân đội và quê hương. Hành trình gồm tập hợp người sống sót, điều tra ai đã đẩy các vương triều vào chiến tranh và giành lại ngai vàng. Các thành được giải phóng trở thành nguồn tuyển quân và nơi nhân vật đối diện hệ quả từ quyết định trước đó.

### Chủ đề và nhịp truyện

Cái giá của việc giành lại vương quốc xuất hiện qua hai cấp độ. Trên sa đồ, quân và lương có giới hạn nên mỗi chiến thắng ảnh hưởng chuyến đi tiếp theo. Trong trận, nguyên tố có thể đảo chiều giao tranh và Quá tải có thể kéo dài đến hết cuộc công thành.

Hồi đầu dựng lại lực lượng và chứng kiến một lần phản lực ngoài tầm kiểm soát. Hồi giữa lần theo các Ấn Thú cấp cao qua nhiều vùng và khám phá vai trò của phong ấn trong cuộc chiến. Hồi cuối mở điều kiện đối mặt hai Joker và đi đến lựa chọn về quyền sử dụng nguồn sức mạnh từng hủy hoại vương quốc. Trình tự các tiết lộ và nội dung kết thúc là thiết kế đề xuất.

### Hướng hình ảnh

Sa đồ công thành dùng bản đồ vật lý, cờ hiệu, dấu quân và thẻ hậu cần. PvE đưa góc nhìn xuống chiến trường với vũ khí, địa hình và sinh vật có dấu vết của nguyên tố. Mỗi Ấn Thú giữ một hình dáng hoặc dấu hiệu nhìn ra được từ chính trận đánh đã thu phục nó.

Bản đề xuất [Định hướng mỹ thuật Ashborne](Ashborne-Art-Direction.md) cụ thể hóa tranh chiến đấu vẽ tay, atlas bốn vùng, bố cục Ấn Thú và bản xem thử Thành Kính Lạnh.

## 02 Chiến dịch và tiến trình

### Các lớp tiến trình

Trong trận, người chơi quản lý HP, mana, tay bài, thanh Nguyên tố và ý đồ địch. Trong cuộc công thành, HP còn lại, trạng thái Quá tải và lượt dùng của từng Ấn Thú được giữ qua các trận Phase 2. Trong hành trình, người chơi xây quân đội, bộ bài, hậu cần, di vật và tiến độ bản đồ.

Cách giữ bộ sưu tập ấn, bài đã mở, nâng cấp và phần thưởng sau khi thua sẽ quyết định sau playtest. Có thể xử lý khác nhau giữa thua sát nút và thua cách biệt. Phạm vi chơi lại theo độ khó được chốt riêng ở bảng dưới.

### Từ chuẩn bị đến chiến lợi phẩm

Trước khi công thành, xem thông tin thành, chuẩn bị quân đội và bộ kỹ năng từ nhiều vũ khí, chọn tối đa ba Ấn Thú. Qua Phase 1, ghi kết quả mô phỏng và lợi thế theo tốc độ phá thành. Phase 2 có một boss chính và 0–2 boss phụ trước boss chính. Mỗi boss có thể đi cùng quái phụ hoặc xuất hiện một mình. Số quái đi kèm và độ khó từng cấu hình sẽ cân bằng sau.

Tướng dùng một thanh HP xuyên suốt Phase 2 đến khi hạ hết boss trong thành. HP còn lại được giữ khi chuyển trận. Việc hồi phục sau boss phụ thuộc hướng chơi và hiệu ứng người chơi có. Quá tải đang có và dấu ấn đã dùng tiếp tục có hiệu lực khi chuyển trận. Cách xử lý Khiên, chồng bài, mana, các thanh chưa Quá tải và hiệu ứng khác tại mốc chuyển trận sẽ đặc tả sau.

Bộ Ấn Thú đã chọn được giữ suốt cuộc công thành. Chỉ khi chiếm được thành, người chơi mới có thể mang bộ mới vào. Ấn vừa thu phục trong thành có thể được đưa vào bộ mới sau mốc này.

Thắng một trận cho phép xử lý thu phục và phần thưởng của trận đó. Hạ boss chính và hoàn thành các trận trước đó thì chiếm thành. Mốc ghi nhận quyền sở hữu, nhận thưởng và phần tiến trình được giữ khi thất bại sẽ được đặc tả sau.

### Ba mốc độ khó

Các tên dưới đây mô tả phạm vi chơi lại. Tên hiển thị chính thức sẽ thiết kế sau.

| Mốc | Khi thua |
| --- | --- |
| Theo phase, tạm gọi Step-by-step | Thua ở phase nào thì chơi lại từ đầu phase đó. Thua ở bất kỳ trận nào trong Phase 2 thì chơi lại toàn bộ Phase 2. |
| Theo thành | Thua ở bất kỳ giai đoạn nào trong cuộc công thành thì chơi lại thành đó từ Phase 1. |
| Khắc nghiệt | Thua ở đâu cũng bắt đầu lại toàn bộ hành trình. |

Quái có bộ kỹ năng sẵn. Định hướng là mở dần các kỹ năng trong bộ đó theo độ khó để thay đổi cách đối phó. Kỹ năng mở ở từng mốc và các thông số cân bằng sẽ thiết kế sau.

### Chủ động rút lui và khôi phục trạng thái

Ở mọi chế độ, chủ động rút lui khiến lần công thành tiếp theo phải đánh lại cả thành đó từ Phase 1.

Cách khôi phục HP, bộ bài, trạng thái ấn, điểm Ấn Thú và tài nguyên ở mốc chơi lại sẽ đặc tả sau. Phần tiến trình, phần thưởng được giữ hoặc mất và tổn thất sau khi thua chờ playtest. Tiêu chí phân biệt thua sát nút với thua cách biệt cũng chưa chốt.

Với trận hướng dẫn có kết quả cốt truyện định sẵn, phục hồi ở mốc kịch bản kế tiếp là đề xuất thiết kế. Cách áp dụng cùng ba mốc độ khó cần được đặc tả khi làm hướng dẫn.

## 03 FDD Công thành

### Luồng Phase 1

Người chơi chuẩn bị và ghép binh chủng, nâng bậc trước khi dung hợp, rồi xếp đội hình. Hệ thống tự mô phỏng giao tranh theo hướng battle simulator hoặc formation strategy. Người chơi đợi kết quả. Phá được phòng tuyến thì kết thúc Phase 1 và chuyển sang Phase 2. Nếu thua, phạm vi chơi lại theo độ khó ở mục 02.

### Tạo quân, nâng bậc và dung hợp

- Ghép các lá cùng binh chủng và cùng bậc để tạo một lá cùng binh chủng ở bậc kế tiếp. Số lá cần ghép và bậc tối đa sẽ đặc tả sau.
- Ghép lá Chủng tộc với lá Binh chủng tạo quân nhận bậc của lá Binh chủng. Tổ hợp ngoài sở trường vẫn tạo được quân, với chi phí và hiệu quả tùy tổ hợp. Bậc và tương thích là hai yếu tố độc lập.
- Nâng bậc tăng chỉ số mặc định, các chỉ số phụ tăng theo phần trăm. Nâng bậc trước khi dung hợp.
- Chồng quân là dung hợp theo quy ước tính chỉ số chung. Lá dưới cùng làm gốc. Mỗi đạo quân có tối đa 3–4 chỉ số, một chỉ số đặc trưng của lá gốc giữ nguyên trong dung hợp. Các chỉ số khác tăng hoặc giảm dựa trên chỉ số các lá tham gia theo công thức cố định sẽ thiết kế sau.

Đặc điểm của binh chủng và chủng tộc định hình chỉ số gốc. Ví dụ, bộ binh mở đường thiên về HP hoặc DEF cao, sát thương thấp và chi phí rẻ. Cung thủ thiên về tấn công tầm xa, sát thương cao, HP thấp và chi phí cao. Chỉ số cụ thể của từng tổ hợp sẽ xác định sau khi hoàn thiện bộ chỉ số chủng tộc và binh chủng.

Đội quân ban đầu tập trung vào đánh gần và đánh xa. Có thể giới thiệu một nhánh trước nếu cần thu gọn phạm vi mở đầu. Các nhánh khác thu nhận về sau. Dân binh đã loại khỏi hệ quân hiện tại. Hệ quân có Pháp binh. Tạo quân không tự mở thêm lá vào Library. [Hệ Chủng tộc và Binh chủng](Ashborne-Chung-toc-va-Binh-chung.md)

### Đội hình và thời hạn đạo quân

Đạo quân dung hợp được dùng trong vòng tạo ra nó và tồn tại đến hết Phase 1 theo logic game. Về bối cảnh, quân dưới quyền vẫn giao tranh khi các thủ lĩnh đánh nhau cho đến lúc thành được chiếm.

Số ô, vị trí, quy tắc tương tác đội hình, chi phí, trạng thái các lá đầu vào và vai trò sau dung hợp sẽ được đặc tả sau. Có làm quân thủ thành riêng hay thể hiện phòng thủ bằng công sự vẫn còn mở. Lưu tổ hợp để tái sử dụng là ý tưởng tùy chọn.

### Lợi thế chuyển sang Phase 2

Phá thành càng nhanh thì tướng càng ít bị bào mòn trước khi trực tiếp chiến đấu, nên nhận buff nhẹ khi vào Phase 2. Cách đo tốc độ, loại buff, mức buff và thời hạn sẽ thiết kế sau.

### Ghi nhận tài nguyên

Quân số và hậu cần là cơ sở thiết kế chi phí chiến dịch. Công thức phân quân, tiêu lương và tuyển thêm cần được đặc tả theo hệ chỉ số hiện tại. Khi có thao tác cam kết tài nguyên, ghi kết quả và chi phí cùng lúc để thao tác lặp không trừ chi phí hai lần. Cách hoàn tác trước khi cam kết sẽ thiết kế theo luồng lập quân.

## 04 FDD Giao tranh PvE

### Vòng lượt và tài nguyên

Nền chiến đấu theo lượt tham chiếu [Slay the Spire](Slay-the-Spire-2-Core-Gameplay.md). Mana hoặc Energy là tài nguyên của bài thường. Đầu lượt rút bài và bổ sung tài nguyên, hiển thị ý đồ để người chơi cân nhắc tấn công, phòng thủ hoặc phối hợp hiệu ứng. Cấu hình lượt tham chiếu cho thử nghiệm dùng 45 HP, mana tối đa 4, đặt Khiên người chơi về 0, hồi đầy mana và rút 5 lá ở đầu lượt. Các giá trị này sẽ cân bằng sau. Khi chồng rút hết, xáo chồng bỏ bằng seed rồi tiếp tục rút.

Người chơi có thể chơi lá lẻ, chồng bài trong cửa sổ kích hoạt, dùng Ấn Thú hoặc kết thúc lượt. Lá thường đã dùng chuyển vào chồng bỏ sau khi xử lý. Khi kết thúc lượt, bỏ toàn bộ bài còn trên tay, xử lý hiệu ứng đầu lượt địch, rồi thực hiện ý đồ nếu địch còn sống. Khiên hấp thụ sát thương trực tiếp trước HP. Trận kết thúc khi tướng về 0 HP hoặc tất cả địch của trận bị hạ. Rút lui xử lý theo mục 02.

### Chồng bài và thứ tự xử lý

Khi người chơi đưa lá đầu tiên vào vùng kích hoạt, lá chờ trong một cửa sổ ngắn để nhận thêm lá vào chồng. Hết cửa sổ với một lá thì lá đó tự thực thi. Cửa sổ này chỉ áp dụng trong Phase 2.

Chồng khớp công thức cụ thể tạo Tuyệt kỹ tương ứng. Chồng sai công thức thực thi thành chuỗi theo thứ tự đặt, giữ nguyên hoạt ảnh và hiệu ứng của từng lá vũ khí. Nếu chồng có lá Nguyên tố, kích hoạt lá đó ngay đầu chuỗi. Hiệu ứng Nguyên tố đi cùng các chiêu sau đó. Thứ tự tương đối của các chiêu giữ nguyên.

### Tuyệt kỹ phát sinh từ chồng

Mỗi Tuyệt kỹ có một công thức chồng bài cụ thể. Công thức, điều kiện về loại và số lá, cách tính mana, thời lượng cửa sổ, thao tác hủy chồng và cách xử lý khi chỉ một phần chồng khớp công thức sẽ được đặc tả sau. Hiệu ứng Tuyệt kỹ sẽ xác định trong từng công thức.

### Mục tiêu và ưu tiên xử lý

Trong trận nhiều địch, nếu một đòn trong chuỗi hạ mục tiêu, đòn tiếp theo chuyển sang địch còn sống kế tiếp. Năng lực đặc biệt của địch có thể thay đổi cách xử lý. Xử lý sát thương và hạ gục trước khi áp trạng thái lên mục tiêu, rồi xử lý hiệu ứng lên người chơi. Nếu nhiều hiệu ứng cùng xảy ra, dùng thứ tự đã khai báo của hành động và kiểm tra điều kiện kết thúc sau mỗi bước gây mất HP.

## 05 FDD Nguyên tố

### Bốn hệ và hai phẩm thẻ

Lửa gây sát thương và lan truyền. Nước hồi HP. Gió điều chỉnh nhịp và thứ tự rút bài. Đất tạo và giữ Khiên. Phẩm thường có tác động ngắn. Phẩm cao mở hiệu ứng kéo dài nhiều lượt. Cường độ, thời hạn và giới hạn cụ thể sẽ được đặc tả theo từng lá. [Concept thẻ Nguyên tố](Ashborne-Concept-The-Combat.md#thẻ-nguyên-tố)

| Nguyên tố | Lá phẩm thường | Lá phẩm cao |
|---|---|---|
| **Lửa — Cháy và lan** | **Tàn Lửa.** Đòn được cường hóa gây thêm một ít sát thương. | **Than Truyền.** Đòn gieo một đốm than lên địch trong vài lượt. Mỗi lượt, lần đầu bạn đánh trúng nó, than bùng lên gây thêm sát thương. Nếu chính cú bùng đó hạ mục tiêu, đốm than truyền sang một địch khác với thời hạn còn lại. |
| **Nước — Thấm và hồi sinh lực** | **Mạch Nguồn.** Hồi một ít HP. Khi gắn vào đòn, hồi HP sau khi đòn được giải quyết. | **Mạch Ngầm.** Trong vài lượt, đầu mỗi lượt của bạn, hồi lại **một phần HP đã mất trong lượt địch vừa qua**, có giới hạn mỗi lần. |
| **Gió — Luân chuyển** | **Hơi Gió.** Nhìn lá trên cùng của chồng rút. Giữ nó ở đó hoặc đưa xuống đáy. | **Gió Hồi.** Trong vài lượt, trước khi bỏ bài cuối lượt, bạn có thể chọn một lá vũ khí chưa dùng để đặt lên đầu chồng rút. Lá đó chiếm một lượt rút bình thường ở lượt sau. |
| **Đất — Giữ nền** | **Vỏ Đá.** Tạo một ít Khiên. Khi gắn vào đòn, nhận Khiên sau khi đòn được giải quyết. | **Nền Đá.** Trong vài lượt, khi Khiên sắp hết hạn, giữ lại một phần sang lượt sau, có giới hạn. Khiên đã bị địch đánh vỡ thì hết. |

### Dùng riêng và gắn vào chuỗi

Dùng riêng kích hoạt hiệu ứng của lá. Nếu hiệu ứng cần đòn đánh, lá đặt buff chờ đòn Đánh thường kế tiếp trong cùng lượt. Gắn Nguyên tố vào đòn áp hiệu ứng gắn đòn theo luật của lá.

Ví dụ, chồng **Đánh thường VK1 → Tàn Lửa → Đánh thường VK2** sai công thức Tuyệt kỹ. Thứ tự giải quyết là **kích hoạt Tàn Lửa → thi triển VK1 → thi triển VK2**. Hiệu ứng Tàn Lửa đi cùng chuỗi sau khi kích hoạt. Số lần áp hiệu ứng và cách xử lý khi có nhiều lá Nguyên tố trong cùng chồng sẽ được đặc tả sau.

### Tích lũy và Tiết Chế

Dùng riêng hoặc gắn Nguyên tố vào đòn đều góp vào thanh của hệ tương ứng. Địa vực có thể tăng tốc tích lũy cho một hệ. Hai cặp đối nghịch là **Lửa ↔ Nước** và **Gió ↔ Đất**. Gắn hệ đối nghịch vào đòn có thể Tiết Chế để giảm thanh khi thanh đó còn dưới ngưỡng đầy. Ngưỡng đầy và lượng tăng giảm sẽ được đặc tả sau.

Buff địa vực nằm trong dữ liệu trận và có thể xem trước khi chọn bộ bài. Kháng hoặc yếu nguyên tố nằm trong dữ liệu của từng địch.

### Quá tải

Thanh vừa đầy thì Quá tải kích hoạt ngay, kể cả giữa lượt khi địch vẫn còn sống. Tiết Chế chỉ thực hiện được trước khi thanh đầy. Quá tải duy trì từ lúc kích hoạt đến khi cuộc công thành kết thúc, kể cả khi chuyển sang trận khác trong cùng thành.

Nếu thanh đầy khi hạ quái ở thời điểm kết thúc lượt, xét tiến độ của cả cuộc công thành.

- **Còn quái phải hạ trong thành.** Quá tải có hiệu lực ngay và tiếp tục qua các trận còn lại.
- **Hạ quái cuối cùng và hoàn thành công thành ngay lúc thanh đầy.** Người chơi không chịu hậu quả Quá tải.

Hậu quả cụ thể và tương tác với hiệu ứng bài sẽ được đặc tả sau.

## 06 FDD Bộ bài và Ấn Thú

### Bộ bài Vũ khí và Nguyên tố

[Concept thẻ combat](Ashborne-Concept-The-Combat.md) mô tả 48 lá Vũ khí thuộc tám họ, mỗi họ có hai lá Trực tiếp, hai lá Kỹ năng và hai lá Sức mạnh. Bộ Nguyên tố có bốn hệ và tám mẫu lá theo phẩm. Dùng tên, nhóm và công dụng trong danh mục này khi đặc tả bộ bài.

Bắn Ghim thuộc nhóm Kỹ năng của Cung, gây sát thương và làm đòn tấn công kế tiếp của mục tiêu gây ít sát thương hơn. Đâm Thẳng thuộc nhóm Trực tiếp của Giáo. Danh sách bộ khởi đầu, số bản sao, chi phí và thông số từng lá sẽ thiết kế sau.

Ví dụ hai lá vũ khí A → B sai công thức Tuyệt kỹ sẽ thực thi hiệu ứng A trước, rồi đến B. Đảo thứ tự đặt sẽ đảo thứ tự thi triển, từng lá giữ công dụng của mình. Lá Nguyên tố trong chồng xử lý theo mục 04–05.

### Bộ sưu tập 54 Ấn Thú

Bốn họ gắn với bốn nguyên tố, mỗi họ có 13 ấn mang ký hiệu A, 2–10, J, Q và K. Hai Joker đứng ngoài bốn họ. Concept dùng ♠ Gió, ♥ Lửa, ♦ Nước và ♣ Đất. Mỗi ấn ứng với một sinh vật và năng lực mượn từ sinh vật đó. Hạng và công dụng được mô tả trong danh mục concept.

Trước khi công thành, mang tối đa ba ấn trong khu vực riêng cạnh tay bài. Ấn chỉ sử dụng trong Phase 2. Bộ đã chọn giữ suốt cuộc công thành. Chỉ sau khi chiếm được thành mới có thể mang bộ mới vào, gồm các ấn vừa thu phục.

### Điểm riêng và lượt sử dụng

Kích hoạt Ấn Thú cần một loại điểm riêng, độc lập với mana hoặc Energy của bài thường. Mỗi lá dùng một lần trong toàn bộ cuộc công thành, kể cả khi Phase 2 có nhiều trận. Sau khi dùng, lá bị vô hiệu cho phần còn lại của cuộc công thành.

Khả năng nạp lại sức mạnh của ấn khi người chơi đang Quá tải đang chờ playtest. Lượng điểm ban đầu, chi phí từng lá, quy tắc hồi điểm, điều kiện dùng ấn giữa các hành động và cách khôi phục khi chơi lại sẽ đặc tả sau.

### Kết hợp ấn

Ưu tiên kết hợp theo combo poker. Nếu triển khai tạo quá nhiều luật, phương án dự phòng là kết hợp theo nguyên tố và dùng số lá tham gia để xác định bội số sức mạnh. Những combo nào áp dụng với bộ tối đa ba ấn, thứ tự xử lý, phần thưởng và công thức cụ thể sẽ thiết kế sau.

### Ba ấn tham chiếu từ concept

Các công dụng sau theo danh mục concept. Chi phí dùng điểm riêng và các giá trị cụ thể sẽ thiết kế sau.

- Rùa Gương 7♦ ghi lại HP lúc mở ấn. Đầu lượt sau, nếu HP thấp hơn mốc đó, hồi một phần chênh lệch.
- Nứt Thành J♣ phá một lượng lớn Khiên của một địch. Nếu phá hết, mục tiêu khó dựng lại Khiên ở hành động kế tiếp.
- Nanh Tro K♥ gây một đòn lớn và gieo than vương ấn. Nếu kẻ mang than bị hạ trong thời hạn, than nhảy sang địch kế tiếp và bùng ngay. Mỗi địch chỉ nhận vương ấn một lần.

### Tiến trình bộ bài và thu phục

Thắng trận, mua hoặc hoàn thành nhiệm vụ có thể mở kỹ năng vũ khí mới theo thiết kế tham chiếu. Các thẻ Nguyên tố nằm trong bộ bài thường. Ấn Thú thuộc bộ sưu tập riêng và được trang bị theo ô.

Hạ sinh vật có thể thu phục sẽ mở ấn mang năng lực đặc trưng của nó. Nhiệm vụ hoặc thương nhân có thể mở đường tới cuộc săn. Điều kiện săn, thu phục, thời điểm ghi quyền sở hữu và cách giữ tiến trình khi thua sẽ đặc tả hoặc quyết định sau playtest theo mục 02.

Hồ sơ của mỗi ấn có mã ổn định, tên sinh vật, họ Nguyên tố, mức đe dọa, nguồn gặp, điều kiện thu phục và hiệu ứng. Library hỗ trợ 54 hồ sơ, quyền sở hữu và trạng thái trang bị. Dữ liệu combo sẽ bổ sung theo hướng kết hợp đã chốt.

## 07 FDD Kẻ địch và boss

### Phân tầng và dữ liệu hành vi

Quái thường dạy một tương tác. Quái tinh anh ép người chơi trả giá khi lặp cùng một lựa chọn. Mỗi thành có một boss chính, tối đa hai boss phụ và có thể có quái đi kèm mỗi boss. Boss có nguyên tố chủ đạo, cơ chế đặc trưng, nhịp đổi giai đoạn và tuyệt kỹ báo trước. Độ khó mở dần kỹ năng từ bộ chiêu sẵn của quái theo mục 02. Dữ liệu mỗi hành vi gồm điều kiện, sát thương hoặc hiệu ứng, ưu tiên, thời gian hồi và nội dung báo ý đồ.

### Luồng chọn ý đồ

Tại đầu lượt người chơi, địch chọn từ danh sách hành vi hợp lệ theo HP, trạng thái, lượt hồi và tính cách. Sau khi công bố, địch giữ ý đồ tới lượt mình. Đòn đánh có thể bị thay đổi bởi hiệu ứng công khai như Ghim. Nếu mục tiêu hoặc điều kiện hành động biến mất, dùng hành vi dự phòng được khai báo trong dữ liệu.

Địch hung hăng ưu tiên sát thương. Địch chiến thuật ưu tiên phá nhịp đã báo trước. Địch phòng thủ luân phiên dựng Khiên và phản kích. Địch hỗn loạn lấy mẫu có seed từ một nhóm hành vi hợp lệ. Với nhiều địch, hiển thị thứ tự hành động. Cơ chế nguyên tố của boss có đồng hồ riêng khi thiết kế trận cần dùng.

### Glacial Dragoness

Boss Nước trong Frozen Cathedral. Giá trị tham chiếu 120 HP, chuyển giai đoạn khi còn 60 HP. Giai đoạn đầu luân phiên Vảy Băng tạo 10 Khiên và Hơi Lạnh đánh 12. Giai đoạn sau báo Absolute Zero trước một lượt, sau đó đánh 24. Nếu người chơi gây ít nhất 15 sát thương trực tiếp trong lượt báo trước, hạ sát thương của Absolute Zero xuống 12. Sau tuyệt kỹ, boss đánh 10 trong lượt hồi rồi lặp chu kỳ báo trước. Đổi giai đoạn giữ nguyên ý đồ đã công bố và áp từ lần chọn ý đồ tiếp theo.

### Biến thể chạm trán

Hộ vệ bảo vệ mục tiêu chủ lực bằng Khiên. Kẻ săn mồi công bố đòn mạnh sau lượt chuẩn bị. Sinh vật đất tích giáp và mở sơ hở sau đòn nặng. Quái gió thúc ép nhịp xử lý bằng nhiều đòn nhỏ. Phối hợp các mẫu theo tuyến để mỗi trận kiểm tra một năng lực khác nhau của bộ bài.

## 08 FDD Kinh tế và di vật

### Nguồn lực chiến dịch

Các nguồn lực và tác dụng dưới đây là khung kinh tế tham chiếu. Chi phí, tổn thất khi thua hoặc rút lui và tiến trình được giữ sẽ đặc tả hoặc quyết định sau playtest theo mục 02.

- Quân số. Tăng từ tuyển, giải phóng thành và sự kiện. Giảm do thất bại, tổn thất tuyến hoặc lựa chọn nhiệm vụ. Quân bị phân vào ô công thành vẫn thuộc lực lượng.
- Lương thực. Chi trả triển khai công thành và có thể tiêu hao theo tuyến. Nguồn gồm thành, caravan, điểm tiếp tế và mua hàng. Thuốc, vận tải và trang bị là các loại hậu cần riêng khi nội dung cần.
- Lòng trung thành. Chỉ số 0–100 phản ánh quân hiện tại sẵn sàng triển khai. Cập nhật từ cách chia tài nguyên, tổn thất và lựa chọn với đội quân.
- Tinh thần. Chỉ số ngắn hạn của hành trình. Dùng để kiểm tra sự kiện và kết quả nghỉ ngơi. Hồi tại trại hoặc qua thắng trận. Thiếu lương và rút lui có thể giảm tinh thần.
- Danh tiếng. Chỉ số 0–100 phản ánh mức độ người ngoài muốn gia nhập. Tăng qua giải phóng thành, cứu dân và thắng đối thủ nổi tiếng.
- Vương quyền. Cờ hoặc mốc tiến trình theo vùng. Dùng để mở liên minh, ngoại giao và tuyến tuyển tinh anh.
- Vàng. Nhận từ chiến lợi phẩm, nhiệm vụ hoặc bán vật phẩm. Chi cho hồi HP, tiếp tế, tuyển quân, di vật và mở tuyến có phí.

### Giao dịch và thất bại

Mỗi điểm bản đồ khai báo giá vào, phần thưởng và chi phí rút lui nếu có. Hiển thị chi phí trước khi xác nhận. Tài nguyên có sàn 0. Nếu thiếu chi phí tối thiểu, chặn giao dịch và giữ trạng thái. Thiếu lương kéo dài có thể gây tổn thất quân và tinh thần qua sự kiện tuyến. Điểm tiếp tế và tuyến an toàn tạo đường phục hồi trong những hành trình có thể cứu vãn.

### Di vật

Di vật chia theo tấn công, phòng thủ, hậu cần và nguyên tố. Di vật chiến đấu khai báo mốc áp dụng, ví dụ trước khi tính sát thương, sau khi đòn đánh giải quyết hoặc khi xử lý phản lực. Cùng một sự kiện xử lý các di vật theo thứ tự trang bị. Quy tắc cấp di vật tham chiếu là mỗi loại một lần trong hành trình trừ khi dữ liệu cho phép trùng. Cách giữ di vật sau khi thua chờ playtest theo mục 02.

Hỏa Miện đề xuất tăng sát thương trực tiếp khi Quá tải Lửa. Phần tương tác với hậu quả Quá tải sẽ được đặc tả sau. Chiến Kỳ đề xuất giảm mất tinh thần sau rút lui. Huyết Băng đề xuất giảm sát thương lần đầu khi địch tung tuyệt kỹ. Chia độ hiếm theo mức độ thay đổi lối chơi và nhóm nguồn rơi.

## 09 FDD Bản đồ và sự kiện

### Cấu trúc tuyến

Bản đồ phân nhánh theo vùng. Tuyến gồm chiến đấu, tinh anh, thành, trại, thương nhân, tiếp tế, sự kiện và săn Ấn Thú. Cổng tiến trình của vùng nằm ở thành hoặc boss. Thông tin có thể xem trước gồm loại nút, phần thưởng dự kiến, giá vào và nguyên tố địa vực đã biết.

Tuyến an toàn có nhiều cơ hội nghỉ và tiếp tế. Tuyến di vật đưa tới địch khó hơn. Tuyến tài nguyên đổi thời gian hoặc nguy cơ phục kích lấy vàng và lương. Tuyến săn Ấn chỉ hiện khi đã mở manh mối hoặc đạt điều kiện của sinh vật. Bản đồ tạo theo seed cần bảo đảm có đường từ điểm đầu tới đích và đủ cơ hội phục hồi trước trận bắt buộc.

### Bốn vùng

- Ashlands. Lửa lan qua tàn tích, quái gây Thiêu Đốt và các lựa chọn cứu người cạnh nguồn lương hiếm.
- Frozen Cathedral. Băng phủ thành cổ, địch thiên về Khiên và các đòn báo trước. Glacial Dragoness giữ nút boss.
- Storm Frontier. Gió làm đổi nhịp hành động. Các điểm săn yêu cầu theo dấu sinh vật qua tuyến caravan.
- Stone Grave. Đất và tàn tích của người khổng lồ. Địch có giáp nặng, lối vào phụ phụ thuộc vào nhân lực hoặc vương quyền.

### Sự kiện và nhiệm vụ

Sự kiện có điều kiện vào, lựa chọn, chi phí và kết quả. Ví dụ Caravan Bị Vây cho dùng lương để hộ tống và tăng danh tiếng, hoặc giữ tài nguyên và bỏ qua phần thưởng. Nhiệm vụ săn có thể gồm điều tra, giao chiến và trở về nhận thưởng. Thương nhân bán thông tin hoặc vật phẩm mở cuộc săn. Ấn được thu phục khi đánh bại sinh vật tương ứng.

### Màn tham chiếu Thành Kính Lạnh

Thành Kính Lạnh dùng địa vực Nước, Rùa Gương và Vệ Binh Tro làm nội dung tham chiếu để thử combat. Phân vai boss chính, boss phụ và quái đi kèm sẽ được duyệt khi thiết kế màn, trong giới hạn một boss chính và 0–2 boss phụ. Người chơi phá phòng tuyến bằng mô phỏng đội hình ở Phase 1 rồi đi qua các trận Phase 2.

Rùa Gương có cấu hình thử nghiệm 45 HP, vòng ý đồ Thủ 8 Khiên → đánh 9 → đánh 13. Vệ Binh Tro có cấu hình thử nghiệm 65 HP, vòng đánh 9 → Thủ 10 Khiên → đánh 15. Các con số và vòng chiêu là tham chiếu cân bằng. Kỹ năng được mở theo độ khó sẽ thiết kế sau.

Giữ HP còn lại của tướng qua các trận. Hồi phục phụ thuộc hướng chơi và hiệu ứng. Giữ Quá tải đang có và dấu các ấn đã dùng. Khi thu phục Rùa Gương, ghi nhận theo luồng thu phục sẽ đặc tả ở mục 06. Sau khi chiếm thành, người chơi mới có thể đưa 7♦ vào bộ mới.

Tài khoản mẫu có thể được chuẩn bị sẵn Nứt Thành và Nanh Tro để thử ấn. Tổng kết sau chiếm thành hiển thị kết quả Phase 1, buff chuyển phase, số lần chồng, Tiết Chế, Quá tải và cách dùng ấn. Dữ liệu chuyển trận và phần thưởng sau thất bại tuân theo phần đã chốt hoặc đang để mở ở mục 02.

## 10 Hướng dẫn và trải nghiệm

### Mở đầu chiến dịch

1. Cho người chơi chứng kiến Ashborne sụp đổ qua hành động ngắn, giới thiệu nhân vật và việc mất quân.
2. Tại sa đồ đầu tiên, hướng dẫn tạo quân theo Chủng tộc và Binh chủng, nâng bậc rồi dung hợp, xếp đội hình và quan sát mô phỏng công thành. Giới thiệu buff sang Phase 2 theo tốc độ phá thành khi buff được đặc tả.
3. Trong trận đầu, dạy đọc ý đồ, dùng mana, dựng Khiên và chồng hai lá trong cửa sổ kích hoạt. Dùng địch có nhịp lặp dễ đọc.
4. Cho nhận một thẻ Nguyên tố. Minh họa dùng riêng và kích hoạt Nguyên tố đầu chuỗi. Dạy Tiết Chế trước khi thanh đầy và cho thấy Quá tải kích hoạt ngay khi thanh đầy.
5. Glacial Dragoness xuất hiện trong hồi mở đầu. Một trận kịch bản cho người chơi trải nghiệm Quá tải rồi bị đẩy lùi. Chuyển sang mục tiêu tìm cách kiểm soát sức mạnh và tập hợp quân.
6. Sau trận thu phục đầu tiên, mở thư viện để xem ấn vừa nhận. Sau khi chiếm thành, cho người chơi chuẩn bị bộ mới. Giới thiệu combo ấn khi hệ poker hoặc phương án dự phòng đã được đặc tả.

### Nhịp và động lực quay lại

Nhịp trải nghiệm đi từ quan sát, chuẩn bị, ra đòn, chịu rủi ro đến phục hồi. Mỗi màn nên tạo ít nhất một lựa chọn rõ ràng giữa phương án an toàn và cách ghép có lợi hơn. Trong ngắn hạn, người chơi khám phá thẻ và di vật. Trong trung hạn, họ mở vùng, tìm dấu vết chiến tranh và thu phục quái. Về dài hạn, bộ sưu tập 54 ấn, các tuyến thay thế và thử thách theo vùng tạo mục tiêu quay lại.

### Nội dung sau phát hành

Thiết kế đề xuất gồm boss mới, biến thể thành trì, cuộc săn, thử thách chuỗi trận và modifier nguyên tố theo mùa. Ví dụ Mùa Trăng Băng thay đổi luật tích lũy Nước, còn Bão Vô Tận dùng chuỗi trận với áp lực hậu cần tăng dần. Lịch nội dung phụ thuộc dữ liệu cân bằng và khả năng sản xuất.

## 11 FDD Giao diện và âm thanh

Phần giao diện hiện có là tham chiếu để rà lại khi định hình hướng art mới. Về thông tin gameplay, Phase 1 cần cho thấy quân đội, hậu cần, kết quả nâng bậc và dung hợp, đội hình trước mô phỏng và kết quả công thành. Hiển thị buff chuyển sang Phase 2 theo đặc tả tốc độ phá thành.

Trong PvE, đặt ý đồ địch cạnh HP địch. Dưới màn hình là tay bài, mana và vùng kích hoạt chồng. Khu vực Ấn Thú có ba ô riêng, bộ đếm điểm ấn và dấu đã dùng trong cuộc công thành. Thanh nguyên tố hiển thị mức tích lũy và báo Quá tải ngay khi đầy. Hiệu ứng trạng thái dùng cả biểu tượng lẫn chữ để dễ đọc.

Âm thanh xác nhận phân biệt giữa ghép quân, tung đòn và quét ấn. Lửa dùng tiếng cháy rít, Nước dùng âm gương hoặc băng nứt, Gió dùng tiếng cắt ngắn, Đất dùng va đập trầm. Thời điểm kích hoạt Quá tải có tín hiệu riêng.

### Thao tác và thông tin

PC hỗ trợ kéo thả, chọn lá rồi chọn ô, và điều hướng bằng bàn phím. Mobile hỗ trợ kéo hoặc chạm chọn. Chốt công thành có xác nhận riêng. Trong PvE, hiển thị cửa sổ kích hoạt ngắn và thứ tự thực thi các lá trong chuỗi.

Khi một lá không thể dùng theo điều kiện hiện hành, hiển thị lý do tại vùng kích hoạt. Với Ấn Thú, đánh dấu lá đã dùng trong cuộc công thành, điểm riêng còn lại và tổ hợp hợp lệ theo luật combo được đặc tả sau. Màn nhật ký trận lưu kết quả sát thương, trạng thái, thay đổi thanh nguyên tố và nguyên nhân thất bại. Có thể kiểm tra mô tả địch và thẻ mà không thay đổi trạng thái trận.

### Nhận diện và tiếp cận

Lửa dùng cạnh sắc và tín hiệu bùng. Nước dùng đường cong và hiệu ứng rạn. Gió dùng đường hướng chuyển động. Đất dùng khối nặng và hiệu ứng rung ngắn. Biểu tượng và nhãn chữ đi cùng màu. Cho giảm rung, chớp sáng, chuyển động mạnh và chỉnh riêng âm lượng nhạc, hiệu ứng, giọng nói.

Hiệu ứng ghép và đánh có thể bỏ qua để người chơi thao tác nhanh. Tín hiệu bắt buộc như ý đồ địch và trạng thái Quá tải vẫn hiển thị trong giao diện tĩnh.

## 12 Dữ liệu và kiểm thử thiết kế

### Hợp đồng dữ liệu

Trạng thái chiến dịch lưu ID hành trình, seed bản đồ, nút, kết quả thành, tài nguyên, bộ bài, mana tối đa, di vật và phần thưởng đã nhận. Hồ sơ tài khoản lưu quyền sở hữu ấn và tiến trình mở khóa. Trạng thái trận lưu lượt, HP, Khiên, mana, tay, chồng rút, chồng bỏ, ý đồ và bốn thanh Nguyên tố. Trạng thái cuộc công thành lưu HP xuyên trận, bộ ấn đã chọn, dấu ấn đã dùng, điểm Ấn Thú và Quá tải cần duy trì khi chuyển trận. Lưu độ khó đã chọn để xác định phạm vi chơi lại. Trạng thái sau thất bại và rút lui sẽ khôi phục theo đặc tả tương ứng.

Dữ liệu định nghĩa tách khỏi trạng thái chơi. Thành khai báo điều kiện phá phòng tuyến, đội hình, đầu vào và chuỗi gặp địch theo đặc tả mô phỏng. Thẻ có ID định nghĩa và ID bản sao. Công thức Tuyệt kỹ và tổ hợp Ấn Thú có điều kiện và thứ tự xử lý theo đặc tả. Hành vi địch khai báo kỹ năng được mở theo độ khó. Phản hồi về chồng bài dùng cùng luật với lúc thực thi. Chỉ hành động hợp lệ mới thay đổi trạng thái và ghi nhật ký.

### Ca nghiệm thu

Các ca dưới đây kiểm tra luật đã chốt. Giá trị cân bằng và các phần chờ playtest sẽ được bổ sung khi có đặc tả.

- Phase 1 nâng bậc trước khi dung hợp, lấy lá đáy làm gốc và giữ chỉ số đặc trưng trong dung hợp. Sau xếp đội hình, hệ thống tự mô phỏng. Kiểm tra buff chuyển phase theo tốc độ khi có công thức.
- Một lá Phase 2 tự thực thi khi hết cửa sổ. Chồng sai công thức giữ hoạt ảnh và hiệu ứng từng đòn theo thứ tự đặt. Nếu đòn trước hạ mục tiêu, đòn sau chuyển sang địch kế tiếp, xét ngoại lệ của năng lực địch.
- Với chồng VK1 → Tàn Lửa → VK2 sai công thức, Tàn Lửa kích hoạt đầu tiên, sau đó VK1 và VK2 thi triển theo thứ tự.
- Làm đầy thanh giữa lượt khi địch còn sống, kiểm tra Quá tải kích hoạt ngay và duy trì đến hết cuộc công thành. Nếu thanh đầy khi hạ quái cuối cùng hoàn tất thành thì kết thúc mà không áp hậu quả. Tiết Chế chỉ thực hiện trước khi thanh đầy.
- Giữ HP còn lại, Quá tải đang có và dấu ấn đã dùng khi chuyển trận. Hồi phục dựa trên hiệu ứng người chơi có. Kích hoạt Ấn Thú trả điểm riêng. Lá đã dùng bị vô hiệu xuyên các trận. Kiểm tra nạp lại khi Quá tải sau khi cơ chế được duyệt qua playtest.
- Thu phục ấn giữa thành rồi kiểm tra chỉ đưa vào bộ mới sau khi chiếm thành. Kiểm tra combo ấn khi có đặc tả poker hoặc phương án dự phòng.
- Thành có một boss chính, 0–2 boss phụ và có thể có quái đi kèm mỗi boss. Kiểm tra bộ kỹ năng mở theo độ khó sau khi được đặc tả.
- Thua ở Phase 2 trên mốc theo phase thì bắt đầu lại Phase 2. Mốc theo thành bắt đầu lại Phase 1. Mốc khắc nghiệt bắt đầu lại hành trình. Chủ động rút lui ở cả ba mốc đều bắt đầu lại thành từ Phase 1. Cách giữ thưởng, tiến trình và tài nguyên sau khi thua chờ playtest.

### Các mốc phát triển

Tiền sản xuất kiểm chứng công thành, combat thẻ và sức hút của Quá tải. Sản xuất mở rộng vùng, boss, di vật, bộ bài và danh mục ấn. Giai đoạn cân bằng kiểm tra độ rõ của giao diện, mức ảnh hưởng của buff theo tốc độ phá thành, tổn thất chiến dịch và nhịp thu phục. Giai đoạn phát hành theo dõi độ khó, lỗi lưu tiến trình và mức độ hoàn tất hướng dẫn.

Các giá trị tham chiếu có thể điều chỉnh theo dữ liệu playtest, đặc biệt là thời gian công thành, công thức Tuyệt kỹ, combo Ấn Thú, mức tích lũy và hậu quả Quá tải, nạp lại ấn khi Quá tải, hậu quả thất bại và độ khó từng cấu hình thành.
