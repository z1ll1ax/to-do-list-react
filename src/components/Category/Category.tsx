import './Category.scss'
import {FC} from 'react'
import CategoryType from '../../types/Category';

const Category:FC<CategoryType> = (
    {
        id,
        name,
        color,
        usable,
        usableForCreation,
        setIsModalShown,
        setIsModalCategoryEditing,
        setCategoryColorChosen,
        setInputCategoryName,
        setRedactId,
        selectedCategories,
        setSelectedCategories,
        selectedCategoriesInCreation,
        setSelectedCategoriesInCreation,
        isActive
    }
) => {
    // const [active, setActive] = useState(() => {
    //     if (setSelectedCategories) {
    //         let categories = selectedCategories;
    //         let sorted = categories?.filter((item) => item === id);
    //         if (sorted && categories && sorted?.length !== 0) {
    //             return true;
    //         }
    //     }
    //     else if (setSelectedCategoriesInCreation) {
    //         let categories = selectedCategoriesInCreation;
    //         let sorted = categories?.filter((item) => item === id);
    //         if (sorted && categories && sorted?.length !== 0) {
    //             return true;
    //         }
    //     }
    //     else return false;
    // });
    const handleClick = () => {
        //setActive(!active);
        if (usable) {
            if (!selectedCategories || !setSelectedCategories) return;
            if (isActive) {
                const updatedCategories = selectedCategories.filter((item) => item !== id);
                setSelectedCategories(updatedCategories);
            } else {
                const updatedCategories = [...selectedCategories, id];
                setSelectedCategories(updatedCategories);
            }
        }
        else if (usableForCreation) {
            if (!selectedCategoriesInCreation || !setSelectedCategoriesInCreation) return;
            if (isActive) {
                const updatedCategories = selectedCategoriesInCreation.filter((item) => item !== id);
                setSelectedCategoriesInCreation(updatedCategories);
            } else {
                const updatedCategories = [...selectedCategoriesInCreation, id];
                setSelectedCategoriesInCreation(updatedCategories);
            }
        }
    }
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

  const getStyleIfActive = () => {
    if (isActive) return '';
    return'-outline';
  };
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
        <button className={`category btn btn${getStyleIfActive()}-${getClassFromColor()}`}
                onContextMenu={handleContextMenu}
                onClick={handleClick}>
                    {name}</button>
    </>
  )
}

export default Category;
