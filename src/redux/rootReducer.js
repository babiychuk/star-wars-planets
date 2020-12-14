import { combineReducers } from "redux";

import planets from "./planets/reducer";
import singlePlanet from "./singlePlanet/reducer";
import residents from "./resident/reducer";
import modal from "./modal/reducer";

const rootReducers = combineReducers({
  planets,
  singlePlanet,
  residents,
  modal,
});

export default rootReducers;
