import { StyleSheet } from '@react-pdf/renderer';

// Measured from cover-letters-old/Cover-Letter-Sean-Product-Owner-ACC.pdf:
//   date 10pt Medium at the top of the right column, greeting 27.6pt Medium on 29pt leading,
//   body 12pt Light on 16.4pt leading, 14pt between paragraphs, 38pt from greeting to body.

const MEDIUM = 500;
const LIGHT = 300;

export default StyleSheet.create({
  date: {
    fontSize: 10,
    fontWeight: MEDIUM,
    lineHeight: 1.2,
    marginBottom: 6,
  },
  greeting: {
    fontSize: 27.6,
    fontWeight: MEDIUM,
    lineHeight: 29 / 27.6,
  },
  body: {
    marginTop: 20,
  },
  paragraph: {
    fontSize: 12,
    fontWeight: LIGHT,
    lineHeight: 16.4 / 12,
    marginBottom: 14,
  },
  closing: {
    fontSize: 12,
    fontWeight: LIGHT,
    lineHeight: 16.4 / 12,
  },
});
