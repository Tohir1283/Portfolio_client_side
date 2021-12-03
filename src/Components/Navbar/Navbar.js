import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useStyles } from "../../Styles/useStyles";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  const classes = useStyles();
  const navLinks = [
    {
      label: "Projects",
      id: "Projects",
    },

    { label: "Contact Me", id: "Contact" },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="fixed" sx={{ boxShadow: 0 }}>
        <Toolbar className={classes.navbar}>
          <Box className={classes.toolbar}>
            <Fade left>
              <Typography
                variant="h4"
                component="h6"
                className={classes.navFont}
                style={{ fontFamily: "'Comforter', cursive" }}
              >
                {"< Tohirul Islam />"}
              </Typography>
            </Fade>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Fade right>
                <Box>
                  {navLinks.map((item, index) => (
                    <Button id={item.id} key={index}>
                      <span className={classes.navLinks}> {item.label}</span>
                    </Button>
                  ))}
                </Box>
              </Fade>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" }, mt: 1 }}>
              <MenuIcon onClick={() => console.log("clicked")} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
