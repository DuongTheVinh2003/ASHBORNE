# Ashborne Tổng hợp quyết định gameplay đã chốt

Ngày tổng hợp: 24 tháng 11 năm 2026

## 1 Phạm vi và nguyên tắc sử dụng

Bản tổng hợp ghi lại các quyết định cuối cùng của cuộc thảo luận, từ nhận định ban đầu về độ nặng của game đến các điều chỉnh về quân đội, dung hợp, Quá tải, hồi phục, Ấn Thú và cốt truyện. Khi một ý được sửa nhiều lần, áp dụng phiên bản mới nhất. Những cấu hình số đã được chấp thuận là giá trị ban đầu để cân bằng về sau, không phải kết quả đã kiểm chứng bằng gameplay.

Dung hợp được giữ làm cơ chế trung tâm, cho phép người chơi có nhiều cách giải quyết tình huống. Việc tổ chức lại các hệ thống nhằm giảm thao tác lặp và tải phải xử lý cùng lúc, đồng thời giữ giá trị của chuẩn bị, khám phá công thức và xây dựng lực lượng.

Cuộc thảo luận này chốt concept và hướng vận hành. Không triển khai prototype trong task. Bản tổng hợp được tạo thành hai phiên bản Markdown và Word có cùng nội dung; các tài liệu thiết kế và mã demo cũ chưa được chỉnh sửa bởi việc xuất bản tổng hợp này.

Các điều kiện, mức sức mạnh hoặc công thức chưa từng được xác định cụ thể được liệt kê ở mục 14. Việc chấp thuận một hướng thiết kế không tự tạo thêm thông số chưa được nêu.

## 2 Vòng chơi và phân chia hệ thống

### 2.1 Vòng chơi hiện hành

Khám phá và giải phóng vùng đất → mở khóa Chủng tộc và nội dung mới → thử nghiệm, chế tạo và lưu đạo quân ở trại → chuẩn bị bộ bài và bộ Ấn → chọn thành → xếp đội hình → mô phỏng công thành ở Phase 1 → giao tranh thẻ bài ở Phase 2 → nhận kết quả, phần thưởng và thu phục → phục hồi, bổ sung lực lượng và chuẩn bị cuộc công thành tiếp theo.

### 2.2 Vai trò của từng phần

- Trại là nơi xây dựng lực lượng, thử công thức và kiểm tra đạo quân bằng trận mô phỏng.
- Khi bắt đầu công thành, phần chuẩn bị quân chỉ còn xếp đội hình từ các đạo quân đã có. Không lặp lại chế tạo, nâng bậc hoặc dung hợp quân tại màn công thành.
- Phase 1 tiếp tục là giao tranh mô phỏng tự động sau khi xếp đội hình.
- Phase 2 là combat thẻ bài theo lượt, gồm đánh lẻ, cường hóa, Tuyệt kỹ, Nguyên tố, bình hồi HP và Ấn Thú.
- Một cuộc công thành có thể gồm nhiều trận PvE. Cần phân biệt một trận boss trong thành với một lần công thành toàn bộ thành đó.

Các hệ thống mở khóa dần theo tiến trình. Không yêu cầu người chơi tiếp nhận toàn bộ cơ chế ngay từ đầu.

## 3 Thu thập và chế tạo đạo quân

### 3.1 Chủng tộc được mở khóa vĩnh viễn

Chủng tộc mới được mở khóa qua giải phóng vùng đất, thương nhân bí ẩn và các nguồn nội dung khác. Đây là quyền mở khóa vĩnh viễn để sử dụng khi tạo quân; không coi lá Chủng tộc là vật liệu chỉ dùng được một lần rồi mất quyền sử dụng.

Chi phí nằm ở việc sản xuất đạo quân và bổ sung lực lượng. Chủng tộc có nền sức mạnh và mức phù hợp với binh chủng khác nhau. Hướng tương thích vẫn được giữ: tổ hợp ngoài sở trường có thể tạo được, nhưng hiệu quả và chi phí bất lợi hơn tùy tổ hợp.

### 3.2 Chế tạo và lưu lại

Người chơi tạo đạo quân tại trại huấn luyện. Xác nhận chế tạo một đạo quân mới sẽ trừ tài nguyên tương ứng. Có thể xem trước kết quả và chi phí trước khi xác nhận.

Lưu cả đạo quân thực tế, công thức tạo ra nó và chi phí sản xuất để sử dụng về sau. Phân biệt công thức đã biết với lực lượng thực tế đang có quân số để triển khai. Không cần khám phá lại một công thức đã lưu khi muốn sản xuất hoặc bổ sung quân theo công thức đó.

Cấu trúc đạo quân gồm Chủng tộc, Binh chủng, công thức dung hợp và quân số hiện tại. Đạo quân được giữ trong danh sách lực lượng qua các cuộc công thành, chịu tổn thất theo kết quả chiến đấu. Quy ước cũ chỉ tồn tại đến hết Phase 1 không còn dùng cho mô hình đạo quân đã chế tạo tại trại.

