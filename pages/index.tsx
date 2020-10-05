import React from "react";
import Layout from "../components/layout";
import { Box, Card, CardActionArea, CardMedia, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  img: {
    height: "100%",
    width: "100%",
    opacity: 0.75,
  },
  card: {
    maxHeight: 600,
  },
});

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.img}
          alt="Lake"
          image="/images/lake.jpg"
          title="Lake"
        />
      </Card>
    </Layout>
  );
};

export default Home;
