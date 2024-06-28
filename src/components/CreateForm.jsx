import { useContext, useState } from "react"
import { PaintingContext } from "../context/painting.context"

function CreateForm() {
  const [paintingInfo, setPaintingInfo] = useState({
    name: "",
    artist: "",
    genre: "",
    description: "",
    image: "",
  })
  const { createPainting } = useContext(PaintingContext)
  const handleChange = (e) => {
    setPaintingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        createPainting(paintingInfo)
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={paintingInfo.name}
      />

      <label htmlFor="artist">Artist</label>
      <input
        type="text"
        name="artist"
        onChange={handleChange}
        value={paintingInfo.artist}
      />

      <label htmlFor="genre">Genre</label>
      <input
        type="text"
        name="genre"
        onChange={handleChange}
        value={paintingInfo.genre}
      />

      <label htmlFor="description"> Description </label>
      <input
        type="text"
        name="description"
        onChange={handleChange}
        value={paintingInfo.description}
      />

      <label htmlFor="image">Image</label>
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={paintingInfo.image}
      />

      <button type="submit" className="btn">
        create
      </button>
    </form>
  )
}

export default CreateForm