### 3.3 Bỏ bước nâng bậc bằng ghép lá

Bỏ bước ghép nhiều lá Binh chủng cùng loại để nâng bậc trước khi tạo quân. Nền sức mạnh khác nhau của các Chủng tộc và cách phối hợp với Binh chủng thay thế vai trò của lớp nâng bậc này trong hướng hiện tại.

Điều này không tự mở thêm một hệ nâng cấp quân mới. Những phát triển khác chỉ được bổ sung khi có đặc tả riêng.

### 3.4 Thử nghiệm bằng giao tranh mô phỏng

Thử nghiệm là cho đạo quân được thiết kế giao chiến với một đạo quân tương ứng của phe địch trong trận mô phỏng tại trại. Có thể thử trước khi cam kết sản xuất lực lượng thực tế.

Trận thử không gây tổn thất quân thật, không trả phần thưởng và không tính vào chuỗi hồi phục hoặc Quá tải. Kết quả cần giải thích được nguyên nhân thắng thua, chẳng hạn tuyến trước vỡ, quân tầm xa bị tiếp cận, thiếu sát thương hoặc không đủ quân số.

## 4 Chỉ số đạo quân và kinh tế chiến dịch

### 4.1 Bốn chỉ số chiến đấu chính

| Chỉ số | Vai trò |
| --- | --- |
| Sinh lực | Khả năng chịu sát thương và tổn thất của đơn vị quân |
| Công kích | Khả năng gây sát thương |
| Phòng ngự | Giảm sát thương nhận |
| Tốc độ hành động | Nhịp tấn công và phân biệt quân nhanh với quân nặng |

Tầm đánh, cách chọn mục tiêu và khả năng che chắn thuộc đặc tính Binh chủng. Vai trò phải thể hiện qua cách chiến đấu, không chỉ qua chỉ số cao hoặc thấp.

### 4.2 Cách hình thành chỉ số

- Chủng tộc cung cấp nền sức mạnh, điểm mạnh và điểm yếu.
- Binh chủng phân bổ nền sức mạnh theo vai trò chiến đấu.
- Tương thích điều chỉnh hiệu quả và chi phí của tổ hợp.
- Dung hợp lấy lá dưới cùng làm gốc, giữ một chỉ số đặc trưng của lá gốc. Các chỉ số còn lại nhận đóng góp có giới hạn từ các thành phần tham gia.
- Hướng tính đóng góp là trung bình có trọng số và thưởng phối hợp, thay vì cộng toàn bộ chỉ số của mọi lá. Trọng số và giới hạn cụ thể chưa được ấn định.

Cần giữ lý do để triển khai nhiều đạo quân riêng thay vì luôn dồn tất cả thành một đạo quân. Chủng mạnh có thể đắt hơn về tuyển quân và lương. Chủng yếu giữ giá trị nhờ rẻ, dễ bổ sung và có thể triển khai đông hơn trong cùng ngân sách.

### 4.3 Các chỉ số chiến dịch đã có

| Nguồn lực hoặc chỉ số | Vai trò được giữ |
| --- | --- |
| Quân số | Lực lượng thực tế, khả năng triển khai và tổn thất sau chiến đấu |
| Lương | Chi phí triển khai, duy trì hoặc bổ sung theo đặc tả kinh tế |
| Trung thành | Mức sẵn sàng huy động; ưu tiên tác động đến huy động và tuyển bổ sung |
| Tinh thần | Chỉ số ngắn hạn cho nghỉ ngơi, sự kiện và hành trình |
| Danh tiếng | Sức hút tuyển quân và các điều kiện nội dung liên quan |
| Vương quyền | Mốc tiến trình, mở vùng, liên minh hoặc tuyến tuyển quân |
| Vàng | Giao dịch, dịch vụ và các khoản chi theo dữ liệu nội dung |

Thua làm giảm quân số và trung thành. Không tự hoàn trả hai khoản này khi thử lại. Tránh đồng thời dùng trung thành để giảm mạnh mọi chỉ số chiến đấu, vì quân số giảm và tổn thương Nguyên tố đã tạo hậu quả cho lần thử sau.

Đạo quân về 0 quân số vẫn giữ hồ sơ, công thức và chi phí sản xuất; cần bổ sung quân trước khi triển khai lại. Trại phải có đường tuyển bổ sung và phục hồi trung thành rõ ràng. Nếu hành trình không còn đường phục hồi thì phải có trạng thái kết thúc hành trình rõ ràng.

## 5 Công thành áp đảo và buff chuyển Phase 2

### 5.1 Tiêu chí áp đảo

Đánh giá áp đảo theo số nhịp của giao tranh mô phỏng và mức tổn thất, với ngưỡng riêng cho từng thành. Không đo thời gian người chơi ngồi xếp đội hình. Tiêu chí cần cho đội hình phòng thủ cơ hội đạt kết quả tốt, thay vì chỉ thưởng cho sát thương nhanh.

### 5.2 Thế chủ động

