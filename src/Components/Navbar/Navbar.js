import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useStyles } from "../../Styles/useStyles";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from "react-reveal/Fade";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" sx={{ boxShadow: 0 }}>
        <Toolbar className={classes.navbar}>
          <Box className={classes.toolbar}>
            <Fade left>
              <Typography
                variant="h4"
                component="h6"
                sx={{ mt: 2 }}
                className={classes.navFont}
                style={{ fontFamily: "'Comforter', cursive" }}
              >
                {"< Tohirul Islam />"}
              </Typography>
            </Fade>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Fade right>
                <Box>
                  <Button>
                    <span>
                      <Link smooth to="/#home" className={classes.navLinks}>
                        Home
                      </Link>
                    </span>
                  </Button>
                  <Button>
                    <span>
                      <Link smooth to="/#about" className={classes.navLinks}>
                        About Me{" "}
                      </Link>
                    </span>
                  </Button>
                  <Button>
                    <span>
                      <Link smooth to="/#projects" className={classes.navLinks}>
                        Projects
                      </Link>
                    </span>
                  </Button>
                  <Button>
                    <span>
                      <Link smooth to="/#contact" className={classes.navLinks}>
                        Contact Me
                      </Link>
                    </span>
                  </Button>
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
