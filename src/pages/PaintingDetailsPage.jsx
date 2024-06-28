import { useContext, useEffect, useState } from "react"
import { PaintingContext } from "../context/painting.context"
import { useParams } from "react-router-dom"
import { AuthContext } from "../context/auth.context"

import PaintingDetailsCard from "../components/PaintingDetailsCard"

function PaintingDetailsPage() {
  const [painting, setPainting] = useState(null)
  const { paintings } = useContext(PaintingContext)
  const { paintingId } = useParams()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    paintings && setPainting(paintings.find((curr) => curr._id === paintingId))
  }, [paintings])
  useEffect(() => {
    console.log(painting)
  }, [painting])

  return (
    <div>
      PaintingDetailsPage
      <PaintingDetailsCard {...painting} />
    </div>
  )
}

export default PaintingDetailsPage
