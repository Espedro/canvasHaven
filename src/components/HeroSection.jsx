import Carousel from "react-bootstrap/Carousel"

function HeroSection() {
  return (
    <div className="row">
      <section id="home" className="hero-block">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 slide"
              src="https://images.fineartamerica.com/images-medium-large-5/best-art-choice-award-original-abstract-oil-painting-modern-trees-contemporary-home-deco-gallery-emma-lambert.jpg"
              alt="First Slide"
            />

            <Carousel.Caption>
              <h2>Banff National Park</h2>

              <p>Canada / Banff</p>
            </Carousel.Caption>
          </Carousel.Item>

         

          
        </Carousel>
      </section>
    </div>
  )
}

export default HeroSection
