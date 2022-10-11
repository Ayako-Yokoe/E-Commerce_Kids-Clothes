import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { login } from "../redux/apiCalls"
import {
  Container,
  Wrapper,
  Form,
  Title,
  Input,
  LoginButton,
  Error,
  ToLink,
} from "./Login.styles"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state) => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton onClick={handleClick} disabled={isFetching}>
            LOG IN
          </LoginButton>
        </Form>

        {error && <Error>Something went wrong</Error>}

        <Link
          to="/register"
          style={{ textDecoration: "none", color: "#0d0d0d" }}
        >
          <ToLink>Create A New Account</ToLink>
        </Link>
        <Link
          to="/adminlogin"
          style={{ textDecoration: "none", color: "#0d0d0d" }}
        >
          <ToLink>Go To Admin Page</ToLink>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Login
