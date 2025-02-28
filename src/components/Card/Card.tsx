import './Card.scss'
import {FC} from 'react'
import CardProps from '../../interfaces/CardProps';
import CategoryInfo from '../Category/CategoryInfo';
import CategoryType from '../../types/Category';

const Card:FC<CardProps> = (
    {
        title,
        description,
        createDate,
        deadlineDate,
        categories,
    }
) => {
    const getRenderCategories = () => {
        if (!categories) return [];
        let localStorageCategories : string | null = localStorage.getItem('categories');
        let categoriesLocal: Array<CategoryType>;
        if (!localStorageCategories){
            return [];
        }
        else {
            categoriesLocal = JSON.parse(localStorageCategories);
            let arr: CategoryType[] = [];
            categories.forEach((category) => {
                let found = categoriesLocal.filter((item) => category === item.id)[0];
                if (found) arr.push(found);
            })
            return arr;
        }
    }
    return (
        <div className="card text-bg-light">
            <h5 className="card-title">{title}</h5>
            <p className="card-text card-description">{description}</p>
            <div className='card-footer'>
                <div className='card-categories'>
                    {categories?.length
                        ? getRenderCategories().map((item, index) =>
                            <CategoryInfo key={index}
                                name={item.name}
                                color={item.color}
                                isBigSize={false}
                            ></CategoryInfo>)
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