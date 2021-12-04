import { Box } from "@material-ui/core";
import { Container, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../../../Styles/useStyles";
import Image from "../../../media/About.964e39b2.jpg";
import {
  Decorator,
  RenderSectionHeading,
} from "./../../../Components/commonComponents/commonComponents";
import Fade from "react-reveal/Fade";

const style = [{ width: "320px" }, { width: "170px" }];

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={5}>
          <Grid item md={5} sx={{ display: { xs: "none", md: "block" } }}>
            <Fade left>
              <img
                src={Image}
                alt="About"
                className={classes.responsiveImage}
              />
            </Fade>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{ textAlign: { xs: "center", md: "start" } }}
          >
            <br />
            <Fade right>
              <Decorator
                label="About"
                withIcon={false}
                style={{ width: "100px", margin: "10px auto" }}
              />
            </Fade>
            <RenderSectionHeading
              heading="Who's this guy?"
              description1="I'm a Full Stack Developer.
                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                I love building interfaces and code interactive productions. While I spend most of my time with UIs, I also enjoy getting involved in design, back-end development and helping improve agile processes. I truly enjoy crafting digital experiences; whether that is handling the UX/UI design, leading the software development by example or managing the entire project. Let's make something special."
              width={style[1]}
            />
            <RenderSectionHeading
              sectionLabel="About Me"
              heading="Why hire me for your project?"
              description1="A self taught developer who loves to code and learn new things every day. And who have always been curious and passionate about web development."
              description2="MERN Stack Web developer with ability to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled in Front End technologies such as Html5 , Css3 , JavaScript , React , BootStrap, Material UI, Sass, and Back End technologies such as Node.JS, Express JS and MongoDb. Learning a variety of scripting languages and multimedia tools is one of my strengths. I am also a hard worker and team player. I am looking for a challenging opportunity that will enable me to use my skills and abilities to achieve a challenging goal."
              width={style[0]}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
