// this is basically the state of the App -- ie where the switch statements to modify the the state regarding categories
const emptyState = {};
export default (state = emptyState, { type, payload }) => {
  // can/should add syntax validation
  let categoryId;
  let categoryCards;
  let updatedCards;
  let updatedState;
  let budget;
  let budgetTotal;
  console.log(payload, 'PAYLOAD');
  console.log(state, 'STATE');
  switch (type) {
    case 'CATEGORY_CREATE':
      console.log(state, 'STATE IN CARD CAT CREATE SWITCH');
      return { ...state, [payload.id]: [] };
    case 'CATEGORY_DESTROY':
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;
    case 'CARD_CREATE':
      categoryId = payload.categoryId; // eslint-disable-line 
      categoryCards = state[categoryId];
      updatedCards = [...categoryCards, payload];
      // budgetTotal = state.map(category => (category.id === categoryId ? category.budget - payload.price : category.budget));
      console.log(state, 'STATE IN CARD CREATE SWITCH');
      return { ...state, [categoryId]: updatedCards };

    case 'CARD_UPDATE':
      categoryId = payload.categoryId;// eslint-disable-line 
      categoryCards = state[categoryId];
      updatedCards = categoryCards.map(card => (card.id === payload.id ? payload : card));
      return { ...state, [categoryId]: updatedCards };
    case 'CARD_DESTROY':
      categoryId = payload.categoryId;// eslint-disable-line 
      categoryCards = state[categoryId];
      updatedCards = categoryCards.filter(card => card.id !== payload.id);
      return { ...state, [categoryId]: updatedCards };
    default: 
      return state;
  }
};
