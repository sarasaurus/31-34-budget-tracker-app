import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import * as cardActions from '../redux/action/card-action';
import autoBind from '../../utils/utils';


const defaultState = { name: '', price: 0 };

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.card || defaultState;
    autoBind.call(this, CardForm);
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
      this.props.card.categoryId;

    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(defaultState);
  }


  render() {
    const { card } = this.props;
    const buttonText = card ? 'Update Expense' : 'Create Expense';
    return (
    <form
      className="card-form"
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

CardForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  card: PropTypes.object,
};


export default CardForm;
