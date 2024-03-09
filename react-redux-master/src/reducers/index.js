//reducers
import {combineReducers} from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.incrementBy;
    case 'DECREMENT':
      return state - 1;
  }
  return state;
};

const myReducers = combineReducers({counter});
export default myReducers;
