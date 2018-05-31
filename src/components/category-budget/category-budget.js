import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CategoryBudget extends React.Component {
  render () {
    const { cards, category } = this.props;
    console.log('CARDS ARE WHAT:', cards);
    console.log('CATEGORY IS', category.budget);
    return (
      <div className="budget"><h1>
        Remaining Budget: { cards.length > 0 ? 
        category.budget - cards.reduce((total, card) => { 
          console.log(`${total}TOTAL and  ${card.price} CARD PRICE`); 
          return total + card.price; 
        }, 0)
          : category.budget 
        }
      </h1>
      
      </div>
    );
  }
}

CategoryBudget.propTypes = {
  cards: PropTypes.array,
  category: PropTypes.object,
};

export default CategoryBudget;
