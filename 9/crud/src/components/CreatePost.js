import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function CreatePost() {
  const [form, setForm] = useState({
    id: '',
    content: ''
  })

  const handleChange = (e) => {
    const { value } = e.target
    setForm(prev => ({ ...prev, id: 0, content: value }))
  }

  const handleSubmit = () => {
    fetch('http://localhost:7777/posts', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
  }

  return (
    <div>
      <h1>Страница создания</h1>
      <form>
        <div className="block-comment">
          <button className="exit">
            <NavLink to='/' exact>Назад</NavLink>
          </button>
          <textarea value={form.content} onChange={handleChange} />
          <NavLink className="button-create" to='/' exact onClick={handleSubmit}>Опубликовать</NavLink>
        </div>
      </form>
    </div>
  )
}