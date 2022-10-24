import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import useJsonFetch from '../hooks/useJsonFetch'

export default function DisplayPage() {
  const [data] = useJsonFetch('http://localhost:7777/posts', [])
  let { id } = useParams()
  const url = 'http://localhost:7777/posts/' + id

  console.log(data)

  const [form, setForm] = useState({
    id: id,
    content: ''
  })

  useEffect(() => {
    if (data.length > 0) {
      let d = data.find(i => i.id == id) //eslint-disable-line
      console.log(d)
      setForm({ ...form, content: d.content })
    }
  }, [data, id]) //eslint-disable-line


  const handleDelete = () => {
    fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
  }

  return (
    <div>
      <h1>Страница просмотра</h1>
      <button className="exit">
        <NavLink to='/' exact>Назад</NavLink>
      </button>
      <form>
        <div className="block-comment">
          <span className="article">
            <textarea value={form.content} />
          </span>
          <div className="create">
            <button className="button-create" >
              <NavLink className="button-create" to={'/posts/' + id + '/edit'} exact>Изменить</NavLink>
            </button>
            <button className="button-create delete">
              <NavLink className="button-create delete" to='/' exact onClick={handleDelete}>Удалить</NavLink>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