Thắng áp đảo ở Phase 1 tăng 1 mana tối đa trong toàn bộ Phase 2 của cuộc công thành đó. Mana được bổ sung theo mức mới ở đầu mỗi lượt, xuyên suốt các trận PvE trong thành. Kết thúc cuộc công thành thì mức tăng hết hiệu lực.

Ví dụ, mức tham chiếu 4 mana mỗi lượt trở thành 5 mana mỗi lượt khi có buff. Không giới hạn buff ở lượt đầu và không tăng mana tối đa vĩnh viễn.

Mana là ngân sách dùng bài trong lượt. Chỉ khi các lá đều tốn 1 mana thì lượng mana mới tương đương số lá có thể dùng; lá tốn nhiều mana sử dụng nhiều ngân sách hơn.

## 6 Dung hợp và Tuyệt kỹ trong combat

### 6.1 Hành vi người chơi

Giữ hai hành vi chính là đánh lẻ và sử dụng công thức Tuyệt kỹ đã biết. Khám phá công thức là hướng bổ sung, được hỗ trợ bằng manh mối, nhật ký và nơi thử nghiệm.

Bài thường không phải tài sản độc nhất chỉ xuất hiện một lần. Loại lá và các bản sao có thể xuất hiện ở những lần rút tiếp theo. Lá thành phần bị tiêu hao khỏi tay ở lần dùng không đồng nghĩa mất vĩnh viễn loại lá đó khỏi bộ bài.

### 6.2 Các kết quả của tổ hợp

| Loại khớp | Kết quả |
| --- | --- |
| Đúng công thức đầy đủ | Tạo Tuyệt kỹ đầy đủ |
| Đúng phần cốt lõi được quy định của công thức | Tạo Tuyệt kỹ yếu hơn bản đầy đủ |
| Đúng công thức cường hóa | Tạo đòn được gắn hiệu ứng tương ứng |
| Không khớp trường hợp hợp lệ nào | Chỉ lá đầu tiên kích hoạt; các lá còn lại không kích hoạt và biến mất tạm thời khỏi tay |

Tổ hợp thất bại vẫn trả tổng mana của toàn bộ các lá tham gia. Không còn quy tắc chồng sai công thức vẫn thực thi lần lượt mọi lá.

Một số Tuyệt kỹ yêu cầu đúng thứ tự, một số không. Điều kiện này nằm trong từng công thức, không áp dụng một quy tắc thứ tự duy nhất cho tất cả.

### 6.3 Công thức thiếu

Phần khớp một phần phải được thiết kế trước cho từng Tuyệt kỹ. Ví dụ, A và B là lõi; A cùng B tạo bản thiếu; A cùng B cùng C tạo bản đầy đủ; A cùng C không đủ lõi. Thứ tự của phần lõi phải tuân theo yêu cầu của công thức tương ứng.

Mức uy lực ban đầu cho bản thiếu khoảng 60 đến 70 phần trăm bản đầy đủ. Những hiệu ứng như khống chế, hồi HP hoặc rút bài cần được viết riêng; không mặc định nhân tất cả hiệu ứng với cùng một hệ số.

Ưu tiên nhận diện Tuyệt kỹ đầy đủ, rồi bản thiếu, rồi cường hóa. Một tổ hợp chỉ tạo một kết quả. Không mặc định vừa nhận trọn mọi hiệu ứng riêng của các lá vừa cộng thêm Tuyệt kỹ.

### 6.4 Cường hóa Nguyên tố và thao tác

Gắn Nguyên tố vào đòn là một tổ hợp cường hóa hợp lệ khi khớp công thức cường hóa đã quy định, kể cả khi không tạo Tuyệt kỹ. Một lá Nguyên tố nằm sau lá đầu trong một tổ hợp thực sự thất bại không tự được kích hoạt chỉ vì nó là Nguyên tố.

Chốt tổ hợp chủ động sau khi xếp bài. Không dùng cửa sổ vài giây tự thi triển làm điều kiện bắt buộc cho việc hoàn tất tổ hợp. Người chơi cần có khả năng xem và sửa lựa chọn trước khi chốt theo thiết kế thao tác.

Nhật ký lưu công thức đã phát hiện, tổ hợp thành công và thất bại. Với công thức đã biết, giao diện phân biệt bản đầy đủ và bản thiếu. Công thức chưa biết có thể được dẫn dắt bằng manh mối thay vì yêu cầu thử mù.

## 7 Nguyên tố và Quá tải

### 7.1 Bản sắc và nguyên tắc

Giữ bốn hệ Lửa, Nước, Gió và Đất theo concept: Lửa gây sát thương và lan truyền; Nước hồi HP; Gió điều chỉnh nhịp và bài; Đất tạo hoặc giữ Khiên.

Mỗi hệ có một kiểu Quá tải riêng, đồng thời mang buff và debuff liên tục trong thời gian Quá tải. Thanh đầy kích hoạt Quá tải ngay. Cùng một hệ không kích hoạt Quá tải hai lần trong một cuộc công thành.

