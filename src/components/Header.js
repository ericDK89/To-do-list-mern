import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Header() {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/').then(res => {setItems(res.data)})
    }, [items])

    const handleDelete = (id, event) => {
      event.preventDefault()
      axios.delete(`http://localhost:3001/${id}`)
        .then(() => {console.log('Deleted');})
        .catch((error) => {console.log(error);})
    }

    const handleDone = (item) => {
      if(item.done === 'done'){
        axios.put(`http://localhost:3001/edit/${item._id}`,{
          done: 'undone'
        })
      }else{
        axios.put(`http://localhost:3001/edit/${item._id}`,{
          done: 'done'
        })
      }
    }

  return (
    <div className='header container'>
      <div className='title-and-btn'>
        <h1>To-do-list</h1>
        <Link to='/additem'><button className='btn btn-add-new-item'>Add new item</button></Link>
      </div>
        {items.map((item) => {
            return(
              <div id={item._id} key={item._id} className='list'>
                <div className='check'>
                  <button className='btn-check' onClick={() => handleDone(item)} >Done</button>
                  <p id='item-list' className={item.done} >{item.text}</p>
                </div>
                <div>
                  <Link to={`/edit/${item._id}`}><button className='btns'>Edit</button></Link>
                  <button className='btns' onClick={(event) => {handleDelete(item._id, event)}}>Delete</button>
                </div>
              </div>
            )
        })}
    </div>
  )
}
