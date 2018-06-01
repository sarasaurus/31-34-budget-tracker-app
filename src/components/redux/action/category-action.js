import uuid from 'uuid';

const create = ({ name, budget }) => ({ // destructures data from dashboard dispatch and extracts name budget
  type: 'CATEGORY_CREATE',
  payload: {
    name,
    budget,
    id: uuid(),
    timestamp: new Date(),
  },
});
const update = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,  
});
const destroy = category => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});

export { create, update, destroy };
