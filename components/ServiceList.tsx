import React from "react";
import { Grid } from "@material-ui/core";
import Service, { ServiceProps } from "./Service";

interface ServiceListProps {
  services: Array<ServiceProps>;
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
          <Grid key={service.id} item xs={12} sm={6} md={6} lg={4}>
            <Service {...service} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ServiceList;
