import { createContext, useState, useEffect } from "react"
import api from "../services/api"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const PaintingContext = createContext()

function PaintingProvider({ children }) {
  const [paintings, setPaintings] = useState(null)
  const navigate = useNavigate()

  const getAllPaintings = async () => {
    try {
      const response = await api.get("/painting/all")
      console.log(response)
      setPaintings(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const createPainting = async (body) => {
    try {
      const response = await api.post("/painting/create", body)

      if (response.status === 200 || response.status === 201) {
        toast.success(body.name + " created successfully")

        getAllPaintings()
        navigate("/painting")
      }
    } catch (error) {
      toast.error("Error creating the painting")
      console.log("Error while creating the painting", error)
    }
  }

  const updatePainting = async (body, id, toggle) => {
    try {
      const response = await api.put("/painting/" + id, body)

      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.updated.name + " was updated successfully")
        getAllPaintings()
        toggle(false)
      }
    } catch (error) {
      toast.error("Error updating this painting")
      console.log(error)
    }
  }

  const deletePainting = async (id) => {
    try {
      const check = confirm("Are you sure you want to delete this painting?")
      if (check) {
        const response = await api.delete("/painting/" + id)

        if (response.status === 200) {
          toast.success("Painting deleted successfully")
          getAllPaintings()

          navigate(-1)
        }
      }
    } catch (error) {
      toast.error("Error deleting the painting")
      console.log(error)
    }
  }

  useEffect(() => {
    getAllPaintings()
  }, [])

  return (
    <PaintingContext.Provider
      value={{
        paintings,
        createPainting,
        updatePainting,
        deletePainting,
        getAllPaintings,
      }}
    >
      {children}
    </PaintingContext.Provider>
  )
}

export { PaintingContext, PaintingProvider }
