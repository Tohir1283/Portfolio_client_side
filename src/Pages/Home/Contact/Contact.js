import React, { useRef } from "react";
import { RenderSectionHeading } from "../../../Components/commonComponents/commonComponents";
import { Decorator } from "./../../../Components/commonComponents/commonComponents";
import Fade from "react-reveal/Fade";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useStyles } from "../../../Styles/useStyles";
import Box from "@mui/material/Box";
import Image from "../../../media/contactus.49e280c5.jpg";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

const style = [{ width: "285px", margin: "15px 0" }];

init("user_8Wmq29wdXRNEKRwCb3QUN");
const Contact = () => {
  const classes = useStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending email");
    emailjs
      .sendForm(
        "gmail",
        "template_fq8mnjh",
        form.current,
        "user_8Wmq29wdXRNEKRwCb3QUN"
      )
      .then(
        (result) => {
          alert(result.text);
          console.log("done");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className={classes.scrollSection}>
        <Box className={classes.section}>
          <Container>
            <Grid container spacing={5}>
              <Grid item md={5} sx={{ display: { xs: "none", md: "block" } }}>
                <Fade left>
                  <img
                    src={Image}
                    alt="About"
                    className={classes.responsiveImage}
                  />
                </Fade>
              </Grid>
              <Grid
                item
                xs={12}
                md={7}
                sx={{ textAlign: { xs: "center", md: "start" } }}
              >
                <br />
                <Fade down>
                  <Decorator
                    label="Contact Me"
                    withIcon={false}
                    styles={{ width: "100px", margin: "10px auto" }}
                  />
                </Fade>
                <RenderSectionHeading
                  heading="Seems to be interesting?"
                  description1="Finished checking me out ? Let's talk about you."
                  description2="Feel free to contact me."
                  width={style[0]}
                />
                <Fade up>
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className={classes.form}
                  >
                    <input
                      required
                      type="text"
                      name="client_name"
                      placeholder="Enter Your Name"
                      className={classes.formItems}
                    />
                    <input
                      required
                      type="text"
                      name="email"
                      placeholder="Enter Your email"
                      className={classes.formItems}
                    />
                    <textarea
                      required
                      cols="42"
                      rows="5"
                      type="text"
                      name="message"
                      placeholder="Enter your message"
                      className={classes.formItems}
                      style={{ height: "240px", borderRadius: "25px" }}
                    />
                    <input
                      type="submit"
                      value="Send"
                      className={classes.buttonSubmit}
                    />
                  </form>
                </Fade>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
