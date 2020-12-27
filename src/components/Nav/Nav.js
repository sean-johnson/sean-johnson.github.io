import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Work from '../Work';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  upperLeftSection: {
		margin: theme.spacing(3, 0, 0, 0),
	},
	upperRightSection: {
		margin: theme.spacing(3, 0, 0, 0),
  },
  contentSection: {
    paddingTop: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexDirection: 'column'
  },
  tabsRoot: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column'
  },
  tabs: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'none'
  },
  tabRoot: {
    padding: '0px',
    paddingLeft: '15px',
    letterSpacing: '2px',
    fontSize: '0.75rem'
  },
  tabWrapper: {
    width: "100%",
    textAlign: 'left',
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyles = {
    root: classes.tabRoot,
    wrapper: classes.tabWrapper,
  }

  return (
    <Container maxWidth="100%">
      <Grid container>
        <Grid item xs={12} ys={12} sm={4}>
          <div className={classes.upperLeftSection}>
            <Typography variant="p" gutterBottom>
              S E A N — J O H N S O N
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} ys={12} sm={8}>
          <div className={classes.upperRightSection}>
            <div className={classes.tabsRoot}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                <Tab classes={tabStyles} label="Work" {...a11yProps(0)} />
                <Tab classes={tabStyles} label="About" {...a11yProps(1)} />
                <Tab classes={tabStyles} label="Contact" {...a11yProps(2)} />
              </Tabs>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <div className={classes.contentSection}>
            <TabPanel value={value} index={0}>
              <Work/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <About/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Contact/>
            </TabPanel>
          </div>
        </Grid>
      </Grid>
      <Footer/>
    </Container>
  );
}


