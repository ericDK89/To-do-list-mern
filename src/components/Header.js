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

  return (
    <div>
      <h1>Pokedex</h1>
      <Link to='/additem'><button>Add new Pokemon</button></Link>
        {items.map((item) => {
            return(
              <div id={item._id} key={item._id}>
                <h1> {item.title} </h1>
                <p> {item.text} </p>
                <Link to='/edit/:id'><button>Edit</button></Link>
                <button onClick={(event) => {handleDelete(item._id, event)}}>Delete</button>
              </div>
            )
        })}
    </div>
  )
}
