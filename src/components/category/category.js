import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';
import * as categoryActions from '../../action/category-action';
import CategoryForm from '../category-form/category-form';

class Category extends React.Component {
  render() {
    // 3.
    const { 
      category, 
      key, 
      categoryRemove, 
      categoryUpdate 
}
      = this.props;

    return (
      <div className='category' key={key}>
        <h1>{ category.name }</h1>
        <button onClick={() => categoryRemove(category)}>Delete</button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
      </div>
    );
  }
}

Category.PropTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => { // 2. 
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};
export default connect(null, mapDispatchToProps)(Category); // 1. this will pass these funcitons to this component as props

// null stands in for mapStateToProps-- its basically like a read state-- dispatch actually makes changes to state-- like write state
// first call creates connection
// second call uses/attaches the connection
