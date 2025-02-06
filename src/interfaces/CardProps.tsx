import Category from '../types/Category';

interface CardProps {
    title?: string;
    description?: string;
    createDate?: string;
    deadlineDate?: string;
    categories?: Category[];
}

export default CardProps;