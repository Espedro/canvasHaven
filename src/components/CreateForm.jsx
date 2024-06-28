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
    <div className="container">
    <form
      onSubmit={(e) => {
        e.preventDefault()
        createPainting(paintingInfo)
      }}
    >
      <div class="mb-3">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={paintingInfo.name}
        className="form-control"
      />
      </div>

      <div class="mb-3">
      <label htmlFor="artist">Artist</label>
      <input
        type="text"
        name="artist"
        onChange={handleChange}
        value={paintingInfo.artist}
        className="form-control"
      />
</div>
<div class="mb-3">
      <label htmlFor="genre">Genre</label>
      <input
        type="text"
        name="genre"
        onChange={handleChange}
        value={paintingInfo.genre}
        className="form-control"
      />
      </div>
      <div class="mb-3">
      <label htmlFor="description"> Description </label>
      <input
        type="text"
        name="description"
        onChange={handleChange}
        value={paintingInfo.description}
        className="form-control"
      />
      </div>
      <div class="mb-3">
      <label htmlFor="image">Image</label>
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={paintingInfo.image}
        className="form-control"
      />
</div>
<center>
      <button type="submit" className="btn btn-primary w-50">
        create
      </button>
      </center>
    </form>
    </div>
  )
}

export default CreateForm
