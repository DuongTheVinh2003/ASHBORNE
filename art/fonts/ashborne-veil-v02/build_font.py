"""Ashborne Veil v0.2: experimental Alegreya-derived font instances.

Keep the original Bezier outlines. Use the real italic drawing for the
display face, lighter source weights and modest added side spacing.
Dependency: fonttools. License and copyright are bundled in OFL.txt.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parent


def build(style, weight, italic=False, extra_space=8):
    source = ROOT / ('Alegreya-Italic-source.ttf' if italic else 'Alegreya-source.ttf')
    font = instantiateVariableFont(TTFont(source), {'wght': weight}, inplace=True)
    # Keep zero-advance combining marks unchanged so accents continue to shape.
    for glyph, (advance, bearing) in list(font['hmtx'].metrics.items()):
        if advance > 0:
            font['hmtx'].metrics[glyph] = (advance + extra_space, bearing)
    for tag in ('STAT', 'DSIG'):
        if tag in font:
            del font[tag]
    values = {1: 'Ashborne Veil', 2: style,
              3: f'AshborneVeil-{style}-0.200',
              4: f'Ashborne Veil {style}',
              5: 'Version 0.200; experimental Alegreya derivative',
              6: f'AshborneVeil-{style}',
              16: 'Ashborne Veil', 17: style, 25: 'AshborneVeil'}
    for record in font['name'].names:
        if record.nameID in values:
            record.string = values[record.nameID]
    for name_id, value in values.items():
        font['name'].setName(value, name_id, 3, 1, 0x409)
    font['OS/2'].usWeightClass = 500 if style == 'Medium' else 400
    font['OS/2'].fsSelection &= ~((1 << 0) | (1 << 5) | (1 << 6))
    font['OS/2'].fsSelection |= 1 << (0 if italic else 6)
    font['head'].macStyle = 2 if italic else 0
    font['head'].fontRevision = 0.2
    output = ROOT / f'AshborneVeil-{style}.ttf'
    font.save(output)
    reopened = TTFont(output)
    assert set(reopened.getBestCmap()) == set(TTFont(source).getBestCmap())
    print(output.name, len(reopened.getBestCmap()), 'codepoints')


if __name__ == '__main__':
    build('Regular', 400, extra_space=6)
    build('Medium', 550, extra_space=8)
    build('Italic', 500, italic=True, extra_space=14)
