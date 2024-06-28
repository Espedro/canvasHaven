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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={currPainting.name}
        />

        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          name="artist"
          onChange={handleChange}
          value={currPainting.artist}
        />

        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          name="genre"
          onChange={handleChange}
          value={currPainting.genre}
        />

        <label htmlFor="description"> Description </label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={currPainting.description}
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={currPainting.image}
        />

        <button type="submit" className="btn">
          edit
        </button>
      </form>
    )
  )
}

export default EditForm
