import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminLogin } from '../redux/apiCalls';
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  LoginButton,
  Error,
  ToLink
} from './AdminLogin.styles';
 

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

        <Link to='/adminregister' style={{ textDecoration: 'none', color: '#0d0d0d'}}>
                <ToLink>Create A New Admin Account</ToLink>
            </Link>

        <Link to='/login' style={{ textDecoration: 'none', color: '#0d0d0d'}}>
          <ToLink>Not An Admin</ToLink>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default AdminLogin