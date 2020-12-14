import { combineReducers } from "redux";

import planets from "./planets/reducer";
import singlePlanet from "./singlePlanet/reducer";
import residents from "./resident/reducer";

const rootReducers = combineReducers({
  planets,
  singlePlanet,
  residents,
});

export default rootReducers;
