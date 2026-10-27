// Site copy in one place. Contact details come from the general CV so the two never drift.
import general from '../cv/variants/general';

const [email, linkedin, , phone] = general.data.contact;

export const contact = {
  email,
  phone,
  linkedin: `https://${linkedin}`,
  github: 'https://github.com/sean-johnson',
  location: ['Manawatū,', 'New Zealand'],
};

export const about = {
  intro: [
    "I'm Head of Tech & Operations and a shareholder at Directco, a SaaS company I joined in 2016 as an early developer and designer. Our platform is used by FMCG clients like Fonterra, Red Bull, Unilever, Asahi and Bidfood across tens of thousands of locations.",
    'I progressed from developer and lead designer to leading architecture, infrastructure and operations: halving our AWS costs, shipping AI-driven display intelligence and owning our key supplier and client relationships.',
    "I also co-founded Taskhunter, a pay-per-task marketplace for businesses that is still in use today. Before software, I earned a Master's in Design specialising in branding and typography and worked in the design industry.",
  ],
  experienceHeading: 'How I work',
  experience: [
    'What excites me is crafting experiences, collaborating closely with the people who use what I build, and applying first principles to solve problems and create value.',
    'My background is building and running software start-ups end to end, from idea and design through to production, cost and quality. Feel free to get in contact.',
  ],
};

export const contactPage = {
  intro: [
    "I'm Head of Tech & Operations at Directco and open to senior engineering, quality and technical leadership roles, as well as part-time contract work.",
    'More examples of my work are available on request.',
  ],
};

// Detail columns shared by the About and Contact tabs (Contact is the first column).
// Each column is a list of sections; a section is a title plus groups of lines.
export const details = [
  [
    {
      title: 'Design',
      groups: [['Product Design', 'UI / UX', 'Software Architecture', 'Design Thinking & First Principles', 'Branding & Typography']],
    },
  ],
  [
    {
      title: 'Software',
      groups: [
        ['React, Next.js, TypeScript (Web)', 'React Native + Expo (Mobile)'],
        ['Node.js (Server)', 'MySQL, NoSQL (Database)', 'Python', 'Jest, CI / CD'],
      ],
    },
    {
      title: 'Cloud & AI',
      groups: [['AWS (ECS, RDS, Lambda)', 'AWS Bedrock, Claude', 'Docker', 'Google Cloud, Firebase', 'GitHub, Version control']],
    },
  ],
];
