import { useState, useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Form, Button, Alert } from "react-bootstrap";

function SignupForm() {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    username: "",
    password: "",
  })

  const { signup } = useContext(AuthContext)

  const handleChange = (e) => {
    setSignupInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <form
      className="shadow p-4 bg-white "
      onSubmit={(e) => {
        e.preventDefault()
        signup(signupInfo)
      }}
    >
      <Form.Group className="mb-2" controlId="username">
    <Form.Label> <label htmlFor="email">email</label> </Form.Label> 
      <input
        type="email"
        name="email"
        value={signupInfo.email}
        onChange={handleChange}
      />
      </Form.Group>
<Form.Group className="mb-2" controlId="username">
  
<Form.Label>    <label htmlFor="username">username</label> </Form.Label>
      <input
        type="text"
        name="username"
        value={signupInfo.username}
        onChange={handleChange}
      />

</Form.Group>

<Form.Label>
<Form.Label>     <label htmlFor="password">password</label> </Form.Label>
      </Form.Label>
      <input
        type="password"
        name="password"
        value={signupInfo.password}
        onChange={handleChange}
      />
      <button type="submit" className="btn mt-4">
        register now
      </button>
    </form>
  )
}

export default SignupForm
