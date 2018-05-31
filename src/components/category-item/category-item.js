import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../redux/action/category-action';
import * as expenseActions from '../redux/action/expense-action';
import CategoryForm from '../category-form/category-form';
import ExpenseForm from '../expense-form/expense-form';
import ExpenseItem from '../expense-item/expense-item';
import CategoryBudget from '../category-budget/category-budget';

class CategoryItem extends React.Component {
  render() {
    const { 
      expenses,
      expenseCreate,
      category, 
      key, 
      categoryDestroy, 
      categoryUpdate, 
    }
      = this.props;
    console.log('category props', this.props); 

    const categoryExpenses = expenses[category.id];
    // const totalPrice = categoryExpenses.reduce((total, expense) => { return total + expense.price; });

    return (
      <div className='category' key={key}>
        <h1>Category: { category.name } Total: ${ category.budget }</h1>
        <button className='category-delete' onClick={() => categoryDestroy(category)}>Delete</button>
        <CategoryForm className='category-form' category={category} onComplete={categoryUpdate}/>
        <ExpenseForm className='expense-form' category={category} onComplete={expenseCreate}/>
        <div className="expense-list"> <h1>Items:</h1>{categoryExpenses.map(expense => <ExpenseItem expense = {expense} key={expense.id} />) } </div>
        <CategoryBudget categoryId= {category.id} className='budget-header' />
      </div>
    );
  }
}

CategoryItem.propTypes = {
  expenses: PropTypes.object,
  expenseCreate: PropTypes.func,
  category: PropTypes.object,
  key: PropTypes.number,
  categoryDestroy: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapStateToProps = state => ({ 
  expenses: state.expenses,  
});

const mapDispatchToProps = (dispatch) => { 
  return {
    expenseCreate: data => dispatch(expenseActions.create(data)),
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
