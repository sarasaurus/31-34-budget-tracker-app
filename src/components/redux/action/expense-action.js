import uuid from 'uuid';

const create = ({ name, price, categoryId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    categoryId,
    id: uuid(),
    timestamp: new Date(),
  },
});
const update = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,  
});
const destroy = expense => ({
  type: 'EXPENSE_DESTROY',
  payload: expense,
});

export { create, update, destroy };
