import CardProps from '../../interfaces/CardProps';
import CardType from '../Card/Card';
import CategoryType from '../../types/Category';
import Category from '../../components/Category/Category';
import './Modals.scss';

interface ModalCardProps {
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
    selectedCategoriesInCreation: string[];
    setSelectedCategoriesInCreation: React.Dispatch<React.SetStateAction<string[]>>;
    redactId: string;
}

const ModalCard: React.FC<ModalCardProps> = (
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
        setInputTextAreaName,
        selectedCategoriesInCreation,
        setSelectedCategoriesInCreation,
        redactId
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
        clearInputs();
    }
    const handleDiscard = function() : void{
        setIsModalShown(false);
        clearInputs();
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
            description: inputTextAreaName,
            categories: selectedCategoriesInCreation,
        };
        cards.push(newCard);
        localStorage.setItem('cards', JSON.stringify(cards));
        if (setCards) setCards(cards);
        setIsModalShown(false);
        clearInputs();
    }
    const handleDelete = function(): void {
        if (redactId === '-1') return;

        let localStorageCards : string | null = localStorage.getItem('cards');
        if (!localStorageCards){
            return;
        }
        let cards: Array<CardProps>;
        cards = JSON.parse(localStorageCards);
        cards = cards.filter(card => card.id !== redactId);
        localStorage.setItem('cards', JSON.stringify(cards));
        if (setCards) setCards(cards);
        setIsModalShown(false);
        clearInputs();
    }
    const handleSaveEditing = function(): void {
        if (redactId === '-1') return;

        let localStorageCards : string | null = localStorage.getItem('cards');
        let cards: Array<CardProps>;
        if (!localStorageCards){
            cards = [];
        }
        else {
            cards = JSON.parse(localStorageCards);
        }
        const updatedCards: Array<CardProps> = cards.map((card) => {
            if (card.id === redactId) {
                console.log(card.id);
                console.log(redactId);
                return { ...card,
                    title: inputName, 
                    description: inputTextAreaName, 
                    deadlineDate: getDeadlineDateFormatted(inputDeadlineName),
                    categories: selectedCategoriesInCreation,
                };
            }
            return card;
        });
        localStorage.setItem('cards', JSON.stringify(updatedCards));
        if (setCards) setCards(updatedCards);
        setIsModalShown(false);
        clearInputs();
    }
    const clearInputs = function(): void {
        setInputName('');
        setInputDeadlineName('');
        setInputTextAreaName('');
        setSelectedCategoriesInCreation([]);
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(event.target.value.slice(0, 50));
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
                        <Category
                            id={item.id}
                            key={index}
                            name={item.name}
                            color={item.color}
                            usableForCreation={true}
                            selectedCategoriesInCreation={selectedCategoriesInCreation}
                            setSelectedCategoriesInCreation={setSelectedCategoriesInCreation}
                        ></Category>)
                        : null}
                    </div>
                </div>
                <div className="modal-footer">
                    {
                    isModalCardEditing
                    ? <>
                        <button type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={handleDelete}>Delete card</button>
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