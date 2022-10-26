import { useSelector, useDispatch } from 'react-redux'

export default function List() {
  const items = useSelector(state => state.reducerList)
  const form = useSelector(state => state.reducerForm)
  const dispatch = useDispatch()

  const removeHandler = (e) => {
    if (form.type === 'edit') {
      dispatch({ type: 'cancel' })
    }
    dispatch({ type: 'remove', payload: e })
  }

  return (
    <ul>
      {items.map(i => {
        return (
          <li key={i.name}>
            {i.name} | {i.price} |
            <button onClick={() => dispatch({ type: 'edit', payload: { name: i.name, price: i.price } })}>✏️</button>
            <button onClick={() => removeHandler(i.name)}>❌</button>
          </li>
        )
      })}
    </ul>
  )
}