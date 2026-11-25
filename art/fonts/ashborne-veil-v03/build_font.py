"""Ashborne Veil v0.3: controlled pen-pressure variation in Bezier outlines.

Interpolate compatible original Alegreya outlines between weights 400/650
using a smooth per-point pressure field. No faceting or random point jitter.
Original sources and copyright are preserved. Dependency: fonttools.
"""
from pathlib import Path
from math import sin, pi
from hashlib import sha256
from fontTools.ttLib import TTFont
from fontTools.ttLib.tables.ttProgram import Program
from fontTools.varLib.instancer import instantiateVariableFont
import unicodedata

ROOT = Path(__file__).resolve().parent


def instance(path, weight):
    return instantiateVariableFont(TTFont(path), {'wght': weight}, inplace=True)


def build(style, weight, amplitude, italic=False, extra_space=8):
    source = ROOT / ('Alegreya-Italic-source.ttf' if italic else 'Alegreya-source.ttf')
    font = instance(source, weight)
    low, high = instance(source, 400), instance(source, 650)
    mark_names = {name for code, name in font.getBestCmap().items()
                  if unicodedata.category(chr(code)).startswith('M')}
    edited = 0
    for name in font.getGlyphOrder():
        glyph = font['glyf'][name]
        if hasattr(glyph, 'program'):
            glyph.program = Program()
        if glyph.isComposite() or glyph.numberOfContours <= 0 or name in mark_names:
            continue
        lo, hi = low['glyf'][name], high['glyf'][name]
        if not hasattr(lo, 'coordinates') or len(lo.coordinates) != len(hi.coordinates):
            raise ValueError(f'Incompatible master topology: {name}')
        if len(glyph.coordinates) < 8:
            continue
        seed = int.from_bytes(sha256(name.encode()).digest()[:4], 'big') / (2**32 - 1)
        phase = seed * 2 * pi
        for i, (x, y) in enumerate(list(glyph.coordinates)):
            # Low-frequency variation stays continuous around nearby outline
            # points. Small glyph-to-glyph differences imitate pen pressure.
            pressure = (0.64*sin(y/190 + phase)
                        + 0.26*sin(x/160 - phase*0.7)
                        + 0.10*sin(phase))
            local_weight = max(400, min(650, weight + amplitude * pressure))
            mix = (local_weight - 400) / 250
            glyph.coordinates[i] = tuple(round(a + mix*(b-a))
                                         for a, b in zip(lo.coordinates[i], hi.coordinates[i]))
        edited += 1
    for name, (advance, bearing) in list(font['hmtx'].metrics.items()):
        if advance > 0:
            font['hmtx'].metrics[name] = (advance + extra_space, bearing)
    for tag in ('STAT', 'DSIG', 'fpgm', 'prep', 'cvt ', 'hdmx', 'LTSH', 'VDMX'):
        if tag in font:
            del font[tag]
    values = {1: 'Ashborne Veil', 2: style,
              3: f'AshborneVeil-{style}-0.300', 4: f'Ashborne Veil {style}',
              5: 'Version 0.300; experimental pressure variation',
              6: f'AshborneVeil-{style}', 16: 'Ashborne Veil', 17: style,
              25: 'AshborneVeil'}
    for record in font['name'].names:
        if record.nameID in values:
            record.string = values[record.nameID]
    for name_id, value in values.items():
        font['name'].setName(value, name_id, 3, 1, 0x409)
    font['OS/2'].usWeightClass = 500 if style == 'Medium' else 400
    font['OS/2'].fsSelection &= ~((1 << 0) | (1 << 5) | (1 << 6))
    font['OS/2'].fsSelection |= 1 << (0 if italic else 6)
    font['head'].macStyle = 2 if italic else 0
    font['head'].fontRevision = 0.3
    path = ROOT / f'AshborneVeil-{style}.ttf'
    font.save(path)
    assert set(TTFont(path).getBestCmap()) == set(TTFont(source).getBestCmap())
    print(path.name, edited, 'simple outlines adjusted')


if __name__ == '__main__':
    build('Regular', 425, 18, extra_space=6)
    build('Medium', 550, 30, extra_space=8)
    build('Italic', 500, 100, italic=True, extra_space=14)
