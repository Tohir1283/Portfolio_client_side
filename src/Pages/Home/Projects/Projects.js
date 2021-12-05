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

AOS.init();
const style = [{ width: "190px", margin: "16px auto" }];

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
    cover: "https://i.ibb.co/86hqxMv/ass11.jpg",
    title: "Path Well - Senior Care Center",
    functions: [
      "Admin & User Panel",
      "Nested tabs",
      "Clean and responsive design",
    ],
    links: { liveLink: "", clientSide: "", serverSide: "" },
  },
  {
    cover: "https://i.ibb.co/zRm3NDS/ass12.jpg",
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
    <Box className={classes.sectionDark} sx={{ py: 15 }}>
      <Grid container>
        <Grid item xs={12} sx={8}>
          <Fade>
            <Decorator
              label="Projects"
              styles={{ width: "100px", margin: "10px auto" }}
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
        <Grid container spacing={10}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} data-aos="flip-right">
              <div>
                <Box className={classes.imageContainer}>
                  <img
                    src={project.cover}
                    alt="website mockup"
                    className={classes.responsiveImage}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "start", px: 1, py: 1, m: 0 }}
                  >
                    {project.title}
                  </Typography>
                  <ul style={{ textAlign: "start", margin: "0 15px" }}>
                    {project.functions.map((functionality) => (
                      <li>{functionality}</li>
                    ))}
                  </ul>
                  <Box style={{ width: "100%", marginTop: "16px" }}>
                    <Grid container>
                      <Grid item>
                        <Button variant="outlined" sx={{ fontSize: 13, px: 1 }}>
                          {" "}
                          <VisibilityIcon style={{ margin: "0 4px" }} /> Live
                          Link
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" sx={{ fontSize: 13, px: 1 }}>
                          <GitHubIcon style={{ margin: "0 4px" }} />
                          Git Client
                        </Button>
                      </Grid>
                      <Grid item>
                        {" "}
                        <Button variant="outlined" sx={{ fontSize: 13, px: 1 }}>
                          {" "}
                          <GitHubIcon style={{ margin: "0 4px" }} /> Git Server
                        </Button>{" "}
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
