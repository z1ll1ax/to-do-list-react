import "./App.scss"
import Cards from "./components/Cards/Cards"
import Categories from "./components/Categories/Categories"
import SearchBar from "./components/SearchBar/SearchBar"
import CategoryType from "./types/Category";
import ModalCard from "./components/Modals/ModalCard"
import ModalCategory from "./components/Modals/ModalCategory"
import { useState, useEffect } from "react"
import CardProps from "./interfaces/CardProps";

function App() {
  const [categoryColorChosen, setCategoryColorChosen] = useState('Red');
  const [inputCategoryName, setInputCategoryName] = useState('');
  const [isModalCategoryShown, setIsModalCategoryShown] = useState(false);
  const [isModalCategoryEditing, setIsModalCategoryEditing] = useState(false);
  const [isModalCardShown, setIsModalCardShown] = useState(false);
  const [isModalCardEditing, setIsModalCardEditing] = useState(false);
  const [inputCardName, setInputCardName] = useState('');
  const [inputCardTextAreaName, setInputCardTextAreaName] = useState('');
  const [inputCardDeadlineName, setInputCardDeadlineName] = useState('');
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
    }
  });
  const [cards, setCards] = useState(() => {
    let localStorageCards : string | null = localStorage.getItem('cards');
    if (!localStorageCards){
      return [];
    }
    else {
      let cardsTemp: Array<CardProps> = JSON.parse(localStorageCards);
      if (!cardsTemp || cardsTemp.length === 0) return [];
      return cardsTemp;
    }
  });

  return (
    <>
      <SearchBar/>
      <Categories
        categories={categories}
        setIsModalCategoryShown = {setIsModalCategoryShown}
        setIsModalCategoryEditing = {setIsModalCategoryEditing}
        setIsModalCardShown = {setIsModalCardShown}
        setIsModalCardEditing = {setIsModalCardEditing}
        setCategoryColorChosen = {setCategoryColorChosen}
        setInputCategoryName = {setInputCategoryName}
        setRedactId = {setRedactId}
      />
      <Cards
        cards={cards}
      />
      {isModalCategoryShown && !isModalCardShown &&
        <ModalCategory
          setCategories = {setCategories}
          redactId = {redactId}
          colorChosen = {categoryColorChosen}
          setColorChosen = {setCategoryColorChosen}
          inputName = {inputCategoryName}
          setInputName = {setInputCategoryName}
          isModalCategoryEditing = {isModalCategoryEditing}
          setIsModalShown = {setIsModalCategoryShown}
        />}
      {isModalCardShown && !isModalCategoryShown &&
        <ModalCard
          categories={categories}
          setCards = {setCards}
          isModalCardEditing = {isModalCardEditing}
          setIsModalShown = {setIsModalCardShown}
          inputName = {inputCardName}
          setInputName = {setInputCardName}
          inputDeadlineName = {inputCardDeadlineName}
          setInputDeadlineName = {setInputCardDeadlineName}
          inputTextAreaName = {inputCardTextAreaName}
          setInputTextAreaName = {setInputCardTextAreaName}
        />}
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