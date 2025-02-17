import "./App.scss"
import Cards from "./components/Cards/Cards"
import Categories from "./components/Categories/Categories"
import SearchBar from "./components/SearchBar/SearchBar"
import CategoryType from "./types/Category";
//import ModalCard from "./components/Modals/ModalCard"
import ModalCategory from "./components/Modals/ModalCategory"
import { useState, useEffect } from "react"

function App() {
  const [categoryColorChosen, setCategoryColorChosen] = useState('Red');
  const [inputCategoryName, setInputCategoryName] = useState('');
  const [isModalCategoryShown, setIsModalCategoryShown] = useState(false);
  const [isModalCategoryEditing, setIsModalCategoryEditing] = useState(false);
  const [redactId, setRedactId] = useState('-1');
  const [categories, setCategories] = useState(() => {
    let localStorageCategories : string | null = localStorage.getItem('categories');
    if (!localStorageCategories){
      return [];
    }
    else {
      let categoriesTemp: Array<CategoryType> = JSON.parse(localStorageCategories);
      if (!categoriesTemp || categoriesTemp.length === 0) return [];
      return categoriesTemp;
    }});

  return (
    <>
      <SearchBar/>
      <Categories
        categories={categories}
        setIsModalShown = {setIsModalCategoryShown}
        setIsModalCategoryEditing = {setIsModalCategoryEditing}
        setCategoryColorChosen = {setCategoryColorChosen}
        setInputCategoryName = {setInputCategoryName}
        setRedactId = {setRedactId}/>
      <Cards/>
      {isModalCategoryShown &&
        <ModalCategory
          setCategories = {setCategories}
          redactId = {redactId}
          colorChosen = {categoryColorChosen}
          setColorChosen = {setCategoryColorChosen}
          inputName = {inputCategoryName}
          setInputName = {setInputCategoryName}
          isModalCategoryEditing = {isModalCategoryEditing}
          setIsModalShown = {setIsModalCategoryShown}/>}
    </>
  )
}

export default App

//TODO: update categories in live time
//TODO: card modal
//TODO: card create button
//TODO: card edit/delete modal
//TODO: edit/delete categories
//TODO: search bar
//TODO: adaptive layout update
//TODO: empty fields checking