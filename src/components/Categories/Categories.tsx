import Category from '../Category/Category';
import CategoryType from '../../types/Category';
import './Categories.scss'
import {useState, useEffect} from 'react'

interface CategoriesProps {
  categories: Array<CategoryType>;
  setIsModalCategoryShown: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalCategoryEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalCardShown: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalCardEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryColorChosen?: React.Dispatch<React.SetStateAction<string>>;
  setInputCategoryName?: React.Dispatch<React.SetStateAction<string>>;
  setRedactId?: React.Dispatch<React.SetStateAction<string>>;
  selectedCategories?: string[];
  setSelectedCategories?: React.Dispatch<React.SetStateAction<string[]>>;
}

const Categories: React.FC<CategoriesProps> = ({
    categories,
    setIsModalCategoryShown,
    setIsModalCategoryEditing,
    setIsModalCardShown,
    setIsModalCardEditing,
    setCategoryColorChosen,
    setInputCategoryName,
    setRedactId,
    selectedCategories,
    setSelectedCategories
  }
) => {
  
  const handleNewCategory = function(): void {
    if(setInputCategoryName) setInputCategoryName('');
    if(setCategoryColorChosen) setCategoryColorChosen('Red');
    setIsModalCategoryShown(true);
    setIsModalCategoryEditing(false);
    if(setRedactId) setRedactId('-1');
  }
  
  const handleNewCard = function(): void {
    setIsModalCardShown(true);
    setIsModalCardEditing(false);
  }
  const handleAllClick = function(): void {
    if (setSelectedCategories) setSelectedCategories([]);
  }
  const [active, setActive] = useState(true);
  useEffect(() => {
    if (selectedCategories) setActive(selectedCategories.length <= 0);
  }, [selectedCategories]);
  const getStyleIfActive = () => {
    if (active) return '';
    return'-outline';
  };

  return (
    <div className='category-menu'>
      <button className='btn btn-primary category-add-btn'
              onClick={handleNewCategory}>New Category...</button>
      <div className="categories">
        <button className={`category btn btn${getStyleIfActive()}-dark`}
                onClick={handleAllClick}>All</button>
        {categories?.length
          ? categories.map((item, index) =>
          <Category
            key={index}
            id={item.id}
            name={item.name}
            color={item.color}
            usable={true}
            setIsModalShown = {setIsModalCategoryShown}
            setIsModalCategoryEditing = {setIsModalCategoryEditing}
            setCategoryColorChosen = {setCategoryColorChosen}
            setInputCategoryName = {setInputCategoryName}
            setRedactId = {setRedactId}
            selectedCategories = {selectedCategories}
            setSelectedCategories = {setSelectedCategories}
          ></Category>)
          : null}
      </div>
      <button className='btn btn-outline-primary card-add-btn'
        onClick={handleNewCard}>New Card...</button>
    </div>
  )
}

export default Categories;
