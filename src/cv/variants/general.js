// General CV — the default variant shown on the website.
// Company-specific variants live in ./private/ (gitignored) and start from ./_template.js.

const variant = {
  id: 'general',
  fileName: 'Sean-Johnson-CV.pdf',

  data: {
    header: {
      name: 'Sean Johnson',
      titleLines: ['Head of Tech & Operations', 'Architecture, Data + AI'],
    },

    contact: [
      'sean.johnson.nz@gmail.com',
      'linkedin.com/in/seanjohnson-nz',
      'sean-johnson.github.io',
      '+64 27 214 0011',
    ],

    skills: {
      title: 'Skills',
      items: [
        'Tech Direction & Operations',
        'Solutions & Data Architecture',
        'Full Stack Engineering',
        'Cloud, DevOps & Cost Control',
        'AI Integration',
        'Quality & Test Automation',
        'Product Strategy',
        'Product & UX Design',
        'Agile Delivery (PSM I)',
        'Client & Supplier Management',
      ],
    },

    technologies: {
      title: 'Languages\n& Technologies',
      items: [
        'JavaScript, TypeScript',
        'Node.js',
        'React + Redux, Next.js',
        'React Native + Expo',
        'MySQL, NoSQL',
        'Python',
        'Jest, Enzyme (Testing)',
        'Docker, Containerisation',
        'AWS (ECS, RDS, Lambda)',
        'AWS Bedrock, Claude',
        'Google Cloud, Firebase',
        'Git, GitHub',
        'Linux, Bash, PowerShell',
      ],
    },

    // Rendered under the "Profile" heading: the problem I solve, then who I am.
    traits: [
      'For ten years I have shaped the platform FMCG suppliers use to see and predict what happens in the tens of thousands of stores they sell into through distributors. Turning surveys, shelf photos and orders into range gaps, sales opportunities and compliance scores means fewer wasted visits, lower costs and better decisions for people on the ground.',
      'I communicate clearly and listen first, which is how I have kept enterprise clients and suppliers for a decade. I work best collaborating, stay calm and solution-focused under pressure, and treat change and feedback as the normal conditions of working in tech.',
    ],

    experience: [
      {
        company: 'Directco',
        role: 'Head of Tech & Operations',
        dates: '2016 — Present',
        // TODO: confirm the year boundaries for each step.
        progression: [
          { role: 'Head of Tech & Operations', dates: '2024 — Present' },
          { role: 'Lead Full Stack Engineer, Lead UX', dates: '2019 — 2023' },
          { role: 'Full Stack Developer, Lead Designer', dates: '2016 — 2019' },
        ],
        achievements: [
          'Joined Directco in 2016 as an early developer and designer; now Head of Tech & Operations and shareholder of a SaaS platform used by Fonterra, Red Bull, Unilever, Asahi and Bidfood nationwide.',
          'Own the platform architecture end to end: data model and MySQL schema, API and service design, containerised services on AWS, and secure API and SFTP integrations with enterprise client systems.',
          'Reshaped AWS infrastructure to fit real demand, cutting costs 50% while improving resilience, automation and capacity to scale.',
          'Designed and shipped AI-driven display intelligence: automated scoring of in-store shelf and fridge photos for enterprise clients.',
          'Own key supplier and client relationships, from quarterly planning, budgets and cost control through to feature scoping and delivery.',
        ],
        responsibilities: [
          'Technical direction, architecture and operations, web to AWS.',
          'Quality: CI/CD, staged environments, automated tests, releases.',
          'Shaping features with clients, from acceptance criteria to production.',
        ],
        techStack: 'React, Next.js, Node.js, TypeScript, MySQL, Docker, AWS, Bedrock',
      },
      {
        company: 'Taskhunter',
        role: 'Lead Full Stack Engineer, Product Design',
        dates: '2020 — 2021',
        achievements: [
          'Co-founded and led development of a SaaS product for businesses to manage and complete tasks across multiple locations, expanding beyond FMCG using insights gained at Directco.',
          'Built end-to-end web and mobile applications for task suppliers and task agents, and owned their testing and release.',
        ],
        responsibilities: [
          'Oversaw end-to-end design, development and software architecture, as well as business decisions such as pricing models, product value, data schemas and data handling.',
        ],
        techStack: 'Next.js, React Native (Expo), NoSQL, GCP services, Firebase',
      },
    ],

    education: [
      {
        institution: 'University of Waikato',
        qualification: 'Masters in Computer Graphic Design',
        dates: '2008 – 2012',
        description:
          'I learned how to apply design thinking to solve problems creatively and communicate ideas through any medium. Graduated with Masters specialising in Branding and Typography.',
      },
      {
        institution: 'Devacademy',
        qualification: 'Software Developer Graduate',
        dates: '2016',
        description:
          'Immersive full stack bootcamp. Shipped real projects in agile teams; as much about how to learn as how to code.',
      },
      {
        institution: 'Scrum.org',
        qualification: 'Professional Scrum Master I',
        dates: '2021',
        description:
          'Earned Professional Scrum Master I certification. Learned Agile methodology and SCRUM doctrine for facilitating agile teams.',
      },
    ],

    portfolio: {
      url: 'https://sean-johnson.github.io',
      description: 'Explore my website to view a curated collection of my work.\nYou can also visit me on Github at ',
      github: 'www.github.com/sean-johnson.',
      note: 'Additional projects and references can be provided upon request.',
    },
  },
};

export default variant;
