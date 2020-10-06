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
    </Layout>
  );
};

export default About;
