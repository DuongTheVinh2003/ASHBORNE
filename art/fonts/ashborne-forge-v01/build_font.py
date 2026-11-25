"""Build the experimental Ashborne Forge family from the bundled OFL source.

Dependency: fonttools. Keeps original source and copyright metadata intact.
The faceted outlines are intended for display, not small body text.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.basePen import BasePen
from fontTools.pens.ttGlyphPen import TTGlyphPen

ROOT = Path(__file__).resolve().parent


class FacetPen(BasePen):
    def __init__(self, glyph_set, target, segments):
        super().__init__(glyph_set)
        self.target = target
        self.segments = segments

    def _moveTo(self, p):
        self.target.moveTo(tuple(round(v) for v in p))

    def _lineTo(self, p):
        self.target.lineTo(tuple(round(v) for v in p))

    def _qCurveToOne(self, control, end):
        start = self._getCurrentPoint()
        for i in range(1, self.segments + 1):
            t = i / self.segments
            p = tuple(round((1-t)**2*start[j] + 2*(1-t)*t*control[j] + t*t*end[j]) for j in (0, 1))
            self.target.lineTo(p)

    def _curveToOne(self, c1, c2, end):
        start = self._getCurrentPoint()
        for i in range(1, self.segments * 2 + 1):
            t = i / (self.segments * 2)
            p = tuple(round((1-t)**3*start[j] + 3*(1-t)**2*t*c1[j] + 3*(1-t)*t*t*c2[j] + t**3*end[j]) for j in (0, 1))
            self.target.lineTo(p)

    def _closePath(self):
        self.target.closePath()

    def _endPath(self):
        self.target.endPath()

    def addComponent(self, glyphName, transformation):
        # Reuse modified base letters in accented composites, keeping mark
        # placement and faceting consistent between O, Ó, Ộ, etc.
        self.target.addComponent(glyphName, transformation)


def build(style, source_weight, output_weight, facets):
    font = instantiateVariableFont(TTFont(ROOT / 'Alegreya-source.ttf'), {'wght': source_weight}, inplace=True)
    if facets:
        glyph_set = font.getGlyphSet()
        uppercase = {name for code, name in font.getBestCmap().items()
                     if chr(code).isupper() or chr(code).isdigit()}
        converted = {}
        for name in font.getGlyphOrder():
            pen = TTGlyphPen(glyph_set)
            segments = 1 if style == 'Bold' and name in uppercase else facets
            glyph_set[name].draw(FacetPen(glyph_set, pen, segments))
            converted[name] = pen.glyph()
        for name, glyph in converted.items():
            font['glyf'][name] = glyph
        for table in ('fpgm', 'prep', 'cvt ', 'hdmx', 'LTSH', 'VDMX'):
            if table in font:
                del font[table]
    for table in ('DSIG', 'STAT'):
        if table in font:
            del font[table]
    # Replace family identification across all existing language/platform records.
    names = {1: 'Ashborne Forge', 2: style,
             3: f'AshborneForge-{style}-0.100',
             4: f'Ashborne Forge {style}',
             5: 'Version 0.100; experimental derivative',
             6: f'AshborneForge-{style}',
             16: 'Ashborne Forge', 17: style,
             25: 'AshborneForge'}
    for record in font['name'].names:
        if record.nameID in names:
            record.string = names[record.nameID]
    for name_id, value in names.items():
        font['name'].setName(value, name_id, 3, 1, 0x409)
    font['OS/2'].usWeightClass = output_weight
    font['OS/2'].fsSelection &= ~((1 << 0) | (1 << 5) | (1 << 6))
    if style == 'Bold':
        font['OS/2'].fsSelection |= 1 << 5
        font['head'].macStyle = 1
    else:
        font['head'].macStyle = 0
        if style == 'Regular':
            font['OS/2'].fsSelection |= 1 << 6
    font['head'].fontRevision = 0.1
    path = ROOT / f'AshborneForge-{style}.ttf'
    font.save(path)
    # Round-trip and verify Vietnamese plus common game UI symbols.
    loaded = TTFont(path)
    cmap = loaded.getBestCmap()
    sample = 'ÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ'
    sample += sample.lower() + '0123456789+-/.,:;()'
    assert all(ord(ch) in cmap for ch in sample)
    assert set(cmap) == set(TTFont(ROOT / 'Alegreya-source.ttf').getBestCmap())
    print(path.name, len(cmap), 'codepoints; Vietnamese coverage OK')


if __name__ == '__main__':
    build('Regular', 500, 400, None)
    build('Semibold', 650, 600, 2)
    build('Bold', 800, 700, 2)
