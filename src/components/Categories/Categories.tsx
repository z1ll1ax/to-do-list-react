import Category from '../Category/Category';
import CategoryType from '../../types/Category';
import './Categories.scss'

interface CategoriesProps {
  categories: Array<CategoryType>;
  setIsModalCategoryShown: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalCategoryEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalCardShown: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalCardEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryColorChosen?: React.Dispatch<React.SetStateAction<string>>;
  setInputCategoryName?: React.Dispatch<React.SetStateAction<string>>;
  setRedactId?: React.Dispatch<React.SetStateAction<string>>;
}

const Categories: React.FC<CategoriesProps> = ({
    categories,
    setIsModalCategoryShown,
    setIsModalCategoryEditing,
    setIsModalCardShown,
    setIsModalCardEditing,
    setCategoryColorChosen,
    setInputCategoryName,
    setRedactId
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

  return (
    <div className='category-menu'>
      <button className='btn btn-primary category-add-btn'
              onClick={handleNewCategory}>New Category...</button>
      <div className="categories">
        <Category id={'All'} usable={true} name='All'/>
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
            setRedactId = {setRedactId}>
          </Category>)
          : null}
      </div>
      <button className='btn btn-outline-primary card-add-btn'
        onClick={handleNewCard}>New Card...</button>
    </div>
  )
}

export default Categories;
