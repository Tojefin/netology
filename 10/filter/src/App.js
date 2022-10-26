import React from 'react'
import Form from './components/Form'
import List from './components/List'
import './App.css'

export default function App() {
  let list = [{ name: 'test', price: 100 }]
  return (
    <div className="App">
      <Form />
      <List items={list} />
    </div>
  )
}
