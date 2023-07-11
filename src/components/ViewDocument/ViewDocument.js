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
          <Text style={documentStyles.jobDescriptionSubHeading}>Full Stack Engineer</Text>
        </View>
        <Text style={documentStyles.descriptionHeading}>Contact</Text>
        <Text style={documentStyles.description}>
          sean-johnson.github.io {"\n"}
          sean.johnson.dev@gmail.com {"\n"}
          +64 27 214 0011 {"\n"}
        </Text>
        <Text style={documentStyles.descriptionHeading}>Skills</Text>
        <Text style={documentStyles.description}>
          Product & Software Engineer {"\n"}
          Frontend + Backend Dev {"\n"}
          DevOps {"\n"}
          Agile Workflow  {"\n"}
          Experience Strategy  {"\n"}
          User & Interaction Design  {"\n"}
          Branding {"\n"}
        </Text>
        <Text style={documentStyles.descriptionHeading}>Technologies{"\n"}& Languages</Text>
        <Text style={documentStyles.description}>
          ReactJS + Redux {"\n"}
          React Native + Expo {"\n"}
          NodeJS {"\n"}
          MySQL {"\n"}
          Docker {"\n"}
          Firebase (Google Services) {"\n"}
          Amazon Web Services {"\n"}
          NoSQL {"\n"}
          HTML + CSS + JS {"\n"}
          Github (Version Control) {"\n"}
        </Text>
        <Text style={documentStyles.descriptionHeading}>Design Tools</Text>
        <Text style={documentStyles.description}>
          Adobe XD {"\n"}
          Adobe InDesign {"\n"}
          Adobe Photoshop {"\n"}
          Adobe Illustrator {"\n"}
          Adobe Premier + After Effects {"\n"}
        </Text>
      </View>
      <View style={documentStyles.rightColumn}>
        <View style={documentStyles.rightTopSection}>
          <Text style={documentStyles.tagline}></Text>
        </View>
        <Text style={documentStyles.descriptionHeading}>Experience</Text>

        <Text style={documentStyles.descriptionRole}> <Text style={documentStyles.descriptionBold}>Taskhunter</Text> — Co-founder, Lead Full Stack Engineer & Designer</Text>
        <Text style={documentStyles.descriptionYear}>2020 – Present</Text>
        <Text style={documentStyles.description}>
          I led the development of our new product, overseeing its design, development, and software architecture. The product is an MVP based on the insights we gained from Directco's experience, expanding our services beyond the FMCG industry.
        </Text>

        <Text style={documentStyles.description}>
          I utilized a modern tech stack to build the product, leveraging {"\n"}serverless functions, React (JavaScript), NoSQL database, and {"\n"}storage management through Google's Firebase service.
          By adopting a serverless architecture, we achieved scalability, flexibility, and cost efficiency in our product.
        </Text>

        <Text style={documentStyles.descriptionRole}> <Text style={documentStyles.descriptionBold}>Directco</Text> — Co-founder, Lead Full Stack Engineer & Designer</Text>
        <Text style={documentStyles.descriptionYear}>2016 – Present</Text>
        <Text style={documentStyles.description}>
          Started as lead designer and full stack developer, eventually becoming lead full stack engineer.
          Responsible for building of web and mobile applications, AWS infrastructure services, and design. {"\n"}
          Successfully built services from concept to product, serving major FMCG clients like Fonterra, Red Bull, Unilever, Asahi, Bidfood, and others.
        </Text>

        <Text style={documentStyles.description}>
          I played a core role in building a secure, modern tech stack that guaranteed high security standards for our global enterprise clients. Our tech stack included
          React (JavaScript), NodeJS, MySQL, Docker, React-native (for mobile development) and other technologies. AWS services were used for infrastructure, including EC2, S3, Loadbalancing, Quicksight and others.
          We also established API endpoints and SFTP integrations for enterprise integrations, facilitating seamless data exchange with external systems.
        </Text>

        <Text style={documentStyles.descriptionRole}>
          <Text style={documentStyles.descriptionBold}>Blacksheepdesign</Text> — 
          Designer
        </Text>
        <Text style={documentStyles.descriptionYear}>2012 – 2016</Text>
        <Text style={documentStyles.description}>
          Designer with a specialisation in branding. Built brands for clients.
        </Text>

        <Text style={documentStyles.descriptionRole}>
          <Text style={documentStyles.descriptionBold}>Freelance</Text> — 
          Branding & Web Designer
        </Text>
        <Text style={documentStyles.descriptionYear}>2015 – 2016</Text>
        <Text style={documentStyles.description}>
          Freelance designer with a focus on branding, web design and
          front-end development.
          {"\n"}
          {"\n"}
        </Text>

        <Text style={documentStyles.descriptionHeading}>Education</Text>

        <Text style={documentStyles.descriptionRole}><Text style={documentStyles.descriptionBold}>University of Waikato</Text> — Masters in Design</Text>
        <Text style={documentStyles.descriptionYear}>2008 – 2012</Text>
        <Text style={documentStyles.description}>
          Learned how to creatively and methodically solve problems. {"\n"}
          Graduated with Masters specialising in Branding and Typography.
        </Text>

        <Text style={documentStyles.descriptionRole}><Text style={documentStyles.descriptionBold}>Devacademy</Text> — Software Developer Graduate</Text>
        <Text style={documentStyles.descriptionYear}>2016</Text>
        <Text style={documentStyles.description}>
          Full stack web development bootcamp. Intense real-world projects built with agile workflows and teams.
        </Text>

        <Text style={documentStyles.descriptionRole}><Text style={documentStyles.descriptionBold}>Scrum.org</Text> — Professional Scrum Master I</Text>
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
              Sean Johnson - Curriculum Vitae
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid container xs={12} sm={6} direction="row" justify="flex-end">
            {isClient && <PDFDownloadLink
              className={classes.pdfDownloadLink}
              document={<MyResume />}
              fileName="Sean-Johnson-CV.pdf">
              {({ blob, url, loading, error }) => (loading
                ? 'Loading...'
                : <MyButton buttonText={"Download C.V."}/>)}
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