import React, {useEffect, useState} from "react";
import Layout from "../components/layout";
import { Button, Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {client} from "./_app";
import Link from "next/link";
import {IHomePageFields} from "../@types/generated/contentful";
import {Entry} from "contentful";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";

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
    marginTop: 100,
    fontWeight: 900,
  },
  grid: {
    marginTop: 70,
    marginBottom: 50,
  },
  content: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 70,
  },
  logo: {
    marginTop: 20,
    height: "100%",
    width: "100%",
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  const [home, setHome] = useState<Entry<IHomePageFields>>();

  useEffect(() => {
    client.getEntry<IHomePageFields>("6eZXvRN13hBH8saBgMBP7T").then((h) => {
      setHome(h)})
  }, [setHome])

  if (home == null) return null

  return (
    <Layout>
      <Card className={classes.card}>
        <CardMedia
          component="div"
          className={classes.img}
          image={'https:' + home?.fields?.bannerImage?.fields.file.url}
          title="Pinnacle Acoustic Consultancy"
        >
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={11} md={7}>
              <div className={classes.title}>
                <Typography variant="h1">
                  {home?.fields?.title}
                </Typography>
                <Typography variant="h5">
                  {home?.fields?.titleDescription}
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
        <Grid
          className={classes.section}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {home?.fields?.sections?.map((section) => {
            return <HomePageSection key={section.fields.title} description={documentToHtmlString(section.fields.description!)} link={section.fields.link} title={section.fields.title}/>
          })}
          <Grid item xs={10} md={8}>
            <img className={classes.logo} src={'https:' + home?.fields?.footerLogo?.fields.file.url} alt="logo" />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

const HomePageSection: React.FC<{title: string, link: string, description: string}> = ({title, link, description}) => {
  const classes = useStyles();

  return (
      <div><Grid
          className={classes.section}
          container
          direction="row"
          justify="center"
          alignItems="center"
      >
        <Grid item xs={10} md={8}>
          <div>
            <Typography className={classes.content} variant="h2">
              {title}
            </Typography>
              <div className={classes.content} dangerouslySetInnerHTML={{ __html: description }} />
            <Link href={link} passHref>
              <Button variant="contained" color="primary">
                {title.toUpperCase()}
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid></div>
  )
}

export default Home;
