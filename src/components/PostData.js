import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function PostData() {

    const [text, setText] = useState('')
    

    const handleClick = (event) => {
      event.preventDefault()
      console.log(text)
      const payload = {
        text: text,
      }
      axios.post('http://localhost:3001/additem', payload)
        .then(function(){
          if(text === ''){
            return alert('Cant be empty')
          }else{
            return window.location = '/'
          }
        })
        .catch((error) => {console.log('unable to add data from axios ' + error);})
    }

  return (
    <div className='container'>
      <h1 className='title-add'>Add new item</h1>
      <form>
        <input text='text' value={text} type='text' placeholder='Text' onChange={(event) => {setText(event.target.value)}}/>
        <button className='btn-add' type='submit' onClick={handleClick}>Add</button>
        <Link to='/'><button className='btn-cancel' >Cancel</button></Link>
      </form>
    </div>
  )
}


