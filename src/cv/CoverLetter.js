import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import styles from './Resume.styles';
import letterStyles from './CoverLetter.styles';
import { Header, Contact } from './Resume';

// One-page cover letter in the same layout as the CV (reference: cover-letters-old/*.pdf):
// left column = name, title, contact; right column = date, greeting, body, sign-off.
//
// `data` is the variant's CV data (header + contact); `letter` is variant.coverLetter:
//   { date, greeting: ['Kia ora', 'FMG'], paragraphs: [...], closing, signature }

export default function CoverLetter({ data, letter }) {
  const { header, contact } = data;

  return (
    <Document title={`${header.name} — Cover Letter`} author={header.name}>
      <Page size="A4" style={styles.page}>
        <View style={styles.leftColumn}>
          <Header header={header} />
          <Contact contact={contact} />
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.topSection} />
          <Text style={letterStyles.date}>{letter.date}</Text>
          {letter.greeting.map((line, i) => (
            <Text key={i} style={letterStyles.greeting}>{line}</Text>
          ))}
          <View style={letterStyles.body}>
            {letter.paragraphs.map((text, i) => (
              <Text key={i} style={letterStyles.paragraph}>{text}</Text>
            ))}
            <Text style={letterStyles.closing}>{letter.closing}</Text>
            <Text style={letterStyles.closing}>{letter.signature}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
