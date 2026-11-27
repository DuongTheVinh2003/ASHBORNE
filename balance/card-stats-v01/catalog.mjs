// Numeric profiles are authored proposals. Names, specialties and semantic text are read from project sources.
export const classes = [
  {id:'sword',name:'Kiếm binh',hp:1,attack:1,defense:1,speed:1,range:0.2,move:1.6,radius:0.55,cost:1,locked:'attack',behavior:'Đánh gần; ưu tiên đối thủ tiếp xúc, sau đó mục tiêu gần có đường tới.'},
  {id:'spear',name:'Giáo binh',hp:1,attack:0.95,defense:1,speed:0.95,range:0.95,move:1.6,radius:0.55,cost:1.05,locked:'attack',behavior:'Đánh gần tầm vươn; hỗ trợ sau Khiên khi khoảng cách thực cho phép.'},
  {id:'shield',name:'Khiên binh',hp:1.35,attack:0.6,defense:1.8,speed:0.85,range:0.15,move:1.35,radius:0.62,cost:1,locked:'defense',behavior:'Giữ tiếp xúc và đánh chặn tại chỗ; không che chắn cả bàn.'},
  {id:'archer',name:'Cung binh',hp:0.65,attack:1.2,defense:0.35,speed:0.8,range:4.8,move:1.4,radius:0.5,cost:1.2,locked:'attack',behavior:'Bắn trong tầm, tiến khi chưa vào tầm; không tự xuyên quân hoặc đổi tầm theo chủng.'},
  {id:'mage',name:'Pháp binh',hp:0.55,attack:1.4,defense:0.2,speed:0.6,range:4.3,move:1.2,radius:0.5,cost:1.3,locked:'attack',behavior:'Mẫu nền đơn mục tiêu. Biến thể vùng là hồ sơ riêng, không tự cấp AoE cho mọi Pháp.'}
];

// HP / ATK / DEF / SPD multipliers, ordered by source race ID 01..60.
export const raceProfiles = [
 [1,1,1,1],[0.85,1.08,0.85,1.08],[0.8,1.02,0.75,1.2],[0.8,1.15,0.7,1.15],[1.15,1.02,1.35,0.78],
 [1.2,1.2,0.85,0.9],[0.62,0.8,0.55,1.25],[1.05,1.02,1.15,0.98],[0.65,0.85,0.65,1.25],[0.65,0.98,0.65,1.12],
 [1.8,1.45,1.5,0.55],[1.6,1.35,1.15,0.62],[1.5,1.15,1.05,0.7],[1.65,1.5,1.2,0.58],[1.3,1.35,1.05,0.85],
 [1.25,1.25,1.05,0.95],[1.4,1.18,1.2,0.8],[1,1.12,0.8,1.2],[0.72,1.02,0.65,1.35],[1.18,1.18,1.1,0.95],
 [1.4,1.15,1.2,0.75],[1.25,1.1,1.15,0.88],[0.62,0.85,0.5,1.3],[1.05,1.12,0.8,1.12],[1.08,1.02,1.25,0.88],
 [0.6,0.82,0.65,1.2],[1.2,1.25,1.2,0.92],[1.35,0.8,1.8,0.6],[0.72,0.95,0.6,1.35],[1,0.95,1.35,1.1],
 [0.82,1.05,0.75,1.18],[1.2,1.05,0.9,1.15],[0.85,0.95,0.75,1.12],[0.92,1.02,0.9,1.05],[1.15,1.12,1.1,0.95],
 [1.08,1.18,0.8,1.05],[0.72,1.08,0.6,1.3],[0.78,1.12,0.65,1.2],[0.9,1.18,0.8,1.22],[0.9,1.3,0.65,1.1],
 [1.2,1.15,1.2,0.9],[0.5,0.95,0.4,1.45],[0.9,1.1,0.85,0.95],[1.8,1.12,1.6,0.5],[0.75,1.15,0.6,1.1],
 [1.1,0.9,1,0.8],[0.75,0.9,0.9,1],[1.35,0.75,0.9,0.55],[0.95,1.12,0.7,1.15],[0.95,1.22,0.9,1.15],
 [0.7,1.1,0.55,1.15],[1.25,1,1.2,0.65],[1.1,1.12,1.2,0.95],[1.65,1.05,1.8,0.5],[1.05,1.08,1.25,0.92],
 [1.35,1.05,1.5,0.7],[0.95,1.25,0.9,1.05],[1.15,1.15,1.3,1],[1.15,1.35,1,1.05],[1.35,0.7,0.65,0.65]
];

