import React from "react";
import Particles from "react-tsparticles/cjs/particles";
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
          background: {},
          fpsLimit: 75,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },

              resize: false,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 20,
                opacity: 0.8,
                size: 10,
              },
            },
          },
          particles: {
            color: {
              value: ["#3fb7db", "#FFFF00", "#990000"],
            },
            links: {
              color: "#3fb7db",
              distance: 50,
              enable: true,
              opacity: 0.1,
              width: 1,
              onHover: {
                color: {
                  value: "#3fb7db",
                },
              },
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "bottom",
              enable: true,
              random: false,
              speed: 1,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                value_area: 3000,
              },
              value: 80,
            },
            opacity: {
              value: 0.25,
            },
            shape: {
              type: "star",
            },
            size: {
              random: false,
              value: 2,
            },
          },
          detectRetina: false,
        }}
      />
    </div>
  );
};

export default Particle;
