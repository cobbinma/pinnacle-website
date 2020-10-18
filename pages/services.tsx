import React from "react";
import Layout from "../components/layout";
import Banner from "../components/Banner";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ServiceList from "../components/ServiceList";
import { ServiceProps } from "../components/Service";

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

const services: Array<ServiceProps> = [
  {
    id: "0",
    title: "Noise and vibration modelling",
    image: "/images/modelling.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "1",
    title: "Noise and vibration monitoring",
    image: "",
    description: null,
  },
  {
    id: "2",
    title: "Environmental impact assessment",
    image: "",
    description: null,
  },
  {
    id: "3",
    title: "Health impact assessment",
    image: "",
    description: null,
  },
  {
    id: "4",
    title: "Consultation and stakeholder engagement",
    image: "",
    description: null,
  },
  {
    id: "5",
    title: "Integrated design",
    image: "",
    description: null,
  },
  {
    id: "6",
    title: "Review and assurance",
    image: "",
    description: null,
  },
  {
    id: "7",
    title: "Policy and strategy",
    image: "",
    description: null,
  },
  {
    id: "8",
    title: "Research and innovation",
    image: "",
    description: null,
  },
  {
    id: "9",
    title: "Expert witness",
    image: "",
    description: null,
  },
  {
    id: "10",
    title: "Monetisation",
    image: "",
    description: null,
  },
];

const Services: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Banner image="/images/blue.jpg" title="Services" height={300} />
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
              <ServiceList services={services} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Services;
