import React from 'react'
import Form from './Form'
import Table from './Table'

function dateSort(arr) {
  return arr.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  })
}

export default function Steps() {
  let [list, setList] = React.useState([
    {date: '2022-10-07', distance: '5.7'},
    {date: '2022-10-06', distance: '14.2'},
    {date: '2022-10-05', distance: '3.4'}
  ])
  let [formData, setFormData] = React.useState({date: '2022-10-17', distance: '12'})

  const submitHandler = (formData) => {
    let same = list.filter((el) => el.date === formData.date)[0]
    if (same) {
      return setList(dateSort([
        ...list.filter((el) => el.date !== formData.date), 
        {date: formData.date, distance: +same.distance + +formData.distance}
      ]))
    }
    setList(dateSort([...list, formData]))
  }
  const editHandler = (elm) => {
    setFormData(elm)
  }
  const deleteHandler = (del) => {
    setList(
      dateSort([...list.filter((elm) => elm !== del)])
    )
  }

  return (
    <>
      <Form formData={formData} setFormData={setFormData} submitHandler={submitHandler}/>
      <Table list={list} editHandler={editHandler} deleteHandler={deleteHandler}/>
    </>
  )
}