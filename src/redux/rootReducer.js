import { combineReducers } from 'redux';

import planets from "./planets/reducer";
import singlePlanet from "./singlePlanet/reducer";

const rootReducers = combineReducers({
    planets,
    singlePlanet,
});

export default rootReducers;
