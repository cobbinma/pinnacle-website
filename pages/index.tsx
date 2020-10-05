import React from "react";
import Layout from "../components/layout";
import { Card, CardMedia, Typography } from "@material-ui/core";
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
    maxWidth: "60%",
    padding: 100,
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
          <div className={classes.title}>
            <Typography variant="h1">Pinnacle Acoustic Consultancy</Typography>
            <Typography variant="h5">
              Experts in Noise, Sound and Vibration Assessments
            </Typography>
          </div>
        </CardMedia>
      </Card>
    </Layout>
  );
};

export default Home;
