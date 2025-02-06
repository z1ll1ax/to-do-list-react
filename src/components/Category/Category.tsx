import './Category.scss'
import {FC} from 'react'
import CategoryType from '../../types/Category';

const Category:FC<CategoryType> = (
    {name, color, usable}
) => {
  function getClassFromColor(){
    switch (color) {
        case 'blue':
            return 'primary';
        case 'green':
            return 'success';
        case 'gray':
            return 'secondary';
        case 'red':
            return 'danger';
        case 'yellow':
            return 'warning';
        case 'lightblue':
            return 'info';
    }
    return 'dark'
  }
  let categoryClass =
    usable
        ? `category btn btn-outline-${getClassFromColor()}`
        : `category-card btn btn-outline-${getClassFromColor()}`;
  return (
    <>
        {
            usable
            ? <button className={categoryClass}>{name}</button>
            : <span className={categoryClass}>{name}</span>
        }
    </>
  )
}

export default Category;
