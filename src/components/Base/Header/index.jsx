import React from "react";
import { useSelector } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PublicIcon from "@material-ui/icons/Public";
import { makeStyles } from "@material-ui/core/styles";

const headerStyles = makeStyles((theme) => ({
  fixedHeader: {
    zIndex: "99",
    position: "sticky",
    width: "100%",
    top: "0",
  },
  mrRight: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = headerStyles();
  const { data } = useSelector((state) => state.planets);
  return (
    <AppBar position="relative" className={classes.fixedHeader}>
      <Toolbar>
        <PublicIcon className={classes.mrRight} />
        <Typography
          className={classes.mrRight}
          variant="h6"
          color="inherit"
          noWrap
        >
          Star Wars Planets
        </Typography>
        {data?.results?.length && (
          <Typography variant="h6" color="inherit">
            pages in catalog: {data?.results?.length / 10}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
