import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as cardActions from '../redux/action/card-action';
import CardForm from '../card-form/card-form';
// somehow will need a key on the card with the cateogry id

class CardItem extends React.Component {
  render() {
    const {
      card,
      cardDestroy,
      cardUpdate,
    }
= this.props;
console.log('card props', this.props);
    return (
  <div className='card'>
  <p>{card.content}</p>
  <button onClick={() => cardDestroy(card)}>Delete</button>
  <CardForm card={card} onComplete={cardUpdate} />

  </div>
    );
  }
}

CardItem.propTypes = {
  card: PropTypes.object,
  cardUpdate: PropTypes.func,
  cardDestroy: PropTypes.func,
};
// dispatch given to us by redux
const mapDispatchToProps = (dispatch) => {
  return {
    cardDestroy: data => dispatch(cardActions.destroy(data)),
    cardUpdate: data => dispatch(cardActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(CardItem);
