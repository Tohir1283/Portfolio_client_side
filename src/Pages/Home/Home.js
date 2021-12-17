import React from "react";
import Header from "../../Components/Header/Header";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
