import React, { useState, useEffect } from 'react'
import Notes from './Notes'
import {v4 as uuid} from 'uuid'

const API_URL = "http://localhost:7777/notes"

export default function Crud() {
  const [notes, setNotes] = useState([])
  const [form, setForm] = useState('')

  const loadNotes = () => { 
    fetch(API_URL, {
      method: 'GET',
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    .then(response => response.json()) 
    .then(arr => setNotes(arr))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.trim() === '') return;
    let newNote = {id: uuid(), content: form}

    fetch(API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify(newNote)
    })
    .then(() => loadNotes())

    setForm('')
  }
  const handleDelete = id => {
    fetch(API_URL+'/'+id, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    .then(() => loadNotes())
  }

  useEffect(() => loadNotes(), []) //eslint-disable-line

  return (
    <div className='App'>
      <form onSubmit={handleSubmit} className="form">
        <span className='title'>
          <h1>Notes</h1>
          <button type="button" onClick={loadNotes} className="update">♻️</button>
        </span>
        <span className='form'>
          <textarea value={form} onChange={(e) => setForm(`${e.currentTarget.value}`)} rows="7" cols="50" placeholder='Новая заметка'/>
          <button className="send">➡️</button>   
        </span>
      </form>

      <div className="notes">
        <Notes notes={notes} handleDelete={handleDelete}/>
      </div>
  </div>
  )
}