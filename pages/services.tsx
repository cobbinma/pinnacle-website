import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Banner from "../components/Banner";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ServiceList from "../components/ServiceList";
import { Entry } from "contentful";
import {
  IAboutPageFields,
  IServiceFields,
  IServicesPage,
  IServicesPageFields,
} from "../@types/generated/contentful";
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

  const [services, setServices] = useState<Entry<IServicesPageFields>>();

  useEffect(() => {
    client.getEntry<IServicesPageFields>("4d7FtHbCRC9BIDPJJIxoOo").then((s) => {
      setServices(s);
    });
  }, [setServices]);

  if (services == null) return null;

  return (
    <Layout>
      <Banner
        image={"https:" + services?.fields?.banner?.fields.file.url}
        title={services?.fields?.title}
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
              <ServiceList services={services?.fields?.services} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Services;
