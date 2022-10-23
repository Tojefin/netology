export default function List({list, activeHandler, active}) {
  return (
    <ul>
      {list.map((el) => {
        return (
          <li className={active?.id === el.id ? 'active' : null} key={el.name} onClick={() => activeHandler(el)}>
            {el.name}
          </li>
        )
      })}
    </ul>
  )
}