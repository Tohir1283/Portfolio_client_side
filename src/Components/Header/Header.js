/* eslint-disable no-undef */
import React from "react";
import Box from "@mui/material/Box";
import Particles from "react-tsparticles";
import { useStyles } from "../../Styles/useStyles";
import { Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import { Typewriter } from "react-simple-typewriter";
import { Decorator } from "../commonComponents/commonComponents";

const Header = () => {
  const classes = useStyles();
  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <Box className={classes.root}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 45,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 50,
                  duration: 2,
                  opacity: 0.4,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 50,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },

              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 1500,
                },
                value: 180,
              },
              opacity: {
                value: 0.12,
              },
              shape: {
                type: "edge",
              },
              size: {
                random: true,
                value: 4,
              },
            },
            detectRetina: true,
          }}
        />
        <Box className={classes.headerContainer}>
          <Fade up left>
            <Decorator label="Resume" withIcon={true} />
          </Fade>
          <Typography
            variant="h4"
            component="h5"
            sx={{ fontWeight: 700 }}
            className={classes.headerTitle}
          >
            <Fade left>Hi! I am Tohirul Islam.</Fade>
          </Typography>
          <Typography
            variant="h5"
            component="h6"
            className={classes.headerDesc}
          ></Typography>
          <Fade down>
            <Typography
              variant="span"
              className={classes.headerDesc}
              sx={{ textAlign: "start", fontSize: 12 }}
            >
              {"< p > MERN Stack Developer </ p >"}
            </Typography>
          </Fade>{" "}
          <Typography
            variant="p"
            className={classes.headerDesc}
            sx={{ textAlign: "start" }}
          >
            <Fade left>I'm a Developer based in Dhaka, Bangladesh. </Fade>
          </Typography>
          <Fade right>
            <Typography variant="p" sx={{ textAlign: "start" }}>
              <span className={classes.headerDesc}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "I strive to build immersive and beautiful web applications using modern technologies.",
                    "I strive to build immersive and beautiful web applications using modern technologies.",
                    "I strive to build immersive and beautiful web applications using modern technologies.",
                    "I strive to build immersive and beautiful web applications using modern technologies.",
                    "I strive to build immersive and beautiful web applications using modern technologies.",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </Typography>
          </Fade>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
