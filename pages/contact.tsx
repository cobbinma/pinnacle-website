import React from "react";
import Layout from "../components/layout";
import {
  Button,
  Card,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  img: {
    height: "100%",
    width: "100%",
    opacity: 0.75,
    minHeight: 600,
  },
  card: {
    height: 300,
  },
  title: {
    marginTop: 50,
    fontWeight: 900,
  },
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
      <Card className={classes.card}>
        <CardMedia
          component="div"
          className={classes.img}
          image="/images/contact.jpg"
          title="Pinnacle Acoustic Consultancy"
        >
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={11} md={7}>
              <div className={classes.title}>
                <Typography variant="h1">Contact</Typography>
              </div>
            </Grid>
          </Grid>
        </CardMedia>
      </Card>
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
