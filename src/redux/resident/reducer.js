import types from "../types";

const residents = (
  state = {
    residents: [],
    loadingResidents: true,
  },
  { type, payload }
) => {
  switch (type) {
    case types.GET_RESIDENT_START:
      return { residents: [], loadingResidents: true };

    case types.GET_RESIDENT_SUCCESS:
      return {
        ...state,
        residents: payload,
        loadingResidents: false,
      };

    case types.GET_RESIDENT_FAILURE:
      return { ...state, loadingResidents: false };

    case types.CLEAR_RESIDENTS:
      return { residents: [], loadingResidents: true };

    default:
      return state;
  }
};

export default residents;