Ví dụ Lửa khiến đòn đánh gây bỏng nhưng người chơi mất HP sau mỗi lần ra đòn chỉ là ví dụ minh họa. Chưa chốt đó là hiệu ứng chính thức hoặc cách đếm phản lực theo hit, lá hay hành động.

Giữ Tiết Chế trước khi thanh đầy, với các cặp Lửa đối nghịch Nước và Gió đối nghịch Đất. Điều kiện sử dụng phải nhất quán với các công thức cường hóa hợp lệ.

### 7.2 Quá tải và tổn thương là các trạng thái khác nhau

Trong cuộc công thành, Quá tải đang hoạt động giữ hiệu lực qua các trận PvE còn lại. Khi cuộc công thành kết thúc, buff và debuff Quá tải kết thúc; hậu quả chuyển sang trạng thái suy yếu hoặc khóa của hệ đó ở những lần công thành sau.

Nếu công thành A bị Quá tải Lửa, sang B tiếp tục dùng các lá Nguyên tố Lửa thì hiệu quả của chúng giảm. Các hệ khác không bị giảm theo.

Suy yếu và khóa chỉ ảnh hưởng các thẻ Nguyên tố của hệ tương ứng. Không áp dụng sự suy yếu hoặc khóa đó lên thẻ Vũ khí, Ấn Thú hay các thẻ thuộc hệ khác. Điều này không tự giới hạn buff Quá tải trong trận; buff và debuff cụ thể vẫn theo thiết kế riêng của từng hệ.

### 7.3 Hai lần liên tiếp tính theo cuộc công thành

Liên tiếp là hai lần công thành liền nhau, không phải hai trận boss trong cùng một thành. Một lần công thành thất bại vẫn được tính. Quá tải ở lần công thành đầu rồi tiếp tục Quá tải cùng hệ khi công lại chính thành đó được tính là hai lần liên tiếp.

Ở lần Quá tải thứ hai liên tiếp, buff không tăng và debuff nặng hơn. Hệ đó bị khóa từ cuộc công thành kế tiếp, không khóa ngay khi đang thực hiện lần Quá tải thứ hai.

### 7.4 Lịch suy yếu và hồi phục

Sau mỗi đợt Quá tải, cần trải qua ít nhất hai lần công thành không tái Quá tải hệ đó để hồi phục hoàn toàn. Tái Quá tải đặt lại chu kỳ hồi phục từ đợt mới nhất.

| Lần công thành | Chỉ Quá tải ở A | Quá tải ở cả A và B |
| --- | --- | --- |
| A | Quá tải lần đầu | Quá tải lần đầu |
| B | Hệ đó suy yếu | Hệ đó suy yếu rồi Quá tải lần hai |
| C | Hệ đó vẫn suy yếu | Hệ đó bị khóa |
| D | Hệ đó hồi phục bình thường | Hệ đó vẫn bị khóa |
| E | Bình thường | Hệ đó hồi phục bình thường |

Bảng là cấu hình ban đầu đã được duyệt. Trường hợp có thêm Quá tải mới phải cập nhật lại chu kỳ. Vào rồi thoát màn xếp đội hình không được tính là đã trải qua một cuộc công thành để hồi phục. Trận thử ở trại không tính.

### 7.5 Khóa và giảm hiệu quả

Khi một hệ bị khóa, các lá Nguyên tố cùng hệ vẫn có thể được rút lên nhưng bị xám và không sử dụng được. Không tự đổi chúng thành hệ khác hoặc tự loại khỏi bộ bài.

Giảm hiệu quả tập trung vào phần lợi ích do thẻ Nguyên tố cung cấp. Lửa, Nước và Đất có thể giảm lượng sát thương, hồi HP hoặc Khiên được thêm. Gió cần biến thể suy yếu theo từng lá vì hiệu ứng xem, đổi hoặc sắp bài không phù hợp với việc giảm một phần số lần thao tác.

Trước khi cơ chế khóa hệ xuất hiện, người chơi cần có hướng đánh thay thế đủ dùng. Cho xem trạng thái hệ và chỉnh bộ bài ở bước chuẩn bị lần công thành mới.

### 7.6 Ngoại lệ khi kết liễu

Giữ luật cũ: nếu thanh đầy đúng lúc hạ địch cuối cùng và hoàn tất cả cuộc công thành, không phát sinh Quá tải mới hoặc tổn thương mới từ lần đầy thanh đó. Hạ một boss phụ khi trong thành còn địch phải đánh không thuộc ngoại lệ này. Ngoại lệ không tự xóa suy yếu hoặc khóa đã có từ trước.

## 8 HP và bình hồi phục

### 8.1 Cấu hình ban đầu

Giữ HP của nhân vật qua các trận PvE trong cùng thành. Bổ sung một bình hồi HP có lượt dùng và có thể nạp lại theo hướng Souls.

