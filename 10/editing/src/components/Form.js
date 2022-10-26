import { useSelector, useDispatch } from 'react-redux'

export default function Form() {
  const values = useSelector(state => state.reducerForm)
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    let { name, value } = e.currentTarget
    dispatch({ type: 'update', payload: { name, value } })
  }
  const addHandler = (e) => {
    if (values.type === 'edit') {
      dispatch({ type: 'cancel' })
    }
    dispatch({ type: 'save', payload: values })
  }

  return (
    <div>
      <input
        type='text'
        name='name'
        value={values.name}
        placeholder='Название'
        onChange={(e) => changeHandler(e)}
      />
      <input
        type='number'
        name='price'
        value={values.price}
        placeholder='Цена'
        onChange={(e) => changeHandler(e)}
      />
      <button onClick={addHandler}>save</button>
      {values.type === 'edit' &&
        <button onClick={() => dispatch({ type: 'cancel' })}>cancel</button>
      }
    </div>
  )
}