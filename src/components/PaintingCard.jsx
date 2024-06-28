import { Link } from "react-router-dom"

function PaintingCard({ name, artist, genre, description, image, id }) {
  return (
    <div>
      <img src={image} />

      <div>
        <h1> {name} </h1>

        <p> {description}</p>

        <Link to={`/painting/${id}`}>See Details</Link>
      </div>
    </div>
  )
}

export default PaintingCard
