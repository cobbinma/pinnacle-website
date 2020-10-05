import React from "react";
import Layout from "../components/layout";
import { Box, Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Box width={1}>
        <Card className={classes.root}>
          <CardMedia
            style={{ height: 5, paddingTop: "56%" }}
            image="/images/lake.jpg"
          />
        </Card>
      </Box>
    </Layout>
  );
};

export default Home;
