import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';

// this is UI state
const defaultState = {
  name: '',
  budget: 0,
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }

  handleSubmit(event) {
    event.prevetDefault();
    this.props.onComplete(this.state);
  }
  handleChange(event) {
    const value = event.target;
    this.setState({ name: value });
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
        onChange={this.handleChange}
        />
        <button type='submit'>{buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func, // this will be to create a category
  category: PropTypes.object, // this will be the seciton we want to update
};
export default CategoryForm;
