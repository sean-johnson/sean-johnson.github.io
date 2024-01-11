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
          <Text style={documentStyles.jobDescriptionSubHeading}>Full Stack Engineer +</Text>
          <Text style={documentStyles.jobDescriptionSubHeading}>Product Designer</Text>
        </View>
        <Text style={documentStyles.descriptionHeading}>Contact</Text>
        <Text style={documentStyles.description}>
          sean-johnson.github.io {"\n"}
          sean.johnson.dev@gmail.com {"\n"}
          +64 27 214 0011 {"\n"}
        </Text>
        <Text style={documentStyles.descriptionHeading}>Skills</Text>
        <Text style={documentStyles.description}>
          Full Stack Engineer {"\n"}
          DevOps {"\n"}
          Analytics {"\n"}
          Data Driven Dev {"\n"}
          Agile Workflow {"\n"}
          CI / CD {"\n"}
          Experience Strategy {"\n"}
          UX / UI {"\n"}
        </Text>
        <Text style={documentStyles.descriptionHeading}>Technologies{"\n"}& Languages</Text>
        <Text style={documentStyles.description}>
          Javascript, Typescript {"\n"}
          MySQL {"\n"}
          NodeJS {"\n"}
          ReactJS + Redux {"\n"}
          React Native + Expo {"\n"}
          Docker, Containerization {"\n"}
          Google Cloud Services {"\n"}
          Amazon Web Services {"\n"}
          NoSQL {"\n"}
          Git, Github {"\n"}
          Linux, Bash Scripting {"\n"}
        </Text>
        <Text style={documentStyles.descriptionHeading}>Working Languages</Text>
        <Text style={documentStyles.description}>
          Python {"\n"}
          C# {"\n"}
          Java {"\n"}
        </Text>
      </View>
      <View style={documentStyles.rightColumn}>
        <View style={documentStyles.rightTopSection}>
          <Text style={documentStyles.tagline}></Text>
        </View>
        <Text style={documentStyles.descriptionHeading}>Essential Traits</Text>

        {/* <Text style={documentStyles.descriptionYear}>Soft skills, work life day to day</Text> */}
        <Text style={documentStyles.description}>
          I take pride in good communication and active listening, which enable me to build strong relationships and trust. Collaborating on work energises me, as I enjoy sharing ideas, solving problems rationally and delivering value creatively.
        </Text>
        <Text style={documentStyles.description}>
          Working in Tech exposes me to constant change, so adopting a growth mindset is essential to me. It also fosters a healthy work culture where feedback and challenges are seen as opportunities for improvement. If there are high-pressure situations, I tend to approach them with a calm, solution-focused attitude.
        </Text>
        <Text style={documentStyles.descriptionHeading}>Experience</Text>

        <Text style={documentStyles.descriptionRole}> <Text style={documentStyles.descriptionBold}>Taskhunter</Text> — Co-founder, Lead Full Stack Engineer</Text>
        <Text style={documentStyles.descriptionYear}>2020 – Present</Text>
        <Text style={documentStyles.description}>
          I led the development of our new product, overseeing its design, development, and software architecture. The product is based on the insights we gained from Directco’s experience, expanding our services beyond the FMCG industry.
        </Text>

        <Text style={documentStyles.description}>
          I utilized a modern tech stack to build web and mobile applications, leveraging serverless functions, React (JavaScript), NoSQL and GCP services. By adopting a serverless architecture, we achieved {"\n"} scalability, flexibility, and cost efficiency in our product.
        </Text>

        <Text style={documentStyles.descriptionRole}> <Text style={documentStyles.descriptionBold}>Directco</Text> — Co-founder, Full Stack Developer, Lead UX</Text>
        <Text style={documentStyles.descriptionYear}>2016 – Present</Text>
        <Text style={documentStyles.description}>
          I started as a full stack developer, eventually becoming a lead full stack engineer responsible for building and maintaining web and mobile applications, servers, AWS infrastructure services and API endpoints.
        </Text>

        <Text style={documentStyles.description}>
          We successfully built products that serve major FMCG clients like Fonterra, Red Bull, Unilever, Asahi, Bidfood and others. I played a core role in building a secure, modern tech stack that guaranteed high security standards for our global enterprise clients. 
        </Text>

        <Text style={documentStyles.description}>
          Our tech stack is React, NodeJS, MySQL, Docker, React-native and other technologies. Our infrastructure uses AWS. We established API endpoints and  SFTP integrations for secure data exchange.
          {"\n"}
          {"\n"}
        </Text>

        <Text style={documentStyles.descriptionHeading}>Education</Text>

        <Text style={documentStyles.descriptionRole}><Text style={documentStyles.descriptionBold}>Scrum.org</Text> — Professional Scrum Master I</Text>
        <Text style={documentStyles.descriptionYear}>2021</Text>
        <Text style={documentStyles.description}>
          Earned Professional Scrum Master I certification. Learned Agile methodology and SCRUM doctrine for faciliating agile teams.  
        </Text>

        <Text style={documentStyles.descriptionRole}><Text style={documentStyles.descriptionBold}>Devacademy</Text> — Software Developer Graduate</Text>
        <Text style={documentStyles.descriptionYear}>2016</Text>
        <Text style={documentStyles.description}>
          Full stack web development bootcamp. Intense real-world projects built with agile workflows and teams. 
          Apart from learning to build {"\n"}software, a significant portion was
          devoted to soft skills, learning how to learn, interacting as a team and working with agile methodologies.
        </Text>

        <Text style={documentStyles.descriptionRole}><Text style={documentStyles.descriptionBold}>University of Waikato</Text> — Masters in Design</Text>
        <Text style={documentStyles.descriptionYear}>2008 – 2012</Text>
        <Text style={documentStyles.description}>
          I learned how to apply design thinking to solve problems creatively and communicate ideas through any medium.
          Graduated with Masters specialising in Branding and Typography.
        </Text>

        <Text style={documentStyles.descriptionHeading}>Projets Showcase</Text>

        <Text style={documentStyles.descriptionRole}><Text style={documentStyles.descriptionBold}>https://sean-johnson.github.io</Text>
        {"\n"}{"\n"}Explore my website to view a curated collection of my work.{"\n"}You can also visit me on Github at <Text style={documentStyles.descriptionUnderline}>www.github.com/sean-johnson</Text>.</Text>
        <Text style={documentStyles.descriptionYear}>{"\n"}Additional projects and references can be provided upon request.{"\n"}</Text>
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