import React from "react";
import T from "prop-types";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const planetsStyles = makeStyles((theme) => ({
  bntLoadMore: {
    paddingTop: theme.spacing(2),
  },
}));

const ButtonLoadMore = ({ loadMore, btnText }) => {
  const classes = planetsStyles();
  return (
    <Grid
      container
      className={classes.bntLoadMore}
      spacing={2}
      alignItems="center"
      justify="center"
    >
      <Button
        variant="contained"
        color="primary"
        component="span"
        onClick={loadMore}
      >
        {btnText}
      </Button>
    </Grid>
  );
};

ButtonLoadMore.propTypes = {
  loadMore: T.func.isRequired,
  btnText: T.string,
};

export default ButtonLoadMore;
