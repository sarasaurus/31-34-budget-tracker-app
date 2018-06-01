// this is basically the state of the App -- ie where the switch statements to modify the the state regarding categories
const emptyState = {};

export default (state = emptyState, { type, payload }) => {
  // can/should add syntax validation
  let categoryId;
  let categoryExpenses;
  let updatedExpenses;
  let updatedState;
  // let budget;
  // let budgetTotal;

  // console.log(payload, 'PAYLOAD');
  // console.log(state, 'STATE');

  switch (type) {
    case 'CATEGORY_CREATE':
      // console.log(state, 'STATE IN EXPENSE CAT CREATE SWITCH');
      return { ...state, [payload.id]: [] };
    case 'CATEGORY_DESTROY':
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;
    case 'EXPENSE_CREATE':
      categoryId = payload.categoryId; // eslint-disable-line 
      categoryExpenses = state[categoryId];
      updatedExpenses = [...categoryExpenses, payload];
      // budgetTotal = state.map(category => (category.id === categoryId ? category.budget - payload.price : category.budget));
      // console.log(state, 'STATE IN EXPENSE CREATE SWITCH');
      return { ...state, [categoryId]: updatedExpenses };

    case 'EXPENSE_UPDATE':
      categoryId = payload.categoryId;// eslint-disable-line 
      categoryExpenses = state[categoryId];
      updatedExpenses = categoryExpenses.map(expense => (expense.id === payload.id ? payload : expense));
      return { ...state, [categoryId]: updatedExpenses };
    case 'EXPENSE_DESTROY':
      categoryId = payload.categoryId;// eslint-disable-line 
      categoryExpenses = state[categoryId];
      updatedExpenses = categoryExpenses.filter(expense => expense.id !== payload.id);
      return { ...state, [categoryId]: updatedExpenses };
    default: 
      return state;
  }
};
