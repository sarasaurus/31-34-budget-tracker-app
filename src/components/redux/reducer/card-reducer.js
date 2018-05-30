// this is basically the state of the App -- ie where the switch statements to modify the the state regarding categories
const emptyState = [];
export default (state = emptyState, { type, payload }) => {
  // can/should add syntax validation
  switch (type) {
    case 'CARD_CREATE':
      return [...state, payload];
    case 'CARD_UPDATE':
      return state.map(card => (card.id === payload.id ? payload : card));
    case 'CARD_DESTROY':
      return state.filter(card => (card.id !== payload.id));
    default: 
      return state;
  }
};