| Thành phần | Cấu hình ban đầu |
| --- | --- |
| Số lượt dùng | 2 lượt cho cả cuộc công thành |
| Lượng hồi mỗi lần | 8 HP ở mức HP tham chiếu 45 |
| Chi phí | 1 mana mỗi lần dùng |
| Giới hạn theo lượt | Tối đa 1 lần trong lượt người chơi |
| Thời điểm dùng | Giữa các hành động trong lượt người chơi |
| Giữa các boss | Không tự nạp lại bình |
| Nạp lại | Về trại hoặc chuẩn bị lại sau thất bại thì nạp đầy số lượt dùng |

Nâng cấp riêng hai hướng: tăng số lượt dùng và tăng lượng HP hồi mỗi lần. Dùng nguyên liệu khám phá hoặc nhiệm vụ cho các nâng cấp theo đặc tả kinh tế sau này.

Bình là nguồn hồi phục nền của hướng hiện tại. Không cộng thêm hồi HP miễn phí sau mọi boss trong cấu hình ban đầu. Các thẻ, Ấn hoặc hiệu ứng hồi phục vẫn hoạt động theo công dụng của chúng.

### 8.2 Các cấu hình được thay thế

Hai ý tưởng hồi ít HP tự động sau boss và mua từng vật phẩm hồi phục đã được thay bằng hướng bình có lượt dùng, nạp lại và nâng cấp. Điều này không tự cấm mọi vật phẩm khác, nhưng không có thêm một hệ vật phẩm mới được chốt trong task.

## 9 Ấn Thú và sức chứa Khai Ấn

### 9.1 Mô hình cuối cùng

Điểm Khai Ấn là sức chịu đựng của nhân vật đối với sức mạnh Ấn mang theo. Mỗi Ấn có một mức tải. Nhân vật có một mức sức chứa, tăng theo các mốc nâng cấp.

- Mang tối đa 4 lá, thay giới hạn 3 lá trước đây.
- Tổng mức tải các Ấn mang theo không vượt quá sức chứa của nhân vật.
- Được phối tự do các hạng; không cần dùng hết sức chứa hoặc mang đủ 4 lá.
- Mỗi mốc nâng cấp lấy tổng tải của một bộ 4 lá cùng hạng làm chuẩn sức chứa.
- Mỗi Ấn dùng 1 lần trong cả cuộc công thành, xuyên các trận PvE.
- Kích hoạt Ấn không trừ mana và không tiêu sức chứa.
- Dùng xong một Ấn không tạo chỗ để thay lá khác trong cuộc công thành.
- Chuẩn bị bộ mới ở lần chuẩn bị công thành tiếp theo; giữ bộ đã chọn trong cuộc đang diễn ra.

Ví dụ minh họa nguyên tắc, không phải bảng nâng cấp cố định:

| Sức chứa | Bộ mang theo | Kết quả |
| --- | --- | --- |
| 12 | 3 + 3 + 3 + 3 | Hợp lệ |
| 12 | 2 + 2 + 3 + 5 | Hợp lệ |
| 12 | 5 + 6 | Hợp lệ, không bắt buộc đủ 4 lá |
| 12 | 3 + 3 + 3 + 5 | Không hợp lệ vì vượt sức chứa |

### 9.2 Kích hoạt và combo

Ấn được dùng trong lượt người chơi, giữa các hành động. Combo dùng công thức cụ thể theo năng lực của các Ấn, thay hướng poker làm quy tắc chính. Các Ấn thành phần đều phải thuộc bộ đang mang và còn lượt sử dụng. Sau combo, các Ấn thành phần được đánh dấu đã dùng.

Combo tạo một hiệu ứng riêng; không mặc định vừa nhận toàn bộ hiệu ứng lẻ vừa cộng thêm hiệu ứng combo. Hiển thị thành phần, kết quả và điều kiện hợp lệ trước khi xác nhận. Các quy tắc công thức thiếu ở bộ bài thường không tự mở thêm phiên bản thiếu cho mọi combo Ấn.

Bỏ khả năng nạp lại lượt dùng Ấn nhờ Quá tải trong hướng hiện tại. Sức chứa và giới hạn một lần dùng đã tạo các giới hạn cần thiết. Suy yếu hoặc khóa Nguyên tố không ảnh hưởng Ấn, kể cả Ấn cùng hệ.

### 9.3 Những đề xuất đã bị thay thế

Không còn quỹ 10 điểm bị trừ mỗi lần kích hoạt. Không hồi hay nạp điểm sử dụng giữa boss vì sức chứa không phải tài nguyên tiêu hao. Các khung phí 2 đến 8 điểm từng đề xuất cho quỹ tiêu hao không tự trở thành mức tải chính thức của từng Ấn.

Hướng cây kỹ năng hoặc nâng cấp sức chứa được giữ, nhưng chưa xác định toàn bộ cây, tài nguyên nâng cấp hay các giá trị sức chứa thực tế theo mốc.

### 9.4 Hạng và vai trò

