import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets } from "../../../redux/planets/actions";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import PlanetItem from "./PlanetItem";
import EmptyWrap from "../../Base/EmptyWrap";

const planetsStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

const Planets = () => {
  const classes = planetsStyles();
  const dispatch = useDispatch();
  const [planetsPage] = useState(1);
  const { data, loading } = useSelector((state) => state.planets);

  useEffect(() => {
    dispatch(getPlanets(planetsPage));
  }, [dispatch, planetsPage]);

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <EmptyWrap loading={loading} empty={!data?.results?.length}>
          {data?.results?.map((item) => (
            <PlanetItem key={item?.url} planet={item}/>
          ))}
        </EmptyWrap>
      </Grid>
    </Container>
  );
};

export default Planets;
