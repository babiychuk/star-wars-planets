import types from "../types";
import api from "../../services/api";

export const getSinglePlanet = (url) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_PLANET_START });
  try {
    const { data, status } = await api.planets.singlePlanet(url);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.GET_SINGLE_PLANET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_SINGLE_PLANET_FAILURE });
    if (error?.response?.status === 401) return;
    console.log(error?.response?.data?.error ?? "Something went wrong");
  }
};
