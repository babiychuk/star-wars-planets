import types from "../types";
import api from "../../services/api";

export const getPlanets = (page) => async (dispatch) => {
  dispatch({ type: types.GET_PLANETS_START });
  try {
    const { data, status } = await api.planets.getPlanets(page);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.GET_PLANETS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_PLANETS_FAILURE });
    if (error?.response?.status === 401) return;
    console.log(error?.response?.data?.error ?? "Something went wrong");
  }
};

export const getMorePlanets = (page) => async (dispatch) => {
  dispatch({ type: types.GET_MORE_PLANETS_START });
  try {
    const { data, status } = await api.planets.getPlanets(page);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({
      type: types.GET_MORE_PLANETS_SUCCESS,
      payload: data,
      page: page,
    });
  } catch (error) {
    dispatch({ type: types.GET_MORE_PLANETS_FAILURE });
    if (error?.response?.status === 401) return;
    console.log(error?.response?.data?.error ?? "Something went wrong");
  }
};
