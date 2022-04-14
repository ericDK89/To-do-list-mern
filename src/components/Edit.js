import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Edit() {

    const [text, setText] = useState('')
    
    const handleUpdate = (event) => {
      event.preventDefault()
      console.log(window.location)
      axios.put(`http://localhost:3001${window.location.pathname}`, {
        text: text
      })
      .then(function(){
        if(text === ''){
          return alert('Cant be empty')
        }else{
          return window.location = '/'
        }
      })
      .catch(error => {console.log(error);})
    }

  return (
    <div className='container'>
      <h1 className='title-add'>Edit the item</h1>
      <form>
        <input text='text' value={text} type='text' placeholder='Text' onChange={(event) => {setText(event.target.value)}}/>
        <button className='btn-add' type='submit' onClick={handleUpdate}>Add</button>
        <Link to='/'><button className='btn-cancel' >Cancel</button></Link>
      </form>
    </div>
  )
}
