import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const planetsStyles = makeStyles((theme) => ({
  loading: {
    padding: theme.spacing(2),
  },
}));

const Loader = () => {
  const classes = planetsStyles();
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justify="center"
      className={classes.loading}
    >
      <CircularProgress />
    </Grid>
  );
};
export default Loader;