| Nhóm | Vai trò trong Ashborne |
| --- | --- |
| 2 đến 5 | Công dụng gọn, nhóm tác động cơ bản |
| 6 đến 10 | Hiệu ứng mạnh hơn, nhiều điều kiện hoặc thay đổi nhịp trận |
| J đến Q đến K | Nhóm boss, tạo tác động lớn, tăng cấp trong định hướng từng chất |
| A | Ấn Khai Dạng đặc biệt, thay đổi cách chơi hoặc mở phối hợp |
| Hai Joker | Tồn tại đặc biệt, can thiệp vào luật lớn của trận |

Không mặc định cả 4 A cùng Joker là nhóm luôn mạnh nhất theo một thang duy nhất. A có vai trò riêng, không nhất thiết có hiệu ứng lớn hơn mọi J, Q, K. Mức tải cuối cùng dựa trên tác dụng thực tế và khả năng phối hợp của Ấn.

## 10 Thu phục Ấn Thú và quan hệ cốt truyện

### 10.1 Cách thu thập

Chốt thu thập Ấn bằng cách đánh bại sinh vật tương ứng rồi thu phục hoặc phong ấn để có sức mạnh của nó. Manh mối, nhiệm vụ và thương nhân có thể mở đường tiếp cận cuộc săn; không mặc định thay thế việc đánh bại sinh vật để có Ấn.

Ấn là phần bộ sưu tập và mở khóa được giữ. Phần thưởng đã xác nhận không mất chỉ vì thất bại ở trận sau và không được cấp trùng khi công lại. Điểm ghi quyền sở hữu chính xác trong giao diện nhận thưởng được cụ thể hóa khi đặc tả luồng thưởng.

### 10.2 Sinh vật và phản diện chính là các tuyến riêng

Các sinh vật được giải phóng hoặc được tạo ra cùng thời điểm xuất hiện của thế lực phản diện chính. Nguồn gốc chi tiết có thể phát triển tiếp. Không tự suy ra tất cả đều do phản diện tạo ra, điều khiển hoặc thuộc phe phản diện.

Chúng là những tồn tại có sức mạnh, vai trò và ảnh hưởng riêng trong thế giới. Việc có thể thu phục không làm giảm tầm vóc hoặc sức nặng của chúng. Một số có thể là chướng ngại hoặc đối thủ mạnh của một khu vực mà không trở thành phản diện trung tâm của toàn bộ game.

Qua việc đánh bại và thu phục, nhân vật chính có được một nguồn sức mạnh để đối đầu thế lực phản diện chính. Đây là mối liên hệ được cốt truyện chủ động sắp đặt.

### 10.3 Không bắt buộc sưu tầm đủ để hoàn thành game

Người chơi không phải thu thập đủ toàn bộ Ấn Thú mới hoàn thành trò chơi. Bộ Ấn được chọn theo hành trình và cách chơi. Có thể kết thúc hành trình khi mới sở hữu một phần bộ sưu tập; những sinh vật còn lại vẫn giữ giá trị khám phá, thử thách và thu phục.

Không tự thêm yêu cầu phải có toàn bộ 54 Ấn, cả 4 A hay đủ Joker để mở kết thúc. Những điều kiện cốt truyện cụ thể chưa từng được xác định không được suy ra từ mục tiêu sưu tầm.

## 11 Thất bại rút lui và thử lại

### 11.1 Một phạm vi chơi lại

Thua, rút lui hoặc thử lại đều bắt đầu lại từ đầu cả thành, gồm Phase 1 và các trận Phase 2. Bỏ cách phân phạm vi chơi lại theo phase, thành và toàn hành trình trong bảng ba mốc độ khó cũ. Điều này không tự xác định lại toàn bộ cách cân bằng độ khó hoặc kỹ năng địch.

Tất cả địch trong thành xuất hiện lại. Trước lần công thành mới, người chơi được đổi bộ bài, bộ Ấn và đội hình. Khi đã vào cuộc, giữ lựa chọn của cuộc đó.

### 11.2 Bảng khôi phục

| Thành phần | Khi bắt đầu lần công lại |
| --- | --- |
| HP nhân vật | Hồi đầy tại điểm chuẩn bị |
| Lượt bình hồi HP | Nạp đầy |
| Mana và Khiên | Bắt đầu lại theo cấu hình trận |
| Tay bài và các chồng bài | Bắt đầu lại theo cấu hình trận |
| Lượt dùng Ấn | Các Ấn trong bộ mới sẵn sàng lại |
| Sức chứa Khai Ấn | Giữ mức nâng cấp của nhân vật; kiểm tra tải bộ Ấn mới |
| Quân số đã mất | Không tự hoàn trả |
| Trung thành đã giảm | Giữ mức sau tổn thất |
| Suy yếu khóa và lịch sử Quá tải | Tiếp tục theo luật liên tiếp và hồi phục |
| Chủng tộc công thức và mở khóa vĩnh viễn | Giữ |
| Thưởng đã xác nhận | Giữ và không nhận trùng |

### 11.3 Tổn thất và rút lui

