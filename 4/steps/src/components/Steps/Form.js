import React from 'react'

export default function Form(props) {
  let {formData, setFormData} = props

  const changeHandler = (e) => {
    let {name, value} = e.target
    setFormData((prevFormData) => ({...prevFormData, [name]: value}))
  }
  const submitHandler = (e) => {
    e.preventDefault()
    props.submitHandler(formData)
  }

  return (
    <form onSubmit={submitHandler}>
      <input type='date' value={formData.date} name='date' onChange={changeHandler} required></input>
      <input type='text' placeholder='Пройдено км' value={formData.distance} min='0' name='distance' onChange={changeHandler} required></input>
      <button>OK</button>
    </form>
  )
}