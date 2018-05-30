import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../redux/action/category-action';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';
import '../../../styles/main.scss';

// Provider --> Store --> State

class Dashboard extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props; // use this line conssistantly so can easily see what your props and to connect the props to your props--- esseentially saying blah = this.props.blah
    return (
<div className="dashboard">
<h1>display a list of all the categories</h1>
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

const mapStateToProps = (state) => {
  // the object we return here will become 'props' in dashboard
  // from state, map, and create props in dashboard based on the state
  return {
    categories: state,
  };
  // now dashboard has a property called secions, with the value of the applications state
};
const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)), 
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); // this line is the line that connects to the store!, connect the middleman, sitting inbetween any component and the state of the app, facilitating the passbetween, it returns a funciton that needs a component to make a connection, we want to connect dashboard and so we curry dashboard
// connect will call these two funcitons and pass in the the state as an argument
// basically we are calling connect to connect to the store, then export default dashboard also
