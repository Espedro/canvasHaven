import { useContext, useState, useEffect } from "react"
import { PaintingContext } from "../context/painting.context"
import { useParams } from "react-router-dom"

function EditForm({ toggleEdit, setToggleEdit }) {
  const [currPainting, setCurrPainting] = useState(null)
  const { paintingId } = useParams()
  const { paintings, updatePainting } = useContext(PaintingContext)

  const handleChange = (e) => {
    setCurrPainting((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    paintings &&
      setCurrPainting(paintings.find((painting) => painting._id === paintingId))
  }, [toggleEdit])

  return (
    currPainting && (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          updatePainting(currPainting, paintingId, setToggleEdit)
        }}
      >
        <div class="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={currPainting.name}
            className="form-control"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            name="artist"
            onChange={handleChange}
            value={currPainting.artist}
            className="form-control"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            name="genre"
            onChange={handleChange}
            value={currPainting.genre}
            className="form-control"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="description"> Description </label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={currPainting.description}
            className="form-control"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={currPainting.image}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-success w-50">
          Update
        </button>
      </form>
    )
  )
}

export default EditForm
