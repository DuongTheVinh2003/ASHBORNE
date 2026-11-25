const layouts = {
  overview: ['Menu & tiến trình', 'Hành trình Ashborne', 'scene', [
    ['Mở đầu', [['Hành động chính','Bắt đầu hành trình'],['Lối tắt','Sa đồ']], {
      'Menu': ['Tên game và một hành động chính. Tiếp tục hành trình chỉ sáng khi có tiến trình.', 'Tùy chọn mở trong bảng riêng. Tutorial tự hiện khi gặp cơ chế mới.'],
      'Hồ sơ': ['Tiến trình hiện tại giữ quân, hậu cần, bộ bài, di vật và vị trí.', 'Tiến trình lâu dài giữ Ấn Thú đã thu, phát hiện cốt truyện và vùng đã mở.'],
    }, 'Bắt đầu → chọn vũ khí → chuẩn bị đạo quân.'],
  ]],
  loadout: ['Vũ khí & bộ bài', 'Chuẩn bị trước thành', '', [
    ['Bộ bài mẫu', [['Tay đầu','5 lá'],['Bộ khởi đầu','12 lá'],['Ấn mang theo','Tối đa 3']], {
      'Dải chọn vũ khí': ['Tám họ trong concept. Chọn họ để xem tranh, lối chơi và các lá của họ.', 'Chi tiết mỗi lá có mana, nhóm Trực tiếp / Kỹ năng / Sức mạnh, phẩm, điều kiện và hiệu ứng ở lá đáy.'],
      'Bộ bài đang mang': ['Hiện số bản sao, tổng số lá, lọc theo vũ khí, nhóm, phẩm hoặc nguyên tố.', 'Xem Nước địa vực, ý đồ đã biết và ấn có thể thu trước khi chốt.'],
      'Bàn trang bị': ['Ba ô Ấn Thú riêng. Hiện bộ và chuỗi liên quan cùng điều kiện còn thiếu.', 'Di vật theo tấn công, phòng thủ, hậu cần và nguyên tố. Hiện thứ tự áp dụng và giới hạn trùng.'],
    }, 'Chốt chuẩn bị trước khi lập quân. Đổi ấn tại điểm chuẩn bị, trại hoặc ngoài thành theo cấu hình màn.'],
  ]],
  map: ['Sa đồ & hậu cần', 'Frozen Cathedral', 'atlas-map', [
    ['Xem tuyến', [['Quân','12'],['Lương','18'],['Trung thành','70/100'],['Danh tiếng','60/100'],['Tinh thần','—'],['Vương quyền','—'],['Vàng','—']], {
      'Hậu cần bên trái': ['Quân và lương chính. Chi tiết thuốc, vận tải và trang bị chỉ xuất hiện tại nút có dùng chúng.', 'Vương quyền hiển thị theo mốc vùng. Tinh thần tách khỏi lòng trung thành.'],
      'Atlas ở giữa': ['Giữ tranh gốc và mốc. Phân biệt đường khả dụng, đã đi, đang giao tranh và chưa mở bằng viền, dấu và chữ.', 'Chú giải gồm chiến đấu, tinh anh, thành, trại, thương nhân, tiếp tế, sự kiện và săn ấn.'],
      'Chi tiết bên phải': ['Hiện giá vào, phần thưởng dự kiến, nguyên tố địa vực và yêu cầu mở tuyến.', 'Đường an toàn, di vật, tài nguyên và săn hiện theo dữ liệu. Hiện thông tin manh mối và liên minh đã mở.'],
    }, 'Chọn nút trước rồi mới xác nhận chi phí vào tuyến.'],
  ]],
  siege: ['Ghép quân & công thành', 'Cổng Thành Kính Lạnh', 'scene', [
    ['Ghép và bố trí', [['Quân chưa phân','12'],['Lương','18'],['Trung thành','70/100'],['Danh tiếng','60/100']], {
      'Vật liệu': ['Tách lá Chủng tộc và Binh chủng. Huy hiệu chỉ sở trường. Hiện tên, bậc, số bản sao và lá đã khóa.'],
      'Chồng quân': ['Đọc từ lá đáy. Nâng bậc bằng lá cùng binh chủng và cùng bậc, hoặc ghép chủng với binh chủng để lấy bậc của binh chủng.', 'Ngoài sở trường vẫn có thể ghép, xem chênh lệch hiệu suất và chi phí. Hai chuyên môn còn là đề xuất.'],
      'Ô triển khai': ['Ba ô trong màn mẫu. Mỗi ô có quân chuyển biên chế, tuyển mới, số quân thực nhận, lương mỗi quân, tổng lương và điểm.', 'Hoàn tác ô vừa chốt trước khi cam kết để trả lại lá, quân và lương dự toán.'],
    }, 'Dùng luật Chủng tộc × Binh chủng mới. Số liệu và công thức Dân binh cũ chỉ dùng để tham chiếu.'],
    ['Qua cổng', [['Điểm công','42 / 35'],['Điểm dư','7'],['Đòn mở màn','×1,35']], {
      'Tổng kết công thành': ['Đối chiếu tổng điểm, ngưỡng và phần dư. Tách khoản dự toán và khoản sắp trừ.', 'Xem sát thương trực tiếp đòn đầu được nhân trước Khiên. Tín hiệu hệ số tắt sau khi tiêu.'],
      'Trường hợp chưa đạt': ['Chỉ rõ thiếu lương, hết quân, sai công thức hoặc thiếu điểm. Cho sửa hoặc quay lại.', 'Nếu chọn cam kết dưới ngưỡng, hiển thị hệ quả trước khi ghi chi phí.'],
    }, '42/35 là ca tham chiếu độc lập của GDD. Phương án chồng không dung hợp thành đạo quân vẫn chờ chốt.'],
  ]],
  combat: ['Combat & chồng bài', 'Giao tranh trong thành', 'scene', [
    ['HUD ổn định', [['HP','39/45'],['Khiên','0'],['Mana','4/4'],['Địa vực','Nước +1'],['Di vật','0'],['Ấn Thú','2/3']], {
      'Mép trên': ['HP xuyên trận, địa vực, di vật, lượt và tiến độ chuỗi trong thành.', 'Mở bộ bài, tuyến, nhật ký và tạm dừng tại chỗ. Dồn tài nguyên chiến dịch vào chi tiết sa đồ.'],
      'Sân đấu': ['Ý đồ trên từng địch. Tên, HP, Khiên, buff/debuff, cộng dồn và hạn cạnh chủ thể.', 'Khi nhiều địch, hiện thứ tự và đích hợp lệ. Chi tiết địch có kháng/yếu, giai đoạn, hồi chiêu và tuyệt kỹ báo trước.'],
      'Vùng thao tác': ['Mana lớn bên trái, rút và bỏ ở hai góc. Tay bài và chồng ở giữa, chốt chồng cạnh bản xem trước.', 'Khay ấn, nút kết lượt riêng và chỉ dẫn theo ngữ cảnh.'],
    }, 'Mở bảng chi tiết trong trận giữ nguyên lượt, lựa chọn và tài nguyên.'],
    ['Xem trước chồng', [['Lá đáy','Chém Ngang'],['Chi phí','4 mana'],['Sát thương mẫu','21 trước Khiên'],['Nguyên tố','Lửa']], {
      'Dùng lẻ hoặc ghép': ['Xếp tối đa bốn lá trong mẫu GDD. Một nguyên tố có thể gắn nhóm phù hợp. Cho tháo lá, đổi thứ tự và chọn đích.'],
      'Kết quả trước khi chốt': ['Hiện hiệu ứng đáy, chỉ số cộng dồn, nguyên tố gốc → hiệu lực, thay đổi thanh, đích và kết quả trước/sau Khiên.', 'Tuyệt kỹ mẫu kiểm đủ bốn lá, ít nhất hai vũ khí và thanh từ 6. Chỉ rõ điều kiện chưa đạt hoặc chồng sai/thiếu mana.'],
      'Phản hồi': ['Nêu Khiên chặn, mất HP, thay đổi trạng thái, hiệu ứng bị bỏ và lý do. Ghi cả hệ số công thành trước Khiên.'],
    }, 'Dùng xem trước rồi xác nhận cho mẫu này. Biến thể đếm giờ và chạy chuỗi không dung hợp nằm ở Core Combat.'],
  ]],
  elements: ['Nguyên tố & Overload', 'Bốn thanh nguyên tố', 'scene', [
    ['Chờ quá tải', [['Lửa','10/10'],['Nước','1/10'],['Gió','3/10'],['Đất','2/10']], {
      'Chờ quá tải': ['Dấu ngưỡng tĩnh, tên hệ, thứ tự đạt ngưỡng và thời điểm kích hoạt.'],
      'Tiết Chế': ['Hiện trước và sau từng thanh. Hai cặp Lửa ↔ Nước và Gió ↔ Đất.', 'Gắn Nước có thể hạ Lửa từ 10 xuống 8 và bỏ chờ. Dùng riêng không Tiết Chế theo GDD.'],
      'Dùng nguyên tố': ['Tách dùng riêng, buff chờ đòn tới và gắn đòn. Hiện cộng dồn, phẩm và hạn của hiệu ứng.'],
    }, 'Khi qua lượt với một thanh vẫn đầy, kích hoạt hệ theo thứ tự chạm ngưỡng.'],
    ['Đang quá tải', [['Hiệu lực','Lửa'],['Phản lực cuối lượt','−4 HP'],['Tiết Chế','Tạm dừng']], {
      'Trên thẻ': ['Giữ chức năng gốc và phủ dấu nguyên tố hiệu lực lên cả Ấn Thú.', 'Hiện kết quả gắn đòn theo hệ đang quá tải.'],
      'Kết lượt': ['Báo phản lực bỏ qua Khiên trước khi xác nhận. Hạ thanh về 0 khi kết thúc theo luật mẫu.'],
    }, 'Dùng số mẫu GDD cho ngưỡng và phản lực. Nước hồi HP theo concept mới.'],
  ]],
  seals: ['Ấn Thú & Sổ Phong Ấn', 'Ấn Thú trong và ngoài trận', '', [
    ['Quét ấn', [['J♣','Sẵn sàng'],['K♥','Đã dùng'],['7♦','Ô trống lần đầu'],['Nguồn mẫu','Mana']], {
      'Khay chiến đấu': ['Ba ô cho trống, sẵn sàng, đang chọn, đã dùng. Hiện lý do thiếu tài nguyên hoặc chọn sai bộ.', 'Nút quét riêng với tay bài. Xem mục tiêu, tổng chi phí, thứ tự giải quyết và hiệu ứng lẻ / bộ.'],
      'Chuỗi': ['Hiện tiến độ qua nhiều lần quét, bước kế và lý do đặt lại. Nhật ký ghi lần dùng hợp lệ.'],
      'Cấu hình nguồn': ['GDD dùng mana và giới hạn mỗi trận. Core dùng điểm riêng không hồi và giới hạn mỗi cuộc công thành.', 'Nếu chốt Core, thêm bộ đếm điểm trên khay ấn và giữ dấu đã dùng giữa các trận.'],
    }, 'Ấn lẻ, bộ cùng hành động và chuỗi qua nhiều hành động đều có trạng thái riêng.'],
    ['Thu phục & thư viện', [['Bích ♠','13'],['Cơ ♥','13'],['Rô ♦','13'],['Tép ♣','13'],['Joker','2']], {
      'Tra cứu': ['Mã, tên, họ, hạng, cấp đe dọa, nguồn gặp, điều kiện thu, hiệu ứng lẻ, bộ và chuỗi.', 'Các trạng thái chưa biết, có manh mối, đã mở săn, đã thu và đang mang.'],
      'Phần thưởng': ['Hiện ấn hoặc dấu đã sở hữu. Thu một lần, xem chi tiết hoặc chuyển sang điểm chuẩn bị.', 'Rùa Gương 7♦ dùng mô tả hồi HP của concept mới.'],
    }, 'Mở Danh mục để tra toàn bộ 54 hồ sơ và hai Joker trong tổng số đó.'],
  ]],
  route: ['Trại, thương nhân & nhiệm vụ', 'Điểm dừng trên tuyến', 'atlas-map', [
    ['Trại và tiếp tế', [['HP','39/45'],['Lương','18'],['Tinh thần','—']], {
      'Trại': ['Xem lượng hồi HP, tinh thần, thay bộ bài và ba ấn nếu được phép.', 'Hiện tài nguyên trước và sau lựa chọn, rồi quay về tuyến.'],
      'Tiếp tế': ['Hiện lượng lương, thuốc, vận tải hoặc trang bị nhận theo nội dung. Đối chiếu mức đủ trước đoạn có hao hụt.'],
    }, 'Thay đổi được ghi khi người chơi xác nhận.'],
    ['Thương nhân', [['Ví vàng','Theo hành trình']], {
      'Hàng hóa và dịch vụ': ['Mua/bán, hồi HP, bổ sung lương, tuyển quân, di vật và mở tuyến có phí.', 'Manh mối, thông tin hoặc vật phẩm mở cuộc săn có yêu cầu riêng.'],
      'Xem trước giao dịch': ['Hiện giá, ví sau mua, giới hạn và lý do thiếu tiền. Đơn vị tiền tệ và số lượng hiển thị cùng lúc.'],
    }, 'Thiếu tài nguyên thì giữ nguyên trạng thái.'],
    ['Sự kiện và săn ấn', [['Ví dụ','Caravan Bị Vây']], {
      'Sự kiện': ['Đọc lựa chọn, chi phí và phần thưởng dự kiến. Hộ tống tốn lương và có thể tăng danh tiếng, hoặc giữ lương.'],
      'Nhiệm vụ': ['Theo dõi điều tra, chạm trán, trở về nhận thưởng. Tuyến yêu cầu manh mối hoặc quyền mở được ghi rõ.'],
    }, 'Các khóa theo vương quyền, liên minh hoặc tuyến tuyển tinh anh xuất hiện tại nút liên quan.'],
  ]],
  progress: ['Thắng, thua & rút lui', 'Kết quả và bước tiếp theo', '', [
    ['Thắng trận', [['Ấn mới','7♦ Rùa Gương'],['Gặp tiếp','Vệ Binh Tro']], {
      'Nhận thưởng': ['Tách thu ấn, vàng, quân, lương, thẻ, di vật và phần thưởng nhiệm vụ nếu có. Hiện khoản đã nhận ngay khi xác nhận.'],
      'Trong thành': ['Cổng mở → đang giao tranh → giải phóng sau boss. Sang trận kế hiện HP mang theo, mana tối đa và điều kiện đổi ấn.', 'Mẫu GDD đặt điểm chuẩn bị giữa Rùa Gương và Vệ Binh Tro, hồi HP và minh họa nâng mana.'],
      'Tổng kết': ['Điểm công thành, sát thương cộng từ hệ số, số lần chồng, Tiết Chế, Overload và cách dùng ấn.'],
    }, 'Trận mẫu đang chơi kết thúc ở sa đồ sau Rùa Gương. Các màn sau được thiết kế tại đây.'],
    ['Thất bại / rút lui', [['Hệ quả','Xem trước khi xác nhận']], {
      'Trước khi rời': ['Hiện tổn thất quân/tinh thần, phí đã trả, ấn/thưởng giữ lại và tuyến quay về.'],
      'Sau khi rời': ['Cho thử lại qua công thành hoặc tìm trại/tuyến an toàn tùy trạng thái. Quân về 0 thì kết thúc hành trình, ghi bộ sưu tập.'],
    }, 'Quy tắc thử lại và tổn thất cần đối chiếu hai bản luật. Tutorial kịch bản có thể đưa về mốc phục hồi riêng.'],
  ]],
  options: ['Hướng dẫn & tùy chọn', 'Tùy chọn trong và ngoài trận', '', [
    ['Khả năng tiếp cận', [['Điều khiển','PC và cảm ứng']], {
      'Hướng dẫn': ['Theo ngữ cảnh. Dạy lập quân, lương, ý đồ, mana, Khiên, chồng, Tiết Chế, Quá tải và quét ấn theo thứ tự lần đầu gặp.'],
      'Thao tác': ['PC có kéo thả, chọn lá rồi chọn ô, và bàn phím. Mobile có chạm chọn hoặc kéo với xác nhận khoản chi.', 'Bảng thẻ, địch và nhật ký chỉ đọc. Khi đóng, trả tiêu điểm về nút mở.'],
      'Hiệu ứng và âm thanh': ['Giảm rung, chớp và chuyển động, cho bỏ qua hoạt ảnh. Giữ ký hiệu và chữ khi dùng màu hoặc giảm hiệu ứng.', 'Âm lượng nhạc, hiệu ứng và giọng nói riêng. Âm báo ghép quân, đánh, quét ấn, chờ quá tải và phản lực phân biệt.'],
    }, 'Tạm dừng có tiếp tục, tùy chọn và rút lui theo loại màn.'],
  ]],
  catalog: ['Danh mục thẻ & chủng tộc', 'Tra cứu hồ sơ', '', [
    ['Thư viện', [['Vũ khí','48 lá / 8 họ'],['Nguyên tố','8 mẫu / 4 hệ'],['Ấn Thú','54'],['Chủng tộc','60 ứng viên']], {
      'Hồ sơ binh chủng': ['Kiếm binh, Giáo binh, Khiên binh, Cung binh và Pháp binh. Tách cấp bậc, vai trò, trang bị, chỉ huy và tương thích.'],
    }, 'Danh mục dùng nội dung concept. Các chỉ số còn mở được chốt trong đặc tả luật.'],
  ]],
};

