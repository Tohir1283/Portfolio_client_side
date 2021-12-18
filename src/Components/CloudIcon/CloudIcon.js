import { Box } from "@mui/material";
import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import { siTypescript } from "simple-icons/icons";
import { siJavascript } from "simple-icons/icons";
import { siReact } from "simple-icons/icons";
import { siHtml5 } from "simple-icons/icons";
import { siCss3 } from "simple-icons/icons";
import { siNodedotjs } from "simple-icons/icons";
import { siExpress } from "simple-icons/icons";
import { siFirebase } from "simple-icons/icons";
import { siGit } from "simple-icons/icons";
import { siGithub } from "simple-icons/icons";
import { siGitlab } from "simple-icons/icons";
import { siVisualstudiocode } from "simple-icons/icons";
import { siFigma } from "simple-icons/icons";
import { siHeroku } from "simple-icons/icons";
import { siNetlify } from "simple-icons/icons";
import { siAdobexd } from "simple-icons/icons";
import { siAdobelightroom } from "simple-icons/icons";
import { siAdobephotoshop } from "simple-icons/icons";
import { siC } from "simple-icons/icons";
import { siMongodb } from "simple-icons/icons";
import { siMui } from "simple-icons/icons";
import { siSass } from "simple-icons/icons";
import { siKalilinux } from "simple-icons/icons";
import { siBootstrap } from "simple-icons/icons";
import { siChakraui } from "simple-icons/icons";
import { siSvg } from "simple-icons/icons";
import { siAdobeillustrator } from "simple-icons/icons";
import { siTailwindcss } from "simple-icons/icons";
import { siStripe } from "simple-icons/icons";
import { siRedux } from "simple-icons/icons";
import { siReactrouter } from "simple-icons/icons";

const CloudIcon = () => {
  const background = "#151515";

  const jsIconTag = [
    siTypescript,
    siJavascript,
    siReact,
    siHtml5,
    siCss3,
    siNodedotjs,
    siExpress,
    siFirebase,
    siGit,
    siGithub,
    siGitlab,
    siFigma,
    siHeroku,
    siNetlify,
    siAdobexd,
    siAdobelightroom,
    siAdobephotoshop,
    siVisualstudiocode,
    siC,
    siMongodb,
    siMui,
    siSass,
    siKalilinux,
    siBootstrap,
    siChakraui,
    siSvg,
    siAdobeillustrator,
    siTailwindcss,
    siStripe,
    siRedux,
    siReactrouter,
  ].map((s) =>
    renderSimpleIcon({
      icon: s,
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
      <siSass />
    </div>
  );
};

export default CloudIcon;
