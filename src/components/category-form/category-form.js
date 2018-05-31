import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';
// import ExpenseForm from '../expense-form/expense-form';
// import * as expenseActions from '../redux/action/expense-action';


// this is UI state
const defaultState = {
  name: '',
  budget: 0,
};
// i think i may need to modify this?

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState); // resetting state to empty
  }
  handleNameChange(event) {
    const value = event.target.value;// eslint-disable-line
    this.setState({ name: value });
  }
  handleBudgetChange(event) {
    const value = event.target.value;// eslint-disable-line
    this.setState({ budget: value });
  }
  // life cycle hook givn to use by react
  // think of these as listeners--- listenging to state changes
  // this replaces a lifecycle hook called component will recieve props
  // static is common to other OOP languages--- static means a method attached to class. but not as an instance.

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.category) {
      console.log('DERIVED STATE', nextProps);
      return nextProps.category;
    }
    return defaultState;
  }
  
  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <form
      onSubmit={this.handleSubmit}
      className='category-form'>
        <input
        type='text'
        name='name'
        placeholder='Category Name'
        value={this.state.name}
        onChange={this.handleNameChange}
        /> 
        <input
        type='number'
        name='budget'
        placeholder='Category Budget'
        value={this.state.budget}
        onChange={this.handleBudgetChange}
        />
        <button type='submit'>{buttonText} Category</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object, 
};
export default CategoryForm;
