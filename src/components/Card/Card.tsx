import './Card.scss'

const Card = () => {
    return (
        <div className="card text-bg-light">
            <h5 className="card-title">Card title Card title Card title Card title Card title Card title Card title Card title</h5>
            <p className="card-text card-description">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className='card-footer'>
                <div className='card-categories'>
                    <span className="category-card btn btn-outline-primary">Important</span>
                    <span className="category-card btn btn-outline-primary">Important</span>
                    <span className="category-card btn btn-outline-primary">Important</span>
                    <span className="category-card btn btn-outline-primary">Important</span>
                </div>
                <div className='card-dates-container'>
                    <p className="card-text"><small><i>Created 05.02</i></small></p>
                    <p className="card-text"><small><i>Deadline 09.02</i></small></p>
                </div>
            </div>
        </div>
    );
}

export default Card;