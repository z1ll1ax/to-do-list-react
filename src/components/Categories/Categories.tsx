import Category from '../Category/Category';
import CategoryType from '../../types/Category';
import './Categories.scss'

interface CategoriesProps {
  categories: Array<CategoryType>;
  setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalCategoryEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryColorChosen?: React.Dispatch<React.SetStateAction<string>>;
  setInputCategoryName?: React.Dispatch<React.SetStateAction<string>>;
  setRedactId?: React.Dispatch<React.SetStateAction<string>>;
}

const Categories: React.FC<CategoriesProps> = ({
    categories,
    setIsModalShown,
    setIsModalCategoryEditing,
    setCategoryColorChosen,
    setInputCategoryName,
    setRedactId
  }
) => {
  
  const handleNewCategory = function(): void {
    if(setInputCategoryName) setInputCategoryName('');
    if(setCategoryColorChosen) setCategoryColorChosen('Red');
    setIsModalShown(true);
    setIsModalCategoryEditing(false);
    if(setRedactId) setRedactId('-1');
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
            setIsModalShown = {setIsModalShown}
            setIsModalCategoryEditing = {setIsModalCategoryEditing}
            setCategoryColorChosen = {setCategoryColorChosen}
            setInputCategoryName = {setInputCategoryName}
            setRedactId = {setRedactId}>
          </Category>)
          : null}
      </div>
    </div>
  )
}

export default Categories;
