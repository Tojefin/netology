import DateTime from './DateTime'
import DateTimePretty from './DateTimePretty'

export default function Video(props) {
  const DateWithPretty = DateTimePretty(DateTime)
  return (
    <div className="video">
      <iframe title='youtube' src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateWithPretty date={props.date} />
    </div>
  )
}
