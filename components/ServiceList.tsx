import React from "react";
import { Grid } from "@material-ui/core";
import Service from "./Service";
import { IService } from "../@types/generated/contentful";

interface ServiceListProps {
  services: IService[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="center"
    >
      {services.map((service) => {
        return (
          <Grid key={service.fields?.title} item xs={12} sm={9} md={8} lg={8}>
            <Service {...service?.fields} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ServiceList;
