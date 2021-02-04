import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Banner from "../components/Banner";
import { Entry } from "contentful";
import { IAboutPageFields } from "../@types/generated/contentful";
import { client } from "./_app";

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
    marginBottom: 20,
  },
  avatar: {
    height: 250,
    width: 250,
    borderRadius: "50%",
  },
});

const About: React.FC = () => {
  const classes = useStyles();

  const [about, setAbout] = useState<Entry<IAboutPageFields>>();

  useEffect(() => {
    client.getEntry<IAboutPageFields>("3m1ahZvsKeaFhUYdbsZEIP").then((a) => {
      setAbout(a);
    });
  }, [setAbout]);

  if (about == null) return null;

  return (
    <Layout>
      <Banner
        image={"https:" + about?.fields?.banner?.fields.file.url}
        title={about?.fields?.title}
        height={300}
      />
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
                {about?.fields?.topDescription}
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
                    {about?.fields?.description}
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Card className={classes.avatar}>
                    <CardMedia
                      component="img"
                      image={
                        "https:" + about?.fields?.avatar?.fields?.file?.url
                      }
                      title="avatar"
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
