// TEMPLATE for a company-specific CV variant.
//
// 1. Copy this file to ./private/<company>.js  (private/ is gitignored)
// 2. Read the position description and pick 3–5 responsibilities to mirror.
// 3. Fill in the fields below. Anything you leave as `general.data.x` stays the same as the
//    general CV, so only override what the role needs.
// 4. Render:  node scripts/build-cv.js <company>
//    Output:  ../new-CVs/<company>/<fileName>  (the script warns if it is not exactly 2 pages)
//    Letter:  node scripts/build-cv.js <company> --letter  (renders `coverLetter`, must be 1 page)
//
// Length limits (so it stays on two pages, matching the InDesign original):
//   titleLines      2 lines, ~30 characters each
//   skills.items    10 items max, one line each
//   technologies    13 items max
//   traits          rendered under "Profile": [0] the problem I solve and the outcome (5 lines,
//                   ~330 characters), [1] who I am for this role (4 lines, ~270 characters)
//   achievements    5 bullets, 2–3 lines each (about 140 characters)
//   responsibilities 3 one-line bullets (under 65 characters) or 2 two-line bullets
//   techStack       one line (under 65 characters)
//   coverLetter     4 paragraphs, about 30 body lines total (~2,000 characters) to stay on one page
//
// Checklist before sending:
//   [ ] Title reflects how this employer describes the role
//   [ ] Skills group renamed to the employer's language (e.g. "Quality & Delivery")
//   [ ] Profile: keep the problem/outcome opener unless the role needs a different framing;
//       reframe the second paragraph for the role, in my own words
//   [ ] Achievements lead with the one that matters most to this employer
//   [ ] Nothing invented: same facts as general.js, different emphasis
//   [ ] fileName is unique

import general from '../general';

const variant = {
  id: 'company',                              // folder name under new-CVs/
  fileName: 'Sean-Johnson-CV-Company.pdf',

  data: {
    ...general.data,

    header: {
      name: 'Sean Johnson',
      titleLines: ['Head of Tech & Operations', 'Architecture, Data + AI'],
    },

    // contact: general.data.contact,          // usually unchanged

    skills: {
      title: 'Skills',                          // rename to match the role
      items: general.data.skills.items,
    },

    // technologies: general.data.technologies, // reorder or swap for the role's stack

    traits: [
      general.data.traits[0],                   // problem + outcome opener; usually keep
      general.data.traits[1],                   // reframe this one for the role
    ],

    experience: [
      {
        ...general.data.experience[0],          // Directco
        // achievements: [...],                 // 5 bullets, role-relevant first
        // responsibilities: [...],
        // techStack: '...',
      },
      ...general.data.experience.slice(1),      // Taskhunter and anything after
    ],

    // education: general.data.education,
    // portfolio: general.data.portfolio,
  },

  // Optional. Structure follows the old letters: why this role and place, what I have done
  // that proves it, why the move makes sense now, short close.
  coverLetter: {
    fileName: 'Sean-Johnson-Cover-Letter-Company.pdf',
    date: '1 January 2027',
    greeting: ['Kia ora', 'Company'],
    paragraphs: [
      'Why this role, and why here.',
      'What I have done at Directco that proves I can do it (3 to 5 concrete things from the PD).',
      'Why the move makes sense now, and what I bring to the team.',
      'I would value the opportunity to discuss how my experience could contribute to the team.',
    ],
    closing: 'Thank you for considering my application,',
    signature: 'Sean',
  },
};

export default variant;
