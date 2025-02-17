type Category =
{
    id: string;
    name?: string;
    color?: string;
    usable?: boolean;
    setIsModalShown?: React.Dispatch<React.SetStateAction<boolean>>;
    setIsModalCategoryEditing?: React.Dispatch<React.SetStateAction<boolean>>;
    setCategoryColorChosen?: React.Dispatch<React.SetStateAction<string>>;
    setInputCategoryName?: React.Dispatch<React.SetStateAction<string>>;
    setRedactId?: React.Dispatch<React.SetStateAction<string>>;
}

export default Category;