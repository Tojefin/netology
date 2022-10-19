export default function Card({img, children}) {
  let imgElement = img ? <img src={img.src} alt={img.alt} className="card-img-top"/> : null;

  return (
    <div className="card" style={{width: "18rem", marginBottom: "2rem"}}>
      {imgElement}
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}