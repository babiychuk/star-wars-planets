import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets, getMorePlanets } from "../../../redux/planets/actions";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import PlanetItem from "./PlanetItem";
import EmptyWrap from "../../Base/EmptyWrap";
import Loader from "../../Base/Loader";
import ButtonLoadMore from "../../Base/ButtonLoadMore";

const planetsStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: theme.spacing(2),
  },
}));

const Planets = () => {
  const classes = planetsStyles();
  const dispatch = useDispatch();
  const [planetsPage, setPlanetsPage] = useState(1);
  const { data, loading, moreLoading } = useSelector((state) => state.planets);
  const firstpage = 1;

  useEffect(() => {
    dispatch(getPlanets(firstpage));
  }, [dispatch]);

  const loadMorePlanets = () => {
    dispatch(getMorePlanets(planetsPage + 1));
    setPlanetsPage(planetsPage + 1);
  };

  return (
    <div className={classes.cardGrid}>
      <Grid container spacing={2} alignItems="center" justify="center">
        <EmptyWrap loading={loading} empty={!data?.results?.length}>
          {data?.results?.map((item) => (
            <PlanetItem key={item?.url} planet={item} />
          ))}
        </EmptyWrap>
      </Grid>
      {!loading && data?.next &&
        (moreLoading ? (
          <Loader />
        ) : (
          <ButtonLoadMore loadMore={loadMorePlanets} btnText={'Load more'} />
        ))}
    </div>
  );
};

export default Planets;
