import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as expenseActions from '../redux/action/expense-action';
import ExpenseForm from '../expense-form/expense-form';
// somehow will need a key on the expense with the cateogry id

class ExpenseItem extends React.Component {
  render() {
    const {
      expense,
      expenseDestroy,
      expenseUpdate,
    }
= this.props;
// console.log('expense props', this.props);
    return (
  <div className='expense'>
  <p>{expense.name}: {expense.price}</p>
  <button onClick={() => expenseDestroy(expense)}>Delete</button>
  <ExpenseForm expense={expense} onComplete={expenseUpdate} />

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
