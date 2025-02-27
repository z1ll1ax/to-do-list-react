import './Modals.scss';
import CategoryInfo from '../Category/CategoryInfo';
import CategoryType from '../../types/Category';

interface CategoriesProps {
    setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
    redactId: string;
    colorChosen: string;
    setColorChosen: React.Dispatch<React.SetStateAction<string>>;
    inputName: string;
    setInputName: React.Dispatch<React.SetStateAction<string>>;
    isModalCategoryEditing: boolean;
    setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCard: React.FC<CategoriesProps> = (
    { 
        setCategories,
        redactId,
        colorChosen,
        setColorChosen,
        inputName,
        setInputName,
        isModalCategoryEditing,
        setIsModalShown,
    }) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(event.target.value.slice(0, 20));
    };
    const handleClose = function() : void{
        setIsModalShown(false);
    }
    const handleDiscard = function() : void{
        setIsModalShown(false);
    }
    const handleSave = function() : void{
        let localStorageCategories : string | null = localStorage.getItem('categories');
        let categories: Array<CategoryType>;
        if (!localStorageCategories){
            categories = [];
        }
        else {
            categories = JSON.parse(localStorageCategories);
        }
        const uniqueId = crypto.randomUUID();
        let newCategory = {id: uniqueId, name: inputName, color: colorChosen};
        categories.push(newCategory);
        localStorage.setItem('categories', JSON.stringify(categories));
        if (setCategories) setCategories(categories);
        setIsModalShown(false);
    }
    const handleDelete = function(): void {
        if (redactId === '-1') return;
        let localStorageCategories : string | null = localStorage.getItem('categories');
        if (!localStorageCategories){
            return;
        }
        let categories: Array<CategoryType>;
        categories = JSON.parse(localStorageCategories);
        categories = categories.filter(category => category.id !== redactId);
        localStorage.setItem('categories', JSON.stringify(categories));
        if (setCategories) setCategories(categories);
        setIsModalShown(false);
    }
    const handleSaveEditing = function(): void {
        if (redactId === '-1') return;
        let localStorageCategories : string | null = localStorage.getItem('categories');
        let categories: Array<CategoryType>;
        if (!localStorageCategories){
            categories = [];
        }
        else {
            categories = JSON.parse(localStorageCategories);
        }
        const updatedCategories: Array<CategoryType> = categories.map((category) => {
            if (category.id === redactId) {
              return { ...category, name: inputName, color: colorChosen };
            }
            return category;
          });
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
        if (setCategories) setCategories(updatedCategories);
        setIsModalShown(false);
    }
    return (
        <div className="modal modal-dialog-centered" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">New category</h5>
                    <button type="button"
                            className="btn-close"
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                            onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                    <div className="input-group input-group-sm mb-3 input-container">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Category Name</span>
                        <input type='text'
                                placeholder='Enter category name'
                                className='form-control input-color'
                                value={inputName}
                                onChange={handleInputChange}></input>
                    </div>
                    <div className="btn-group" role="group" aria-label="Choose color">
                        <button type="button"
                                className="btn btn-danger"
                                onClick={function(){setColorChosen('Red')}}>Red</button>
                        <button
                                type="button"
                                className="btn btn-warning"
                                onClick={function(){setColorChosen('Yellow')}}>Yellow</button>
                        <button
                                type="button"
                                className="btn btn-success"
                                onClick={function(){setColorChosen('Green')}}>Green</button>
                        <button
                                type="button"
                                className="btn btn-info"
                                onClick={function(){setColorChosen('Light Blue')}}>Light Blue</button>
                        <button
                                type="button"
                                className="btn btn-primary"
                                onClick={function(){setColorChosen('Blue')}}>Blue</button>
                        <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={function(){setColorChosen('Gray')}}>Gray</button>
                    </div>
                    <div>
                        <p className='color-label'>Color chosen: <CategoryInfo name={inputName ? inputName : 'Your category name'} color={colorChosen} isBigSize={true}></CategoryInfo></p>
                    </div>
                </div>
                <div className="modal-footer">
                    {
                    isModalCategoryEditing
                    ? <>
                        <button type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={handleDelete}>Delete category</button>
                        <button type="button"
                            className="btn btn-primary"
                            onClick={handleSaveEditing}>Save changes</button>
                    </>
                    : <>
                        <button type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={handleDiscard}>Discard changes</button>
                        <button type="button"
                            className="btn btn-primary"
                            onClick={handleSave}>Create new category</button>
                    </>
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCard;