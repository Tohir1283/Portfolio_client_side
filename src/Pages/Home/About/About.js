import { Box } from "@material-ui/core";
import { Container, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../../../Styles/useStyles";
import Image from "../../../media/About.964e39b2.jpg";
import { RenderSectionHeading } from "./../../../Components/commonComponents/commonComponents";
import Fade from "react-reveal/Fade";

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={10}>
          <Grid item sm={5} sx={{ display: { xs: "none", sm: "block" } }}>
            <Fade left>
              <img
                src={Image}
                alt="About Me"
                className={classes.responsiveImage}
              />
            </Fade>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Fade right>
              <RenderSectionHeading
                sectionLabel="About Me"
                heading="Why hire me for your project?"
                description1="A self taught developer who loves to code and learn new things every day. And who have always been curious and passionate about web development."
                description2="MERN Stack Web developer with ability to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled in Front End technologies such as Html5 , Css3 , JavaScript , React , BootStrap, Material UI, Sass, and Back End technologies such as Node.JS, Express JS and MongoDb. Learning a variety of scripting languages and multimedia tools is one of my strengths. I am also a hard worker and team player. I am looking for a challenging opportunity that will enable me to use my skills and abilities to achieve a challenging goal."
              />
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
