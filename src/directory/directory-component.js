import React from 'react';
import CategoryItem from '../components/category-items/category-item-components';
import './directory.component.scss';

const Directory = ({categories}) => {
  return (
    <div>
      <div className='categories-container'>
    {categories.map((category) => (
     <CategoryItem category={category} />
    ))}
  </div>
    </div>
  )
}

export default Directory
