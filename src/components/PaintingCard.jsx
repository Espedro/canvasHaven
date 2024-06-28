import { Link } from "react-router-dom"

function PaintingCard({ name, artist, genre, description, image, id }) {
  return (
    <div>
      <div className="card">
        <img src={image} className="card-img-top img" />

        <div className="card-body">
          <p className="card-title"> {name} </p>

          <p className="card-subtitle mb-2 text-body-secondary">
            {" "}
            {description}
          </p>

          <Link to={`/painting/${id}`}>See Details</Link>
        </div>
      </div>
    </div>
  )
}

export default PaintingCard
