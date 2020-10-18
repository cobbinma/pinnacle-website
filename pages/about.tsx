import React from "react";
import Layout from "../components/layout";
import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Banner from "../components/Banner";

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
      <Banner image="/images/london.jpg" title="About" height={300} />
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
                We are a new start-up company which has been formed as a result
                of the Covid-19 pandemic. Members of our team held senior
                positions in Arup and other organisations and were made
                redundant in 2020. We have kept a core team of noise specialists
                together which means that we can offer the same level of
                expertise and quality of advice that you would get if you
                instructed a large firm of consultants but at the fraction of
                the cost.
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
          <Grid item xs={10} md={8} className={classes.content}>
            <div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item md={8}>
                  <Typography variant="h5" component="p">
                    Our team have held client roles on nationally significant
                    infrastructure projects. This means that we are well placed
                    to offer a range of services including seconded roles,
                    agency work as well as providing traditional consultancy
                    services.
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
          <Grid item xs={10} md={8} className={classes.content}>
            <Typography variant="h5" component="p">
              We provide services to the public (local authorities and
              Government) and private sectors across a wide range of sectors
              including:
              <ul>
                <li>Aviation</li>
                <li>Rail</li>
                <li>Highways</li>
                <li>Construction</li>
                <li>Industrial</li>
                <li>Commercial</li>
                <li>Energy</li>
                <li>Water</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
