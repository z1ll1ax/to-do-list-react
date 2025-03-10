import './Category.scss'

interface CategoryInfoProps {
    name?: string;
    color?: string;
    isBigSize?: boolean;
}

const CategoryInfo: React.FC<CategoryInfoProps> = (
    {
        name,
        color,
        isBigSize,
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
