const emptyState = [];
// line 4 {type, payload} = destructuring action
// this part you are just referencing the actions-- see action/category.js
export default (state = emptyState, { type, payload }) => {
  // TODO: syntax validation/value validaiton
  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload]; // ... spread current state array, and adding payload to it
    case 'CATEGORY_UPDATE':
      return state.map(category => (category.id === payload.id ? payload : category));
    case 'CATEGORY_DESTROY':
      return state.filter(category => (category.id !== payload.id));
    default: 
      return state;
  }
};
