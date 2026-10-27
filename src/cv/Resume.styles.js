import { StyleSheet } from '@react-pdf/renderer';

// Measurements taken from the original InDesign PDFs (A4, 595.3 x 841.9 pt):
//   left margin 42.5pt, right column starts at 216.6pt, name baseline 52pt from top
//   Founders Grotesk Medium for headings, Light for body
//   headings: 15pt (left column), 20pt (right column); body 12pt on 16.4pt leading
//   greys: 60% black (#666) for titles/years, 80% black (#333) for contact lines

const FONT = 'FoundersGrotesk';
const LIGHT = 300;
const MEDIUM = 500;
const GREY = '#666666';
const DARK_GREY = '#333333';
const BLACK = '#000000';

const BODY_SIZE = 12;
const BODY_LEADING = 16.4 / BODY_SIZE;

export const BULLET_INDENT = 11.3;

export default StyleSheet.create({
  page: {
    flexDirection: 'row',
    paddingTop: 38,
    paddingBottom: 22,
    paddingLeft: 42.5,
    paddingRight: 56,
    fontFamily: FONT,
    fontWeight: LIGHT,
    color: BLACK,
  },

  // Columns
  leftColumn: {
    width: 174,
    paddingRight: 14,
    flexDirection: 'column',
  },
  rightColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  topSection: {
    height: 82,
  },

  // Header
  name: {
    fontSize: 15,
    fontWeight: MEDIUM,
    lineHeight: 1.2,
  },
  title: {
    fontSize: 11,
    fontWeight: MEDIUM,
    color: GREY,
    letterSpacing: 0.22,
    lineHeight: 1.2,
  },

  // Left column
  leftHeading: {
    fontSize: 15,
    fontWeight: MEDIUM,
    lineHeight: 1.2,
    marginTop: 26,
    marginBottom: 7,
  },
  leftHeadingFirst: {
    marginTop: 0,
  },
  contactLine: {
    fontSize: 11,
    fontWeight: LIGHT,
    color: DARK_GREY,
    lineHeight: 1.2,
  },
  listItem: {
    fontSize: BODY_SIZE,
    fontWeight: LIGHT,
    lineHeight: BODY_LEADING,
  },

  // Right column
  heading: {
    fontSize: 20,
    fontWeight: MEDIUM,
    lineHeight: 1.2,
    marginBottom: 8,
  },
  headingSpaced: {
    marginTop: 20,
  },
  paragraph: {
    fontSize: BODY_SIZE,
    fontWeight: LIGHT,
    lineHeight: BODY_LEADING,
    marginBottom: 6,
  },

  // Experience / education entries
  entry: {
    marginBottom: 13,
  },
  entryLast: {
    marginBottom: 0,
  },
  entryTitle: {
    fontSize: BODY_SIZE,
    fontWeight: LIGHT,
    lineHeight: BODY_LEADING,
  },
  entryTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  entryName: {
    fontSize: 15,
    fontWeight: MEDIUM,
    lineHeight: 1.2,
  },
  entryRole: {
    flex: 1,
    marginLeft: 3,
    fontSize: BODY_SIZE,
    fontWeight: LIGHT,
    lineHeight: 1.2,
    paddingBottom: 1,
  },
  entryNameSmall: {
    fontSize: BODY_SIZE,
    fontWeight: MEDIUM,
  },
  entryYear: {
    fontSize: BODY_SIZE,
    fontWeight: MEDIUM,
    color: GREY,
    lineHeight: 1.2,
    marginBottom: 6,
  },
  subHeading: {
    fontSize: BODY_SIZE,
    fontWeight: MEDIUM,
    lineHeight: BODY_LEADING,
    marginTop: 3,
    marginBottom: 2,
  },
  // Sub-heading that follows a bullet list (whose last row has no bottom margin)
  subHeadingFollowing: {
    marginTop: 8,
  },

  // Progression timeline
  progression: {
    marginBottom: 2,
  },
  progressionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressionRole: {
    fontSize: BODY_SIZE,
    fontWeight: LIGHT,
    lineHeight: BODY_LEADING,
    flex: 1,
  },
  progressionYear: {
    fontSize: BODY_SIZE,
    fontWeight: MEDIUM,
    color: GREY,
    lineHeight: BODY_LEADING,
    marginLeft: 8,
  },

  // Bullets
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletRowLast: {
    marginBottom: 0,
  },
  bulletGlyph: {
    width: BULLET_INDENT,
    fontSize: BODY_SIZE,
    fontWeight: LIGHT,
    lineHeight: BODY_LEADING,
  },
  bulletText: {
    flex: 1,
    fontSize: BODY_SIZE,
    fontWeight: LIGHT,
    lineHeight: BODY_LEADING,
  },

  // Portfolio / footer
  link: {
    fontSize: BODY_SIZE,
    fontWeight: MEDIUM,
    lineHeight: BODY_LEADING,
  },
  note: {
    fontSize: BODY_SIZE,
    fontWeight: MEDIUM,
    color: GREY,
    lineHeight: BODY_LEADING,
    marginTop: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 216.6,
    fontSize: 9,
    fontWeight: LIGHT,
    color: GREY,
  },
});
