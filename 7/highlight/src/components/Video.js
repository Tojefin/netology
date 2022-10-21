export default function Video(props) {
  return (
      <div className="item item-video">
          <iframe title='youtube' src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <p className="views">Просмотров: {props.views}</p>
      </div>
  )
};