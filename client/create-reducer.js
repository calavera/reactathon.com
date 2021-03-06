import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import appReducer from './redux';
import workshops from './components/workshops/redux.js';

export default function createReducer() {
  return combineReducers({
    app: appReducer,
    form,
    routing,
    [workshops.__namespace]: workshops
  });
}