const interactionSamples = {
  'siege:0': {
    label: 'Vật liệu để ghép',
    choices: [
      ['Cự nhân núi + Khiên binh II', 'Hợp sở trường · Cự nhân núi Khiên binh II. Xem quân thực nhận, lương và điểm trong ô trước khi lập đội.'],
      ['Cự nhân núi + Pháp binh II', 'Ngoài sở trường · Vẫn ghép được. Mức hiệu quả và chi phí cụ thể đang chờ cân bằng.'],
      ['Khiên binh II + Khiên binh I', 'Không nâng bậc · Hai lá phải cùng bậc. Chọn lại lá mà không mất tài nguyên.'],
    ],
  },
  'route:2': {
    label: 'Caravan Bị Vây',
    choices: [
      ['Hộ tống caravan', 'Xem trước · Tốn lương và có thể tăng danh tiếng theo kết quả sự kiện.'],
      ['Giữ lương', 'Xem trước · Giữ lương hiện tại và bỏ qua phần thưởng hộ tống.'],
    ],
  },
  'seals:0': {
    label: 'Kiểm tra khay Ấn Thú',
    choices: [
      ['J♣ Nứt Thành', 'Sẵn sàng · Chọn địch có Khiên để xem lượng Khiên bị phá và chi phí quét.'],
      ['K♥ Nanh Tro', 'Đã dùng · Lượt dùng của ấn này đã hết theo trạng thái mẫu.'],
      ['Ô thứ ba', 'Ô trống · Trang bị ấn ở điểm chuẩn bị sau khi đã thu phục.'],
    ],
  },
  'progress:0': {
    label: 'Sau trận Rùa Gương',
    choices: [
      ['Thu 7♦', 'Ghi Rùa Gương vào Sổ Phong Ấn. Nếu đã sở hữu, hiển thị dấu đã thu.'],
      ['Chuẩn bị trận kế', 'Chạm trán Vệ Binh Tro · Kiểm tra HP, mana tối đa và ba ô ấn trước khi vào trận.'],
    ],
  },
  'combat:1': {
    label: 'Dự tính đòn mẫu',
    choices: [
      ['Lửa 6/10', 'Đủ điều kiện tuyệt kỹ · 4 mana, 21 sát thương trước Khiên, 3 Thiêu Đốt theo GDD.'],
      ['Lửa 4/10', 'Chưa đủ ngưỡng tuyệt kỹ · Vẫn chốt được chồng thường, 14 sát thương và 2 Thiêu Đốt theo GDD.'],
      ['Còn 3 mana', 'Chưa đủ mana · Giữ nguyên chồng, tài nguyên và mục tiêu để người chơi chỉnh.'],
    ],
  },
};