Tổn thất Phase 1 lấy từ kết quả mô phỏng. Nếu thua PvE, có thêm tổn thất của quân đội khi rút lui, nhưng cần giới hạn tổng tổn thất để tránh tính phạt chồng quá mạnh. Trung thành giảm một mức xác định và phải hiển thị rõ.

Rút lui chủ động chịu tổn thất thấp hơn bị đánh bại, dù cả hai đều đánh lại toàn bộ thành. Các tỷ lệ hoặc mức trừ chưa được ấn định.

### 11.4 Phần thưởng

Mở khóa Chủng tộc, Ấn và công thức được ghi một lần. Thưởng đã nhận từ một boss không được nhận lại bằng cách công lại cùng thành. Thưởng chiếm thành nhận khi hoàn tất và chỉ cấp một lần cho mốc tương ứng.

Lần công thành thất bại vẫn ghi nhận Quá tải đã xảy ra. Khôi phục HP, bình hoặc quyền dùng Ấn không tự xóa lịch sử Quá tải, tổn thương Nguyên tố hoặc tổn thất lực lượng.

## 12 Mở khóa dần và nền tảng ưu tiên

### 12.1 Thứ tự giới thiệu

Hướng mở khóa được duyệt là giới thiệu các lớp theo tiến trình, có tình huống để người chơi hiểu giá trị trước khi thêm lớp mới. Trình tự định hướng:

1. Đánh lẻ, ý đồ, mana, Khiên và bình hồi HP.
2. Cường hóa và một công thức Tuyệt kỹ cơ bản.
3. Nguyên tố, Tiết Chế và Quá tải.
4. Hậu quả suy yếu và khóa sau công thành.
5. Ấn lẻ, rồi combo Ấn.
6. Các lựa chọn quân đội, công thức và tuyến phức tạp hơn.

Đây là thứ tự giới thiệu ở mức concept, chưa phải kịch bản tutorial hoàn chỉnh hoặc danh sách nhiệm vụ mở khóa cụ thể. Trước khi người chơi có thể bị khóa hệ, phải có hướng đánh thay thế đủ dùng.

### 12.2 Thông tin và thao tác

Cho người chơi xem trạng thái nguyên tố, lý do lá không dùng được và kết quả đã biết của tổ hợp. Phản hồi thắng thua phải chỉ ra nguyên nhân để người chơi có thể sửa chiến thuật. Các thay đổi bộ bài và bộ Ấn diễn ra ở bước chuẩn bị cuộc công thành mới.

### 12.3 Nền tảng

Ưu tiên PC làm nền tảng thiết kế chính. Mobile được để lại cho quyết định sau, chưa cam kết phát hành hoặc dùng chung bố cục điều khiển với PC. Không tiếp tục coi PC và mobile là hai mục tiêu phải triển khai đồng thời trong giai đoạn này.

## 13 Các hướng cũ đã được thay thế

| Nội dung trước đây | Quyết định cuối cùng |
| --- | --- |
| Ghép nâng bậc và chế tạo quân ngay trước mỗi lần công thành | Chế tạo và lưu tại trại; khi công thành chỉ xếp đội hình |
| Ghép nhiều lá Binh chủng để nâng bậc | Bỏ lớp nâng bậc bằng ghép lá trong hướng hiện tại |
| Đạo quân dung hợp hết hiệu lực sau Phase 1 | Đạo quân đã tạo được lưu, chịu giảm quân số và cần bổ sung |
| Buff chỉ thêm mana ở lượt đầu | Tăng 1 mana tối đa và hồi theo mức mới suốt Phase 2 |
| Chồng sai công thức thực thi mọi lá lần lượt | Chỉ lá đầu kích hoạt, vẫn trả tổng mana |
| Nguyên tố luôn kích hoạt đầu tổ hợp dù tổ hợp thất bại | Phải thuộc kết quả hợp lệ hoặc chính là lá đầu được kích hoạt |
| Bắt buộc hoàn thành chồng trong cửa sổ vài giây | Chốt tổ hợp chủ động sau khi xếp |
| Chỉ có khớp đầy đủ hoặc sai | Có bản đầy đủ, bản thiếu được quy định, cường hóa và thất bại |
| Hai lần Quá tải trong hai trận boss cùng thành | Hai cuộc công thành liền nhau; cùng hệ tối đa một lần mỗi cuộc |
| Khóa ngay tại lần Quá tải thứ hai | Khóa bắt đầu từ cuộc công thành kế tiếp |
| Quỹ điểm Ấn bị tiêu khi dùng và giới hạn 3 lá | Sức chứa khi trang bị, không tiêu hao, tối đa 4 lá |
| Poker là hướng kết hợp Ấn chính | Công thức cụ thể theo năng lực của các Ấn |
| Có thể nạp lại Ấn bằng Quá tải | Bỏ trong hướng hiện tại; mỗi Ấn một lần mỗi cuộc |
| Chỉ đổi bộ Ấn sau khi chiếm thành | Được đổi khi chuẩn bị lần công thành mới, gồm sau thất bại |
| Hồi HP tự động sau boss hoặc mua từng bình tiêu hao | Bình có lượt dùng, nạp lại và nâng cấp |
| Phạm vi chơi lại thay đổi theo ba mốc cũ | Thua hoặc rút lui đều công lại từ đầu cả thành |
| Hiểu các Ấn là phản diện chính hoặc phải thu đủ để phá đảo | Sinh vật có tuyến riêng, cung cấp sức mạnh; không bắt buộc thu đủ |

