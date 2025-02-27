import CardProps from '../../interfaces/CardProps';
import CardType from '../Card/Card';
import CategoryType from '../../types/Category';
import CategoryInfo from '../../components/Category/CategoryInfo';
import './Modals.scss';

interface CardsProps {
    categories: Array<CategoryType>;
    setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
    isModalCardEditing: boolean;
    setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
    inputName: string;
    setInputName: React.Dispatch<React.SetStateAction<string>>;
    inputDeadlineName: string;
    setInputDeadlineName: React.Dispatch<React.SetStateAction<string>>;
    inputTextAreaName: string;
    setInputTextAreaName: React.Dispatch<React.SetStateAction<string>>;
}

const ModalCard: React.FC<CardsProps> = (
    { 
        categories,
        setCards,
        isModalCardEditing,
        setIsModalShown,
        inputName,
        setInputName,
        inputDeadlineName,
        setInputDeadlineName,
        inputTextAreaName,
        setInputTextAreaName
    }) => {
    const getTodayDateFormatted = function(): string {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}.${month}.${year}`;
    }
    const getDeadlineDateFormatted = function(date: string): string {
        const splitted = date.split('-');
        const day = splitted[2];
        const month = splitted[1];
        const year = splitted[0];
        return `${day}.${month}.${year}`;
    }
    const handleClose = function() : void{
        setIsModalShown(false);
    }
    const handleDiscard = function() : void{
        setIsModalShown(false);
    }
    const handleSave = function() : void{
        let localStorageCards : string | null = localStorage.getItem('cards');
        let cards: Array<CardProps>;
        if (!localStorageCards){
            cards = [];
        }
        else {
            cards = JSON.parse(localStorageCards);
        }
        const uniqueId = crypto.randomUUID();
        let newCard = {
            id: uniqueId,
            title: inputName,
            createDate: getTodayDateFormatted(),
            deadlineDate: getDeadlineDateFormatted(inputDeadlineName),
            description: inputTextAreaName
        };
        cards.push(newCard);
        localStorage.setItem('cards', JSON.stringify(cards));
        if (setCards) setCards(cards);
        setIsModalShown(false);
    }
    const handleDelete = function(): void {
        // if (redactId === '-1') return;
        // let localStorageCategories : string | null = localStorage.getItem('categories');
        // if (!localStorageCategories){
        //     return;
        // }
        // let categories: Array<CategoryType>;
        // categories = JSON.parse(localStorageCategories);
        // categories = categories.filter(category => category.id !== redactId);
        // localStorage.setItem('categories', JSON.stringify(categories));
        // if (setCategories) setCategories(categories);
        // setIsModalShown(false);
    }
    const handleSaveEditing = function(): void {
        // if (redactId === '-1') return;
        // let localStorageCategories : string | null = localStorage.getItem('categories');
        // let categories: Array<CategoryType>;
        // if (!localStorageCategories){
        //     categories = [];
        // }
        // else {
        //     categories = JSON.parse(localStorageCategories);
        // }
        // const updatedCategories: Array<CategoryType> = categories.map((category) => {
        //     if (category.id === redactId) {
        //         return { ...category, name: inputName, color: colorChosen };
        //     }
        //     return category;
        //     });
        // localStorage.setItem('categories', JSON.stringify(updatedCategories));
        // if (setCategories) setCategories(updatedCategories);
        // setIsModalShown(false);
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(event.target.value.slice(0, 20));
    };
    const handleInputTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputTextAreaName(event.target.value);
    };
    const handleInputDeadlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputDeadlineName(event.target.value);
    };
    return (
        <div className="modal modal-dialog-centered" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">New card</h5>
                    <button type="button"
                            className="btn-close"
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                            onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                    <div className="input-group input-group-sm mb-3 input-container">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Card Name</span>
                        <input type='text'
                                placeholder='Enter card name'
                                className='form-control input-color'
                                value={inputName}
                                onChange={handleInputChange}
                                ></input>
                    </div>
                    <label className='textarea-label'>Card description</label>
                    <textarea className="form-control textarea"
                        rows={5}
                        value={inputTextAreaName}
                        onChange={handleInputTextAreaChange}
                    ></textarea>
                    <div className="input-group input-group-sm mb-3 input-container">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Card deadline date</span>
                        <input type='date'
                                placeholder='Enter card name'
                                className='form-control input-color'
                                value={inputDeadlineName}
                                onChange={handleInputDeadlineChange}
                                ></input>
                    </div>
                    <div className="btn-group category-group" role="group">
                    {categories?.length
                        ? categories.map((item, index) =>
                        <CategoryInfo
                            id={item.id}
                            key={index}
                            name={item.name}
                            color={item.color}
                            isBigSize={true}
                            isClickable={true}
                        ></CategoryInfo>)
                        : null}
                    </div>
                    {/* <div>
                       <p className='color-label'>Color chosen: <CategoryInfo name={inputName ? inputName : 'Your category name'} color={colorChosen} isBigSize={true}></CategoryInfo></p>
                    </div> */}
                </div>
                <div className="modal-footer">
                    {
                    isModalCardEditing
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