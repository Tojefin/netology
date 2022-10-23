import useJsonFetch from '../hooks/useJsonFetch';

export default function Fetch({url}) {
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <h1>Data</h1>
      {data}, {loading?.toString()}, {error?.toString()}
    </div>
  )
}