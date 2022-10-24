import React from 'react'
import { NavLink } from 'react-router-dom'
import useJsonFetch from '../hooks/useJsonFetch'

export default function HeadPage() {
  const [data] = useJsonFetch('http://localhost:7777/posts', [])

  return (
    <div>
      <h1>Главная</h1>
      <div className="create">
        <NavLink className="button-create" to='/posts/new'>Добавить пост</NavLink>
      </div>
      {data.map((o, i) =>
        <span key={i}>
          <div className="block">
            <NavLink className="id" to={'/posts/' + o.id} exact >
              <div className="article">
                <p>{o.content}</p> {/* Сообщение с сервера */}
              </div>
            </NavLink>
          </div>
        </span>
      )}

    </div>
  )
}