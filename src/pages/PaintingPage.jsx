import PaintingList from '../components/PaintingList'
import React from 'react'

function PaintingPage() {
  return (
   

<div>

<section id="home" className="hero-block">
        <div className="container">
          <h1>Our Sanctuary of Paintings </h1>
         
        </div>
      </section>


      <div className='container'>
<br />
<PaintingList />
    </div>
      </div>


  )
}

export default PaintingPage