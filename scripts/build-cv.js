#!/usr/bin/env node
/*
 * Render a CV variant to PDF.
 *
 *   node scripts/build-cv.js            -> general
 *   node scripts/build-cv.js fmg        -> src/cv/variants/private/fmg.js
 *   node scripts/build-cv.js general --out /some/dir
 *   node scripts/build-cv.js fmg --letter   -> renders variant.coverLetter (1 page) instead of the CV
 *
 * Output: ../new-CVs/<variant>/<fileName> (relative to this repo), unless --out is given.
 * Variant files are ES modules with JSX-free data, plus Resume.js which uses JSX;
 * both are transpiled on the fly with @babel/core (already installed via react-scripts).
 */
const path = require('path');
const fs = require('fs');

const root = path.resolve(__dirname, '..');
const cvDir = path.join(root, 'src', 'cv');

// --- transpile src/cv/** on require -------------------------------------------------
const babel = require('@babel/core');
const { addHook } = require('pirates');

addHook(
  (code, filename) =>
    babel.transformSync(code, {
      filename,
      babelrc: false,
      configFile: false,
      presets: [require.resolve('@babel/preset-react')],
      plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
    }).code,
  { exts: ['.js'], matcher: (filename) => filename.startsWith(cvDir) }
);

// --- fonts -----------------------------------------------------------------------------
const { Font } = require('@react-pdf/renderer');
Font.register({
  family: 'FoundersGrotesk',
  fonts: [
    { src: path.join(cvDir, 'fonts', 'FoundersGrotesk-Light.ttf'), fontWeight: 300 },
    { src: path.join(cvDir, 'fonts', 'FoundersGrotesk-Medium.ttf'), fontWeight: 500 },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

// --- args ------------------------------------------------------------------------------
const args = process.argv.slice(2);
const variantId = args.find((a) => !a.startsWith('--')) || 'general';
const outFlag = args.indexOf('--out');
const outDirOverride = outFlag !== -1 ? args[outFlag + 1] : null;
const isLetter = args.includes('--letter');

const candidates = [
  path.join(cvDir, 'variants', `${variantId}.js`),
  path.join(cvDir, 'variants', 'private', `${variantId}.js`),
];
const variantPath = candidates.find((p) => fs.existsSync(p));
if (!variantPath) {
  console.error(`No variant "${variantId}". Looked in:\n  ${candidates.join('\n  ')}`);
  process.exit(1);
}

// --- render ----------------------------------------------------------------------------
const React = require('react');
const ReactPDF = require('@react-pdf/renderer');
const Resume = require(path.join(cvDir, 'Resume.js')).default;
const CoverLetter = require(path.join(cvDir, 'CoverLetter.js')).default;
const variant = require(variantPath).default;

if (isLetter && !variant.coverLetter) {
  console.error(`Variant "${variantId}" has no coverLetter. Add one (see _template.js).`);
  process.exit(1);
}

const outDir = outDirOverride || path.resolve(root, '..', 'new-CVs', variant.id || variantId);
fs.mkdirSync(outDir, { recursive: true });
const outPath = isLetter
  ? path.join(outDir, variant.coverLetter.fileName || `Sean-Johnson-Cover-Letter-${variantId}.pdf`)
  : path.join(outDir, variant.fileName || `Sean-Johnson-CV-${variantId}.pdf`);

const EXPECTED_PAGES = isLetter ? 1 : 2;

const element = isLetter
  ? React.createElement(CoverLetter, { data: variant.data, letter: variant.coverLetter })
  : React.createElement(Resume, { data: variant.data });

ReactPDF.render(element, outPath)
  .then(() => {
    const pages = (fs.readFileSync(outPath, 'latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
    console.log(`Wrote ${outPath} (${pages} pages)`);
    if (pages !== EXPECTED_PAGES) {
      console.warn(
        `WARNING: expected ${EXPECTED_PAGES} page(s) but got ${pages}. ` +
          'Content is overflowing; shorten bullets or paragraphs in the variant.'
      );
      process.exitCode = 2;
    }
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
