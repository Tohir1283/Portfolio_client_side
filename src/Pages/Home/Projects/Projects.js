import React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Typography } from "@mui/material";
import { useStyles } from "./../../../Styles/useStyles";
import Fade from "react-reveal/Fade";
import {
  Decorator,
  RenderSectionHeading,
} from "./../../../Components/commonComponents/commonComponents";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "@material-ui/core";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Themes } from "./../../../Components/Themes/Themes";

AOS.init();
const style = [{ width: "230px", margin: "16px auto" }];

const projects = [
  {
    cover: "https://i.ibb.co/X40TLQp/ass10.jpg",
    title: "GetAway - Travel and Tours",
    functions: [
      "Advanced User/Admin Panel",
      "JWT & Firebase Secure Auth",
      "Custom Slider",
    ],
    links: { liveLink: "", clientSide: "", serverSide: "" },
  },
  {
    cover: "https://i.ibb.co/YXVMwnx/ass11.jpg",
    title: "Path Well - Senior Care Center",
    functions: [
      "Admin & User Panel",
      "Nested tabs",
      "Clean and responsive design",
    ],
    links: { liveLink: "", clientSide: "", serverSide: "" },
  },
  {
    cover: "https://i.ibb.co/DzVFmy3/ass12.jpg",
    title: "Conosin - Buy Luxury Watches",
    functions: [
      "Stripe Payment Gateway",
      "Clean and minimal design",
      "Custom Slider",
    ],
    links: { liveLink: "", clientSide: "", serverSide: "" },
  },
];
const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.scrollSection} id="projects">
      <Box className={classes.projects} sx={{ pt: 8 }}>
        <Grid container>
          <Grid item xs={12} sx={8}>
            <Fade left>
              <Decorator
                label="Projects"
                styles={{ width: "70px", margin: "10px auto" }}
                centerAlign={true}
              />
            </Fade>
            <RenderSectionHeading
              heading="Let's see my works"
              centerAlign={true}
              width={style[0]}
            />
            <br />
            <br />
          </Grid>
        </Grid>
        {/* Projects Section */}
        <Container maxWidth="lg">
          <Fade>
            <Grid container spacing={2}>
              {projects.map((project) => (
                <Grid item xs={12} sm={6} lg={4}>
                  <div className={classes.projectCard} data-aos="flip-right">
                    <Box className={classes.imageContainer}>
                      <img
                        src={project.cover}
                        alt="website mockup"
                        className={classes.responsiveImage}
                      />
                    </Box>
                    <Box className={classes.projectDetails}>
                      <Typography
                        variant="h5"
                        sx={{ textAlign: "start", px: 3, py: 1, m: 0 }}
                      >
                        <Fade left>{project.title}</Fade>
                      </Typography>
                      <ul style={{ textAlign: "start", margin: "0 15px" }}>
                        <Fade down>
                          {project.functions.map((functionality) => (
                            <li>{functionality}</li>
                          ))}
                        </Fade>
                      </ul>
                      <Box style={{ width: "100%", marginTop: "16px" }}>
                        <Fade down>
                          <Grid container>
                            <Grid item xs={4}>
                              <Button
                                variant="outlined"
                                sx={{
                                  fontSize: 10,
                                  px: "auto",
                                  color: "white",
                                  borderColor: `${Themes.colors.primary}`,
                                  width: "100%",
                                  py: "auto",
                                  minHeight: { xs: "47px" },
                                }}
                              >
                                {" "}
                                <VisibilityIcon
                                  style={{ margin: "0 4px" }}
                                />{" "}
                                Live Link
                              </Button>
                            </Grid>
                            <Grid item xs={4}>
                              <Button
                                variant="outlined"
                                sx={{
                                  fontSize: 10,
                                  px: "auto",
                                  color: "white",
                                  borderColor: `${Themes.colors.primary}`,
                                  width: "100%",
                                  minHeight: { xs: "47px" },
                                }}
                              >
                                <GitHubIcon style={{ margin: "0 4px" }} />
                                Git Client
                              </Button>
                            </Grid>
                            <Grid item xs={4}>
                              {" "}
                              <Button
                                variant="outlined"
                                sx={{
                                  fontSize: 10,
                                  px: "auto",
                                  color: "white",
                                  borderColor: `${Themes.colors.primary}`,
                                  width: "100%",
                                  minHeight: { xs: "47px" },
                                }}
                              >
                                {" "}
                                <GitHubIcon
                                  style={{
                                    margin: "0 3px",
                                  }}
                                />{" "}
                                Git Server
                              </Button>{" "}
                            </Grid>
                          </Grid>
                        </Fade>
                      </Box>
                    </Box>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Fade>
        </Container>
      </Box>
    </div>
  );
};

export default Projects;
