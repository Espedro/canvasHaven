import { useContext, useState } from "react"
import { PaintingContext } from "../context/painting.context"
import { AuthContext } from "../context/auth.context"
import EditForm from "./EditForm"
function PaintingDetailsCard({
  _id,
  artist,
  description,
  genre,
  image,
  name,
  reviews,
}) {
  const [toggleEdit, setToggleEdit] = useState(false)
  const { deletePainting } = useContext(PaintingContext)
  const { user } = useContext(AuthContext)

  return (
    <div>
      <img src={image} />

      <div>
        <h4> {name}</h4>

        <p>
          Artist : {artist} <br />
          Genre : {genre} <br />
          Description : {description} <br />
        </p>

        {user && user.isAdmin && (
          <>
            {" "}
            <button className="btn " onClick={() => setToggleEdit(!toggleEdit)}>
              edit
            </button>
            <button
              className="btn bg-amber-700"
              onClick={() => deletePainting(_id)}
            >
              delete
            </button>
          </>
        )}
      </div>

      {toggleEdit && (
        <EditForm toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} />
      )}
    </div>
  )
}

export default PaintingDetailsCard
