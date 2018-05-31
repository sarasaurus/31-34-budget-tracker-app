import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../redux/action/category-action';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';
import '../../../styles/main.scss';

class Dashboard extends React.Component {
  render() {
    const { categories, categoryCreate, randomKey } = this.props; 
    console.log('props in dashboard', this.props);
    // categories is an object with a categories property 
    return (
<div className="dashboard">
{ randomKey('randomKeyData!') }
<h1>enter an expense category and budget for it</h1>
<CategoryForm onComplete={categoryCreate} />
{categories.map((currentCategory, i) => <CategoryItem category={currentCategory}key={i}/>)}
  </div>
    ); 
  }
}
Dashboard.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};
// this is getting the props from the store
const mapStateToProps = (state) => {
  console.log('STATE IN DASH', state);
  return {
    categories: state.categories,
  };
};
// this is our function that takes in redux's dispatch method-- it sends our actions to the store
const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)), // calls our create action and passes in data
    randomKey: data => console.log(data, 'FROM RANDOM KEY'),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); // connect takes in callback(state), callback(dispatch) -- it passes in the state, it passes in the disptch
