# Ashborne Phân tích xếp quân công thành và đề xuất hoàn thiện Phase 1

Ngày: 25 tháng 11 năm 2026.

Phase 1 cần tạo được vòng chơi **đọc phòng thủ → bố trí đạo quân → quan sát giao tranh → hiểu nguyên nhân → điều chỉnh ở lần chuẩn bị tiếp theo**. Giá trị của vị trí phải đến từ đường tiến quân, tầm đánh và giao tranh thực tế. Prototype hiện có mới thể hiện rõ lựa chọn hàng trước và hàng sau, chưa tạo được phần chiến thuật theo không gian này.

Phần đề xuất dưới đây phục vụ hoàn thiện thiết kế, chưa thay thế quyết định đã chốt hoặc thông số cân bằng. Phạm vi công việc là phân tích; mã prototype và các tài liệu hiện hành được giữ nguyên.

## 1 Nguồn tham chiếu và giới hạn áp dụng

- [Battle Legion của PocketGameplay, đoạn 00:00 đến 05:00](https://www.youtube.com/watch?v=zHpWqxK6-g8). Link người dùng gửi có nhãn `Ku8mwKUn5T0` nhưng đích mở là `zHpWqxK6-g8`; bản phân tích dùng đích mở này. Các mốc dưới đây là mốc nhận diện cảnh, có thể xê dịch vài giây so với chuyển cảnh.
- [Đội hình vượt map Art of War, đoạn 00:00 đến 01:00](https://www.youtube.com/watch?v=a70hqDMFIyU). Đây là hướng dẫn bố trí của người chơi, không phải tutorial chính thức của game. Phụ đề tự động được dùng để hỗ trợ đọc lời bình; tên quân nghe không rõ không được xem là dữ liệu chính thức.
- [Quyết định gameplay ngày 24 tháng 11](Ashborne-Quyet-dinh-gameplay-da-chot-2026-11-24.md), đặc biệt mục 2 đến 5 và 11 đến 12.
- [Luật prototype](prototype/game.mjs), [giao diện prototype](prototype/app.mjs), [cách dựng chiến trường](prototype/world.mjs) và [phạm vi prototype](prototype/README.md).

Một phút đầu Art of War chủ yếu là màn chuẩn bị. Đoạn này cho thấy cách phân bố vai trò, chưa chứng minh đội hình đó thắng trận hay xác nhận thuật toán chọn mục tiêu. Hai đoạn tham chiếu cũng chưa đủ để kết luận luật tìm đường, cách chặn đạn, giới hạn đổi mục tiêu hoặc toàn bộ hệ khắc chế.

## 2 Những gì hai đoạn video thể hiện

### 2.1 Battle Legion

| Mốc gần đúng | Quan sát | Bài học có thể chuyển sang Ashborne |
| --- | --- | --- |
| 00:00–00:30 | Giới thiệu đội quân đông và giao tranh tự động. | Cho thấy trước trải nghiệm mà thao tác chuẩn bị sẽ tạo ra. |
| 00:50–01:20 | Trận nhỏ với khiên và cung; quân gần tiến lên, cung đứng xa hơn. | Dùng ít vai trò để người mới theo dõi. |
| 01:39–01:55 | Mở Army, chọn cụm cung, đặt vào vùng triển khai; điểm quân tăng từ 5/6 lên 6/6. | Một lần đặt đại diện một cụm lính, có giới hạn triển khai rõ. |
| 01:55–02:15 | Đội hình chuyển trực tiếp sang giao tranh rồi nhận kết quả. | Bố trí và trận đánh cần liên tục về hình ảnh. |
| 02:30–03:40 | Trận khó, nhận tài nguyên và hướng dẫn nâng quân. | Tutorial đặt nhu cầu trước khi mở thao tác phát triển lực lượng. |
| 04:05–04:30 | Mở thêm loại quân và giải thích điểm triển khai. | Mở từng lớp lựa chọn. |

[Xem đoạn thêm cung](https://www.youtube.com/watch?v=zHpWqxK6-g8&t=99s).

Cần phân biệt bài học về xếp quân với bài học về nâng quân. Chuỗi gặp khó rồi nâng cấp trong đoạn này không chứng minh đổi đội hình là cách giải quyết. Ashborne cần tình huống riêng, giữ nguyên sức mạnh và chỉ đổi vị trí để dạy chiến thuật.

### 2.2 Art of War

| Mốc gần đúng | Quan sát | Bài học có thể chuyển sang Ashborne |
| --- | --- | --- |
| 00:00–00:20 | Nhìn được đội hình địch và bàn triển khai; lời bình nhấn mạnh hàng công và sát thương nhiều mục tiêu. | Người chơi cần đọc bài toán trước khi bố trí. |
| 00:20–00:40 | Đặt nhiều cụm quân ở các vị trí trước và sau; còn khoảng trống lớn ở giữa. | Không phải lấp kín bàn mới có đội hình hợp lý. |
| 00:40–01:00 | Bổ sung các cụm ở hai biên phía trước rồi tiếp tục chọn quân. | Cánh và chiều sâu là những lựa chọn riêng. |

[Xem đoạn bố trí](https://www.youtube.com/watch?v=a70hqDMFIyU&t=20s).

Không dùng số bom hoặc tên quân từ phụ đề tự động làm công thức mẫu. Ý nghĩa cần giữ là lựa chọn vai trò, phân bố trước sau và hai biên, cùng các khoảng trống có chủ đích.

## 3 Prototype hiện đang lệch ở đâu

### 3.1 Giao tranh chưa có không gian

Trong `siegeTick`, mọi đạo quân còn sống đều tính sát thương mỗi nhịp rồi trừ chung vào `guard`, sau đó vào `gate`. Không có khoảng cách tới địch, thời điểm vào tầm hoặc mục tiêu phòng thủ cụ thể. Quân có thể gây sát thương từ nhịp đầu dù hình vẽ còn đang tiến tới thành.

Cung và pháp được nhân sát thương nếu còn bất kỳ quân nào ở nhóm ô trước và bản thân ở nhóm ô sau. Hệ số này không kiểm tra có ai che đường tiếp cận tới chính cụm đó hay không. Một cụm giữ bên trái vì vậy vẫn bảo vệ được cụm xa bên phải bằng cùng điều kiện.

Địch chọn mục tiêu theo vòng luân phiên trong danh sách quân hàng trước; khi nhóm đó hết mới đánh hàng sau. Đây là quy tắc thứ tự danh sách, chưa phải hành vi tiếp cận, đánh chặn hoặc đột phá.

### 3.2 Có sáu ô nhưng chưa có sáu lựa chọn chiến thuật

`setFormation` dùng loại quân làm định danh. Chọn lại Khiên sẽ chuyển đạo quân Khiên đang có, không triển khai thêm một đạo quân Khiên độc lập. Vì chỉ có bốn loại quân nên sáu ô không cho phép sáu cụm có thể sử dụng độc lập.

Đổi vị trí trong cùng hàng có thể ảnh hưởng thứ tự xử lý hoặc nhận đòn, nhưng chưa tạo ra chiến thuật cánh trái, cánh phải, tập trung hỏa lực hay khoảng cách giao chiến.

### 3.3 Phần hình và phần luật chưa dùng chung vị trí

`world.mjs` cho các cụm tiến lên theo `tick/7`. Luật chiến đấu không đọc vị trí đó. Quân thủ thành là những hình đại diện cho một thanh phòng thủ chung. Mất hình lính phản ánh tỷ lệ HP của cụm, chưa thể hiện đối thủ nào vừa tiêu diệt ai.

Điều này làm người chơi khó học qua quan sát: họ thấy quân tiến và tên bay nhưng không đọc được chuỗi nguyên nhân từ bố trí đến kết quả.

### 3.4 Kết quả hiện tại ít phân hóa giữa các cách xếp hợp vai trò

Chạy trực tiếp logic thành đầu, cùng seed và 30 quân ban đầu, cho kết quả:

| Cách xếp | Nhịp phá cổng | Quân mất | Mana tối đa Phase 2 |
| --- | --- | --- | --- |
| Khiên và Giáo trước, Cung và Pháp sau | 4 | 1 | 5 |
| Đổi chỗ Khiên với Giáo trong hàng trước | 4 | 1 | 5 |
| Chuyển Cung sang ô sau còn trống | 4 | 1 | 5 |
| Đổi chỗ Cung với Pháp trong hàng sau | 4 | 1 | 5 |
| Đưa Cung và Pháp ra trước, Khiên và Giáo ra sau | 6 | 9 | 4 |

Đây là kiểm tra nhỏ trên cấu hình hiện có, không đại diện mọi tổ hợp. Nó cho thấy bản thử đã có sự khác biệt giữa đặt đúng và sai hàng; phần cần bổ sung là nhiều cách xếp hợp lý với ưu nhược điểm khác nhau. Ngưỡng áp đảo thành đầu là 20 nhịp và tổn thất tối đa 25%, trong khi bố trí mặc định chỉ dùng 4 nhịp và mất 1/30 quân.

## 4 Những ràng buộc cần giữ

1. Chế tạo, dung hợp, thử quân và bổ sung lực lượng nằm tại trại. Màn chuẩn bị công thành lấy đạo quân đã có để bố trí.
2. Đạo quân lưu qua nhiều cuộc công thành, có quân số thực tế và chịu tổn thất. Đạo quân hết quân vẫn giữ hồ sơ và công thức.
3. Binh chủng quyết định tầm đánh, chọn mục tiêu và che chắn. Chủng tộc, tương thích và dung hợp điều chỉnh nền sức mạnh và khả năng phối hợp.
4. Sau khi xuất quân, Phase 1 tự mô phỏng. Đổi vị trí là quyết định trước trận; tốc độ xem và tạm dừng không tạo thêm lệnh chiến thuật.
5. Áp đảo được đo bằng nhịp mô phỏng và tổn thất, có ngưỡng theo thành. Thưởng là +1 mana tối đa mỗi lượt xuyên Phase 2 của cuộc đó.
6. Thua hoặc rút lui phải công lại cả thành; quân số đã mất không tự hoàn trả. Trận thử tại trại không mất quân thật và không cấp thưởng.
7. Bốn chỉ số lõi giữ gọn: Sinh lực, Công kích, Phòng ngự và Tốc độ hành động. Tốc độ di chuyển và tầm đánh có thể là thuộc tính hành vi của binh chủng, không cần mở thêm lớp nâng cấp chỉ số.

## 5 Đề xuất cơ chế xếp quân cho Phase 1

### 5.1 Đơn vị người chơi đặt là đạo quân độc lập

Một thẻ trong danh sách quân đại diện một đạo quân đã sản xuất: có mã riêng, chủng tộc, binh chủng, công thức và quân số hiện tại. Có thể sở hữu hai đạo quân Khiên khác nhau nếu đã tạo cả hai tại trại. Đưa một đạo quân ra bàn không tạo thêm bản sao hoặc nhân đôi quân số của nó.

Kéo một đạo quân từ danh sách lên bàn, chuyển vị trí hoặc trả về danh sách. Bấm chọn quân rồi bấm ô là phương án điều khiển bổ sung cho PC. Ô bị chiếm hoặc ngoài vùng triển khai phải báo ngay; không âm thầm đổi một đạo quân khác khi thả sai.

### 5.2 Bàn triển khai có chiều rộng và chiều sâu

Cấu hình thử nên bắt đầu bằng **5 vị trí ngang và 4 hàng sâu**, triển khai khoảng 4–6 đạo quân. Các con số này là đề xuất thử nghiệm. Không cần đưa ngay bàn đông quân như Art of War vào lần công thành đầu.

Hướng đánh trong sơ đồ là từ dưới lên. Nếu màn chơi dùng hướng trái sang phải thì xoay đồng thời bàn triển khai và chiến trường, giữ nguyên ý nghĩa các vị trí.

| Chiều sâu | Cánh trái | Trái giữa | Trung tâm | Phải giữa | Cánh phải |
| --- | --- | --- | --- | --- | --- |
| Gần địch nhất | Trống | Khiên A | Trống | Khiên B | Trống |
| Hàng thứ hai | Trống | Trống | Giáo | Trống | Trống |
| Hàng thứ ba | Trống | Cung | Trống | Pháp | Trống |
| Xa địch nhất | Trống | Trống | Trống | Trống | Trống |

Đây là ví dụ bố trí, chưa phải đội hình tối ưu. Khoảng trống có thể làm quân gặp địch muộn hơn, giữ đường đi hoặc phân tán sát thương vùng. Dồn một cánh đổi lại áp lực sớm ở cánh đó và rủi ro để hở hướng khác.

Các ô dùng để đặt vị trí xuất phát. Khi giao tranh, quân di chuyển và chạm địch trên chiến trường; không bị khóa vào đường đấu riêng theo từng cột. Cần nhìn từ trên hoặc góc chếch 2D đủ rõ để phân biệt cánh và chiều sâu. Không cần đổi sang đồ họa 3D để đạt mục tiêu này.

### 5.3 Giới hạn triển khai tách khỏi số ô

Số ô quyết định nơi có thể đứng; lực lượng thực tế và giới hạn triển khai quyết định được mang bao nhiêu đạo quân. Trong bản thử đầu có thể dùng giới hạn số đạo quân đơn giản, chưa cần thêm tài nguyên điểm quân cạnh lương và vàng.

Nếu dùng điểm triển khai về sau, phải đối chiếu với kinh tế lương và mức tiêu hao của chủng tộc để tránh tính cùng một bất lợi hai lần. Bài học từ Battle Legion là giới hạn phải dễ đọc, không phải sao chép mức 6/6 hoặc cách tính theo độ hiếm.

### 5.4 Cho xem bài toán phòng thủ trước khi xuất quân

Màn bố trí cần thể hiện đội hình địch, vai trò chính, hướng công kích, công sự có thể đánh và mục tiêu mở đường vào thành. Bản thử đầu có thể cho thấy đầy đủ lực lượng để kiểm tra giá trị xếp quân trước khi cân nhắc cơ chế trinh sát hoặc thông tin ẩn.

Khi chọn đạo quân, hiện vùng đặt hợp lệ, tầm đánh ban đầu và mô tả hành vi ngắn. Không hiện tỷ lệ thắng chính xác nếu chưa có mô hình dự báo đáng tin cậy. Những cảnh báo như “cụm này chưa có lực lượng đánh chặn ở hướng tiếp cận” hữu ích hơn một con số sức mạnh tổng.

## 6 Đề xuất luật mô phỏng giao tranh

### 6.1 Mỗi đạo quân có trạng thái giao tranh riêng

Bản thử có thể mô phỏng ở cấp cụm để giữ phạm vi vừa đủ: mỗi cụm có vị trí, kích thước chiếm chỗ, quân số, mục tiêu, tầm đánh, nhịp hành động và trạng thái đang di chuyển hoặc giao chiến. Không bắt buộc mô phỏng hàng trăm lính như các tác nhân độc lập ngay từ đầu.

Chuỗi hành vi cơ bản: chọn mục tiêu hợp lệ → tiếp cận khi chưa vào tầm → dừng và tấn công theo nhịp → ghi nhận sát thương và thương vong → đánh giá lại mục tiêu khi cần. Hình ảnh lấy trực tiếp trạng thái này để vẽ.

### 6.2 Khoảng cách quyết định thời điểm gây sát thương

Quân gần phải tới phạm vi tiếp xúc mới đánh. Cung và pháp bắt đầu tấn công khi mục tiêu vào tầm; đặt quá xa sẽ tham chiến muộn, đặt quá gần sẽ dễ bị áp sát. Tốc độ hành động điều khiển nhịp đánh, còn hành vi di chuyển dùng thuộc tính riêng của binh chủng.

Đây là điều kiện để chiều sâu đội hình có tác dụng. Không thể giữ luật mọi cụm đều gây sát thương từ nhịp đầu rồi chỉ thêm hoạt ảnh di chuyển.

### 6.3 Che chắn hình thành từ việc đánh chặn

Khiên bảo vệ Cung vì nó chiếm hướng tiếp cận và giữ quân cận chiến địch ở phía trước. Nếu đối thủ đi qua cánh trống để chạm Cung, cụm Cung vẫn bị đánh dù Khiên bên kia còn sống.

Va chạm và tìm đường cần ngăn quân đi xuyên cụm địch đang chặn. Quân cùng phe phải có cách tránh hoặc chờ nhau, tránh chồng hình và tránh kẹt vô hạn. Quy tắc chặn đạn, nếu có, phải là năng lực riêng được mô tả; không mặc định mọi bộ binh chắn được mọi loại đạn.

### 6.4 Chọn mục tiêu theo vai trò và khả năng tiếp cận

| Binh chủng | Hành vi cơ bản đề xuất | Quyết định bố trí tạo ra |
| --- | --- | --- |
| Khiên | Tiếp cận và giữ địch có thể chạm tới; chống chịu tốt, sát thương thấp. | Chặn hướng nào, bảo vệ cụm nào. |
| Giáo | Đánh gần với khoảng vươn dài hơn; ưu tiên dùng để giữ khe hoặc hỗ trợ tuyến tiếp xúc. | Đặt sau Khiên vừa đủ tầm hay giữ một cánh. |
| Kiếm | Cận chiến cân bằng, gây áp lực lên lực lượng gần có thể tiếp cận. | Tập trung đánh một điểm hay trải lực lượng. |
| Cung | Bắn mục tiêu hợp lệ trong tầm; chưa có mục tiêu thì tiến tới vị trí bắn. | Chọn độ sâu và góc triển khai để giữ thời gian bắn. |
| Pháp | Có hiệu ứng riêng theo công thức; biến thể sát thương vùng đánh nhiều mục tiêu trong khu vực xác định. | Tận dụng cụm địch đông, đổi lại rủi ro tuyến sau mỏng. |

Không cần mở cả năm binh chủng trong bản thử đầu. Khiên, một quân cận chiến và Cung đủ để kiểm tra khoảng cách và che chắn; Pháp sát thương vùng có thể thêm ở bước kế tiếp. Hiệu ứng của biến thể dung hợp phải ghi rõ trong hồ sơ quân, tránh mặc định mọi Pháp đều có cùng kỹ năng.

Quy tắc chọn mục tiêu nên ổn định: ưu tiên vai trò đã công bố, sau đó khả năng tiếp cận và khoảng cách, cuối cùng dùng thứ tự cố định khi hòa. Không liên tục đổi mục tiêu chỉ vì hai cụm xê dịch một chút. Cùng dữ liệu, seed và đội hình cần tái hiện được kết quả.

### 6.5 Sát thương vùng làm cách phân bố quân có ý nghĩa

Sát thương vùng phải xét các cụm nằm trong vùng ảnh hưởng thực tế. Đứng sát giúp tập trung sức đánh nhưng có thể nhận một đòn lên nhiều cụm; đứng giãn giảm thiệt hại vùng nhưng khó hỗ trợ nhau. Không cộng thưởng hoặc phạt chỉ dựa trên nhãn “đội hình đông” nếu hình ảnh không phản ánh vị trí tương ứng.

Chưa cần thêm sát thủ nhảy hậu tuyến, bẫy, kỵ binh hoặc nhiều hiệu ứng khống chế để chứng minh cơ chế này. Các vai trò đó mở sau khi lớp cơ bản đã chơi được.

## 7 Đưa giao tranh thành một cuộc công thành

### 7.1 Quân thủ thành là lực lượng cụ thể

Thành đầu nên có một tuyến quân chắn đường, một nguồn bắn phía sau và một cổng có vị trí rõ. Mỗi cụm phòng thủ có hành vi và tổn thất riêng. Một thanh tổng có thể dùng làm thông tin phụ, nhưng không thay các mục tiêu giao tranh.

Đội hình thủ cần tạo câu hỏi đọc được: phía nào ít quân giữ, nguồn bắn nào đang gây thiệt hại, có nên dồn lực để mở một hướng hay trải Khiên bảo vệ hai cụm Cung.

### 7.2 Cổng là mục tiêu trên chiến trường

Đề xuất cho quân công thành được tiếp cận và đánh cổng khi mở được đường tới nó; quân thủ còn ở hướng khác vẫn có thể gây nguy hiểm. Không bắt buộc xóa mọi quân thủ ở toàn bản đồ mới cho phép đánh cổng, trừ khi thành có điều kiện đặc biệt được báo trước.

Quân bị địch áp sát không được tự do gây sát thương cổng bằng phép tính toàn cục. Hành vi chuyển giữa đánh quân và công sự cần rõ: ưu tiên đối thủ đang trực tiếp giao chiến; khi đường tiếp cận mục tiêu mở thì tiếp tục tiến công. Không để cả đội đuổi một quân lạc tận mép bản đồ rồi bỏ cổng.

### 7.3 Điều kiện kết thúc và chống bế tắc

- Thắng khi đạt điều kiện phá phòng tuyến đã công bố của thành, ví dụ phá cổng trong bản thử đầu.
- Thua khi hết lực lượng có khả năng tiếp tục hoặc vượt giới hạn nhịp của màn. Giới hạn cần báo rõ và đủ để đội hình phòng thủ có cơ hội thắng.
- Phát hiện cụm đứng chờ không thể tiếp cận quá lâu để tìm lại đường hoặc đổi mục tiêu; không tự giết quân để giải quyết kẹt đường.
- Đổi tốc độ xem chỉ đổi tốc độ phát lại, không đổi bước tính luật, kết quả hoặc điều kiện áp đảo.

### 7.4 Kết quả phải chỉ được nguyên nhân

Hiện thời gian theo nhịp, quân mất theo từng đạo quân, tiến độ mục tiêu và trạng thái Thế chủ động. Cho xem lại một thời điểm quan trọng hoặc nhật ký ngắn như “cánh phải bị xuyên lúc nhịp 12; Cung B bị áp sát”. Chỉ hiện những nguyên nhân có sự kiện mô phỏng tương ứng.

Thắng thường vẫn vào Phase 2 với mức mana cơ bản. Thắng áp đảo nhận đúng +1 mana tối đa theo luật đã chốt. Các ngưỡng cần cân lại sau khi đổi mô hình giao tranh; không bê ngưỡng 20 nhịp từ bản tính sát thương chung sang mô phỏng vị trí.

Tổn thất mô phỏng phải ghi đúng một lần cho đúng đạo quân. Đội quân ở trại không tham gia không chịu mất quân trong Phase 1. Khi thêm phạt rút lui theo luật chiến dịch, kiểm soát tổng thiệt hại để không tính lại thương vong đã ghi.

## 8 Tutorial Phase 1 đề xuất

Đây là chuỗi dạy riêng cho xếp quân, đặt tại thời điểm giới thiệu Phase 1 phù hợp với tiến trình hiện hành. Nó không thay thứ tự mở hệ thống toàn game đã được duyệt.

| Bước | Tình huống và thao tác | Điều người chơi cần hiểu | Dấu hiệu đã học được |
| --- | --- | --- | --- |
| 1 Quan sát | Cho xem một trận nhỏ đã bố trí sẵn, có Khiên giữ và Cung bắn. | Xếp trước, đánh tự động; mỗi vai trò có hành vi riêng. | Nhận ra ai giữ và ai gây sát thương. |
| 2 Tự đặt | Đưa Khiên và Cung có sẵn lên vùng triển khai; chỉ dẫn ngắn tại bước cần làm. | Đặt một đạo quân, đổi vị trí, trả về danh sách. | Hoàn thành bố trí mà không cần mở hướng dẫn dài. |
| 3 Kiểm tra che chắn | Cho đổi Cung từ trước ra sau Khiên; giữ nguyên quân số và chỉ số. | Vị trí đổi việc ai bị tiếp cận và thời gian Cung được bắn. | Nhìn được chênh lệch thương vong giữa hai bố trí. |
| 4 Kiểm tra cánh | Địch lệch một cánh; bỏ chỉ dẫn vị trí chính xác. | Tuyến trước không bảo vệ toàn bàn; phải đặt theo hướng tấn công. | Người chơi tự dịch Khiên hoặc Cung để sửa điểm hở. |
| 5 Công cổng | Thêm cổng và nguồn bắn thủ; giữ số vai trò nhỏ. | Mở đường, duy trì lực lượng rồi hoàn thành mục tiêu. | Phá cổng và đọc được kết quả từng đạo quân. |
| 6 Thử phân bố | Khi đã quen, thêm một nguồn sát thương vùng. | Dồn và giãn quân có đánh đổi. | Tìm được hơn một bố trí có lý do. |
| 7 Chuyển phase | Hiện kết quả, quân mất và có hoặc không có Thế chủ động. | Chuẩn bị tốt giúp Phase 2; thắng thường vẫn có giá trị. | Đọc được buff +1 mana và thời hạn cả cuộc công thành. |

Các lần thử sai để dạy xếp quân nên diễn ra trong mô phỏng tại trại, tận dụng luật không tổn thất thật. Khi chuyển sang cuộc công thành thật, thương vong được lưu theo luật chiến dịch. Tránh bắt người mới chết quân thật nhiều lần chỉ để học cách kéo thả.

Không dùng tăng cấp hoặc thêm quân để giải quyết bài học “đổi vị trí”. Khi muốn dạy sản xuất, dung hợp hoặc bổ sung lực lượng, chuyển sang bài học riêng ở trại. Chỉ dẫn phải rút dần: lượt đầu chỉ ô cụ thể, lượt sau chỉ nêu vấn đề, sau đó để người chơi tự xử lý.

## 9 Phạm vi bản thử tiếp theo

Ưu tiên theo thứ tự phụ thuộc:

1. Đạo quân có mã riêng; triển khai từ lực lượng thực tế; bàn có chiều rộng và chiều sâu.
2. Cùng một dữ liệu vị trí cho luật và hình; di chuyển, tiếp xúc, tầm đánh, nhịp hành động và chọn mục tiêu.
3. Quân thủ độc lập; Khiên đánh chặn tại chỗ; đường hở có thể khiến tuyến sau bị áp sát.
4. Cổng có vị trí và điều kiện thắng; tổng kết thương vong theo đạo quân, nhịp giao tranh và buff chuyển phase.
5. Một chuỗi tutorial ngắn giữ nguyên lực lượng để so sánh các bố trí.
6. Bổ sung sát thương vùng và các đội hình thủ khác sau khi kiểm tra lớp nền.

Trong vòng thử này chưa cần mở rộng toàn bộ chủng tộc, dung hợp, cây nâng cấp, quân đặc biệt hay nhiều loại công thành. Lực lượng mẫu có sẵn tại trại vẫn phù hợp để kiểm chứng phần xếp quân.

## 10 Tiêu chí nghiệm thu gameplay

| Ca thử | Kết quả cần quan sát |
| --- | --- |
| Đổi riêng vị trí, giữ nguyên quân và chỉ số | Ít nhất một tình huống cho kết quả khác có thể giải thích bằng diễn biến chiến trường. |
| Khiên chắn đúng hướng và Khiên đứng cánh đối diện | Cung được bảo vệ khác nhau theo đường tiếp cận thực tế. |
| Đặt Cung quá sâu | Tham chiến muộn hơn; không gây sát thương trước khi vào tầm. |
| Cụm địch dồn và giãn trước Pháp đánh vùng | Số mục tiêu trúng thay đổi theo vị trí. |
| Mở một hướng tới cổng trong khi còn quân thủ ở xa | Quân có thể công cổng theo điều kiện màn; quân thủ còn lại vẫn hoạt động. |
| Hai đạo quân cùng binh chủng | Triển khai độc lập bằng đúng lực lượng đã sở hữu; không nhân bản quân số. |
| Chạy lại cùng đầu vào hoặc đổi tốc độ xem | Cùng kết quả; tốc độ xem không giúp né đòn hoặc lấy buff. |
| Thắng thường và thắng áp đảo | Cả hai chuyển Phase 2; chỉ áp đảo nhận +1 mana tối đa suốt cuộc đó. |
| Thất bại, rút lui và công lại | Thương vong ghi đúng một lần, về trại còn đúng quân; công lại từ đầu thành. |
| Người mới hoàn thành bài che chắn rồi gặp đội hình lệch cánh | Có thể tự sửa bố trí mà không cần nâng sức mạnh. |

Mục tiêu của vòng thử là có ít nhất hai cách thắng hợp lý, ví dụ đánh chắc để giữ quân hoặc tập trung lực lượng mở một cánh sớm. Nếu mọi bài đều giải bằng một cách xếp Khiên trước, Cung sau ở bất kỳ cột nào, phần chiến thuật theo không gian vẫn chưa đạt.

## 11 Những lựa chọn còn cần kiểm chứng

- Kích thước bàn, số đạo quân và giới hạn triển khai phù hợp với độ đọc trên PC.
- Mức chi tiết mô phỏng cấp cụm, kích thước chiếm chỗ và xử lý tìm đường khi đông quân.
- Hành vi chính xác của từng binh chủng, đặc biệt Giáo hỗ trợ sau Khiên và biến thể Pháp đánh vùng.
- Mục tiêu từng thành: phá cổng, mở đường hay chiếm một vị trí cụ thể. Bản thử đầu nên chọn một loại để kiểm tra.
- Ngưỡng áp đảo, thời lượng giao tranh, tổn thất và chi phí bổ sung sau khi đã có mô phỏng vị trí.

Các lựa chọn này được đưa ra để hoàn thiện Phase 1. Quyết định sử dụng thuộc bước duyệt thiết kế tiếp theo; không tự ghi chúng vào hồ sơ gameplay đã chốt.
