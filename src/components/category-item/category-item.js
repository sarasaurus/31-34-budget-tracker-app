import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../redux/action/category-action';
import * as expenseActions from '../redux/action/expense-action';
import CategoryForm from '../category-form/category-form';
import ExpenseForm from '../expense-form/expense-form';
import ExpenseItem from '../expense-item/expense-item';
import CategoryBudget from '../category-budget/category-budget';
import Modal from '../modal/modal';

const defaultState = {
  editing: false,
};
class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

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

    const categoryExpenses = expenses[category.id];
    const showForm = () => categoryUpdate({ ...category, editing: true });
    const hideForm = () => categoryUpdate({ ...category, editing: false }); 
    const updateAndClose = updatedCategory => categoryUpdate({ ...updatedCategory, editing: false });
    // categoryUpdate = this.state.editing ? 
    console.log(category.editing);
    return (
      <div className='category' key={key}>
        <h1>Category: { category.name } Total: ${ category.budget }</h1>
        <button className='category-edit' value='category' onClick={showForm}>Edit</button>
        <button className='category-delete' onClick={() => categoryDestroy(category)}>Delete</button>
        <Modal className="editing-form" show={category.editing} handleClose={hideForm}>
        <h3>Editing {category.name}</h3>
        <CategoryForm className='modal-form' category={category} onComplete={updateAndClose}/>
        </Modal>
        
        
        <ExpenseForm className='expense-form' category={category} onComplete={expenseCreate}/>
        <div className="expense"> <h1>Items:</h1>
        <div className="expense-box">{categoryExpenses.map(expense => <ExpenseItem expense = {expense} key={expense.id} />) } </div>
        </div>
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
