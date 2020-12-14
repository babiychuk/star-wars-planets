import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../../redux/modal/actions";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const Modal = () => {
  const dispatch = useDispatch();

  const DomElement = useSelector((store) => store.modal).domElement;
  const { isModal } = useSelector((state) => state.modal);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isModal}
      >
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
      </Dialog>
    </>
  );
};

export default Modal;
