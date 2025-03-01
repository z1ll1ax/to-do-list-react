interface CardProps {
    id: string;
    title?: string;
    description?: string;
    createDate?: string;
    deadlineDate?: string;
    categories?: string[];
    setIsModalShown?: React.Dispatch<React.SetStateAction<boolean>>;
    setIsModalCardEditing?: React.Dispatch<React.SetStateAction<boolean>>;
    setInputCardTitle?: React.Dispatch<React.SetStateAction<string>>;
    setInputCardDescription?: React.Dispatch<React.SetStateAction<string>>;
    setInputCardDeadlineDate?: React.Dispatch<React.SetStateAction<string>>;
    setInputCardCategories?: React.Dispatch<React.SetStateAction<string[]>>;
    setRedactId?: React.Dispatch<React.SetStateAction<string>>;
}

export default CardProps;