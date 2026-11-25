"""Typography specimen for the softer Ashborne direction. Dependency: Pillow."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent
im = Image.new('RGB', (1800, 1440), '#101c2a')
d = ImageDraw.Draw(im)
ivory, gold, muted, edge = '#eee6d7', '#d9c096', '#91a5af', '#3b5363'


def f(style, size):
    return ImageFont.truetype(str(ROOT / f'AshborneVeil-{style}.ttf'), size)


def t(x, y, s, face, color=ivory, **kw):
    d.text((x, y), s, font=face, fill=color, **kw)


label = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 21)
t(100, 50, 'ASHBORNE VEIL / 02', label, muted)
t(1260, 50, 'MẪU CHỮ ĐỀ XUẤT', label, muted)
t(93, 83, 'Ashborne', f('Italic', 235), gold)
t(104, 354, 'Thành Kính Lạnh', f('Italic', 66))
t(106, 447, 'Mềm hơn trong đường nét, huyền bí trong nhịp chữ.', f('Regular', 33), muted)
d.line((106, 525, 1694, 525), fill=edge, width=1)
t(106, 559, 'BẢN TRƯỚC / FORGE', label, muted)
old = ImageFont.truetype(str(ROOT.parent / 'ashborne-forge-v01' / 'AshborneForge-Bold.ttf'), 111)
t(100, 604, 'ASHBORNE', old)
t(960, 559, 'HƯỚNG MỚI / VEIL', label, muted)
t(950, 602, 'ASHBORNE', f('Italic', 111), gold)
for box in ((106, 808, 856, 1074), (900, 808, 1694, 1074)):
    d.rounded_rectangle(box, radius=18, fill='#162a38', outline=edge, width=1)
t(138, 826, 'Ấn Thú', f('Italic', 58), gold)
t(140, 908, 'Nhận 5 Khiên.', f('Medium', 36))
t(140, 964, 'Bảo vệ bản thân trước đòn đánh kế tiếp.', f('Regular', 31))
t(934, 836, 'Chữ UI và chỉ số', f('Medium', 43), gold)
t(934, 904, '80 / 80     3 / 3     +12     −5', f('Medium', 43), features=['lnum', 'tnum'])
t(934, 969, 'Sức mạnh · Khiên · Ý đồ của địch', f('Regular', 32))
d.rounded_rectangle((106, 1111, 486, 1192), radius=16, fill='#1b3040', outline='#897e67', width=1)
t(184, 1126, 'Kết thúc lượt', f('Medium', 34))
t(550, 1118, 'Người Thừa Kế · Phế tích · Quá tải', f('Italic', 40), ivory)
t(550, 1170, 'Ắ Ằ Ẳ Ẵ Ặ   Ế Ề Ể Ễ Ệ   Ớ Ờ Ở Ỡ Ợ   Ứ Ừ Ử Ữ Ự', f('Regular', 30), muted)
d.line((106, 1252, 1694, 1252), fill=edge, width=1)
t(106, 1290, 'Tiêu đề dùng nét nghiêng mềm; mô tả và chỉ số giữ chữ đứng dễ đọc.', f('Regular', 32), muted)
t(106, 1364, 'BẢN THỬ NGHIỆM TỪ ALEGREYA / ALEGREYA ITALIC · CHƯA CHỐT STYLE CHÍNH THỨC', label, muted)
im.save(ROOT / 'Ashborne-Veil-preview.png')
