import React from "react";
import Layout from "../components/layout";
import { Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Banner from "../components/Banner";

const useStyles = makeStyles({
  grid: {
    marginTop: 70,
    marginBottom: 50,
  },
  form: {
    display: "flex",
    flexGrow: 2,
  },
  field: {
    width: "100%",
  },
});

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Banner image="/images/contact.jpg" title="Contact" height={300} />
      <Grid
        className={classes.grid}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <form name="contact" action="/" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <TextField
                className={classes.field}
                type="text"
                name="name"
                required
                id="name"
                label="Name"
                variant="outlined"
                color="primary"
              />
            </p>
            <p>
              <TextField
                className={classes.field}
                type="email"
                name="email"
                required
                id="email"
                label="Email"
                variant="outlined"
                color="primary"
              />
            </p>
            <p>
              <TextField
                className={classes.field}
                id="message"
                name="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                color="primary"
              />
            </p>
            <p>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </p>
          </form>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
