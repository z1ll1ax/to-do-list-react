import './Card.scss'
import {FC} from 'react'
import CardProps from '../../interfaces/CardProps';
import CategoryInfo from '../Category/CategoryInfo';
import CategoryType from '../../types/Category';
import ThreeDots from '../../assets/three_dots.svg';

const Card:FC<CardProps> = (
    {
        id,
        title,
        description,
        createDate,
        deadlineDate,
        categories,
        setIsModalCardEditing,
        setIsModalShown,
        setInputCardTitle,
        setInputCardDescription,
        setInputCardDeadlineDate,
        setInputCardCategories,
        setRedactId
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
    const formatDate = (date: string) => {
        const newDate = date.split('.');
        return `${newDate[2]}-${newDate[1]}-${newDate[0]}`;
    }
    const handleEditButton = () => {
        if (!setIsModalCardEditing || !setIsModalShown) return;
        setIsModalCardEditing(true);
        setIsModalShown(true);
        if (setInputCardTitle && title) setInputCardTitle(title);
        if (setInputCardDescription && description) setInputCardDescription(description);
        if (setInputCardDeadlineDate && deadlineDate) setInputCardDeadlineDate(formatDate(deadlineDate));
        if (setInputCardCategories && categories) setInputCardCategories(categories);
        if(setRedactId) {
            setRedactId(id);
        }
    }
    return (
        <div className="card text-bg-light">
            <button className='card-settings'
                onClick={handleEditButton}>
                <img src={ThreeDots} alt='Settings'></img>
            </button>
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