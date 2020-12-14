import types from "../types";

export const openModal = (domElement, isPopup = false) => dispatch => {
  dispatch({
    type: types.OPEN_MODAL,
    payload: {
      domElement,
      isPopup,
    },
  });
};

export const closeModal = () => ({
  type: types.CLOSE_MODAL,
});
