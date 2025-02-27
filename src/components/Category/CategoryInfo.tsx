import './Category.scss'

interface CategoryInfoProps {
    id?: string;
    name?: string;
    color?: string;
    isBigSize?: boolean;
    isClickable?: boolean;
}

const CategoryInfo: React.FC<CategoryInfoProps> = (
    {
        id,
        name,
        color,
        isBigSize,
        isClickable
    }
) => {
  const getClassFromColor = () => {
    switch (color) {
        case 'Blue':
            return 'primary';
        case 'Green':
            return 'success';
        case 'Gray':
            return 'secondary';
        case 'Red':
            return 'danger';
        case 'Yellow':
            return 'warning';
        case 'Light Blue':
            return 'info';
    }
    return 'dark';
  }
    return (
        <>
        {
            isBigSize
            ? <button className={`category btn btn-outline-${getClassFromColor()}`}>{name}</button>
            : <span className={`category-card btn btn-outline-${getClassFromColor()}`}>{name}</span>
        }
        </>
      )
}

export default CategoryInfo;
