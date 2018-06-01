import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import * as expenseActions from '../redux/action/expense-action';
import autoBind from '../../utils/utils';


const defaultState = { name: '', price: 0 };

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || defaultState;
    autoBind.call(this, ExpenseForm);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handlePriceChange(event) {
    this.setState({ price: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id :
      this.props.expense.categoryId;

    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(defaultState);
  }


  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';
    return (
    <form
      className="expense-form"
      onSubmit={this.handleSubmit}
      >
      <input 
      type='text'
      name='name'
      placeholder='name'
      value={this.state.name}
      onChange={this.handleNameChange} />
       <input 
      type='number'
      name='price'
      placeholder='price'
      value={this.state.price}
      onChange={this.handlePriceChange} />
      <button type='submit'>{buttonText}</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  expense: PropTypes.object,
};


export default ExpenseForm;