const p=(key,value,unit='điểm',scale='effect')=>({key,value,unit,scale});
const fixed=(key,value,unit='lần')=>p(key,value,unit,'fixed');
const duration=(key,value)=>fixed(key,value,'lượt');
// damage/shield/heal are normalized to configurable anchors (8/9/6).
const w=(mana,damage,shield,heal,params,rule,target='one')=>({mana,damage,shield,heal,params,rule,target});
export const weapons = [
 w(2,18,0,0,[],'Gây {damage} sát thương.'),
 w(2,10,0,0,[],'Gây {damage} sát thương lên từng địch đang giao tranh.','all'),
 w(1,6,0,0,[p('bonus',5)],'Gây {damage}. Nếu là hành động đầu tiên của lượt, đòn Đại Kiếm gây sát thương kế tiếp cùng lượt +{bonus}.'),
 w(2,22,0,0,[fixed('extraCost',1,'mana')],'Gây {damage}; lá Đại Kiếm kế tiếp cùng lượt tốn thêm {extraCost} mana.'),
 w(1,0,0,0,[p('bonus',10)],'Nếu từ lúc đặt thế đến hết lượt không gây thêm sát thương, đòn Đại Kiếm đầu lượt sau +{bonus}.'),
 w(1,0,0,0,[p('bonus',6),fixed('threshold',2,'mana'),duration('turns',2),fixed('triggers',1)],'Trong {turns} lượt của bạn kể cả lượt đặt: hành động Đại Kiếm thực trả ít nhất {threshold} mana +{bonus} sát thương, tối đa {triggers} lần/lượt.'),

 w(1,9,0,0,[],'Gây {damage} sát thương.'),
 w(1,4,4,0,[],'Gây {damage}, nhận {shield} Khiên.'),
 w(1,5,0,0,[p('reduction',4)],'Gây {damage}; đòn trực tiếp kế tiếp của mục tiêu giảm {reduction}, hết hạn sau lượt địch kế tiếp.'),
 w(1,5,0,0,[p('bonus',5)],'Gây {damage}; đặt dấu tới hết lượt sau của bạn. Phát Cung tiếp theo trúng chính mục tiêu tiêu dấu và +{bonus}; không kích bởi đòn đặt dấu.'),
 w(1,0,0,0,[p('bonus',9)],'Chọn một địch. Nếu chưa gây sát thương lên địch khác từ khi đặt tới đầu lượt sau, phát Cung đầu tiên trúng nó trong lượt sau +{bonus}.'),
 w(1,0,0,0,[fixed('discount',1,'mana'),duration('turns',2)],'Hạ mục tiêu đã chọn bằng Cung trong {turns} lượt của bạn: lá Cung gây sát thương kế tiếp trong trận giảm {discount} mana, sàn 0, dùng một lần.'),

 w(1,9,0,0,[],'Gây {damage} sát thương.'),
 w(1,4,5,0,[],'Gây {damage}, nhận {shield} Khiên.'),
 w(2,5,0,0,[p('enemyTurns',1,'lượt địch','duration')],'Gây {damage}; Giữ Khoảng Cách tới hết {enemyTurns} lượt địch kế tiếp, hủy một hành động cận chiến nhắm bạn rồi tiêu trạng thái và tạo Hở Thế tới hết lượt bạn sau đó.'),
 w(1,7,0,0,[p('bonus',9)],'Gây {damage}; nếu chính mục tiêu Hở Thế, tiêu dấu và +{bonus}.'),
 w(1,0,0,0,[p('bonus',6)],'Tới hết lượt địch kế tiếp, nếu Giữ Khoảng Cách chặn được đòn thì Đâm Trả tiêu đúng Hở Thế đó +{bonus}.'),
 w(1,0,0,0,[p('enemyTurns',1,'lượt địch','duration')],'Chỉ dùng lên địch có ý đồ cận chiến: đặt Giữ Khoảng Cách tới hết {enemyTurns} lượt địch kế tiếp; hủy một hành động, tạo Hở Thế.'),

 w(1,8,0,0,[],'Gây {damage}; một hành động vũ khí, không nhân số kích hoạt theo hai vũ khí.'),
 w(1,4,4,0,[],'Gây {damage}, nhận {shield} Khiên.'),
 w(1,4,0,0,[p('bonus',5)],'Gây {damage}; đặt Sơ Hở tới hết lượt. Lá Vũ Khí Đôi kế tiếp gây sát thương lên đúng địch tiêu dấu và +{bonus}; đòn đặt dấu không tự tiêu.'),
 w(1,7,0,0,[p('reduction',4)],'Gây {damage}; nếu đã tiêu Sơ Hở trên chính địch trong lượt trước khi chơi lá này, đòn trực tiếp kế tiếp của nó giảm {reduction}, tới hết lượt địch kế tiếp.'),
 w(1,0,0,0,[p('bonus',8)],'Nếu kết lượt mà chưa gây thêm sát thương từ khi chơi, lá Vũ Khí Đôi gây sát thương đầu lượt sau +{bonus}.'),
 w(1,0,0,0,[fixed('discount',1,'mana'),duration('turns',2)],'Trong {turns} lượt của bạn kể cả lượt đặt, lần đầu mỗi lượt tiêu Sơ Hở: lá Vũ Khí Đôi kế tiếp đánh đúng địch đó cùng lượt giảm {discount} mana, sàn 0.'),

 w(1,8,0,0,[],'Gây {damage} sát thương.'),
 w(1,0,9,0,[],'Nhận {shield} Khiên.','self'),
 w(1,0,5,0,[p('reduction',3)],'Nhận {shield} Khiên; đòn trực tiếp kế tiếp nhắm bạn giảm {reduction}, tới hết lượt địch kế tiếp.','self'),
 w(1,7,0,0,[p('bonus',7)],'Gây {damage}; +{bonus} nếu chính mục tiêu đã gây giảm Khiên của bạn ở lượt địch vừa qua.'),
 w(1,0,0,0,[p('bonus',6)],'Nếu Khiên hấp thụ trọn một đòn trực tiếp ở lượt địch kế tiếp, lá Kiếm và Khiên gây sát thương đầu lượt bạn sau đó +{bonus}.'),
 w(1,0,0,0,[p('reduction',4),duration('enemyTurns',2),fixed('triggers',1)],'Trong {enemyTurns} lượt địch: nếu còn Khiên sau đòn trực tiếp đầu tiên, đòn trực tiếp kế tiếp cùng lượt giảm {reduction}; tối đa {triggers} lần/lượt.','self'),

 w(1,8,0,0,[],'Gây {damage} sát thương.'),
 w(1,0,4,2,[],'Hồi {heal} HP, nhận {shield} Khiên.','self'),
 w(1,5,0,0,[p('bonus',6)],'Gây {damage}; dấu tồn tại tới hết lượt bạn sau. Khi Trượng đánh lại chính mục tiêu ở lượt sau, tiêu dấu và +{bonus}.'),
 w(1,0,4,0,[fixed('discount',1,'mana')],'Nhận {shield} Khiên; lá Trượng đầu tiên lượt bạn sau giảm {discount} mana, sàn 0.','self'),
 w(1,0,0,0,[fixed('unspent',1,'mana'),p('directBonus',5)],'Nếu kết lượt còn ít nhất {unspent} mana chưa dùng, mỗi chỉ số trực tiếp dương của lá Trượng đầu lượt sau +{directBonus}. Mana dư không chuyển lượt.'),
 w(1,0,0,0,[p('bonus',5),duration('turns',2)],'Trong {turns} lượt của bạn kể cả lượt đặt: sau một lá Trượng có hiệu ứng hồi HP, lá Trượng gây sát thương đầu tiên sau đó trong cùng lượt +{bonus}; tối đa một lần/lượt.'),

 w(2,18,0,0,[],'Gây {damage} sát thương.'),
 w(2,10,0,0,[],'Gây {damage} sát thương lên từng địch đang giao tranh.','all'),
 w(1,7,0,0,[p('bonus',6),fixed('hpThreshold',0.4,'tỷ lệ HP')],'Gây {damage}; +{bonus} nếu HP mục tiêu trước đòn nhỏ hơn {hpThreshold} HP tối đa.'),
 w(1,7,0,0,[p('killHeal',3,'HP')],'Gây {damage}; nếu chính hành động này hạ mục tiêu, hồi {killHeal} HP.'),
 w(1,0,0,0,[p('bonus',4),fixed('incomingExtra',2,'sát thương'),fixed('hpThreshold',0.5,'tỷ lệ HP'),duration('turns',2)],'Trong {turns} lượt của bạn kể cả lượt đặt và các lượt địch xen kẽ: khi HP trước hành động dưới {hpThreshold}, lá Rìu +{bonus} sát thương và mỗi hành động trực tiếp địch +{incomingExtra} sát thương tới bạn.'),
 w(1,0,0,0,[p('bonus',9)],'Nếu có hạ địch bằng Rìu trong trận này, đòn Rìu đầu trận kế tiếp cùng cuộc công thành +{bonus}. Một dấu chờ, không cộng dồn; không có trận sau thì mất.'),

 w(2,18,0,0,[],'Gây {damage} sát thương.'),
 w(2,10,0,0,[],'Gây {damage} sát thương lên từng địch đang giao tranh.','all'),
 w(1,6,0,0,[p('breakShield',6,'Khiên')],'Phá tối đa {breakShield} Khiên mục tiêu trước, rồi gây {damage} sát thương.'),
 w(1,7,0,0,[p('bonus',7)],'Gây {damage}; +{bonus} nếu Khiên dương của chính mục tiêu đã bị phá về 0 trước hành động này trong lượt.'),
 w(1,0,0,0,[p('bonus',9),duration('turns',2)],'Trong {turns} lượt của bạn kể cả lượt đặt: lần kế tiếp đòn bạn phá Khiên dương của mục tiêu về 0, tiêu Vết Rạn; đòn trực tiếp tiếp theo lên nó +{bonus}, tới hết lượt bạn kế tiếp.'),
 w(1,0,0,0,[p('bonus',11)],'Nếu kết lượt chưa gây sát thương lên địch trong cả lượt đó, lá Búa/Chùy gây sát thương đầu lượt sau +{bonus}.')
];

