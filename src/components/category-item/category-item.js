import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';
import * as categoryActions from '../redux/action/category-action';
import CategoryForm from '../category-form/category-form';

class CategoryItem extends React.Component {
  render() {
    // 3.
    const { 
      category, 
      key, 
      categoryDestroy, 
      categoryUpdate, 
    }
      = this.props;

    return (
      <div className='category' key={key}>
        <h1>{ category.name } ${ category.budget }</h1>
        <button onClick={() => categoryDestroy(category)}>Delete</button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryDestroy: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => { // 2. 
  return {
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};
export default connect(null, mapDispatchToProps)(CategoryItem); // 1. this will pass these funcitons to this component as props

// null stands in for mapStateToProps-- its basically like a read state-- dispatch actually makes changes to state-- like write state
// first call creates connection
// second call uses/attaches the connection