const index = document.querySelector('#screen-index');
const screen = document.querySelector('#screen');
const catalog = document.querySelector('#catalog');
const catalogType = document.querySelector('#catalog-type');
const catalogQuery = document.querySelector('#catalog-query');

function create(tag, text, className) {
  const element = document.createElement(tag);
  if (text) element.textContent = text;
  if (className) element.className = className;
  return element;
}

Object.entries(layouts).forEach(([id, [label]]) => {
  const link = create('a', label);
  link.href = '#' + id;
  index.append(link);
});
Object.keys(uiCatalog).forEach((kind) => catalogType.append(new Option(kind, kind)));

function normalize(text) {
  return text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replaceAll('đ', 'd');
}

function showCatalog() {
  const records = uiCatalog[catalogType.value];
  const query = normalize(catalogQuery.value.trim());
  const matches = records.filter((record) => normalize(record.slice(0, 3).join(' ')).includes(query));
  document.querySelector('#catalog-count').textContent = matches.length + ' / ' + records.length + ' hồ sơ';
  document.querySelector('#catalog-list').replaceChildren(...matches.map(([title, family, kind, description]) => {
    const card = create('article');
    card.append(create('h3', title), create('small', family + ' · ' + kind), create('p', description));
    return card;
  }));
}

function buildSample({ label, choices }) {
  const box = create('section', '', 'interaction-sample');
  const row = create('div', '', 'examples');
  const feedback = create('output', choices[0][1]);
  feedback.setAttribute('aria-live', 'polite');
  choices.forEach(([name, preview], position) => {
    const choice = create('button', name);
    choice.type = 'button';
    choice.setAttribute('aria-pressed', String(position === 0));
    choice.addEventListener('click', () => {
      [...row.children].forEach((button) => button.setAttribute('aria-pressed', String(button === choice)));
      feedback.textContent = preview;
    });
    row.append(choice);
  });
  box.append(create('h3', label), row, feedback);
  return box;
}

