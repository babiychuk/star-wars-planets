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

    case types.GET_MORE_PLANETS_START:
      return { ...state, moreLoading: true };

    case types.GET_MORE_PLANETS_SUCCESS:
      return {
        ...state,
        data: {
          ...payload,
          results: [
            ...state.data.results,
            ...payload.results.map((planet) => {
              return { ...planet };
            }),
          ],
        },
        moreLoading: false,
      };

    case types.GET_MORE_PLANETS_FAILURE:
      return { ...state, moreLoading: false };

    default:
      return state;
  }
};

export default planets;
