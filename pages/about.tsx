import React from "react";
import Layout from "../components/layout";
import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  img: {
    height: "100%",
    width: "100%",
    opacity: 0.75,
    minHeight: 600,
  },
  card: {
    height: 200,
  },
  title: {
    marginTop: 50,
    fontWeight: 900,
  },
  grid: {
    marginTop: 60,
    marginBottom: 50,
  },
  content: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 70,
  },
  avatar: {
    height: 250,
    width: 250,
    borderRadius: "50%",
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
          image="/images/london.jpg"
          title="Pinnacle Acoustic Consultancy"
        >
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={11} md={7}>
              <div className={classes.title}>
                <Typography variant="h1">About</Typography>
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
        <Grid
          className={classes.section}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={10} md={8}>
            <div>
              <Typography
                className={classes.content}
                variant="h4"
                component="p"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid
          className={classes.section}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={10} md={8}>
            <div>
              <Typography className={classes.content} variant="h3">
                Who We Are
              </Typography>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item md={8}>
                  <Typography
                    className={classes.content}
                    variant="h5"
                    component="p"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Card className={classes.avatar}>
                    <CardMedia
                      component="img"
                      image="/images/colin-cobbing.jpg"
                      title="Colin Cobbing"
                    />
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
