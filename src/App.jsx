import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import HomePage from "./pages/HomePage"
import PaintingList from "./components/PaintingList"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import PaintingPage from "./pages/PaintingPage"
import AboutPage from "./pages/AboutPage"
import AddPainting from "./pages/AddPainting"
import PaintingDetailsPage from "./pages/PaintingDetailsPage"
import { Toaster } from "react-hot-toast"

function App() {
  const isLoggedIn = () => {
    return localStorage.getItem("authToken") ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    )
  }

  const IsNotLoggedIn = () => {
    return !localStorage.getItem("authToken") ? <Outlet /> : <Navigate to="/" />
  }

  return (
    <>
      <div>
        <NavBar />
        <Toaster />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/painting" element={<PaintingPage />} />

          <Route
            path="/painting/:paintingId"
            element={<PaintingDetailsPage />}
          />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/painting/create" element={<AddPainting />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
