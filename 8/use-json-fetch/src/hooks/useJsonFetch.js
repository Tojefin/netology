import React from 'react'

export default function useJsonFetch(url, opts) {
  const [data, setData] = React.useState('')
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)

    fetch(url, opts)
    .then(raw => {
      if (raw.ok) {return raw.json()}
      return Promise.reject(raw);
    })
    .then(i => {setData(JSON.stringify(i)); setLoading(false)})
    .catch((response) => {response.json().then((json) => {setError(JSON.stringify(json)); setLoading(false)})});

  }, []); //eslint-disable-line

  return [data, loading, error]
}