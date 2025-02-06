import Category from '../Category/Category';
import './Categories.scss'

function Categories() {
  return (
    <div className='category-menu'>
      <button className='btn btn-primary category-add-btn'>New Category...</button>
      <div className="categories">
          <Category usable={true} name='All'/>
          <Category usable={true} name='Important' color='yellow'/>
          <Category usable={true} name='Job' color='blue'/>
          <Category usable={true} name='Hobby' color='green'/>
          <Category usable={true} name='Health' color='red'/>
      </div>
    </div>
  )
}

export default Categories;
