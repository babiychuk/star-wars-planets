import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPlanets, getMorePlanets } from "../../../redux/planets/actions";
import { clearSinglePlanet } from "../../../redux/singlePlanet/actions";
import routes from "../../../routes";

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
  const { pathname } = useLocation();
  const { data, loading, moreLoading, currentPage } = useSelector(
    (state) => state.planets
  );
  const firstpage = 1;

  useEffect(() => {
    if (!data) dispatch(getPlanets(firstpage));
  }, [dispatch, data]);

  useEffect(() => {
    if (routes.Root.path === pathname) dispatch(clearSinglePlanet());
  }, [dispatch, pathname]);

  const loadMorePlanets = () => {
    dispatch(getMorePlanets(currentPage + 1));
  };

  return (
    <div className={classes.cardGrid}>
      <Grid container spacing={2}>
        <EmptyWrap loading={loading} empty={!data?.results?.length}>
          {data?.results?.map((item) => (
            <PlanetItem key={item?.url} planet={item} />
          ))}
        </EmptyWrap>
      </Grid>
      {!loading &&
        data?.next &&
        (moreLoading ? (
          <Loader />
        ) : (
          <ButtonLoadMore loadMore={loadMorePlanets} btnText={"Load more"} />
        ))}
    </div>
  );
};

export default Planets;
