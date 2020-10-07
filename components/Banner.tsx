import React from "react";
import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  img: {
    height: "100%",
    width: "100%",
    opacity: 0.75,
    minHeight: 600,
  },
  title: {
    marginTop: 50,
    fontWeight: 900,
  },
});

export interface BannerProps {
  image: string;
  title: string;
  height: number;
}

const Banner: React.FC<BannerProps> = ({ image, title, height }) => {
  const classes = useStyles();

  return (
    <Card style={{ height: height }}>
      <CardMedia
        component="div"
        className={classes.img}
        image={image}
        title="Pinnacle Acoustic Consultancy"
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={11} md={7}>
            <div className={classes.title}>
              <Typography variant="h1">{title}</Typography>
            </div>
          </Grid>
        </Grid>
      </CardMedia>
    </Card>
  );
};

export default Banner;
