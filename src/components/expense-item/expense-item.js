import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as expenseActions from '../redux/action/expense-action';
import ExpenseForm from '../expense-form/expense-form';
import Modal from '../modal/modal';
// somehow will need a key on the expense with the cateogry id

const defaultState = {
  editing: false,
};

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }
  render() {
    const {
      expense,
      expenseDestroy,
      expenseUpdate,
    }
= this.props;
    const showForm = () => expenseUpdate({ ...expense, editing: true });
    const hideForm = () => expenseUpdate({ ...expense, editing: false }); 
    const updateAndClose = updatedExpense => expenseUpdate({ ...updatedExpense, editing: false });
    // console.log('expense props', this.props);
    return (
  <div className='expense'>
  <p>{expense.name}: {expense.price}</p>
  <button className='category-edit' value='category' onClick={showForm}>Edit</button>
  <button onClick={() => expenseDestroy(expense)}>Delete</button>
  <Modal className="editing-form" show={expense.editing} handleClose={hideForm}>
  <ExpenseForm expense={expense} onComplete={updateAndClose} />
  </Modal>

  </div>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.object,
  expenseUpdate: PropTypes.func,
  expenseDestroy: PropTypes.func,
};
// dispatch given to us by redux
const mapDispatchToProps = (dispatch) => {
  return {
    expenseDestroy: data => dispatch(expenseActions.destroy(data)),
    expenseUpdate: data => dispatch(expenseActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(ExpenseItem);
