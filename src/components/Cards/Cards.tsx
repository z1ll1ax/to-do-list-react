import Card from '../Card/Card';
import CardsProps from '../../interfaces/CardProps';
import './Cards.scss'

interface CardsContainerProps {
    cards: CardsProps[];
}

const Cards:React.FC<CardsContainerProps> = (
    {
        cards,
    }
) => {
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
                ></Card>)
                : null}
        </div>
    )
}
  
export default Cards;