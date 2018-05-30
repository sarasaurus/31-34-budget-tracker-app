import uuid from 'uuid';

const create = ({ content, categoryId }) => ({
  type: 'CARD_CREATE',
  payload: {
    content,
    categoryId,
    id: uuid(),
    timestamp: new Date(),
  },
});
const update = card => ({
  type: 'CARD_UPDATE',
  payload: card,  
});
const destroy = card => ({
  type: 'CARD_DESTROY',
  payload: card,
});

export { create, update, destroy };
