type Category =
{
    id: string;
    name?: string;
    color?: string;
    usable?: boolean;
    usableForCreation?: boolean;
    setIsModalShown?: React.Dispatch<React.SetStateAction<boolean>>;
    setIsModalCategoryEditing?: React.Dispatch<React.SetStateAction<boolean>>;
    setCategoryColorChosen?: React.Dispatch<React.SetStateAction<string>>;
    setInputCategoryName?: React.Dispatch<React.SetStateAction<string>>;
    setRedactId?: React.Dispatch<React.SetStateAction<string>>;
    selectedCategories?: string[];
    setSelectedCategories?: React.Dispatch<React.SetStateAction<string[]>>;
    selectedCategoriesInCreation?: string[];
    setSelectedCategoriesInCreation?: React.Dispatch<React.SetStateAction<string[]>>;
}

export default Category;