// Seal scalars: anchor × rank power × coefficient. Fixed integers and percentages stay discrete.
const s=(key,anchor,coefficient=1)=>({key,anchor,coefficient,unit:anchor==='sealHeal'?'HP':anchor==='sealShield'?'Khiên':'sát thương',scale:'rank'});
const f=(key,value,unit='lần')=>({key,value,unit,scale:'fixed'});
const seal=(params,rule,extra={})=>({params,rule,...extra});
export const seals = [
 // Spades
 seal([f('exchange',1),f('turns',1,'lượt')],'Khai Dạng {turns} lượt hiện tại. Sau hành động vũ khí đầu tiên, có thể đưa {exchange} lá trên tay vào chồng bỏ và rút lá trên cùng, một lần.'),
 seal([f('look',1,'lá')],'Xem {look} lá đầu chồng rút; chọn giữ hoặc đưa xuống đáy, không rút thêm.'),
 seal([s('reduction','sealDamage',0.75)],'Đòn trực tiếp kế tiếp của địch đã chọn giảm {reduction} sát thương, tới hết lượt địch kế tiếp.'),
 seal([s('damage','sealDamage'),f('recover',1,'lá')],'Gây {damage}; được đưa {recover} lá Trực tiếp vừa chơi trong lượt này từ chồng bỏ lên đầu chồng rút.'),
 seal([f('draw',1,'lá'),f('bottom',1,'lá')],'Rút {draw} rồi đưa {bottom} lá trên tay xuống đáy chồng rút. Được dùng khi chồng rút hết nếu chồng bỏ còn bài để xáo.'),
 seal([f('discount',1,'mana')],'Chọn một lá vũ khí trên tay đưa lên đầu chồng rút. Lần chơi đầu tiên của đúng bản sao đó ở lượt sau giảm {discount} mana, sàn 0; hết lượt đó mất giảm phí.'),
 seal([f('look',3,'lá')],'Xem tối đa {look} lá đầu chồng rút, sắp lại số lá thực có; không xem chồng bỏ.'),
 seal([f('bottomWindow',5,'lá'),f('choose',1,'lá')],'Chọn {choose} lá vũ khí trong {bottomWindow} lá cuối chồng rút đưa lên đầu. Nếu không có vũ khí hợp lệ thì không dùng được.'),
 seal([f('turns',2,'lượt'),f('draw',1,'lá')],'Trong {turns} lượt của bạn kể cả hiện tại: lần đầu mỗi lượt chơi hết vũ khí trên tay sau khi thực sự chơi ít nhất một vũ khí, rút {draw} lá; không kích từ tay vốn không có vũ khí.'),
 seal([f('delay',1,'lượt địch')],'Chọn một địch có ý đồ kỹ năng có thể trì hoãn. Hoãn chính kỹ năng đó {delay} lượt địch; lượt hiện tại nó chờ, kỹ năng thực hiện ở lượt địch sau. Không xóa chiêu hoặc lặp hoãn bằng cùng ấn.'),
 seal([f('look',3,'lá'),f('choose',1,'lá'),f('discount',1,'mana')],'Chọn {choose} lá vũ khí trong tối đa {look} lá đầu, đưa vào tay. Chơi nó ngay trong lượt này giảm {discount} mana, sàn 0; các lá còn lại giữ thứ tự.'),
 seal([f('turns',2,'lượt'),f('look',3,'lá'),f('exchange',1,'lá')],'Ở hai lượt bạn kế tiếp, sau lần rút đầu tiên mỗi lượt, có thể đổi {exchange} lá trên tay với một lá trong tối đa {look} lá đầu chồng rút; một lần/lượt.'),
 seal([f('choose',5,'lá'),f('discount',1,'mana')],'Chọn tối đa {choose} bản sao từ chồng rút hiện tại, xếp lên đầu cho lượt sau. Vẫn rút theo số rút thông thường; vũ khí đầu tiên được rút từ nhóm này chơi trong lượt đó giảm {discount} mana. Không chọn từ chồng bỏ.'),
 // Hearts
 seal([s('burst','sealDamage',0.75),f('turns',1,'lượt')],'Khai Dạng lượt hiện tại: vũ khí đầu tiên gieo một than chờ, vũ khí kế tiếp đánh đúng mục tiêu trong lượt làm bùng {burst}, tối đa một lần; hết lượt xóa than.'),
 seal([s('bonus','sealDamage')],'Vũ khí gây sát thương kế tiếp trong lượt +{bonus} sát thương; một lần cho cả hành động.'),
 seal([s('damage','sealDamage'),s('bonus','sealDamage',0.6)],'Gây {damage}; +{bonus} nếu chính mục tiêu đã mất HP trong lượt này trước khi mở ấn.'),
 seal([s('damage','sealDamage',0.65),f('targets',2,'địch')],'Gây {damage} lên tối đa {targets} địch khác nhau; không dồn hai lần lên một địch.'),
 seal([s('burst','sealDamage',1.25)],'Gieo than lên một địch tới hết lượt bạn kế tiếp; vũ khí tiếp theo trúng nó làm bùng {burst} rồi tiêu than.'),
 seal([s('damage','sealDamage',0.8),s('burn','sealDamage',0.35),f('ticks',2,'lượt địch')],'Gây {damage}, Thiêu Đốt {burn} mỗi đầu lượt địch trong {ticks} lượt. Nếu chính tick đầu tiên hạ nó, gây {burn} lên một địch còn sống, không tự tạo thêm Thiêu Đốt.'),
 seal([s('burst','sealDamage',0.65),f('turns',2,'lượt')],'Trong {turns} lượt của bạn kể cả hiện tại, lần đầu mỗi lượt vũ khí đánh trúng địch đã đánh dấu, gây thêm {burst}; không tự kích bởi sát thương phụ.'),
 seal([s('burst','sealDamage',0.6),f('turns',2,'lượt')],'Rắc tro lên toàn bộ địch hiện có trong {turns} lượt của bạn kể cả hiện tại. Lần đầu một địch có tro nhận Thiêu Đốt, gây {burst} lên mỗi địch khác còn tro rồi xóa toàn bộ tro.'),
 seal([s('increase','sealDamage',0.4),f('turns',2,'lượt')],'Trong {turns} lượt bạn kể cả hiện tại, lần đầu mỗi lượt vũ khí đánh trúng địch có Thiêu Đốt: chỉ tick Thiêu Đốt kế tiếp trên nó +{increase}; sau tick xóa tăng, không cộng vĩnh viễn.'),
 seal([s('burst','sealDamage',0.4),f('segments',3,'đốt')],'Gieo {segments} đốt than tới hết lượt hiện tại. Mỗi bản sao vũ khí riêng đánh trúng đúng địch làm nổ một đốt gây {burst}; mỗi bản sao tối đa một lần.'),
 seal([s('damage','sealDamage',1.25)],'Chỉ dùng lên địch có Thiêu Đốt: gây {damage}; nếu hạ, chuyển nguyên sát thương mỗi tick và số tick còn lại sang một địch. Không cộng thêm tick, không chuyển than khác.'),
 seal([s('budDamage','sealDamage',0.75),f('turns',2,'lượt địch'),f('buds',2,'nụ')],'Trong {turns} lượt địch kế tiếp, lần đầu Thiêu Đốt thực gây sát thương mỗi lượt tạo một nụ, tối đa {buds}. Cuối lượt địch thứ hai, mỗi nụ gây {budDamage} lên một địch đang có Thiêu Đốt được chọn; không còn địch cháy thì nụ mất.'),
 seal([s('damage','sealDamage'),s('burst','sealDamage',0.35),f('turns',3,'lượt địch')],'Gây {damage}, gieo than vương ấn trong {turns} lượt địch. Nếu kẻ mang than bị hạ trước hết hạn, chuyển sang một địch chưa nhận rồi bùng {burst}; mỗi địch nhận một lần, thời hạn không nạp lại.'),
 // Diamonds
 seal([s('heal','sealHeal',0.5),s('bonus','sealHeal',0.5)],'Khai Dạng lượt hiện tại: vũ khí gây sát thương đầu tiên hồi {heal} HP sau đòn; +{bonus} nếu bạn đã mất HP trong lượt địch vừa qua, một lần.'),
 seal([s('heal','sealHeal')],'Hồi {heal} HP ngay.'),
 seal([s('heal','sealHeal',1.25)],'Hồi {heal} HP cuối lượt người chơi hiện tại; không cứu được nhân vật đã về 0 HP trước đó.'),
 seal([s('heal','sealHeal',1.25)],'Vũ khí gây sát thương tiếp theo trúng địch trong lượt hiện tại hồi {heal} HP sau đòn, một lần.'),
 seal([s('heal','sealHeal'),s('bonus','sealHeal',0.5),f('hpThreshold',0.4,'tỷ lệ HP')],'Hồi {heal}; thêm {bonus} nếu HP trước hồi dưới {hpThreshold} HP tối đa.'),
 seal([s('heal','sealHeal',0.6),f('ticks',2,'lượt')],'Đầu {ticks} lượt bạn kế tiếp, hồi {heal} HP mỗi lần.'),
 seal([f('ratio',0.5,'tỷ lệ'),s('cap','sealHeal',1.1)],'Ghi HP hiện tại H. Đầu lượt bạn sau hồi MIN({cap}, FLOOR(MAX(0,H−HP hiện tại)×{ratio})); chỉ tính chênh lệch ròng, không tính tổng sát thương.'),
 seal([s('damage','sealDamage'),f('ratio',0.5,'tỷ lệ'),s('cap','sealHeal')],'Gây {damage}; hồi MIN({cap}, FLOOR(HP thực lấy khỏi mục tiêu×{ratio})), sát thương vào Khiên và sát thương thừa không được tính.'),
 seal([s('heal','sealHeal'),f('ratio',0.5,'tỷ lệ'),s('reserveCap','sealHeal',0.6),f('turns',2,'lượt địch')],'Hồi {heal} ngay. Giữ MIN({reserveCap}, FLOOR(phần hồi dư×{ratio})) HP dự trữ tới hết {turns} lượt địch kế tiếp; sau lần mất HP kế tiếp hồi phần dự trữ một lần, không hồi nếu đã chết.'),
 seal([f('ratio',0.75,'tỷ lệ'),s('cap','sealHeal')],'Ghi lượng HP thực mất từ hành động trực tiếp đầu tiên gây mất HP trong lượt địch tới. Đầu lượt bạn sau hồi MIN({cap}, FLOOR(lượng ghi×{ratio})); không tính DoT hoặc Khiên.'),
 seal([s('heal','sealHeal',0.65),s('tickHeal','sealHeal',0.35),f('ticks',2,'lượt')],'Hồi {heal} ngay và {tickHeal} ở đầu mỗi một trong {ticks} lượt bạn kế tiếp.'),
 seal([s('heal','sealHeal',0.6),s('bonusHeal','sealHeal',0.4),f('cleanse',1,'debuff')],'Hồi {heal}, gột {cleanse} debuff có thể gột tự chọn. Nếu thực sự gột thành công, đầu lượt bạn sau hồi thêm {bonusHeal}; không gột suy yếu/khóa hệ chiến dịch.'),
 seal([f('ratio',0.6,'tỷ lệ'),s('cap','sealHeal',1.2),f('enemyTurns',2,'lượt địch')],'Từ khi mở ấn tới hết {enemyTurns} lượt địch kế tiếp, cộng HP thực mất. Đầu lượt bạn sau đó hồi MIN({cap}, FLOOR(tổng đã ghi×{ratio})); không cứu chết và không giảm sổ ghi khi hồi xen giữa.'),
 // Clubs
 seal([s('bonus','sealShield',0.7)],'Khai Dạng lượt hiện tại: vũ khí đầu tiên tạo Khiên được thêm {bonus} Khiên, một lần.'),
 seal([s('shield','sealShield',1.1)],'Nhận {shield} Khiên ngay.'),
 seal([s('shield','sealShield',1.2)],'Chỉ dùng khi có ít nhất một địch công bố cận chiến nhắm bạn: nhận {shield} Khiên.'),
 seal([s('breakShield','sealShield',1.3)],'Phá tối đa {breakShield} Khiên của một địch; không gây sát thương HP.'),
 seal([s('shield','sealShield'),f('ratio',0.5,'tỷ lệ'),s('cap','sealShield',0.6)],'Nhận {shield} Khiên. Lần chuyển lượt kế tiếp giữ MIN({cap}, FLOOR(Khiên còn riêng từ lớp này×{ratio})); lớp đã vỡ không tự hồi.'),
 seal([s('shield','sealShield',1.3),s('rebuild','sealShield',0.4)],'Nhận {shield} Khiên. Tới hết lượt địch kế tiếp, lần đầu Khiên dương bị đòn địch phá về 0: sau khi toàn đòn giải quyết, nhận lại {rebuild}; không chắn ngược sát thương của đòn vừa đánh.'),
 seal([s('shield','sealShield'),f('ratio',0.5,'tỷ lệ'),s('cap','sealShield',0.6),f('transitions',2,'lần chuyển')],'Nhận {shield} Khiên; qua {transitions} lần chuyển lượt kế tiếp, giữ MIN({cap}, FLOOR(Khiên dư×{ratio})). Khiên vỡ không tự hồi.'),
 seal([s('damage','sealDamage',1.25),f('turns',2,'lượt địch')],'Đánh dấu một địch trong {turns} lượt địch. Lần kế tiếp Khiên dương của nó bị phá về 0, gây {damage} sát thương rồi tiêu dấu; không kích khi vốn không có Khiên.'),
 seal([s('reduction','sealShield',0.6),f('turns',2,'lượt địch')],'Trong {turns} lượt địch kế tiếp, mỗi hành động mục tiêu tự tạo Khiên giảm {reduction} Khiên, sàn 0; không trừ Khiên hiện có.'),
 seal([s('breakShield','sealShield'),s('cap','sealShield')],'Bóc tối đa {breakShield} Khiên địch; nhận MIN({cap}, Khiên thực bóc được). Không có Khiên thì nhận 0.'),
 seal([s('breakShield','sealShield'),f('blockedActions',1,'hành động')],'Phá tối đa {breakShield} Khiên. Nếu Khiên dương bị phá sạch, {blockedActions} hành động kế tiếp của địch không tạo được Khiên. Không gây sát thương HP.'),
 seal([s('breakShield','sealShield',0.65),s('rebuild','sealShield',0.6),f('turns',2,'lượt địch')],'Trong {turns} lượt địch kế tiếp, lần đầu mỗi lượt Khiên dương của bạn bị phá sạch bởi đòn trực tiếp: sau đòn, phá {breakShield} Khiên kẻ ra đòn và nhận {rebuild} Khiên; tối đa một lần/lượt, không tự kích từ Khiên mới.'),
 seal([s('shield','sealShield',1.1),f('ratio',0.6,'tỷ lệ'),s('carryCap','sealShield',0.65),s('rebuild','sealShield',0.45),f('transitions',2,'lần chuyển')],'Nhận {shield} Khiên. Trong {transitions} lượt địch và lần chuyển lượt kế tiếp: giữ MIN({carryCap}, FLOOR(Khiên dư×{ratio})); lần đầu Khiên dương vỡ do đòn địch trong toàn thời hạn, sau đòn nhận lại {rebuild}.')
];
export const jokers = [
 seal([f('copies',1)],'Chọn một Ấn khác không phải Joker đã dùng lẻ trong chính trận hiện tại và có mục tiêu hợp lệ; thực hiện lại năng lực lẻ với thông số gốc một lần. Không hoàn lượt Ấn, không sao chép combo, Joker, phần thưởng hay thao tác sao chép. Mọi dấu và thời hạn của lần sao chép độc lập; quy tắc không cộng dồn vẫn áp dụng.'),
 seal([f('targets',1,'địch')],'Chọn một địch, xóa toàn bộ buff đang có và có thể giải trừ. Không xóa nội tại, giai đoạn boss, ý đồ gốc hoặc trạng thái chiến dịch. Ý đồ đã công bố giữ hành động, chỉ tính lại phần được các buff vừa xóa tăng cường.')
];

