import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';

// this is UI state
const defaultState = {
  name: '',
  budget: '',
};

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
    const value = event.target.value;
    this.setState({ name: value });
  }
  handleBudgetChange(event) {
    const value = event.target.value;
    this.setState({ budget: value });
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
        type='text'
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
