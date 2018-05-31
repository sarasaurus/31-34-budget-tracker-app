import { combineReducers } from 'redux';
import categories from './category-reducer';
import cards from './card-reducer';

// this is like a bundler for our reducers
export default combineReducers({
  categories,
  cards,

});
