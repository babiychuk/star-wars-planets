import types from "../types";

const singlePlanet = (
  state = {
    planet: null,
    loading: true,
  },
  { type, payload }
) => {
  switch (type) {
    case types.GET_SINGLE_PLANET_START:
      return { ...state, loading: true };

    case types.GET_SINGLE_PLANET_SUCCESS:
      return { ...state, planet: payload, loading: false };

    case types.GET_SINGLE_PLANET_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default singlePlanet;
