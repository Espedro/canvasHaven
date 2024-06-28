import { useState, useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Form, Button, Alert } from "react-bootstrap";

function LoginForm() {
  const [loginInfo, setLoginInfo] = useState({
    loginInfo: "",
    password: "",
  })

  const { login } = useContext(AuthContext)

  const handleChange = (e) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <form
      className="shadow p-4 bg-white "
      onSubmit={(e) => {
        e.preventDefault()
        login(loginInfo)
      }}
    >


<Form.Group className="mb-2" controlId="username">
    <Form.Label> Username / Email </Form.Label> 
      < Form.Control
        type="text"
        name="loginInfo"
        value={loginInfo.loginInfo}
        onChange={handleChange}
      />
  </Form.Group>

  <Form.Group className="mb-2" controlId="paswword">
  <Form.Label> Password </Form.Label>
    
  < Form.Control
        type="password"
        name="password"
        value={loginInfo.password}
        onChange={handleChange}
      />

</Form.Group>
<center>
      <button type="submit" className="w-50">
        log in
      </button>

      </center>
    </form>
  )
}

export default LoginForm
