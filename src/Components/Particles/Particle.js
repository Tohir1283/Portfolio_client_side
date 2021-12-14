import React from "react";
import Particles from "react-tsparticles";
import { useStyles } from "./../../Styles/useStyles";

const Particle = () => {
  const classes = useStyles();

  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className={classes.particles}>
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
                duration: 1,
                opacity: 0.5,
                size: 140,
              },
              push: {
                quantity: 10,
              },
              repulse: {
                distance: 50,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: [
                "#ffffff",
                "#00FFFF",
                "#FFFF99",
                "#f56991",
                "#F73718",
                "#FEDE17",
              ],
            },

            links: {
              color: "#ffffff",
              distance: 20,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "top to bottom",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 4000,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
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
    </div>
  );
};

export default Particle;
