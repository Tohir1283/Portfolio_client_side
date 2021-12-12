import { Box } from "@mui/material";
import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import allIcons from "simple-icons";

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
].map((s) =>
  renderSimpleIcon({
    icon: allIcons.Get(s),
    size: 82,
  })
);

const CloudIcon = () => {
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
