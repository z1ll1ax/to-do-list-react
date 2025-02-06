import "./App.scss"
import Cards from "./components/Cards/Cards"
import Categories from "./components/Categories/Categories"
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  return (
    <>
      <SearchBar/>
      <Categories/>
      <Cards/>
    </>
  )
}

export default App
