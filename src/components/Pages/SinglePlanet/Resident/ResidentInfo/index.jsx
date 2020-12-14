import React from "react";
import T from "prop-types";


import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const ResidentInfo = ({ resident }) => {
  return (
    <Grid>
      <Typography component="h5" variant="h5">
        Resident name: {resident?.name ?? "no name"}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        height: {resident?.height ?? "no height"}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        mass: {resident?.mass ?? "no mass"}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        gender: {resident?.gender ?? "no gender"}
      </Typography>
    </Grid>
  );
};

ResidentInfo.propTypes = {
  resident: T.object,
};

export default ResidentInfo;
