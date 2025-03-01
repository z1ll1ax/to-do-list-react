import './SearchBar.scss'

interface SearchBarProps {
    searchBarValue: string;
    setSearchBarValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = (
    { 
        searchBarValue,
        setSearchBarValue,
    }) => {
    const handleClearInput = () => {
        setSearchBarValue('');
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBarValue(event.target.value.toLowerCase());
    };
    return (
        <div className="search-bar">
            <input className="input"
                placeholder="Search..."
                value={searchBarValue}
                onChange={handleInputChange}
            ></input>
            <button className="input-clear input-btn"
                onClick={handleClearInput}
            >
                <svg
                className="input-clear__pic input-btn-pic"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#000000"
                >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            </button>
        </div>
    )
}

export default SearchBar;