import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export interface ServiceProps {
  id: string;
  title: string;
  image: string;
  description: null | string;
}

const Service: React.FC<ServiceProps> = ({ title, image, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        {description ? (
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default Service;
