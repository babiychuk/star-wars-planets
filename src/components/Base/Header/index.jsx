import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PublicIcon from '@material-ui/icons/Public';
import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
  }));

const Header = () => {
    const classes = headerStyles();
  return (
      <AppBar position="relative">
        <Toolbar>
          <PublicIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
           Star Wars Planets
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
