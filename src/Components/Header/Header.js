/* eslint-disable no-undef */
import React from "react";
import Box from "@mui/material/Box";
import { useStyles } from "../../Styles/useStyles";
import { Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import { Typewriter } from "react-simple-typewriter";
import { Decorator } from "../commonComponents/commonComponents";

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.headerContainer}>
          <Fade up left>
            <Decorator label="Resume" withIcon={true} />
          </Fade>
          <Typography
            variant="h4"
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
            <Typography
              variant="p"
              sx={{ textAlign: "start", display: { xs: "none", sm: "block" } }}
            >
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
