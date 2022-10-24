import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import useJsonFetch from '../hooks/useJsonFetch'

export default function EditPage({ match }) {
  const [data] = useJsonFetch('http://localhost:7777/posts', [])
  const id = Number(useParams().id)

  const [form, setForm] = useState({
    id: id,
    content: ''
  })

  useEffect(() => {
    if (data.length > 0) {
      let d = data.find(i => i.id === id)
      setForm({ ...form, content: d.content })
    }
  }, [data, id]) //eslint-disable-line

  const handleChange = (e) => {
    const { value } = e.target
    setForm({ ...form, content: value })
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
      <h1>Карточка редактирования</h1>
      <form>
        <div className="block-comment">
          <div className="create">
            <button className="exit">
              <NavLink to='/' exact>Выход</NavLink>
            </button>
          </div>
          <div className="content">
            <div className="text-content">
              <textarea value={form.content} onChange={handleChange} />
            </div>
          </div>
          <div className="create">
            <button className="button-create">
              <NavLink className="button-create" to='/' exact onClick={handleSubmit}>Сохранить</NavLink>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}