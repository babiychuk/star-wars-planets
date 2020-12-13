import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import DeathStar from "../../../../img/Death_Star.png";

const nothingStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
});

const NothingToShow = () => {
  const classes = nothingStyles();
  return  (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Death-Star"
          height="440"
          image={DeathStar}
          title="Death-Star"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Death Star destroyed all planets
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NothingToShow;
