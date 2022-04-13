import React, { useState } from 'react'
import axios from 'axios'

export default function PostData() {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const handleClick = (event) => {
      event.preventDefault()
      console.log(title, text);
      const payload = {
        title: title,
        text: text
      }
      axios.post('http://localhost:3001/additem', payload)
        .then(() => alert('Created'))
        .catch((error) => {console.log('unable to add data from axios ' + error);})
    }

  return (
    <div>
      <form>
        <input name='title' value={title} type='text' onChange={(event) => {setTitle(event.target.value)}}/>
        <input name='text' value={text} type='text' onChange={(event) => {setText(event.target.value)}}/>
        <button type='submit' onClick={handleClick}>Add</button>
      </form>
    </div>
  )
}