function showLayout(example = 0) {
  const hash = location.hash.slice(1);
  const key = Object.hasOwn(layouts, hash) ? hash : 'overview';
  const [label, title, art, examples] = layouts[key];
  const [, readouts, groups, outcome] = examples[example];
  const stage = create('section', '', 'atlas-stage' + (art ? ' ' + art : ''));
  const head = create('header');
  head.append(create('p', label, 'eyebrow'), create('h2', title));
  stage.append(head);
  if (examples.length > 1) {
    const picker = create('div', '', 'examples');
    examples.forEach(([name], position) => {
      const control = create('button', name);
      control.type = 'button';
      control.setAttribute('aria-pressed', String(example === position));
      control.addEventListener('click', () => {
        showLayout(position);
        screen.querySelector('.examples').children[position].focus();
      });
      picker.append(control);
    });
    stage.append(picker);
  }
  const stats = create('dl', '', 'readouts');
  readouts.forEach(([name, value]) => {
    const stat = create('div');
    stat.append(create('dt', name), create('dd', value));
    stats.append(stat);
  });
  const zones = create('div', '', 'atlas-zones');
  Object.entries(groups).forEach(([name, rows]) => {
    const zone = create('section', '', 'atlas-zone');
    const list = create('ul');
    list.append(...rows.map((row) => create('li', row)));
    zone.append(create('h3', name), list);
    zones.append(zone);
  });
  stage.append(stats);
  const sample = interactionSamples[key + ':' + example];
  if (sample) stage.append(buildSample(sample));
  stage.append(zones, create('p', outcome, 'atlas-outcome'));
  screen.replaceChildren(stage);
  [...index.children].forEach((link) => {
    if (link.hash === '#' + key) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  catalog.hidden = key !== 'catalog';
  if (!catalog.hidden) showCatalog();
}

catalogType.addEventListener('change', showCatalog);
catalogQuery.addEventListener('input', showCatalog);
window.addEventListener('hashchange', () => showLayout());
showLayout();
