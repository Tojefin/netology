import React from 'react'

export default function Details({info}) {
  let [state, setState] = React.useState()

  React.useEffect(() => {
    if (info) {
      setState ('loading')
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
      .then(raw => raw.json())
      .then(data => {
        setState (
          <div>
            <img src={data.avatar} alt={data.name}/>
            <h1>{data.name}</h1>
            <p>{data.details.city}</p>
            <p>{data.details.company}</p>
            <p>{data.details.position}</p>
          </div>
        )
      })
    }
  }, [info])


  return state
}