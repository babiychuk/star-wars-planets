import React from "react";
import T from "prop-types";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const planetsStyles = makeStyles(() => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const PlanetItem = ({ planet }) => {
  const classes = planetsStyles();
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Planet title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            Planet name: {planet?.name}
          </Typography>
          <Typography>climate: {planet?.climate}</Typography>
          <Typography>
            population:{" "}
            {planet?.population === "unknown"
              ? "no residents"
              : planet?.population}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

PlanetItem.propTypes = {
  planet: T.shape({
    name: T.string,
    climate: T.string,
    population: T.string,
  }),
};

export default PlanetItem;
