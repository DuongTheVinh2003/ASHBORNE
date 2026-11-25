"""Render an editable typography specimen. Dependency: Pillow with RAQM."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent
im = Image.new('RGB', (1800, 1500), '#0d1724')
d = ImageDraw.Draw(im)
gold, white, soft, line = '#d5a14f', '#eee4ce', '#91a6ad', '#345362'


def font(style, size):
    return ImageFont.truetype(str(ROOT / f'AshborneForge-{style}.ttf'), size)


def text(x, y, value, face, color=white, **kwargs):
    d.text((x, y), value, font=face, fill=color, **kwargs)


def panel(x, y, width, height):
    d.polygon([(x+12, y), (x+width-12, y), (x+width, y+12),
               (x+width, y+height-12), (x+width-12, y+height),
               (x+12, y+height), (x, y+height-12), (x, y+12)],
              fill='#152a38', outline=line, width=2)


label = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 21)
text(92, 48, 'ASHBORNE FORGE / 01', label, soft)
text(1230, 48, 'TYPE STUDY · ĐỀ XUẤT', label, soft)
text(88, 97, 'ASHBORNE', font('Bold', 164), gold)
text(96, 296, 'THÀNH KÍNH LẠNH', font('Semibold', 62))
text(96, 386, 'Mảng khối rõ · Góc cắt gọn · Vàng ấm trên nền xanh lạnh', font('Regular', 31), soft)
d.line((96, 460, 1704, 460), fill=line, width=2)
text(96, 493, 'ALEGREYA GỐC / 700', label, soft)
original = ImageFont.truetype(str(ROOT / 'Alegreya-source.ttf'), 82)
original.set_variation_by_axes([700])
text(96, 528, 'ẤN THÚ · HỎA KIẾM', original)
text(950, 493, 'ASHBORNE FORGE / BOLD', label, soft)
text(950, 528, 'ẤN THÚ · HỎA KIẾM', font('Bold', 82), gold)
panel(96, 680, 770, 314)
panel(902, 680, 802, 314)
text(130, 700, 'THỦ KIẾM', font('Semibold', 48), gold)
text(130, 772, 'Nhận 5 Khiên.', font('Regular', 35))
text(130, 827, 'Bảo vệ bản thân trước đòn đánh kế tiếp.', font('Regular', 31))
text(130, 910, '1 MANA    /    KỸ NĂNG', font('Semibold', 28), soft)
text(938, 700, 'TRẠNG THÁI NHÂN VẬT', font('Semibold', 40), gold)
text(938, 775, '80 / 80     3 / 3     +12     −5', font('Semibold', 46), features=['lnum', 'tnum'])
text(938, 854, 'Sức mạnh · Khiên · Quá tải', font('Regular', 34))
text(938, 914, 'Lửa · Nước · Gió · Đất', font('Regular', 31), soft)
panel(96, 1032, 430, 96)
panel(566, 1032, 430, 96)
text(160, 1047, 'Bắt đầu hành trình', font('Semibold', 35))
text(665, 1047, 'Kết thúc lượt', font('Semibold', 35))
text(1050, 1047, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', font('Semibold', 30), gold)
text(1050, 1091, 'abcdefghijklmnopqrstuvwxyz', font('Regular', 31))
d.line((96, 1173, 1704, 1173), fill=line, width=2)
text(96, 1208, 'TIẾNG VIỆT / CHỮ VÀ DẤU', label, soft)
text(96, 1250, 'Ắ Ằ Ẳ Ẵ Ặ   Ấ Ầ Ẩ Ẫ Ậ   Ế Ề Ể Ễ Ệ   Ớ Ờ Ở Ỡ Ợ   Ứ Ừ Ử Ữ Ự', font('Semibold', 37))
text(96, 1315, 'Người Thừa Kế bước qua phế tích. Một hành trình mới bắt đầu.', font('Regular', 35))
text(96, 1418, 'BẢN THỬ NGHIỆM · FONT PHÁI SINH TỪ ALEGREYA · MÀU VÀ VĂN BẢN MINH HỌA', label, soft)
im.save(ROOT / 'Ashborne-Forge-preview.png')
