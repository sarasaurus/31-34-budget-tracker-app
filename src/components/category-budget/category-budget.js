import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CategoryBudget extends React.Component {
  render () {
    // need to get the id of the category you want to select the right category from the state categories array
    const { categories, categoryId } = this.props;
    console.log('BUDGET PROPS:', this.props);
    console.log('CATEGORYID in BUDGET IS', categoryId);
    console.log('EXPENSES in BUDGET ARE', categories.expenses);
   
    return (
      <div className="budget"><h1>
        Remaining Budget: { categories.expenses.length > 0 ? 
        categories.filter(category => category.id !== categoryId).budget - categories.expenses.reduce((total, expense) => { 
          console.log(`${total}TOTAL and  ${expense.price} EXPENSE PRICE`); 
          return total + expense.price; 
        }, 0)
          : categories.categories.budget 
        }
      </h1>
      
      </div>
    );
  }
}

CategoryBudget.propTypes = {
  categoryId: PropTypes.string,
  categories: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

// export default CategoryBudget;
export default connect(mapStateToProps, null)(CategoryBudget); 