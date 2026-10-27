import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import styles from './Resume.styles';

// Two-page CV matching the original InDesign layout.
// Page 1: header, contact, skills, technologies | traits, first experience entry
// Page 2: header, contact                        | remaining experience, education, portfolio
//
// Fonts must be registered before rendering (see registerFonts.js for the web,
// scripts/build-cv.js for Node).

export const Header = ({ header }) => (
  <View style={styles.topSection}>
    <Text style={styles.name}>{header.name}</Text>
    {header.titleLines.map((line, i) => (
      <Text key={i} style={styles.title}>{line}</Text>
    ))}
  </View>
);

const LeftHeading = ({ children, first }) => (
  <Text style={first ? [styles.leftHeading, styles.leftHeadingFirst] : styles.leftHeading}>
    {children}
  </Text>
);

export const Contact = ({ contact }) => (
  <View>
    <LeftHeading first>Contact</LeftHeading>
    {contact.map((line, i) => (
      <Text key={i} style={styles.contactLine}>{line}</Text>
    ))}
  </View>
);

const SkillList = ({ title, items }) => (
  <View>
    <LeftHeading>{title}</LeftHeading>
    {items.map((item, i) => (
      <Text key={i} style={styles.listItem}>{item}</Text>
    ))}
  </View>
);

const Bullets = ({ items }) => (
  <View>
    {items.map((item, i) => (
      // The last row carries no bottom margin so a full column cannot spill a blank page;
      // the gap to the next block comes from subHeading.marginTop / entry.marginBottom.
      <View key={i} style={i === items.length - 1 ? [styles.bulletRow, styles.bulletRowLast] : styles.bulletRow}>
        <Text style={styles.bulletGlyph}>•</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}
  </View>
);

const Paragraphs = ({ items }) => (
  <View>
    {items.map((p, i) => (
      <Text key={i} style={styles.paragraph}>{p}</Text>
    ))}
  </View>
);

// `last` drops the trailing margin so the final entry on a page cannot spill a blank page
const ExperienceEntry = ({ entry, last }) => (
  <View style={last ? [styles.entry, styles.entryLast] : styles.entry}>
    {/* Row rather than nested Text: react-pdf v1 mis-spaces nested runs of a different size */}
    <View style={styles.entryTitleRow}>
      <Text style={styles.entryName}>{entry.company}</Text>
      <Text style={styles.entryRole}>{`— ${entry.role}`}</Text>
    </View>
    <Text style={styles.entryYear}>{entry.dates}</Text>

    {entry.summary && <Paragraphs items={entry.summary} />}

    {entry.progression && (
      <View style={styles.progression}>
        {entry.progression.map((step, i) => (
          <View key={i} style={styles.progressionRow}>
            <Text style={styles.progressionRole}>{step.role}</Text>
            <Text style={styles.progressionYear}>{step.dates}</Text>
          </View>
        ))}
      </View>
    )}

    {entry.achievements && (
      <View>
        <Text style={styles.subHeading}>Achievements</Text>
        <Bullets items={entry.achievements} />
      </View>
    )}

    {entry.responsibilities && (
      <View>
        <Text style={[styles.subHeading, entry.achievements && styles.subHeadingFollowing]}>Responsibilities</Text>
        <Bullets items={entry.responsibilities} />
      </View>
    )}

    {entry.techStack && (
      <View>
        <Text style={[styles.subHeading, (entry.achievements || entry.responsibilities) && styles.subHeadingFollowing]}>Tech Stack</Text>
        <Bullets items={[entry.techStack]} />
      </View>
    )}
  </View>
);

const EducationEntry = ({ entry }) => (
  <View style={styles.entry}>
    <Text style={styles.entryTitle}>
      <Text style={styles.entryNameSmall}>{entry.institution}</Text>
      {` — ${entry.qualification}`}
    </Text>
    <Text style={styles.entryYear}>{entry.dates}</Text>
    <Text style={styles.paragraph}>{entry.description}</Text>
  </View>
);

const Footer = ({ page, total }) => (
  <Text style={styles.footer} fixed>{`${page} of ${total}`}</Text>
);

export default function Resume({ data }) {
  const { header, contact, skills, technologies, traits, experience, education, portfolio } = data;
  const [firstJob, ...otherJobs] = experience;

  return (
    <Document
      title={`${header.name} — CV`}
      author={header.name}
      subject={header.titleLines.join(' ')}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.leftColumn}>
          <Header header={header} />
          <Contact contact={contact} />
          <SkillList title={skills.title} items={skills.items} />
          <SkillList title={technologies.title} items={technologies.items} />
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.topSection} />
          <Text style={styles.heading}>Profile</Text>
          <Paragraphs items={traits} />
          <Text style={[styles.heading, styles.headingSpaced]}>Experience</Text>
          <ExperienceEntry entry={firstJob} last />
        </View>
        <Footer page={1} total={2} />
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.leftColumn}>
          <Header header={header} />
          <Contact contact={contact} />
        </View>

        <View style={styles.rightColumn}>
          {otherJobs.map((job, i) => (
            <ExperienceEntry key={i} entry={job} />
          ))}

          <Text style={[styles.heading, otherJobs.length ? styles.headingSpaced : null]}>
            {data.educationTitle || 'Education'}
          </Text>
          {education.map((entry, i) => (
            <EducationEntry key={i} entry={entry} />
          ))}

          <Text style={[styles.heading, styles.headingSpaced]}>{portfolio.title || 'Portfolio'}</Text>
          <Text style={styles.link}>{portfolio.url}</Text>
          <Text style={styles.paragraph}>
            {portfolio.description}
            {portfolio.github && <Text style={styles.entryNameSmall}>{portfolio.github}</Text>}
          </Text>
          <Text style={styles.note}>{portfolio.note}</Text>
        </View>
        <Footer page={2} total={2} />
      </Page>
    </Document>
  );
}
