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
      <center>
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setToggleEdit(!toggleEdit)}
              >
                edit
              </button>
              <button
                type="button"
                className="btn btn-danger bou"
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
      </center>
    </div>
  )
}

export default PaintingDetailsCard
