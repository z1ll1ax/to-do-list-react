import "./App.scss"
import Cards from "./components/Cards/Cards"
import Categories from "./components/Categories/Categories"
import SearchBar from "./components/SearchBar/SearchBar"
import CategoryType from "./types/Category";
import ModalCard from "./components/Modals/ModalCard"
import ModalCategory from "./components/Modals/ModalCategory"
import { useState } from "react"
import CardProps from "./interfaces/CardProps";

//TODO: search bar
//TODO: adaptive layout update
//TODO: fix bug with all
//TODO: lastEditedDate for cards
//TODO: Enter and Escape listeners
//TODO: when category is deleted and any card have that category, delete category from this card

function App() {
  const [categoryColorChosen, setCategoryColorChosen] = useState('Red');
  const [inputCategoryName, setInputCategoryName] = useState('');
  const [isModalCategoryShown, setIsModalCategoryShown] = useState(false);
  const [isModalCategoryEditing, setIsModalCategoryEditing] = useState(false);
  const [categoryRedactId, setCategoryRedactId] = useState('-1');

  const [isModalCardShown, setIsModalCardShown] = useState(false);
  const [isModalCardEditing, setIsModalCardEditing] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState('');
  const [inputCardDescriprtion, setInputCardDescription] = useState('');
  const [inputCardDeadlineDate, setInputCardDeadlineName] = useState('');
  const [cardRedactId, setCardRedactId] = useState('-1');

  const [selectedCategoriesInCreation, setSelectedCategoriesInCreation] = useState<string[]>(Array());
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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
        setRedactId = {setCategoryRedactId}
        selectedCategories = {selectedCategories}
        setSelectedCategories = {setSelectedCategories}
      />
      <Cards
        cards={cards}
        selectedCategories={selectedCategories}
        setIsModalCardEditing={setIsModalCardEditing}
        setIsModalShown={setIsModalCardShown}
        setInputCardTitle={setInputCardTitle}
        setInputCardDescription={setInputCardDescription}
        setInputCardDeadlineDate={setInputCardDeadlineName}
        setInputCardCategories={setSelectedCategoriesInCreation}
        setRedactId={setCardRedactId}
      />
      {isModalCategoryShown && !isModalCardShown &&
        <ModalCategory
          setCategories = {setCategories}
          redactId = {categoryRedactId}
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
          inputName = {inputCardTitle}
          setInputName = {setInputCardTitle}
          inputDeadlineName = {inputCardDeadlineDate}
          setInputDeadlineName = {setInputCardDeadlineName}
          inputTextAreaName = {inputCardDescriprtion}
          setInputTextAreaName = {setInputCardDescription}
          selectedCategoriesInCreation = {selectedCategoriesInCreation}
          setSelectedCategoriesInCreation = {setSelectedCategoriesInCreation}
          redactId={cardRedactId}
        />}
    </>
  )
}

export default App
