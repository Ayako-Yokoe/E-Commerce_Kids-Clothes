import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminLogin } from '../redux/apiCalls'
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1511852365831-4c1b2b2b1325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  ${mobile({ width: '75%' })}
`
const Title = styled.h1`
    font-size: 26px;
    font-weight: 300;
    letter-spacing: 2px;
    ${mobile({ fontSize: 20 })}
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Input = styled.input`
  flex: 1;
  width: 60%;
  margin : 10px 5px;
  padding: 10px;
  border: none;
  font-size: 18px;
  ${mobile({ fontSize: 14 })}

  &:focus {
    outline: none;
  }
`
const LoginButton = styled.button`
    width: 40%;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    background-color: teal;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    ${mobile({ fontSize: 12, width: '50%'})}

    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`
const Error = styled.span`
    color: red;
`
const ToLink = styled.div`
    font-size: 12px;
    margin-top: 10px;
    cursor: pointer;
`


const AdminLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { error } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        adminLogin(dispatch, { username, password })
    }

  return (
    <Container>
      <Wrapper>
        <Title>Log in (Admin)</Title>
        <Form>
          <Input type='text' required placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
          <Input type='password' required placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <LoginButton className='login-btn' onClick={handleClick}>Login</LoginButton>
        </Form>
        {error && <Error>Something went wrong</Error>}

        <Link to='/login' style={{ textDecoration: 'none', color: '#0d0d0d'}}>
          <ToLink>Not An Admin</ToLink>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default AdminLogin