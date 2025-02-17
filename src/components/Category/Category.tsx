import './Category.scss'
import {FC, useState} from 'react'
import CategoryType from '../../types/Category';

const Category:FC<CategoryType> = (
    {
        id,
        name,
        color,
        setIsModalShown,
        setIsModalCategoryEditing,
        setCategoryColorChosen,
        setInputCategoryName,
        setRedactId
    }
) => {

    const handleContextMenu = (event: React.SyntheticEvent) => {
        if (!setIsModalCategoryEditing || !setIsModalShown) return;
        event.preventDefault();
        setIsModalCategoryEditing(true);
        setIsModalShown(true);
        if (setInputCategoryName && name) setInputCategoryName(name);
        if (setCategoryColorChosen && color) setCategoryColorChosen(color);
        if(setRedactId) {
            setRedactId(id);
        }
    }

  const getClassFromColor = () => {
    switch (color) {
        case 'Blue':
            return 'primary';
        case 'Green':
            return 'success';
        case 'Gray':
            return 'secondary';
        case 'Red':
            return 'danger';
        case 'Yellow':
            return 'warning';
        case 'Light Blue':
            return 'info';
    }
    return 'dark';
  }
 
  return (
    <>
        <button className={`category btn btn-outline-${getClassFromColor()}`}
                onContextMenu={handleContextMenu}>
                    {name}</button>
    </>
  )
}

export default Category;
