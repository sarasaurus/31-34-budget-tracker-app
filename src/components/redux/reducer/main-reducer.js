import { combineReducers } from 'redux';
import categories from './category-reducer';
import expenses from './expense-reducer';

// this is like a bundler for our reducers
export default combineReducers({
  categories,
  expenses,

});
