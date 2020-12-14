import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import routes from "../../../routes";
import { getSinglePlanet } from "../../../redux/singlePlanet/actions";
import { getResident } from "../../../redux/resident/actions";
import ButtonBack from "../../Base/ButtonBack";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Planet from "../../../img/planet.png";
import Loader from "../../Base/Loader";
import Resident from "./Resident";

const singlePlanetStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: theme.spacing(2),
  },
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 270,
  },
}));

const SinglePlanet = () => {
  const classes = singlePlanetStyles();
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { data } = useSelector((state) => state.planets);
  const { planet, loading } = useSelector((state) => state.singlePlanet);
  const { residents, loadingResidents } = useSelector(
    (state) => state.residents
  );

  const planetUrl = useMemo(() => {
    return data?.results?.filter((planet) => planet.name === params.planetName);
  }, [data, params.planetName]);

  useEffect(() => {
    if (!planetUrl) {
      history.push(routes.Root.path);
      return;
    }
    dispatch(getSinglePlanet(planetUrl[0]?.url));
  }, [dispatch, planetUrl, history]);

  useEffect(() => {
    if (planet?.residents) dispatch(getResident(planet?.residents));
  }, [dispatch, planet]);
  
  return (
    <div className={classes.cardGrid}>
      <ButtonBack />
      {loading ? (
        <Loader />
      ) : (
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={Planet}
            title={planet?.name ?? "no name"}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Planet name: {planet?.name ?? "no name"}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                rotation period: {planet?.rotation_period ?? "no information"}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                diameter: {planet?.diameter ?? "no information"}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                climate: {planet?.climate ?? "no information"}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                gravity: {planet?.gravity ?? "no information"}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                terrain: {planet?.terrain ?? "no information"}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                population: {planet?.population ?? "no information"}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" >
                residents:{" "}
                {loadingResidents ? (
                  <Loader />
                ) : !!residents?.length ? (
                  residents?.map((item) => (
                    <Resident key={item.url} resident={item} />
                  ))
                ) : (
                  "no residens"
                )}
              </Typography>
            </CardContent>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SinglePlanet;
