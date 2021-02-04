import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { IService, IServiceFields } from "../@types/generated/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Service: React.FC<IServiceFields> = ({ title, description }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        {description ? (
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(description),
            }}
          />
        ) : null}
      </CardContent>
    </Card>
  );
};

export default Service;
