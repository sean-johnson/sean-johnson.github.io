import { Font } from '@react-pdf/renderer';

import Light from './fonts/FoundersGrotesk-Light.ttf';
import Medium from './fonts/FoundersGrotesk-Medium.ttf';

// TTF conversions of the InDesign CV's Founders Grotesk OTFs (react-pdf v1 cannot read CFF/OTF).
export const FONT_FAMILY = 'FoundersGrotesk';

Font.register({
  family: FONT_FAMILY,
  fonts: [
    { src: Light, fontWeight: 300 },
    { src: Medium, fontWeight: 500 },
  ],
});

// Keep the InDesign look: no hyphenation.
Font.registerHyphenationCallback((word) => [word]);

// react-pdf 1.x does not await a font that another render is already fetching, so mounting
// PDFViewer and PDFDownloadLink together can lay out with a null font. Resolve this once
// before rendering either.
export const preloadFonts = () =>
  Promise.all([300, 500].map((fontWeight) => Font.load({ fontFamily: FONT_FAMILY, fontWeight })));
