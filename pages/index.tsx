import React from "react";
import Layout from "../components/layout";
import { Button, Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  img: {
    height: "100%",
    width: "100%",
    opacity: 0.75,
    minHeight: 600,
  },
  card: {
    height: 600,
  },
  title: {
    padding: 100,
    fontWeight: 900,
  },
  grid: {
    marginTop: 20,
    marginBottom: 50,
  },
  content: {
    marginBottom: 20,
  },
});

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Card className={classes.card}>
        <CardMedia
          component="div"
          className={classes.img}
          image="/images/lake.jpg"
          title="Pinnacle Acoustic Consultancy"
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} md={7}>
              <div className={classes.title}>
                <Typography variant="h1">
                  Pinnacle Acoustic Consultants
                </Typography>
                <Typography variant="h5">
                  Experts in Noise, Sound and Vibration
                </Typography>
              </div>
            </Grid>
          </Grid>
        </CardMedia>
      </Card>
      <Grid
        className={classes.grid}
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={10} md={8}>
            <div>
              <Typography className={classes.content} variant="h2">
                About Us
              </Typography>
              <Typography
                className={classes.content}
                variant="h5"
                component="p"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <Button variant="contained" color="primary">
                About us
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
