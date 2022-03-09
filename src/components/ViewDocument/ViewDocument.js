import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { 
  Text,
  View,
  Image,
  PDFDownloadLink,
  PDFViewer,
  Document,
  Font,
  Page
} from '@react-pdf/renderer';

import MyButton from '../MyButton';
import { documentStyles, useStyles } from './ViewDocument.styles'


const MyResume = () => (
  <Document>
    <Page size="A4" style={documentStyles.body}>
      <View style={documentStyles.leftColumn}>
        <View style={documentStyles.leftTopSection}>
          <Text style={documentStyles.nameHeading}>Sean Johnson</Text>
          <Text style={documentStyles.jobDescriptionSubHeading}>Product Designer +</Text>
          <Text style={documentStyles.jobDescriptionSubHeading}>Full Stack Developer</Text>
        </View>
        <Text style={documentStyles.descriptionHeading}>Contact</Text>
        <Text style={documentStyles.description}>
          sean-johnson.github.io {"\n"}
          sean.johnson.dev@gmail.com {"\n"}
          +64 27 214 0011 {"\n"}
        </Text>
        <Text style={documentStyles.descriptionHeading}>Skills</Text>
        <Text style={documentStyles.description}>
          Experience Strategy  {"\n"}
          User & Interaction Design  {"\n"}
          Branding {"\n"}
          Illustration {"\n"}
          Wireframes {"\n"}
          Agile Workflow  {"\n"}
          Prototyping  {"\n"}
          Frontend + Backend Dev {"\n"}
          DevOps {"\n"}
        </Text>
        <Text style={documentStyles.descriptionHeading}>Design Tools</Text>
        <Text style={documentStyles.description}>
          Adobe XD {"\n"}
          Adobe Photoshop {"\n"}
          Adobe Illustrator {"\n"}
          Adobe InDesign {"\n"}
          Adobe Premier + After Effects {"\n"}
        </Text>
        <Text style={documentStyles.descriptionHeading}>Dev Tools</Text>
        <Text style={documentStyles.description}>
          HTML + CSS + JS {"\n"}
          ReactJS + Redux {"\n"}
          React Native + Expo {"\n"}
          NodeJS {"\n"}
          MySQL {"\n"}
          Firebase {"\n"}
          Docker {"\n"}
          Amazon Web Services {"\n"}
          Github (Version Control) {"\n"}
        </Text>
      </View>
      <View style={documentStyles.rightColumn}>
        <View style={documentStyles.rightTopSection}>
          <Text style={documentStyles.tagline}></Text>
        </View>
        <Text style={documentStyles.descriptionHeading}>Experience</Text>

        <Text style={documentStyles.descriptionRole}> <Text style={documentStyles.descriptionBold}>Directco — </Text>Designer, Developer and Stakeholder</Text>
        <Text style={documentStyles.descriptionYear}>2016 – Present</Text>
        <Text style={documentStyles.description}>
          Responsible for branding, UX and part of the technical team. Roles include full stack development
          for web and mobile apps, and maintenance of software instrastructure. Proud to say we built services from ideation to product
          that grows our customer base and maintains retention.
        </Text>

        <Text style={documentStyles.descriptionRole}>
          <Text style={documentStyles.descriptionBold}>Freelance — </Text>
          Branding & Web Designer
        </Text>
        <Text style={documentStyles.descriptionYear}>2015 – 2016</Text>
        <Text style={documentStyles.description}>
          Freelance designer with a focus on branding, web design and
          front-end development.
        </Text>

        <Text style={documentStyles.descriptionRole}>
          <Text style={documentStyles.descriptionBold}>Blacksheepdesign — </Text>
          Designer
        </Text>
        <Text style={documentStyles.descriptionYear}>2012 – 2015</Text>
        <Text style={documentStyles.description}>
          Designer with a focus on branding, typography and illustration.
        </Text>

        <Text style={documentStyles.descriptionHeading}>Education</Text>

        <Text style={documentStyles.descriptionRole}><Text style={documentStyles.descriptionBold}>University of Waikato — </Text>Masters in Design</Text>
        <Text style={documentStyles.descriptionYear}>2008 – 2012</Text>
        <Text style={documentStyles.description}>
          Learned how to creatively and methodically solve problems. Graduated with Honours specialising in illustration. 
          Graduated with Masters specialising in Branding and Typography.
        </Text>

        <Text style={documentStyles.descriptionRole}><Text style={documentStyles.descriptionBold}>Devacademy — </Text>Developer Graduate</Text>
        <Text style={documentStyles.descriptionYear}>2016</Text>
        <Text style={documentStyles.description}>
          Full stack web development course. Intense real-world projects built with agile workflows and teams.
        </Text>

        <Text style={documentStyles.descriptionRole}><Text style={documentStyles.descriptionBold}>Scurm.org — </Text>Professional Scrum Master I</Text>
        <Text style={documentStyles.descriptionYear}>2021</Text>
        <Text style={documentStyles.description}>
          Earned Professional Scrum Master I certification. Learned Agile methodology and SCRUM doctrine for faciliating agile teams.  
        </Text>
      </View>
    </Page>
  </Document>
)

export default function ViewDocument() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const classes = useStyles();
  return (
    <div>
      <Grid container xs={12} sm={12} direction="column">
        <Grid container xs={12} sm={12} direction="row" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body" color="subtitle1">
              Sean Johnson - Resumé
            </Typography>
            <Typography variant="body2" color="textSecondary">
              2022
            </Typography>
          </Grid>
          <Grid container xs={12} sm={6} direction="row" justify="flex-end">
            {isClient && <PDFDownloadLink
              className={classes.pdfDownloadLink}
              document={<MyResume />}
              fileName="Sean-Johnson-Resumé.pdf">
              {({ blob, url, loading, error }) => (loading
                ? 'Loading...'
                : <MyButton buttonText={"Download Resumé"}/>)}
              </PDFDownloadLink>
            }
          </Grid>
        </Grid>
        <PDFViewer className={classes.pdfViewer}>
          <MyResume />
        </PDFViewer>
      </Grid>
    </div>
  )
}