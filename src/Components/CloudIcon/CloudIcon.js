import { Box } from "@mui/material";
import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import allIcons from "simple-icons";

const CloudIcon = () => {
  const background = "#151515";
  // const [background, setBackground] = useState("#151515");

  // const toggleBg = () => {
  //   if (background === "#151515") {
  //     setBackground("#000");
  //     return;
  //   }

  //   setBackground("#fff");
  // };

  const jsIconTag = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "firebase",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
    "heroku",
    "netlify",
    "adobexd",
    "adobelightroom",
    "adobephotoshop",
    "visualstudiocode",
    "c",
    "mongodb",
    "mui",
    "sass",
    "kalilinux",
    "bootstrap",
    "chakraui",
    "svg",
    "adobeillustrator",
    "tailwindcss",
    "stripe",
    "redux",
    "reactrouter",
  ].map((s) =>
    renderSimpleIcon({
      icon: allIcons.Get(s),
      minContrastRatio: background === "#fff" ? 1.2 : 2,
      bgHex: background,
      size: 102,
      fallbackHex: background === "#fff" ? "#000" : "#fff",
      onClick: (e) => e.preventDefault(),
    })
  );

  const containerProps = {};
  const canvasProps = {};
  const cloudProps = {};
  return (
    <div>
      <Box sx={{ pt: { md: 25, lg: 20 }, pr: { xs: -5, sm: 0, lg: 25 } }}>
        <Cloud
          containerProps={containerProps}
          canvasProps={canvasProps}
          options={cloudProps}
        >
          {jsIconTag}
        </Cloud>
      </Box>
    </div>
  );
};

export default CloudIcon;
