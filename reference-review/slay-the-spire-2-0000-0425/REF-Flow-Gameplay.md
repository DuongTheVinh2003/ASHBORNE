# Reference — Flow gameplay và tutorial

**Slay the Spire 2 · Phạm vi 00:00–04:25 · Bản tổng hợp để duyệt**

Tài liệu mô tả flow đã quan sát trong [video Royal Gaming](https://www.youtube.com/watch?v=NhfIsNV_Oew), từ đầu video đến 04:25. Đây là flow của lượt chơi được quay, không phải cam kết mọi lượt chơi đều gặp cùng địch, bài thưởng và sự kiện. Các mốc thời gian dùng để đối chiếu, không đo timing animation chính xác.

Tài liệu đi cùng: [Bố cục UI/UX](REF-Bo-cuc-UI-UX.md), [bộ ảnh đối chiếu](BO-ANH-DOI-CHIEU.md), [phân tích gốc](PHAN-TICH-UI-UX-TUTORIAL.md). Những nhận xét “cần chú ý” là bài học thiết kế, chưa phải luật được duyệt cho Ashborne.

## 1. Flow tổng thể

```text
Menu chính
  → Chọn nhân vật và xem thông tin khởi đầu
  → Chọn bật tutorial
  → Giới thiệu chương / mở bản đồ
  → Hướng dẫn chọn phòng
  → Vào trận đầu
  → Ba trang hướng dẫn combat
  → Chơi các lượt, nhận trợ giúp theo ngữ cảnh
  → Hạ toàn bộ địch / xử lý hiệu ứng kết trận
  → Nhận chiến lợi phẩm / chọn thêm bài hoặc bỏ qua
  → Trở lại bản đồ / chọn nút nối tiếp
  → Combat hoặc sự kiện
  → Cập nhật tài nguyên, bộ bài và tiến độ
  → Trở lại bản đồ
```

Vòng lặp chính quan sát được là **chọn điểm đến → giải quyết nội dung tại điểm đó → nhận hoặc chọn kết quả → cập nhật trạng thái chuyến đi → chọn điểm tiếp theo**. Combat và sự kiện dùng cách tương tác khác nhau nhưng cùng quay về vòng lặp này.

## 2. Mở đầu và chuẩn bị lượt chơi

| Mốc | Bước | Người chơi làm gì | Game trả lại gì |
| --- | --- | --- | --- |
| 00:00–00:02 | Menu chính. | Chọn Singleplayer. | Chuyển sang chọn nhân vật. Các mục khác chỉ xuất hiện trên menu, chưa được khảo sát. |
| 00:03–00:04 | Chọn Ironclad. | Đọc thông tin và xác nhận. | Thấy HP 80/80, vàng 99, đặc tính và di vật khởi đầu. Một số chân dung khác có khóa. |
| 00:05–00:09 | Bật hướng dẫn. | Chọn Yes. | Game kích hoạt hướng dẫn trong chuyến đi. Không có căn cứ từ đoạn này để mô tả nhánh No. |
| Khoảng 00:13–00:16 | Vào chương. | Quan sát bản đồ. | Tên Act 1 / Overgrowth, tuyến phòng và chú giải loại nút. |
| 00:17–00:18 | Hướng dẫn di chuyển. | Đọc nhắc chọn phòng. | Mũi tên trỏ đúng nút đầu tiên trên bản đồ. |
| Khoảng 00:19–00:23 | Vào phòng đầu. | Chọn nút đầu tiên. | Chuyển cảnh, hiện người chơi và một địch, chuẩn bị tay bài đầu. |

**Cần chú ý:** người chơi được giới thiệu đặc tính khởi đầu trước khi chiến đấu, nhưng chưa phải tự cấu hình nhiều hệ thống. Hướng dẫn di chuyển xuất hiện ngay trên bản đồ, tại đối tượng cần bấm. Không có một màn giải thích mọi hệ thống của game ngay từ đầu.

## 3. Tutorial combat ban đầu

### 3.1. Trình tự thực tế của ba trang

| Trang | Mốc thấy rõ | Nội dung được dạy | Điều người chơi cần nhớ |
| --- | --- | --- | --- |
| 1/3 | 00:25 | Dùng bài trên tay để đánh địch; bài tiêu Energy; hết tài nguyên thì kết lượt; đầu lượt mới rút bài và hồi Energy. | Bài là hành động, Energy là giới hạn hành động, lượt tạo vòng lặp sử dụng lại tài nguyên. |
| 2/3 | 00:30 | Bài phòng thủ cấp Block; Block giảm sát thương nhận và mất vào đầu lượt tiếp theo. | Phòng thủ có lượng và có thời hạn. |
| 3/3 | 00:35 | Intent ở trên đầu địch; đọc intent để biết địch sắp làm gì và cân nhắc Block. | Quyết định của mình dựa trên hành động sắp tới của địch. |

Mỗi trang có hình minh họa và lời giải thích; chỉ số trang báo rõ độ dài phần học. Có điều hướng qua lại giữa các trang. Đây là **hướng dẫn để đọc**, chưa thấy điều kiện phải thực hành đúng một hành động rồi mới được qua trang.

### 3.2. Điều nên giữ và điều cần bổ sung

Nên giữ cách dạy ít khái niệm thiết yếu trước, gắn hình minh họa với sân đang chơi và cho tự tra cứu sau đó. Tuy nhiên, trang đầu chứa nhiều ý; Block được giới thiệu trước khi người chơi học đọc intent.

Nếu mục tiêu là hiểu sau một lần tut, nên kiểm chứng bằng hành vi: đọc intent → chọn cách ứng phó → dùng bài → nhìn kết quả → tự thực hiện một lượt. Đây là đề xuất cải tiến, khác với thứ tự ba trang quan sát trong ref.

## 4. Vòng lặp trong một trận

### 4.1. Đầu lượt người chơi

Game báo lượt và số lượt, hồi Energy và rút tay bài. Trong các lượt đã quan sát, tài nguyên trở về 3/3; tooltip kết lượt giải thích tay mới gồm năm lá. Block của người chơi hết ở đầu lượt tiếp theo theo hướng dẫn của bản quay.

Đây là nhóm việc diễn ra quanh chuyển lượt, chưa đủ để khẳng định thứ tự xử lý nội bộ của tất cả hiệu ứng. Không dùng thứ tự animation nhìn thấy để suy ra toàn bộ thứ tự tính toán của game.

### 4.2. Đọc tình huống

Người chơi xem HP, Block, buff/debuff, intent từng địch và các lá trên tay. Có thể rê bài hoặc biểu tượng để đọc chi tiết. Khoảng 00:37, người quay rê intent và nhận giải thích địch định đánh 12.

Chu trình quyết định mà bố cục hỗ trợ là:

```text
Địch sắp làm gì?
  → Mình cần thủ, tấn công hay chuẩn bị hiệu ứng?
  → Lá nào đáp ứng được và còn đủ Energy không?
  → Dùng lên đối tượng nào?
  → Kết quả đã thay đổi tình huống ra sao?
  → Tiếp tục dùng bài hoặc kết lượt.
```

### 4.3. Chọn và sử dụng bài

1. Xem lá: bài phóng lớn và mở giải thích từ khóa khi cần.
2. Với bài nhắm địch, chọn mục tiêu: đường ngắm và đánh dấu tại địch xác nhận đối tượng.
3. Thi triển: tiêu Energy, hiện lá vừa dùng và animation liên quan.
4. Xử lý kết quả: damage/Block/trạng thái thay đổi; dữ liệu còn lại trên sân cho phép kiểm tra.
5. Lá rời tay và được theo dõi tại vùng bài tương ứng.

Các bước trên mô tả phản hồi quan sát được; chưa xác nhận click hay kéo là cách nhập duy nhất, cách hủy, hoặc cách xử lý khi thả sai.

### 4.4. Kết lượt và lượt địch

Người chơi chủ động dùng End Turn. Tooltip mô tả bỏ tay hiện tại, để địch hành động rồi rút tay mới. Bản quay cho thấy vẫn có bài trên tay khi Energy đã về 0/3; hết Energy không đồng nghĩa hết bài.

Trong lượt địch, các địch còn sống thực hiện hành động của mình. Người chơi nhận damage, Block bị tiêu hao hoặc nhận thêm trạng thái/bài Status. Sau đó game chuyển về lượt người chơi và cập nhật intent cho lượt sắp tới.

## 5. Các tình huống giúp hiểu luật qua kết quả

### 5.1. Thủ đủ và thủ thiếu

| Tình huống | Trước lượt địch | Kết quả quan sát | Điều được củng cố |
| --- | --- | --- | --- |
| Lượt đầu, khoảng 00:38–00:43. | Ba Defend đưa Block 5→10→15; Energy 3→2→1→0; địch định đánh 12. | Có phản hồi chặn đòn; HP vẫn 80/80, Block còn 3 rồi bị xóa đầu lượt mới. | Block cộng dồn, hấp thụ damage và có thời hạn. |
| Lượt kế, khoảng 00:48–00:54. | Người chơi có 5 Block, địch định đánh 6. | Số 1 hiện trên người chơi; HP từ 80 xuống 79. | Phần damage vượt Block vào HP. |

Hai tình huống này dễ đối chiếu vì dùng cùng ngôn ngữ phản hồi. Tuy nhiên, người quay tự tạo ra chúng; chưa có bằng chứng đây là bài tập tut được game bắt buộc thực hiện.

### 5.2. Tấn công và thêm debuff

Khoảng 00:49–00:50, Bash gây 8 damage: HP địch từ 45 xuống 37, có chữ báo Vulnerable, sau đó icon và số trạng thái còn dưới HP. Người chơi có thể kiểm tra đồng thời hai hậu quả của một lá: mất HP và nhận debuff.

**Cần chú ý:** hiệu ứng vừa xảy ra cần có phản hồi tức thời; hiệu lực còn tồn tại cần có dấu để đọc lại. Không chỉ dùng một dòng chữ bay rồi biến mất.

### 5.3. Chồng rút cạn và xáo lại

Khoảng 00:55, game mở lời nhắc khi không còn bài để rút: chồng bỏ được xáo vào chồng rút. Mũi tên chỉ hai vùng bài thực tế.

Flow học là **gặp tình huống có thể gây hiểu nhầm → giải thích đúng cơ chế đang xảy ra → trở lại vòng chơi**. Không yêu cầu nhớ cơ chế này từ trước lúc bắt đầu trận.

### 5.4. Nhiều địch và lựa chọn mục tiêu

Từ khoảng 01:40, trận có ba địch với HP và intent riêng. Người chơi tiếp tục cùng cách dùng bài, nhưng phải chọn con cụ thể và cân nhắc các nguồn đe dọa khác nhau. Hạ một địch không kết thúc trận nếu còn địch khác.

Độ phức tạp tăng bằng tình huống, trong khi cấu trúc thao tác giữ nguyên. Không có căn cứ để gọi đây là bước tutorial nhiều mục tiêu được cố định sẵn cho mọi lượt chơi.

### 5.5. Buff tạm thời và buff kéo dài trong combat

Setup Strike xuất hiện từ phần thưởng đầu và được dùng ở trận sau. Nó cấp Strength trong lượt; khi hết hiệu lực, game báo trên người chơi. Bài tấn công đang xem phản ánh giá trị đã thay đổi.

Ở màn thưởng khoảng 02:48–02:53, game giải thích loại Power khi gặp Inflame: hiệu ứng được giữ trong một combat. Inflame xuất hiện trên tay và được dùng ở trận Beetle. Hai trường hợp làm rõ rằng hiệu ứng cùng liên quan Strength có thể có thời hạn khác nhau.

### 5.6. Bài trạng thái và Exhaust

Địch thêm Slimed vào vòng bài của người chơi, hiển thị chính hình lá bài. Về sau người chơi rút được Slimed trên tay, đọc loại Status, phí 1, hiệu ứng rút một lá và Exhaust.

Khi dùng Slimed khoảng 02:35, có bộ đếm tím riêng; tooltip Exhaust khoảng 02:40 giải thích lá bị loại khỏi phần còn lại của combat. Cần phân biệt **bài dùng xong đi vào chồng bỏ** với **bài bị loại khỏi combat**; không phải mọi lá rời tay đều có cùng số phận.

### 5.7. Trạng thái gắn với nguồn gây

Ở trận Shrinker Beetle, người chơi bị thu nhỏ. Tooltip khoảng 03:28 giải thích Attack giảm 30% damage khi Beetle còn sống. Trạng thái xuất hiện bằng thay đổi hình thể, icon và giá trị bài; khi Beetle chết khoảng 03:43, có báo hết Shrink và nhân vật trở lại kích thước bình thường.

Flow trạng thái đọc được là **nguồn gây còn sống → hiệu lực tồn tại → nguồn gây chết → hiệu lực kết thúc**. Chưa xác minh toàn bộ thứ tự modifier hoặc cách làm tròn damage từ ví dụ này.

## 6. Kết trận, chiến lợi phẩm và phát triển bộ bài

```text
Hạ địch cuối
  → Hiện kết quả hạ địch
  → Xử lý hiệu ứng kết trận / hồi phục
  → Hiện bảng chiến lợi phẩm
  → Nhận các khoản thưởng
  → Nếu chọn thêm bài: so sánh ba lá, chọn một hoặc Skip
  → Phản hồi lá đã nhận / cập nhật bộ bài
  → Proceed / quay lại bản đồ
```

Các lần kết trận cho thấy hiệu ứng hồi từ di vật khởi đầu: số xanh 6 và HP tăng tới trần. Nếu trước đó chỉ thiếu ít HP, số hiệu ứng 6 không có nghĩa đã thực nhận đủ 6 HP.

Chiến lợi phẩm gồm vàng, cơ hội thêm bài và ở trận Beetle có Fire Potion. Các khoản có vị trí đến rõ: vàng vào bộ đếm, potion vào ô lưu trữ, bài mới vào bộ bài và có thể xuất hiện ở trận sau.

Khoảng 03:47, lời nhắc potion xuất hiện ngay sau khi nhận, chỉ vào ô HUD và giải thích cách dùng trong combat cùng việc giữ potion xuyên hành trình. Chưa quan sát được thao tác thực sự sử dụng potion trong phạm vi này.

**Cần chú ý:** có quyền bỏ qua bài thưởng. Đoạn quay chưa khảo sát đầy đủ mọi trường hợp rời màn khi còn thưởng chưa nhận, nên chưa đặc tả luật chống bỏ sót thưởng.

## 7. Vòng bản đồ và sự kiện

### 7.1. Quay về bản đồ

Sau combat hoặc sự kiện, người chơi quay lại bản đồ có dấu tiến độ, vị trí hiện tại và tuyến nối tiếp. HUD tiếp tục cho biết tình trạng chuyến đi. Chọn nút mới dẫn đến nội dung tiếp theo; nội dung quan sát gồm chiến đấu và sự kiện.

### 7.2. Sự kiện Byrdonis Nest

Khoảng 03:00–03:09:

1. Đọc tình huống và hai lựa chọn.
2. Có thể xem trước lá trứng và giải thích Unplayable ở nhánh nhận trứng.
3. Người quay chọn nhánh tăng 7 Max HP.
4. HUD chuyển từ 80/80 lên 87/87, có phản hồi hồi phục.
5. Nội dung sự kiện chuyển sang kết quả, sau đó Proceed về bản đồ.

Đây là ví dụ **xem hệ quả trước khi chọn → thực hiện lựa chọn → cập nhật dữ liệu → xác nhận đã giải quyết sự kiện**. Không mô tả kết quả nhánh nhận trứng vì nhánh đó chưa được thực hiện.

### 7.3. Sự kiện Sapphire Seed và Enchant

Khoảng 03:57–04:25:

1. Đọc hai hướng lợi ích: hồi HP kèm nâng bài, hoặc Enchant bài với Sown.
2. Rê lựa chọn để tra nghĩa Sown.
3. Người quay chọn Enchant.
4. Game mở danh sách bài; người chơi cuộn và chọn Inflame.
5. Game trình bày lá gốc và lá sau thay đổi để so sánh, có quay lại và xác nhận.
6. Người quay xác nhận; lá đã nhận Sown xuất hiện trên nền sự kiện.
7. Kết quả sự kiện hiện ra, tiếp tục về bản đồ khoảng 04:23–04:24 rồi chuyển cảnh ở cuối phạm vi.

Điểm cần giữ là **chọn loại thay đổi → chọn đối tượng → xem trước kết quả → xác nhận → thấy kết quả đã áp dụng**. Không tự diễn giải biểu tượng tài nguyên của Sown thành một tên tài nguyên chưa xác minh.

## 8. Cấu trúc học xuyên suốt đoạn ref

| Thời điểm cần hiểu | Cách game dạy | Giá trị |
| --- | --- | --- |
| Chưa biết di chuyển. | Nhắc trên bản đồ, chỉ nút cần chọn. | Biết việc tiếp theo phải làm. |
| Chuẩn bị chơi combat. | Ba trang luật cơ bản. | Có khung hiểu ban đầu. |
| Đang cân nhắc hành động. | Tooltip bài, intent, trạng thái. | Tự tra luật trong ngữ cảnh. |
| Chồng rút cạn. | Nhắc xáo bài ngay tại hai chồng. | Giải thích một ngoại lệ trong vòng rút bài. |
| Gặp loại Power. | Nhắc tại màn thưởng. | Hiểu thời hạn của lợi ích trước khi thêm bài. |
| Nhận potion đầu tiên. | Nhắc tại ô lưu trữ mới. | Hiểu vật phẩm vừa nhận dùng ở đâu. |
| Thay đổi bài. | Xem trước/sau, xác nhận và phản hồi kết quả. | Hiểu rõ thay đổi trước khi chốt. |

Nhịp học rút ra: **giới thiệu tối thiểu → cho chơi → gặp cơ chế mới thì giải thích → cho tra lại → lặp tình huống với độ phức tạp tăng dần**.

## 9. Những điều cần chú ý khi dùng ref

- Mỗi bước phải cho người chơi biết việc tiếp theo, lựa chọn đang có và kết quả của lựa chọn.
- Giữ nối kết từ phần thưởng mới tới lần sử dụng về sau, để việc xây bộ bài có ý nghĩa rõ.
- Trạng thái cần có nguồn, đối tượng, tác dụng, giá trị, thời hạn hoặc điều kiện kết thúc.
- Dạy cơ chế theo tình huống; tránh mở toàn bộ hệ thống trong lượt đầu.
- Muốn xác nhận hiểu sau một lần tut phải có lượt tự làm và tiêu chí hành vi. Bấm qua trang hướng dẫn chưa chứng minh đã hiểu.
- Các luật Energy, Block, Power và Exhaust ở đây thuộc ref. Khi áp dụng cho Ashborne phải đối chiếu luật riêng về mana, chồng bài, Ấn Thú, nguyên tố và hai phase công thành.

**Chưa nằm trong phạm vi xác minh:** flow shop, nghỉ, nâng bài ở nhánh chưa chọn, elite/boss, chết/thất bại, kết thúc hành trình, multiplayer, toàn bộ nhánh nhập sai/hủy và tutorial xem lại. Các biểu tượng hoặc nút liên quan xuất hiện không đồng nghĩa những flow đó đã được quan sát.
