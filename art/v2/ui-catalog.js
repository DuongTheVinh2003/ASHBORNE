// Danh mục trích từ hai file concept thẻ và chủng tộc.
const uiCatalog = {
  "Vũ khí": [
    [
      "Chém Bổ",
      "Đại Kiếm",
      "Trực tiếp",
      "Gây sát thương lớn lên một địch."
    ],
    [
      "Đại Hoành Trảm",
      "Đại Kiếm",
      "Trực tiếp",
      "Gây sát thương vừa lên tất cả địch đang giao tranh."
    ],
    [
      "Ép Lưỡi",
      "Đại Kiếm",
      "Kỹ năng",
      "Gây sát thương. Nếu là hành động đầu tiên trong lượt, tăng sát thương lá Đại Kiếm gây sát thương kế tiếp trong lượt."
    ],
    [
      "Chém Dồn Lực",
      "Đại Kiếm",
      "Kỹ năng",
      "Gây sát thương lớn. Lá Đại Kiếm kế tiếp chơi trong cùng lượt tốn thêm tài nguyên hành động."
    ],
    [
      "Thế Vung Kiếm",
      "Đại Kiếm",
      "Sức mạnh",
      "Nếu từ lúc đặt thế đến hết lượt này bạn chưa gây thêm sát thương, đòn Đại Kiếm đầu tiên ở lượt sau được tăng sát thương."
    ],
    [
      "Một Đòn Định Thế",
      "Đại Kiếm",
      "Sức mạnh",
      "Trong hai lượt của bạn, hành động Đại Kiếm tiêu đủ lượng tài nguyên quy định được tăng sát thương. Kích hoạt tối đa một lần mỗi lượt."
    ],
    [
      "Thẳng Tên",
      "Cung",
      "Trực tiếp",
      "Gây sát thương lớn lên một địch."
    ],
    [
      "Bắn Lui",
      "Cung",
      "Trực tiếp",
      "Gây sát thương nhẹ lên một địch và tạo Khiên cho bản thân."
    ],
    [
      "Bắn Ghim",
      "Cung",
      "Kỹ năng",
      "Gây sát thương và làm đòn tấn công kế tiếp của mục tiêu gây ít sát thương hơn."
    ],
    [
      "Bắn Thăm Dò",
      "Cung",
      "Kỹ năng",
      "Gây sát thương và đánh dấu mục tiêu đến hết lượt sau của bạn. Khi phát Cung kế tiếp trúng mục tiêu, xóa dấu và gây thêm sát thương."
    ],
    [
      "Giữ Tầm Ngắm",
      "Cung",
      "Sức mạnh",
      "Chọn một địch. Nếu từ lúc chọn đến đầu lượt sau bạn chưa gây sát thương lên địch khác, phát Cung đầu tiên đánh trúng mục tiêu trong lượt đó được tăng sát thương."
    ],
    [
      "Săn Đầu Đàn",
      "Cung",
      "Sức mạnh",
      "Chọn một địch. Nếu hạ mục tiêu bằng Cung trong hai lượt của bạn, lá Cung gây sát thương kế tiếp trong trận được giảm chi phí."
    ],
    [
      "Đâm Thẳng",
      "Giáo",
      "Trực tiếp",
      "Gây sát thương tập trung lên một địch."
    ],
    [
      "Dựng Mũi Giáo",
      "Giáo",
      "Trực tiếp",
      "Gây sát thương nhẹ lên một địch và tạo Khiên cho bản thân."
    ],
    [
      "Ghìm Mũi Giáo",
      "Giáo",
      "Kỹ năng",
      "Gây sát thương và đặt Giữ Khoảng Cách lên mục tiêu đến hết lượt địch kế tiếp. Phẩm cao kéo dài thời hạn."
    ],
    [
      "Đâm Trả",
      "Giáo",
      "Kỹ năng",
      "Gây sát thương. Nếu mục tiêu đang Hở Thế, tiêu trạng thái để gây thêm sát thương. Phẩm cao tăng sát thương cộng thêm."
    ],
    [
      "Thế Đón Đòn",
      "Giáo",
      "Sức mạnh",
      "Vào thế đến hết lượt địch kế tiếp. Nếu Giữ Khoảng Cách chặn được một đòn trong thời gian này, cú Đâm Trả tiêu Hở Thế do đòn đó tạo ra được tăng thêm sát thương. Phẩm cao tăng phần thưởng phản đòn."
    ],
    [
      "Giữ Địch Ngoài Tầm",
      "Giáo",
      "Sức mạnh",
      "Chọn một địch đang có ý đồ tấn công cận chiến. Đặt Giữ Khoảng Cách lên nó đến hết lượt địch kế tiếp. Phẩm cao kéo dài thời hạn."
    ],
    [
      "Song Kích",
      "Vũ Khí Đôi",
      "Trực tiếp",
      "Gây sát thương lên một địch."
    ],
    [
      "Lướt Cắt",
      "Vũ Khí Đôi",
      "Trực tiếp",
      "Gây sát thương nhẹ lên một địch và tạo một ít Khiên cho bản thân."
    ],
    [
      "Nhử Sơ Hở",
      "Vũ Khí Đôi",
      "Kỹ năng",
      "Gây sát thương và đặt dấu Sơ Hở đến hết lượt. Lá Vũ Khí Đôi kế tiếp gây sát thương lên đúng mục tiêu tiêu dấu để gây thêm sát thương."
    ],
    [
      "Đâm Rút",
      "Vũ Khí Đôi",
      "Kỹ năng",
      "Gây sát thương. Nếu bạn đã tiêu dấu Sơ Hở trên chính mục tiêu trước khi chơi lá này trong lượt, đòn trực tiếp kế tiếp của mục tiêu gây ít sát thương hơn."
    ],
    [
      "Ẩn Mình",
      "Vũ Khí Đôi",
      "Sức mạnh",
      "Nếu bạn kết thúc lượt mà chưa gây thêm sát thương kể từ lúc chơi lá này, lá Vũ Khí Đôi gây sát thương đầu tiên ở lượt sau được tăng sát thương."
    ],
    [
      "Ra Tay Trong Chớp Mắt",
      "Vũ Khí Đôi",
      "Sức mạnh",
      "Trong hai lượt của bạn, lần đầu mỗi lượt tiêu dấu Sơ Hở, lá Vũ Khí Đôi kế tiếp đánh đúng mục tiêu đó trong cùng lượt được giảm chi phí."
    ],
    [
      "Chém Tiến",
      "Kiếm và Khiên",
      "Trực tiếp",
      "Gây sát thương lên một địch."
    ],
    [
      "Nâng Khiên",
      "Kiếm và Khiên",
      "Trực tiếp",
      "Tạo lượng Khiên lớn cho bản thân."
    ],
    [
      "Gạt Khiên",
      "Kiếm và Khiên",
      "Kỹ năng",
      "Tạo Khiên. Đòn trực tiếp kế tiếp nhắm vào bạn gây ít sát thương hơn."
    ],
    [
      "Phản Kích",
      "Kiếm và Khiên",
      "Kỹ năng",
      "Gây sát thương. Tăng sát thương nếu chính mục tiêu này đã đánh vào Khiên của bạn trong lượt địch vừa qua."
    ],
    [
      "Thế Đỡ Phản",
      "Kiếm và Khiên",
      "Sức mạnh",
      "Nếu Khiên hấp thụ trọn một đòn trực tiếp ở lượt địch kế tiếp, lá Kiếm và Khiên gây sát thương đầu tiên trong lượt của bạn sau đó được tăng sát thương."
    ],
    [
      "Giữ Tuyến",
      "Kiếm và Khiên",
      "Sức mạnh",
      "Trong hai lượt địch kế tiếp, nếu bạn còn Khiên sau đòn trực tiếp đầu tiên nhận trong lượt, đòn trực tiếp kế tiếp trong cùng lượt đó gây ít sát thương hơn."
    ],
    [
      "Xung Phép",
      "Trượng Phép",
      "Trực tiếp",
      "Gây sát thương lên một địch."
    ],
    [
      "Hồi Quang",
      "Trượng Phép",
      "Trực tiếp",
      "Hồi HP và tạo một lượng Khiên nhỏ cho bản thân."
    ],
    [
      "Dấu Hẹn",
      "Trượng Phép",
      "Kỹ năng",
      "Gây sát thương và đặt dấu đến hết lượt sau của bạn. Khi dùng Trượng Phép đánh lại đúng mục tiêu trong lượt sau, tiêu dấu để gây thêm sát thương."
    ],
    [
      "Tĩnh Tâm",
      "Trượng Phép",
      "Kỹ năng",
      "Tạo Khiên. Giảm chi phí lá Trượng Phép đầu tiên chơi ở lượt sau của bạn."
    ],
    [
      "Tụ Lực",
      "Trượng Phép",
      "Sức mạnh",
      "Nếu kết thúc lượt với đủ lượng tài nguyên hành động chưa dùng, tăng chỉ số trực tiếp của lá Trượng Phép đầu tiên ở lượt sau."
    ],
    [
      "Nghi Thức Bảo Hộ",
      "Trượng Phép",
      "Sức mạnh",
      "Trong hai lượt của bạn, nếu đã chơi một lá Trượng Phép hồi HP, lá Trượng Phép gây sát thương đầu tiên chơi sau đó trong cùng lượt được tăng sát thương."
    ],
    [
      "Bổ Dọc",
      "Rìu",
      "Trực tiếp",
      "Gây sát thương lớn lên một địch."
    ],
    [
      "Vung Rìu",
      "Rìu",
      "Trực tiếp",
      "Gây sát thương vừa lên tất cả địch đang giao tranh."
    ],
    [
      "Kết Liễu",
      "Rìu",
      "Kỹ năng",
      "Gây sát thương. Tăng sát thương nếu HP của mục tiêu đã dưới ngưỡng trước khi trúng đòn."
    ],
    [
      "Cướp Sức",
      "Rìu",
      "Kỹ năng",
      "Gây sát thương. Nếu chính lá này hạ mục tiêu, hồi HP cho bản thân."
    ],
    [
      "Cuồng Chiến",
      "Rìu",
      "Sức mạnh",
      "Trong hai lượt của bạn, khi HP bản thân dưới ngưỡng, các lá Rìu gây thêm sát thương và bạn chịu thêm sát thương trực tiếp từ địch."
    ],
    [
      "Dư Chấn Chiến Thắng",
      "Rìu",
      "Sức mạnh",
      "Nếu hạ một địch bằng Rìu trong trận này, lá Rìu gây sát thương đầu tiên ở trận kế tiếp trong cùng lần công thành được tăng sát thương."
    ],
    [
      "Nện Xuống",
      "Búa Chiến và Chùy",
      "Trực tiếp",
      "Gây sát thương lớn lên một địch."
    ],
    [
      "Quét Búa",
      "Búa Chiến và Chùy",
      "Trực tiếp",
      "Gây sát thương vừa lên tất cả địch đang giao tranh."
    ],
    [
      "Đập Vỡ",
      "Búa Chiến và Chùy",
      "Kỹ năng",
      "Gây sát thương. Nếu mục tiêu có Khiên, phá thêm một phần Khiên trước khi áp sát thương."
    ],
    [
      "Nện Tiếp",
      "Búa Chiến và Chùy",
      "Kỹ năng",
      "Gây sát thương. Nếu Khiên của mục tiêu đã bị phá sạch trong lượt này, tăng sát thương đòn."
    ],
    [
      "Vết Rạn",
      "Búa Chiến và Chùy",
      "Sức mạnh",
      "Đặt debuff lên một địch trong hai lượt của bạn. Lần kế tiếp đòn của bạn đánh Khiên của nó về 0, đòn trực tiếp tiếp theo lên nó được tăng sát thương."
    ],
    [
      "Dồn Trọng Lượng",
      "Búa Chiến và Chùy",
      "Sức mạnh",
      "Nếu kết thúc lượt mà chưa gây sát thương lên địch, lá Búa Chiến / Chùy gây sát thương đầu tiên ở lượt sau được tăng sát thương."
    ]
  ],
  "Nguyên tố": [
    [
      "Tàn Lửa",
      "Lửa",
      "Thường",
      "Đòn được cường hóa gây thêm một ít sát thương."
    ],
    [
      "Than Truyền",
      "Lửa",
      "Cao",
      "Đòn gieo một đốm than lên địch trong vài lượt. Mỗi lượt, lần đầu bạn đánh trúng nó, than bùng lên gây thêm sát thương. Nếu chính cú bùng đó hạ mục tiêu, đốm than truyền sang một địch khác với thời hạn còn lại."
    ],
    [
      "Mạch Nguồn",
      "Nước",
      "Thường",
      "Hồi một ít HP. Khi gắn vào đòn, hồi HP sau khi đòn được giải quyết."
    ],
    [
      "Mạch Ngầm",
      "Nước",
      "Cao",
      "Trong vài lượt, đầu mỗi lượt của bạn, hồi lại một phần HP đã mất trong lượt địch vừa qua, có giới hạn mỗi lần."
    ],
    [
      "Hơi Gió",
      "Gió",
      "Thường",
      "Nhìn lá trên cùng của chồng rút. Giữ nó ở đó hoặc đưa xuống đáy."
    ],
    [
      "Gió Hồi",
      "Gió",
      "Cao",
      "Trong vài lượt, trước khi bỏ bài cuối lượt, bạn có thể chọn một lá vũ khí chưa dùng để đặt lên đầu chồng rút. Lá đó chiếm một lượt rút bình thường ở lượt sau."
    ],
    [
      "Vỏ Đá",
      "Đất",
      "Thường",
      "Tạo một ít Khiên. Khi gắn vào đòn, nhận Khiên sau khi đòn được giải quyết."
    ],
    [
      "Nền Đá",
      "Đất",
      "Cao",
      "Trong vài lượt, khi Khiên sắp hết hạn, giữ lại một phần sang lượt sau, có giới hạn. Khiên đã bị địch đánh vỡ thì hết."
    ]
  ],
  "Ấn Thú": [
    [
      "Giáp Dực Phong",
      "A♠",
      "Gió",
      "Khai Dạng trong lượt này. Sau hành động vũ khí đầu tiên, có thể đổi một lá trên tay lấy lá trên cùng chồng rút."
    ],
    [
      "Thằn Lằn Lướt Vách",
      "2♠",
      "Gió",
      "Xem lá trên cùng chồng rút và chọn giữ hoặc đưa xuống đáy."
    ],
    [
      "Sư Tử Gầm Đèo",
      "3♠",
      "Gió",
      "Tiếng gầm làm đòn trực tiếp kế tiếp của một địch yếu đi."
    ],
    [
      "Lợn Rừng Ngược Gió",
      "4♠",
      "Gió",
      "Gây sát thương. Có thể đưa một lá Trực tiếp vừa chơi từ chồng bỏ lên đầu chồng rút."
    ],
    [
      "Châu Chấu Vượt Khe",
      "5♠",
      "Gió",
      "Rút một lá, rồi chọn một lá trên tay đặt xuống đáy chồng rút."
    ],
    [
      "Hươu Sừng Sấm",
      "6♠",
      "Gió",
      "Chọn một lá vũ khí trên tay. Đặt nó lên đầu chồng rút và giảm chi phí lần chơi đầu tiên của nó ở lượt sau."
    ],
    [
      "Hóa Thạch Nghe Gió",
      "7♠",
      "Gió",
      "Xem trước ba lá đầu của chồng rút và sắp lại thứ tự."
    ],
    [
      "Trâu Kéo Mây",
      "8♠",
      "Gió",
      "Chọn một lá vũ khí ở gần đáy chồng rút và đưa nó lên đầu."
    ],
    [
      "Miêu Ảnh Chín Vệt",
      "9♠",
      "Gió",
      "Mèo lớn tách thành dư ảnh. Trong hai lượt, lần đầu chơi hết các lá vũ khí trên tay, rút thêm một lá."
    ],
    [
      "Bọ Hung Giữ Khắc",
      "10♠",
      "Gió",
      "Bọ thần giữ một khắc trong vỏ. Chọn một địch đang chuẩn bị kỹ năng. Lùi kỹ năng đó sang lượt địch sau."
    ],
    [
      "Điểu Sư Vực Gió",
      "J♠",
      "Gió",
      "Griffin sà xuống. Rút ngay một lá vũ khí tự chọn từ ba lá đầu chồng rút. Nếu chơi ngay, lá đó được giảm chi phí."
    ],
    [
      "Dê Chúa Sừng Mây",
      "Q♠",
      "Gió",
      "Trong hai lượt, sau lần rút đầu tiên, có thể đổi một lá trên tay với một lá trong ba lá đầu chồng rút."
    ],
    [
      "Vương Giáp Mắt Bão",
      "K♠",
      "Gió",
      "Chúa bọ giáp rỗng mang cả cơn bão bên trong. Chọn và xếp trước các lá sẽ rút ở lượt sau. Lá vũ khí đầu tiên trong tay đã xếp được giảm chi phí."
    ],
    [
      "Đường Lang Lưỡi Hồng",
      "A♥",
      "Lửa",
      "Khai Dạng trong lượt này. Đòn vũ khí đầu tiên gieo than, đòn kế tiếp vào cùng mục tiêu làm than bùng."
    ],
    [
      "Người Giữ Bếp Cuối",
      "2♥",
      "Lửa",
      "Châm lửa vào đòn vũ khí kế tiếp, cộng một ít sát thương."
    ],
    [
      "Cá Đầu Búa Biển Tro",
      "3♥",
      "Lửa",
      "Gây sát thương lên một địch. Tăng sát thương nếu mục tiêu đã bị thương trong lượt này."
    ],
    [
      "Chuồn Chuồn Kim Hỏa",
      "4♥",
      "Lửa",
      "Gây sát thương nhẹ lên hai địch khác nhau."
    ],
    [
      "Ốc Lò Than",
      "5♥",
      "Lửa",
      "Gieo than lên một địch. Đòn vũ khí kế tiếp của bạn vào mục tiêu làm than bùng."
    ],
    [
      "Diều Hâu Ráng Đỏ",
      "6♥",
      "Lửa",
      "Gây sát thương và châm Thiêu Đốt. Nếu lần Thiêu Đốt đầu tiên hạ địch, tàn lửa bắn sang một địch khác."
    ],
    [
      "Dây Gai Đỏ",
      "7♥",
      "Lửa",
      "Trong hai lượt, lần đầu mục tiêu bị đánh trúng mỗi lượt, dây gai siết lại và gây thêm sát thương."
    ],
    [
      "Ngài Cánh Tro",
      "8♥",
      "Lửa",
      "Rắc tro lên địch. Lần kế tiếp một trong số chúng nhận Thiêu Đốt trong thời hạn, tro cháy và gây sát thương nhẹ lên các mục tiêu còn lại đã bị rắc tro."
    ],
    [
      "Lạc Đà Chở Than",
      "9♥",
      "Lửa",
      "Trong hai lượt, lần đầu đánh trúng một địch đang cháy mỗi lượt, tăng lượng sát thương của lần Thiêu Đốt kế tiếp trên nó."
    ],
    [
      "Rết Trăm Đốt Hồng",
      "10♥",
      "Lửa",
      "Gieo các đốt than lên một địch. Mỗi lần một lá vũ khí riêng đánh trúng nó trong lượt này, một đốt than nổ."
    ],
    [
      "Sói Săn Tàn Hỏa",
      "J♥",
      "Lửa",
      "Gây sát thương mạnh lên địch đang cháy. Nếu hạ nó, chuyển lượng Thiêu Đốt còn lại sang một mục tiêu khác."
    ],
    [
      "Lan Yêu Hút Tro",
      "Q♥",
      "Lửa",
      "Lan ăn thịt bén rễ trong tro. Trong hai lượt, lần đầu Thiêu Đốt kích hoạt mỗi lượt, tạo một nụ lửa. Khi hết hạn, tất cả nụ nổ lên địch đang cháy."
    ],
    [
      "Nanh Tro",
      "K♥",
      "Lửa",
      "Bọ ngựa tang lễ kết từ tro của cả một lò thiêu. Gây một đòn lớn và gieo than vương ấn. Nếu kẻ mang than bị hạ trong thời hạn, than nhảy sang địch kế tiếp và bùng ngay. Mỗi địch chỉ nhận vương ấn một lần."
    ],
    [
      "Giáp Hươu Mạch Suối",
      "A♦",
      "Nước",
      "Khai Dạng trong lượt này. Đòn vũ khí đầu tiên hồi một ít HP. Lượng hồi tăng nếu bạn mất HP ở lượt địch vừa qua."
    ],
    [
      "Tatu Cuộn Sương",
      "2♦",
      "Nước",
      "Hồi một ít HP ngay."
    ],
    [
      "Ếch Túi Mưa",
      "3♦",
      "Nước",
      "Hồi một ít HP khi kết thúc lượt này."
    ],
    [
      "Chim Gõ Mạch",
      "4♦",
      "Nước",
      "Đòn vũ khí kế tiếp trúng địch hồi HP."
    ],
    [
      "Cá Voi Bể Ngầm",
      "5♦",
      "Nước",
      "Hồi HP ngay, tăng lượng hồi khi HP hiện tại dưới ngưỡng."
    ],
    [
      "Bọ Đèn Triều",
      "6♦",
      "Nước",
      "Bọ đèn dẫn đường trong hang ngập nước. Hồi một ít HP ở đầu mỗi lượt trong hai lượt."
    ],
    [
      "Rùa Gương",
      "7♦",
      "Nước",
      "Ghi lại HP lúc mở ấn. Đầu lượt sau, nếu HP thấp hơn mốc đó, hồi một phần chênh lệch."
    ],
    [
      "Dơi Hang Nước",
      "8♦",
      "Nước",
      "Gây sát thương lên một địch và hồi HP theo một phần sát thương thực sự lấy khỏi HP của nó."
    ],
    [
      "Mã Vằn Hai Dòng",
      "9♦",
      "Nước",
      "Hồi HP ngay. Nếu lần hồi này vượt HP tối đa, giữ một phần lượng dư để hồi sau lần kế tiếp bạn mất HP trong thời hạn."
    ],
    [
      "Long Tắc Kè Kính",
      "10♦",
      "Nước",
      "Bò sát có da đổi màu theo vết thương. Ghi nhận lượng HP mất từ đòn trực tiếp đầu tiên trong lượt địch tới, rồi hồi lại một phần ở đầu lượt sau."
    ],
    [
      "Công Bách Nhãn Thủy",
      "J♦",
      "Nước",
      "Xòe đuôi thành một trận mưa. Hồi HP ngay và đặt hai đợt hồi nhỏ ở đầu hai lượt kế tiếp."
    ],
    [
      "Thủy Xà Lột Xác",
      "Q♦",
      "Nước",
      "Đại xà thay da mỗi lần nước dâng. Hồi HP và gột một debuff. Nếu đã gột thành công, hồi thêm HP ở đầu lượt sau."
    ],
    [
      "Thủy Vương Hàm Lưỡi Liềm",
      "K♦",
      "Nước",
      "Chúa bọ hươu sống dưới hồ sâu. Trong hai lượt, ghi nhận HP bạn mất. Khi hết hạn, hồi lại một phần tổng lượng đã mất, tới giới hạn của ấn."
    ],
    [
      "Nhện Dệt Nền",
      "A♣",
      "Đất",
      "Khai Dạng trong lượt này. Lá vũ khí đầu tiên tạo Khiên được tăng Khiên."
    ],
    [
      "Ong Hang Đất",
      "2♣",
      "Đất",
      "Tạo một ít Khiên ngay."
    ],
    [
      "Chuột Chũi Đào Hào",
      "3♣",
      "Đất",
      "Tạo Khiên nếu ý đồ hiện tại của địch có ít nhất một đòn cận chiến nhắm vào bạn."
    ],
    [
      "Tê Giác Húc Cổng",
      "4♣",
      "Đất",
      "Phá một phần Khiên của một địch."
    ],
    [
      "Hổ Mang Cát Nén",
      "5♣",
      "Đất",
      "Tạo Khiên. Nếu Khiên từ lá này chưa bị phá hết khi sang lượt sau, giữ lại một phần."
    ],
    [
      "Gấu Đá Trắng",
      "6♣",
      "Đất",
      "Tạo Khiên lớn. Lần kế tiếp Khiên về 0 do đòn địch, tạo lại một lớp Khiên nhỏ sau khi đòn giải quyết."
    ],
    [
      "Sứa Khoáng",
      "7♣",
      "Đất",
      "Tạo Khiên và giữ lại một phần Khiên dư qua hai lần chuyển lượt."
    ],
    [
      "Bọ Cạp Mỏ Quặng",
      "8♣",
      "Đất",
      "Ghim một địch. Lần kế tiếp Khiên của nó bị phá hết trong thời hạn, nó nhận một đòn từ đuôi bọ cạp."
    ],
    [
      "Mực Phun Bụi Mỏ",
      "9♣",
      "Đất",
      "Trong hai lượt, giảm lượng Khiên mà mục tiêu tự tạo ở mỗi hành động."
    ],
    [
      "Heo Vòi Ăn Khoáng",
      "10♣",
      "Đất",
      "Bóc một phần Khiên địch và tạo Khiên cho bạn theo lượng thực sự bóc được, tới giới hạn."
    ],
    [
      "Nứt Thành",
      "J♣",
      "Đất",
      "Voi đá giẫm vỡ phòng tuyến. Phá một lượng lớn Khiên của một địch. Nếu phá hết, mục tiêu khó dựng lại Khiên ở hành động kế tiếp."
    ],
    [
      "Hổ Quỷ Mặt Ngọc",
      "Q♣",
      "Đất",
      "Quỷ mang mặt hổ giữ cổng đá. Trong hai lượt địch, lần đầu Khiên của bạn bị phá hết, phá Khiên của kẻ vừa ra đòn và dựng một lớp Khiên mới cho bạn sau đòn đó."
    ],
    [
      "Mẫu Nhện Dệt Thành",
      "K♣",
      "Đất",
      "Mẫu nhện dệt tường đá quanh bạn. Tạo Khiên lớn. Trong hai lượt kế tiếp, phần Khiên dư được giữ lại tới giới hạn và lần đầu lớp Khiên vỡ, tường đá tự dựng lại một phần."
    ],
    [
      "Vô Diện Nuốt Tên",
      "Joker Đen",
      "Joker",
      "Chọn một Ấn Thú khác bạn đã dùng trong trận. Joker mượn năng lực lẻ của ấn đó và thực hiện thêm một lần. Hình tượng là một sinh vật không có gương mặt riêng, khoác hình của những thú đã bị phong ấn."
    ],
    [
      "Bạch Diện Khai Ấn",
      "Joker Trắng",
      "Joker",
      "Chọn một địch. Giải phóng toàn bộ hiệu ứng có lợi đang tồn tại trên nó. Nếu lượt đó địch đã công bố ý đồ được một trong các hiệu ứng ấy cường hóa, giải quyết ý đồ theo hiệu lực còn lại. Hình tượng là một sinh vật trắng nhợt chuyên mở những phong ấn đã khép."
    ]
  ],
  "Chủng tộc": [
    [
      "Human — Nhân tộc",
      "01",
      "Giáo, Khiên",
      "Vương quốc, đế chế, tham vọng, kỷ luật; mạnh nhờ tổ chức và huấn luyện."
    ],
    [
      "High Elf — Cao tinh linh",
      "02",
      "Pháp, Kiếm",
      "Cổ xưa, thanh lịch, kiêu hãnh, học thuật và ma thuật tinh vi."
    ],
    [
      "Wood Elf — Mộc tinh linh",
      "03",
      "Cung, Giáo",
      "Rừng sâu, thợ săn, kín đáo; bảo vệ thiên nhiên quyết liệt."
    ],
    [
      "Dark Elf — Hắc tinh linh",
      "04",
      "Kiếm, Pháp",
      "Bóng tối, xã hội bí mật, âm mưu, độc dược và phép nguy hiểm."
    ],
    [
      "Dwarf — Người lùn",
      "05",
      "Khiên, Kiếm",
      "Thành trì trong núi, lò rèn, giáp nặng, gia tộc và bền bỉ."
    ],
    [
      "Orc",
      "06",
      "Kiếm, Giáo",
      "Thể lực, chiến tranh, danh dự bộ tộc hoặc chinh phạt; đánh trực diện."
    ],
    [
      "Goblin",
      "07",
      "Cung, Pháp",
      "Nhỏ con, cơ hội, đông đúc, bẫy, đồ chế và mưu mẹo."
    ],
    [
      "Hobgoblin",
      "08",
      "Giáo, Khiên",
      "Quân đoàn, đội hình, cấp bậc và kỷ luật quân sự."
    ],
    [
      "Halfling — Tiểu nhân",
      "09",
      "Cung, Kiếm",
      "Thôn quê, nhanh nhẹn, kín đáo, gan dạ dù vóc dáng nhỏ."
    ],
    [
      "Gnome",
      "10",
      "Pháp, Cung",
      "Tò mò, phát minh, ảo thuật, cơ khí và phép vui quái."
    ],
    [
      "Giant — Cự nhân núi",
      "11",
      "Khiên, Giáo",
      "Khổng lồ, thô ráp, cơ bắp, phá cổng và nghiền đội hình."
    ],
    [
      "Ogre — Quỷ khổng lồ",
      "12",
      "Kiếm, Khiên",
      "Nặng nề, phàm ăn, lính đánh thuê hoặc dùng sức áp đảo."
    ],
    [
      "Troll — Hướng tái sinh",
      "13",
      "Kiếm, Khiên",
      "Hoang dã, khó giết, cơ thể dị dạng, đầm lầy hoặc hang tối."
    ],
    [
      "Cyclops — Độc nhãn cự nhân",
      "14",
      "Giáo, Khiên",
      "Một mắt, sức phá hủy lớn, cổ đại; đôi khi gắn với nghề rèn."
    ],
    [
      "Minotaur — Ngưu đầu nhân",
      "15",
      "Kiếm, Khiên",
      "Đầu bò, mê cung, xung phong, sức mạnh và uy hiếp."
    ],
    [
      "Oni — Quỷ sừng",
      "16",
      "Kiếm, Pháp",
      "Có sừng, hung dữ hoặc uy nghi, sức mạnh siêu nhiên."
    ],
    [
      "Bán cự nhân",
      "17",
      "Giáo, Khiên",
      "Chiến binh vùng núi, chịu đựng tốt, thử thách thể lực và tổ tiên."
    ],
    [
      "Wolfkin — Lang nhân",
      "18",
      "Kiếm, Giáo",
      "Săn theo bầy, trung thành, khứu giác tốt, quyết liệt."
    ],
    [
      "Catfolk — Miêu nhân",
      "19",
      "Kiếm, Cung",
      "Linh hoạt, tò mò, độc lập, leo trèo và phản xạ nhanh."
    ],
    [
      "Lionfolk — Sư nhân",
      "20",
      "Kiếm, Khiên",
      "Uy nghi, chiến binh quý tộc, danh dự và sức mạnh vương giả."
    ],
    [
      "Bearfolk — Hùng nhân",
      "21",
      "Khiên, Kiếm",
      "To khỏe, trầm ổn, bảo vệ cộng đồng, chịu đòn tốt."
    ],
    [
      "Boarfolk — Trư nhân",
      "22",
      "Giáo, Khiên",
      "Bền sức, lì lợm, xung phong và văn hóa bộ tộc."
    ],
    [
      "Ratfolk — Thử nhân",
      "23",
      "Cung, Pháp",
      "Hang ngầm, sinh tồn, nhanh trí; thương nhân hoặc quân bầy đàn."
    ],
    [
      "Gnoll — Linh cẩu nhân",
      "24",
      "Giáo, Cung",
      "Săn bầy, tiếng cười ghê rợn, cướp bóc hoặc sinh tồn khắc nghiệt."
    ],
    [
      "Lizardfolk — Tích dịch nhân",
      "25",
      "Giáo, Khiên",
      "Đầm lầy, vảy cứng, săn bắt, sinh tồn và văn hóa cổ."
    ],
    [
      "Kobold",
      "26",
      "Cung, Pháp",
      "Nhỏ, sống thành đàn, đào hang, đặt bẫy; một hướng nổi tiếng gắn với rồng."
    ],
    [
      "Dragonfolk — Long nhân",
      "27",
      "Kiếm, Pháp",
      "Vảy rồng, huyết thống cổ, kiêu hãnh và năng lực siêu nhiên."
    ],
    [
      "Turtlefolk — Quy nhân",
      "28",
      "Khiên, Pháp",
      "Mai cứng, chậm rãi, trường thọ, du hành hoặc hiền triết."
    ],
    [
      "Birdfolk — Điểu nhân",
      "29",
      "Cung, Giáo",
      "Độ cao, thị lực, bầu trời, trinh sát và cơ động."
    ],
    [
      "Insectfolk — Trùng nhân",
      "30",
      "Giáo, Khiên",
      "Giáp ngoài, bầy đàn, phân công chức năng hoặc tư duy xa lạ."
    ],
    [
      "Spiderfolk — Chu nhân",
      "31",
      "Cung, Pháp",
      "Tơ, độc, hang tối, phục kích; có thể có văn hóa dệt."
    ],
    [
      "Centaur — Nhân mã",
      "32",
      "Cung, Giáo",
      "Nửa người nửa ngựa, thảo nguyên, săn bắn; hoang dã hoặc thông thái."
    ],
    [
      "Satyr hoặc Faun — Dương nhân",
      "33",
      "Pháp, Cung",
      "Rừng, âm nhạc, vui thú, tinh nghịch và phép mê hoặc."
    ],
    [
      "Merfolk — Ngư nhân",
      "34",
      "Giáo, Pháp",
      "Vương quốc dưới biển, dòng nước, san hô, đẹp hoặc xa lạ."
    ],
    [
      "Naga — Xà linh",
      "35",
      "Giáo, Pháp",
      "Rắn thiêng, thủy vực, đền cổ, bảo hộ và quyền năng huyền bí."
    ],
    [
      "Lamia — Xà nhân",
      "36",
      "Kiếm, Pháp",
      "Trong nhiều bản fantasy hiện đại: thân người đuôi rắn, mê hoặc và săn mồi."
    ],
    [
      "Harpy — Điểu yêu",
      "37",
      "Kiếm, Cung",
      "Thân lai chim, móng vuốt, vách đá, tiếng kêu và tập kích từ không trung."
    ],
    [
      "Kitsune hoặc Hồ ly",
      "38",
      "Pháp, Kiếm",
      "Biến hình, mưu trí, ảo thuật; linh thiêng, tinh nghịch hoặc nguy hiểm."
    ],
    [
      "Tengu — Thiên cẩu",
      "39",
      "Kiếm, Pháp",
      "Núi thiêng, chim hoặc quạ, võ nghệ, kiêu hãnh và phép thuật."
    ],
    [
      "Jinn — Tinh linh kiểu Tây Á",
      "40",
      "Pháp, Kiếm",
      "Vô hình, biến hóa, quyền năng, giao ước; không chỉ ban điều ước."
    ],
    [
      "Yaksha — Dạ xoa",
      "41",
      "Khiên, Pháp",
      "Linh thể bảo hộ hoặc đáng sợ; thiên nhiên, kho báu và nơi linh thiêng."
    ],
    [
      "Fairy hoặc Pixie — Tiểu tiên",
      "42",
      "Pháp, Cung",
      "Nhỏ, có cánh, đẹp nhưng khó lường, mê hoặc và trò đùa."
    ],
    [
      "Dryad — Mộc linh",
      "43",
      "Pháp, Cung",
      "Linh hồn cây, vẻ đẹp tự nhiên, bảo vệ rừng hoặc trả thù khi cây bị hại."
    ],
    [
      "Treant — Thụ nhân",
      "44",
      "Khiên, Giáo",
      "Cây sống lâu đời, chậm nhưng mạnh, canh giữ rừng."
    ],
    [
      "Nymph — Tự nhiên linh",
      "45",
      "Pháp",
      "Hiện thân của suối, hồ, núi hoặc rừng; duyên dáng, huyền bí."
    ],
    [
      "Fungusfolk — Nấm nhân",
      "46",
      "Pháp, Khiên",
      "Bào tử, cộng sinh, phân hủy, hang ẩm và giao tiếp khác thường."
    ],
    [
      "Skeleton — Khô lâu",
      "47",
      "Giáo, Cung",
      "Quân xương, tàn tích chiến tranh, phục tùng và chiến đấu sau cái chết."
    ],
    [
      "Zombie — Hoạt thi",
      "48",
      "Khiên, Kiếm",
      "Chậm, đông, dai dẳng, mục rữa và chiến tranh tiêu hao."
    ],
    [
      "Ghoul — Thực thi quỷ",
      "49",
      "Kiếm, Giáo",
      "Đói khát, ăn xác, nhanh và hung hãn hơn zombie chậm chạp."
    ],
    [
      "Vampire — Huyết tộc",
      "50",
      "Kiếm, Pháp",
      "Quý tộc suy đồi, bất tử, hút máu, mê hoặc và săn mồi."
    ],
    [
      "Ghost hoặc Wraith — U linh",
      "51",
      "Pháp, Kiếm",
      "Oán niệm, phi vật chất, lạnh lẽo, ám ảnh và sợ hãi."
    ],
    [
      "Mummy — Xác ướp",
      "52",
      "Khiên, Pháp",
      "Lăng mộ, vương triều cổ, nghi lễ, lời nguyền và bảo vệ người chết."
    ],
    [
      "Revenant — Vong binh phục hận",
      "53",
      "Kiếm, Khiên",
      "Trở về vì lời thề hoặc món nợ, giữ ký ức và ý chí chiến đấu."
    ],
    [
      "Golem — Ma tượng",
      "54",
      "Khiên, Giáo",
      "Đá, đất sét hoặc kim loại được ban chuyển động; nặng, bền, tuân lệnh."
    ],
    [
      "Living Construct — Nhân tạo có ý thức",
      "55",
      "Kiếm, Cung",
      "Binh khí biết suy nghĩ, linh hồn trong thân máy, ký ức và thân phận."
    ],
    [
      "Gargoyle — Thạch quỷ",
      "56",
      "Khiên, Kiếm",
      "Tượng đá thức tỉnh, kiến trúc cổ, canh giữ và tập kích từ trên cao."
    ],
    [
      "Elemental — Nguyên tố thể",
      "57",
      "Pháp, Khiên",
      "Cơ thể từ lửa, nước, gió hoặc đất; đặc tính tự nhiên rõ nét."
    ],
    [
      "Celestial — Thiên giới tộc",
      "58",
      "Khiên, Pháp",
      "Ánh sáng, phán xét, bảo hộ, vẻ đẹp uy nghi hoặc xa cách."
    ],
    [
      "Fiend — Ma giới tộc",
      "59",
      "Kiếm, Pháp",
      "Giao kèo, cám dỗ, hủy diệt, hình thể đáng sợ và quyền năng cấm."
    ],
    [
      "Slime — Niêm thể",
      "60",
      "Khiên, Pháp",
      "Cơ thể mềm, hấp thụ, biến dạng; từ quái yếu đến sinh thể tiến hóa mạnh."
    ]
  ]
};
