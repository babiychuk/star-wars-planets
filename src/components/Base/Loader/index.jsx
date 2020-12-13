import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const Loader = () => {
  return (
    <Grid item xs={12} sm={12} md={12}>
      <CircularProgress />
    </Grid>
  );
};
export default Loader;
