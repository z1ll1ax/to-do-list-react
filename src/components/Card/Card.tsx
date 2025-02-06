import './Card.scss'
import {FC} from 'react'
import CardProps from '../../interfaces/CardProps';
import Category from '../Category/Category';

const Card:FC<CardProps> = (
    {
        title,
        description,
        createDate,
        deadlineDate,
        categories,
    }
) => {
    return (
        <div className="card text-bg-light">
            <h5 className="card-title">{title}</h5>
            <p className="card-text card-description">{description}</p>
            <div className='card-footer'>
                <div className='card-categories'>
                    {categories?.length
                        ? categories.map((item) => <Category name={item.name} color={item.color}></Category>)
                        : null}
                </div>
                <div className='card-dates-container'>
                    <p className="card-text"><small><i>Created {createDate}</i></small></p>
                    <p className="card-text"><small><i>Deadline {deadlineDate}</i></small></p>
                </div>
            </div>
        </div>
    );
}

export default Card;