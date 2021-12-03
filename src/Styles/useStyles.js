import Image from "../media/brandBanner.2541860e.jpg";
import { makeStyles } from "@material-ui/core";
import { Themes } from "./../Components/Themes/Themes";

export const useStyles = makeStyles((theme) => ({
  //Top Banner Styling for landing page
  root: {
    width: "100%",
    maxHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right,#04303140
    ,#00606473
    ), url(${Image})`,
    opacity: 0.656,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  //Styling of  Section containing landing banner information
  headerContainer: {
    width: "100%",
    maxHeight: "85vh",
    boxSizing: "border-box",
    height: "auto",
    padding: "17% 10%",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "left",
    textShadow: "2px 2px 1px black",
  },
  // Top Banner information heading
  headerTitle: {
    textAlign: "left",
    fontSize: "3rem",
    color: Themes.colors.base2,
  },
  // Top Banner information description
  headerDesc: {
    textAlign: "left",
    color: Themes.colors.base2,
  },
  // Material UI AppBar Customization
  navbar: {
    background: "transparent",
    backgroundColor: Themes.colors.base1,
    color: Themes.colors.base2,
  },
  // Material UI Toolbar Customization
  toolbar: {
    width: "100%",
    padding: "0 5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // Font for navbar
  navFont: {
    fontFamily: "'Comforter', cursive",
  },
  // Font for navbar buttons
  navLinks: {
    color: Themes.colors.base2,
  },
  // Resume Download Button Styling
  decorator: {
    display: "flex",
    padding: "5px 0",
    color: Themes.colors.base2,
    fontWeight: "bolder",
    fontFamily: "'Roboto', sans-serif",
    position: "relative",
    // pseudo element before
    "&:before": {
      width: "45px",
      height: "45px",
      backgroundColor: Themes.colors.primary,
      content: "''",
      borderRadius: "50%",
    },
  },
  // Resume Button text Styling
  decoratorText: {
    lineHeight: "45px",
    position: "absolute",
    left: "20px",
  },
  // Resume Button Arrow Styling
  resumeArrow: {
    lineHeight: "18px",
    position: "absolute",
    top: "15px",
    left: "80px",
    fontWeight: "bold",
    transition: "all .9s ease",
    "&:hover ": {
      transform: "scale(1.3)",
    },
  },

  // Styles For Web Application Body
  section: {
    backgroundColor: Themes.colors.base1,
    padding: theme.spacing(10, 0, 8, 0),
  },

  // Style For About ME section
  sectionHeadingContainer: {
    padding: theme.spacing(1),
  },

  // Styles For Section Title Divider
  divider: {
    display: "block",
    width: "165px",
    height: "4px",
    backgroundColor: Themes.colors.primary,
    margin: theme.spacing(2, 0),
  },
  // About Me image responsive Styling
  responsiveImage: {
    width: "100%",
    height: "auto",
  },
  // About Me Title
  sectionHeading: {
    fontWeight: 700,
    color: Themes.colors.base2,
    margin: theme.spacing(1, 0),
  },
  // About Me Description
  sectionDesc: {
    color: Themes.colors.base2,
    margin: theme.spacing(1, 0),
  },
}));
