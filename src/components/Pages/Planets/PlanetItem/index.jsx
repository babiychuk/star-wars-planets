import React from "react";
import T from "prop-types";
import { Link } from "react-router-dom";
import routes from "../../../../routes";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Planet from "../../../../img/planet.png";

const planetsStyles = makeStyles(() => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
  link: { textDecoration: "none" },
}));

const PlanetItem = ({ planet }) => {
  const classes = planetsStyles();
  return (
    <Grid item xs={12} sm={4} md={2}>
      <Link
        className={classes.link}
        to={`${routes.SinglePlanet.path}${planet?.name}`}
      >
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={Planet}
            title="Planet title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h6" component="h2">
              Planet name: {planet?.name ?? "no name"}
            </Typography>
            <Typography>
              climate: {planet?.climate ?? "no information"}
            </Typography>
            <Typography>
              population: {planet?.population ?? "no residents"}
            </Typography>
          </CardContent>
        </Card>
      </Link>
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