export const elements = [
 {id:'fire',name:'Tàn Lửa',family:'Lửa',quality:'Thường',mana:1,params:[p('bonus',4,'sát thương','damage')],rule:'Vũ khí gây sát thương kế tiếp trong lượt +{bonus}; dùng lẻ đặt chờ, gắn đòn áp sau khi kiểm tra công thức. Mỗi hành động chỉ được một lần, không nhân theo số mục tiêu.'},
 {id:'ember',name:'Than Truyền',family:'Lửa',quality:'Cao',mana:1,params:[p('burst',4,'sát thương','damage'),duration('turns',3)],rule:'Vũ khí gây sát thương kế tiếp trong lượt gieo than {turns} lượt địch. Mỗi lượt bạn, lần đầu vũ khí tiếp theo trúng địch có than gây {burst}. Nếu chính cú bùng hạ, chuyển than với thời hạn còn lại sang một địch; không bùng tiếp ngay.'},
 {id:'water',name:'Mạch Nguồn',family:'Nước',quality:'Thường',mana:2,params:[p('heal',6,'HP','heal')],rule:'Hồi {heal} HP; khi gắn đòn thì hồi sau hành động. Một lần/chồng hợp lệ.'},
 {id:'undercurrent',name:'Mạch Ngầm',family:'Nước',quality:'Cao',mana:2,params:[fixed('ratio',0.5,'tỷ lệ'),p('cap',4,'HP','heal'),duration('ticks',2)],rule:'Đầu {ticks} lượt bạn kế tiếp hồi MIN({cap}, FLOOR(HP thực mất trong lượt địch vừa qua×{ratio})). HP mất được cộng trước các lần hồi; không tính Khiên hoặc tự mất HP trong lượt bạn.'},
 {id:'wind',name:'Hơi Gió',family:'Gió',quality:'Thường',mana:1,params:[fixed('look',1,'lá')],rule:'Xem {look} lá đầu chồng rút, giữ hoặc đưa xuống đáy; không rút thêm, không tạo lá mới.'},
 {id:'returnWind',name:'Gió Hồi',family:'Gió',quality:'Cao',mana:1,params:[duration('turns',2),fixed('cards',1,'lá')],rule:'Trong {turns} lượt bạn kể cả hiện tại, trước khi bỏ cuối lượt, được đưa {cards} lá vũ khí chưa dùng lên đầu chồng rút. Lá chiếm một suất rút bình thường lượt sau.'},
 {id:'earth',name:'Vỏ Đá',family:'Đất',quality:'Thường',mana:1,params:[p('shield',9,'Khiên','shield')],rule:'Nhận {shield} Khiên; khi gắn đòn nhận sau hành động, một lần/chồng.'},
 {id:'foundation',name:'Nền Đá',family:'Đất',quality:'Cao',mana:1,params:[fixed('ratio',0.5,'tỷ lệ'),p('cap',8,'Khiên','shield'),fixed('transitions',3,'lần chuyển')],rule:'Qua {transitions} lần chuyển lượt kế tiếp, giữ MIN({cap}, FLOOR(Khiên dư×{ratio})). Khiên đã vỡ không tự hồi. Nhiều nguồn giữ Khiên chỉ chọn kết quả cao nhất.'}
];
