import React from "react";
import T from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const residentStyles = makeStyles(() => ({
  resident: {
    position: "relative",
    boxShadow: "1px 1px 2px #9ca0aa",
    marginRight: "5px",
    marginTop: "3px",
    cursor: "pointer",
    padding: "10px",
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    "&:hover, &:focus": {
      backgroundColor: "#9fdaa9",
    },
  },
}));

const Resident = ({ resident }) => {
  const classes = residentStyles();

  return (
    <>
      <span className={classes.resident}>{resident?.name}</span>
    </>
  );
};

Resident.propTypes = {
  resident: T.object,
};

export default Resident;
