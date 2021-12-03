import { Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../../Styles/useStyles";

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <h1>This is not about me</h1>
    </Box>
  );
};

export default About;
