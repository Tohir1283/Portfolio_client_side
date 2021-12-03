import { useStyles } from "../../Styles/useStyles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Decorator = ({ label, withIcon }) => {
  const classes = useStyles();
  return (
    <Box className={classes.decorator}>
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
// export const RenderSectionHeading = () => {};
