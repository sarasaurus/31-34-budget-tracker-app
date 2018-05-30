import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import * as cardActions from '../redux/action/card-action';
import autoBind from '../../utils/utils';


const defaultState = { content: '' };

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.card || defaultState;
    autoBind.call(this, CardForm);
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
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
    const buttonText = card ? 'Update Card' : 'Create Card';
    return (
    <form
      className="card-form"
      onSubmit={this.handleSubmit}
      >
      <input 
      type='text'
      name='content'
      placeholder='card content'
      value={this.state.content}
      onChange={this.handleChange} />
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
