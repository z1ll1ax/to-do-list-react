import Card from '../Card/Card';
import CardsProps from '../../interfaces/CardProps';
import CategoryType from '../../types/Category';
import './Cards.scss'

interface CardsContainerProps {
    cards: CardsProps[];
    selectedCategories?: string[];
    setIsModalShown?: React.Dispatch<React.SetStateAction<boolean>>;
    setIsModalCardEditing?: React.Dispatch<React.SetStateAction<boolean>>;
    setInputCardTitle?: React.Dispatch<React.SetStateAction<string>>;
    setInputCardDescription?: React.Dispatch<React.SetStateAction<string>>;
    setInputCardDeadlineDate?: React.Dispatch<React.SetStateAction<string>>;
    setInputCardCategories?: React.Dispatch<React.SetStateAction<string[]>>;
    setRedactId?: React.Dispatch<React.SetStateAction<string>>;
    searchBarValue: string;
}

const Cards:React.FC<CardsContainerProps> = (
    {
        cards,
        selectedCategories,
        setIsModalCardEditing,
        setIsModalShown,
        setInputCardTitle,
        setInputCardDescription,
        setInputCardDeadlineDate,
        setInputCardCategories,
        setRedactId,
        searchBarValue,
    }
) => {
    const selectedCards = () => {
        let filteredCards = cards;
        if (selectedCategories && selectedCategories.length > 0) {
            filteredCards = cards.filter((card) =>
                selectedCategories.every((category) => card.categories?.includes(category))
            );
        }
        if (searchBarValue) {
            filteredCards = filteredCards.filter((card) => {
                const matches =
                    card.title?.toLowerCase().includes(searchBarValue.toLowerCase()) ||
                    card.description?.toLowerCase().includes(searchBarValue.toLowerCase()) ||
                    card.createDate?.toLowerCase().includes(searchBarValue.toLowerCase()) ||
                    card.deadlineDate?.toLowerCase().includes(searchBarValue.toLowerCase());
                return matches;
            });
        }
        return filteredCards;
    };
  
    const getCategories = (card: CardsProps) => {
        let localStorageCategories : string | null = localStorage.getItem('categories');
        let categories: Array<CategoryType>;
        if (!localStorageCategories){
            return [];
        }
        else {
            categories = JSON.parse(localStorageCategories);
            let arr: string[] = [];
            categories.forEach((category) => {
                if (card.categories?.includes(category.id)) {
                    arr.push(category.id);
                }
            })
            return arr;
        }
    }
    const filteredCards = selectedCards();
    return (
        <div className="cards">
            {filteredCards?.length
                ? filteredCards.map((item, index) =>
                <Card
                    key={index}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    createDate={item.createDate}
                    deadlineDate={item.deadlineDate}
                    categories={getCategories(item)}
                    setIsModalCardEditing={setIsModalCardEditing}
                    setIsModalShown={setIsModalShown}
                    setInputCardTitle={setInputCardTitle}
                    setInputCardDescription={setInputCardDescription}
                    setInputCardDeadlineDate={setInputCardDeadlineDate}
                    setInputCardCategories={setInputCardCategories}
                    setRedactId={setRedactId}
                ></Card>)
                : null}
        </div>
    )
}
  
export default Cards;