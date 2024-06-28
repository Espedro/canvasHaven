import { useState, useEffect, useContext } from "react"
import { PaintingContext } from "../context/painting.context"
import PaintingCard from "./PaintingCard"

function PaintingList() {
  const { paintings, getAllPaintings } = useContext(PaintingContext)
  console.log("this is the paintings data from context ===>", paintings)

  return (
    <div>
      {paintings ? (
        paintings.map((painting) => (
          <PaintingCard
            key={painting._id}
            painting={painting}
            name={painting.name}
            image={painting.image}
            description={painting.description}
            id={painting._id}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default PaintingList
