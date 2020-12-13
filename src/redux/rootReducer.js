import { combineReducers } from 'redux';

import planets from './planets/reducer';

const rootReducers = combineReducers({
    planets
});

export default rootReducers;
