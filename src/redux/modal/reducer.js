import types from "../types";

const modal = (
  state = { isModal: false, domElement: null, isPopup: false },
  { payload, type }
) => {
  switch (type) {
    case types.OPEN_MODAL:
      return {
        isModal: true,
        domElement: payload.domElement,
        isPopup: payload.isPopup,
      };
    case types.CLOSE_MODAL:
      return { isModal: false, domElement: null, isPopup: false };
    default:
      return state;
  }
};

export default modal;
