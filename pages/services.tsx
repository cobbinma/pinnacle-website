import React from "react";
import Layout from "../components/layout";
import Banner from "../components/Banner";
import { Grid, Typography } from "@material-ui/core";
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

const Services: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Banner image="/images/beach.jpg" title="Services" height={300} />
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
      </Grid>
    </Layout>
  );
};

export default Services;
