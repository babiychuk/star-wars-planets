import types from "../types";

const planets = (
  state = {
    data: null,
    loading: true,
  },
  { type, payload }
) => {
  switch (type) {
    case types.GET_PLANETS_START:
      return { ...state, loading: true };

    case types.GET_PLANETS_SUCCESS:
      return { ...state, data: payload, loading: false };

    case types.GET_PLANETS_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default planets;
