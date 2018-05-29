// creating a set of functions that will simplify creating actions-- this is just common practice-- /dev pattern with redux, not required by redux
// these will all return objects, ie the objects we will pass to the reducers
// note re-naming there is no set convention, vinvicio like because can search for section and find easily
import uuid from 'uuid';
/**in this app a category should contain at least the following properties
id a uuid
timestamp a date from when the category was created
name a string that is the name of the category
budget a number that is the total amount of $ in the category
feel free to add more to your categories if you want */

const create = ({ name, budget }) => ({
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
const remove = category => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});

export { create, update, remove };
