import Card from '../Card/Card';
import CardsProps from '../../interfaces/CardProps';
import CategoryType from '../../types/Category';
import './Cards.scss'

interface CardsContainerProps {
    cards: CardsProps[];
    selectedCategories?: string[];
    setSelectedCategories?: React.Dispatch<React.SetStateAction<string[]>>;
}

const Cards:React.FC<CardsContainerProps> = (
    {
        cards,
        selectedCategories,
        setSelectedCategories,
    }
) => {
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
            console.log(arr);
            return arr;
        }

            // let card = cards.filter((item) => item.categories?.includes(id));
    }

    return (
        <div className="cards">
            {cards?.length
                ? cards.map((item, index) =>
                <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    createDate={item.createDate}
                    deadlineDate={item.deadlineDate}
                    categories={getCategories(item)}
                ></Card>)
                : null}
        </div>
    )
}
  
export default Cards;