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
      // const { note, handleRemove, handleUpdateNote } = this.props;

      // console.log('note-item props--note', note);
  
      // const showModal = () => handleUpdateNote({ ...note, editing: true });
      // const hideModal = () => handleUpdateNote({ ...note, editing: false });
      // const updateAndClose = updatedNote => handleUpdateNote({ ...updatedNote, editing: false });

      // TODO: if no categories in state-- show form and button=update, button onclick == create and hide,  
      // if categories in state exist && editing ==false, hide form and button =edit, button OnClick==edit and show,
      // if categories in state exist && editing == true show form and button = update. button onClick== update and hide 
    // let editing = false;
    // console.log('category props', this.props); 
    const categoryExpenses = expenses[category.id];
    // const totalPrice = categoryExpenses.reduce((total, expense) => { return total + expense.price; });
    // const updateAndHide = () => updateAndHide(this.setState({editing: false}))
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
        <CategoryForm className='form-modal' category={category} onComplete={updateAndClose}/>
        </Modal>
        
      
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
  // editing: PropTypes.func,
};

const mapStateToProps = state => ({ 
  expenses: state.expenses,  
});

const mapDispatchToProps = (dispatch) => { 
  return {
    expenseCreate: data => dispatch(expenseActions.create(data)),
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
    // editing: data => data, 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
