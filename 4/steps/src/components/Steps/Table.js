import React from 'react'

export default function Table(props) {
  let {list, deleteHandler, editHandler} = props
  return (
    <ul>
      {list.map((item, i) => {
        return (
          <li key={i} style={{listStyle: 'none'}}>
            <date>{item.date}</date> | <span style={{marginRight: '20px'}}>{item.distance}</span>
            <button onClick={() => editHandler(item)}>✎</button>
            <button onClick={() => deleteHandler(item)}>✘</button>
          </li>
        )
      })}
    </ul>
  )
}