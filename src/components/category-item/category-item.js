import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../redux/action/category-action';
import CategoryForm from '../category-form/category-form';

class CategoryItem extends React.Component {
  render() {
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

const mapDispatchToProps = (dispatch) => { 
  return {
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};
export default connect(null, mapDispatchToProps)(CategoryItem);
