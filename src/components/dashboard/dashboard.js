import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../redux/action/category-action';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';
import '../../../styles/main.scss';

class Dashboard extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props; 
    console.log('props in dashboard', this.props);
    // categories is an object with a categories property 
    return (
<div className="dashboard">
<h1>enter an expense category and budget for it</h1>
<CategoryForm onComplete={categoryCreate} />
{categories.categories.map((currentCategory, i) => <CategoryItem category={currentCategory}key={i}/>)}
  </div>
    ); 
  }
}
Dashboard.propTypes = {
  categories: PropTypes.object,
  categoryCreate: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)), 
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 
