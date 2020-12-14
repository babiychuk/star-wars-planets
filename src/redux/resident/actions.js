import types from "../types";
import api from "../../services/api";

export const getResident = (urls) => (dispatch) => {
  const fetchResidentInfo = async (url) => {
    const { data } = await api.resident.getResident(url);
    return data;
  };

  Promise.all(urls?.map(fetchResidentInfo))
    .then((residens) => {
      dispatch({ type: types.GET_RESIDENT_SUCCESS, payload: residens });
    })
    .catch(() => {
      dispatch({ type: types.GET_RESIDENT_FAILURE });
    });
};
