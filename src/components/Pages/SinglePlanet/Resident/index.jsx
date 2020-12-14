import React from "react";
import T from "prop-types";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../redux/modal/actions";

import ResidentInfo from "./ResidentInfo";

import { makeStyles } from "@material-ui/core/styles";

const residentStyles = makeStyles(() => ({
  resident: {
    position: "relative",
    boxShadow: "1px 1px 2px #9ca0aa",
    margin: "3px 5px 5px 0",
    display: "inline-block",
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
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(openModal(() => <ResidentInfo resident={resident} />));
  };
  return (
    <>
      <div className={classes.resident} onClick={onClickHandler}>
        {resident?.name}
      </div>
    </>
  );
};

Resident.propTypes = {
  resident: T.object,
};

export default Resident;
