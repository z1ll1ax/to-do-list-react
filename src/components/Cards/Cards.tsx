import Card from '../Card/Card';
import './Cards.scss'

function Cards() {
    return (
        <div className="cards">
            <Card
                title='Make this task'
                description='Learn React Basics and make full functionality for the task'
                createDate='05.02.2025'
                deadlineDate='09.02.2025'
                categories={[{id: '123', name: 'Job', color: 'Red'}, {id: '321', name: 'Hobby', color: 'Green'}]}/>
            <Card
                title='Make the search bar work'
                description='it is in the top corner'
                createDate='06.02.2025'
                deadlineDate='09.02.2025'
            />
        </div>
    )
}
  
export default Cards;