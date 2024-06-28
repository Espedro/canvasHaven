import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "react-bootstrap"
import Button from "react-bootstrap/Button"

import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/auth.context.jsx"
import { PaintingProvider } from "./context/painting.context.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PaintingProvider>
          <App />
        </PaintingProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
