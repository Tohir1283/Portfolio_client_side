import React from "react";
import Header from "../../Components/Header/Header";
import Particle from "../../Components/Particles/Particle";
import About from "./About/About";
import Projects from "./Projects/Projects";
import { useStyles } from "./../../Styles/useStyles";
import Contact from "./Contact/Contact";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.scrollContainer} id="home">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Particle />
    </div>
  );
};

export default Home;