Các ý tưởng thu gọn hoặc dựng thử từng hệ từng được nêu chỉ là hướng kiểm chứng cho giai đoạn sau. Không có prototype hoặc thay đổi mã game nào được thực hiện trong task thảo luận này.

## 14 Chi tiết chưa có giá trị hoặc công thức cụ thể

Khung concept đã được chấp thuận. Những phần dưới đây cần đặc tả khi chuyển giai đoạn, không phải các phương án concept đang chờ chọn lại:

- Trọng số dung hợp, giới hạn đóng góp, chỉ số từng Chủng tộc và Binh chủng, ma trận tương thích và chi phí sản xuất thực tế.
- Số ô và quy tắc đội hình, hành vi mô phỏng, điều kiện phá phòng tuyến và ngưỡng áp đảo của từng thành.
- Danh mục công thức cường hóa, Tuyệt kỹ đầy đủ, lõi của bản thiếu, xử lý lá dư và công thức nhiều địch; chi phí và hiệu ứng cụ thể của từng lá.
- Mô hình các bản sao và luân chuyển bài chi tiết, cách giải thích việc lá thành phần rời tay và được gặp lại ở lần rút tiếp theo.
- Ngưỡng và tốc độ tích thanh, lượng Tiết Chế, buff và debuff chính thức của bốn hệ, mức suy yếu từng thẻ và cách xử lý nhiều hệ Quá tải cùng lúc.
- Mức tải từng Ấn, các mức sức chứa theo nâng cấp, công thức combo Ấn và cấu trúc cây nâng cấp.
- Giá nâng bình, nguyên liệu, các mốc tăng lượng hồi hoặc số lượt dùng.
- Tỷ lệ tổn thất quân, mức giảm và cách phục hồi trung thành; mức chênh lệch giữa rút lui chủ động và bị đánh bại.
- Mốc ghi quyền sở hữu trong thao tác nhận thưởng, nội dung thưởng, nhiệm vụ săn và điều kiện tiếp cận từng sinh vật.
- Kịch bản cốt truyện, nguồn gốc chi tiết của sinh vật, bản chất thế lực phản diện và điều kiện các kết thúc; không suy ra yêu cầu thu đủ bộ sưu tập.
- Kịch bản mở khóa, tutorial, thời lượng và số liệu cân bằng thực tế. Bản demo hiện có chưa kiểm chứng các luật mới hoặc hiệu năng một game hoàn chỉnh.

## 15 Mốc chấp thuận và tài liệu đối chiếu

Các quyết định được hình thành qua nhận định ban đầu, các lượt chỉnh cơ chế của người dùng, các đề xuất triển khai luật và lượt chấp thuận chung. Lượt chấp thuận chung xác nhận các đề xuất còn chờ, gồm chỉ số quân, bảng khôi phục, lịch suy yếu và khóa, vai trò hạng Ấn, cấu hình bình và các giá trị ban đầu đã nêu. Sau đó, các chỉnh sửa mới hơn về mana, sức chứa 4 Ấn và quan hệ cốt truyện được ưu tiên áp dụng.

Nguồn quyết định là toàn bộ cuộc trò chuyện của task. Các tệp dự án được dùng để đối chiếu thuật ngữ, chỉ số đã tồn tại và nhận diện luật cũ:

- Ashborne-GDD-va-FDD.md.
- Ashborne-Tong-hop-task-lam-ro-gameplay.md.
- Ashborne-Chung-toc-va-Binh-chung.md.
- Ashborne-Concept-The-Combat.md.
- Ashborne-UI-UX.md và các bản demo hoặc mockup được nhận diện là tham chiếu cũ.
- QUY_TAC_LAM_VIEC.md cho phạm vi công việc và quy tắc bảo vệ nội dung hiện có.

Nguồn tham chiếu Blade dùng khi kiểm tra vai trò, không được coi là bảng sức mạnh hoặc chi phí phải sao chép nguyên trạng sang Ashborne:

- [Toei về Change Beetle và vai trò của A](https://www.kamen-rider-official.com/zukan/items/963).
- [Toei về các nhóm Undead và J Q K](https://www.kamen-rider-official.com/dictionaries/keywords_search?search_dictionaries_form%5Bkeyword_for_title%5D=%E3%82%A2%E3%83%B3%E3%83%87%E3%83%83%E3%83%89&utf8=%E2%9C%93).
- [Toei về Joker](https://www.kamen-rider-official.com/zukan/phantoms/689).

Bản này tập hợp các quyết định của task, không tự chốt lại những phần khác của GDD chưa được bàn đến và không thay đổi quy tắc làm việc của dự án.
