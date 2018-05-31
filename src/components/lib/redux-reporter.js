export default store => next => (action) => {
  try {
    console.log('__ACTION__', action);
    console.log('__DUNNO__');
    const result = next(action);
    console.log('__STATE__', store.getState());
    // do a set state
    return result;
  } catch (error) {
    console.log('__ERROR__', error);
    action.error = error;
    return action;
  }
 
}