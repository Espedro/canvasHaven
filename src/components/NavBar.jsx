import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function NavBar() {
  const { user, logout } = useContext(AuthContext)

  return (
    <div className="bg-black">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div class="container-fluid">
            <Link to="/">
            <h1>
              <a className="logo" href="#">
                
                Canva Haven
               
              </a>
              </h1>
              
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/painting">
                    <a class="nav-link active" aria-current="page" href="#">
                      Painting
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    {" "}
                    <Link to="/about" className="links">
                      About
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    {" "}
                    {user && user.isAdmin && (
                      <Link to="/painting/create">Create a Painting</Link>
                    )}
                  </a>
                </li>
              </ul>

              <span class="navbar-text">
                {user ? (
                  <div className="center gap-4 p-4">
                    <button onClick={logout} className="btn btn-light">
                      logout
                    </button>
                  </div>
                ) : (
                  <div className="center gap-4 p-4">
                    <Link to="/signup" className="btn btn-light">
                      sign up
                    </Link>
                    <Link to="/login" className="btn btn-light">
                      log in
                    </Link>
                  </div>
                )}
              </span>
            </div>
          </div>{" "}
        </nav>
      </div>
    </div>
  )
}

export default NavBar

{
}
