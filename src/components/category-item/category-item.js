import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../redux/action/category-action';
import * as cardActions from '../redux/action/card-action';
import CategoryForm from '../category-form/category-form';
import CardForm from '../card-form/card-form';
import CardItem from '../card-item/card-item';
import CategoryBudget from '../category-budget/category-budget';

class CategoryItem extends React.Component {
  render() {
    const { 
      cards,
      cardCreate,
      category, 
      key, 
      categoryDestroy, 
      categoryUpdate, 
    }
      = this.props;
    console.log('category props', this.props); 

    const categoryCards = cards[category.id];
    // const totalPrice = categoryCards.reduce((total, card) => { return total + card.price; });

    return (
      <div className='category' key={key}>
        <h1>Category: { category.name } Total: ${ category.budget }</h1>
        <button className='category-delete' onClick={() => categoryDestroy(category)}>Delete</button>
        <CategoryForm className='category-form' category={category} onComplete={categoryUpdate}/>
        <CardForm className='card-form' category={category} onComplete={cardCreate}/>
        <div className="card-list"> <h1>Items:</h1>{categoryCards.map(card => <CardItem card = {card} key={card.id} />) } </div>
        <CategoryBudget categoryId= {category.id} className='budget-header' />
      </div>
    );
  }
}

CategoryItem.propTypes = {
  cards: PropTypes.object,
  cardCreate: PropTypes.func,
  category: PropTypes.object,
  key: PropTypes.number,
  categoryDestroy: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapStateToProps = state => ({ 
  cards: state.cards,  
});

const mapDispatchToProps = (dispatch) => { 
  return {
    cardCreate: data => dispatch(cardActions.create(data)),
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
