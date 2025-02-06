import './Categories.scss'

function Categories() {
  return (
    <div className='category-menu'>
      <button className='btn btn-primary'>New Category...</button>
      <div className="categories">
          <button className="category btn btn-outline-primary">All</button>
      </div>
    </div>
  )
}

export default Categories;
