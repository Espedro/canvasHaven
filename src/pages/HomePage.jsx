import PaintingList from "../components/PaintingList"

import HeroSection from "../components/HeroSection"

function HomePage() {
  return (
    <div>
      <HeroSection />

      <br />

      <div className="container">
        <PaintingList />
      </div>
      <br />
    </div>
  )
}

export default HomePage
