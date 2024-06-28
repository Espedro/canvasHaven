import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function NavBar() {
  const { user, logout } = useContext(AuthContext)

  return (
    <div className="container ">
     

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/">
            <h1 className="navbar-brand">Canvas Heaven</h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/painting" className="Nav-link">
               painting
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="links">
                about
                </Link>
              </li>

              <li className="nav-item">
                {user && user.isAdmin && (
                  <Link to="/painting/create">Create a Painting</Link>
                )}
              </li>
            </ul>

            {user ? (
              <div className="center gap-4 p-4">
                <button onClick={logout} className="btn">
                  logout
                </button>
              </div>
            ) : (
              <div className="center gap-4 p-4">
                <Link to="/signup" className="btn">
                  sign up
                </Link>
                <Link to="/login" className="btn">
                  log in
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

{
  /* <ul>

<li> Home Page</li>
<li> About US</li>
<li> Painting</li>
<li> Sign Up</li>
<li> Login</li>

</ul> */
}
