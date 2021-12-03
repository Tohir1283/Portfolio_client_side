import { useStyles } from "../../Styles/useStyles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Typewriter } from "react-simple-typewriter";

export const Decorator = ({ label, withIcon, styles }) => {
  const classes = useStyles();
  return (
    <Box className={classes.decorator} style={styles}>
      <Typography variant="span" className={classes.decoratorText}>
        {label}
      </Typography>
      <Typography variant="span" className={classes.resumeArrow}>
        {withIcon && (
          <ArrowDownwardIcon onClick={() => console.log(classes.resumeArrow)} />
        )}
      </Typography>
    </Box>
  );
};

export const Divider = ({ style }) => {
  const classes = useStyles();
  return (
    <Box style={style} sx={{ my: 2 }}>
      <Typography variant="span" className={classes.divider}></Typography>
    </Box>
  );
};

export const RenderSectionHeading = ({
  sectionLabel,
  heading,
  centerAlign,
  description1,
  description2,
  width,
}) => {
  const classes = useStyles();
  const words = [];
  words.push(heading);
  return (
    <Box className={classes.sectionHeadingContainer}>
      {Decorator({
        label: sectionLabel,
        withIcon: false,
        style: centerAlign ? { width: "100px", margin: "10px auto" } : "",
      })}
      <Typography
        sx={{ fontWeight: "bold" }}
        variant="h5"
        align={centerAlign ? "center" : "left"}
        className={classes.sectionHeading}
      >
        <span className={classes.headerDesc}>
          {/* Style will be inherited from the parent element */}
          {heading && (
            <Typewriter
              words={words}
              loop={5000}
              cursor
              cursorStyle="_"
              typeSpeed={170}
              deleteSpeed={150}
              delaySpeed={500}
            />
          )}
        </span>
      </Typography>

      <Divider style={width} />

      <Typography
        variant="body1"
        align={centerAlign ? "center" : "left"}
        className={classes.sectionDesc}
      >
        {description1}
      </Typography>
      <p></p>
      <Typography
        variant="body1"
        align={centerAlign ? "center" : "left"}
        className={classes.sectionDesc}
      >
        {description2}
      </Typography>
    </Box>
  );
};
