import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../../redux/modal/actions";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const modalStyles = makeStyles((theme) => ({
  modal: {
    position: "fixed",
    display: "flex",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    overflow: "auto",
    zIndex: "199",
    background: "rgba(0,0,0,.7)",
  },
  modalInner: {
    margin: "auto",
    position: "relative",
    padding: "10px 0",
    width: "100%",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "720px",
    margin: "0 auto",
  },
}));

const Modal = () => {
  const classes = modalStyles();
  const dispatch = useDispatch();

  const DomElement = useSelector((store) => store.modal).domElement;

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modalInner}>
        <div className={classes.modalContent}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Resident info
          </DialogTitle>
          <DialogContent dividers>
            {DomElement ? <DomElement /> : null}
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </div>
      </div>
    </div>
  );
};

export default Modal;
