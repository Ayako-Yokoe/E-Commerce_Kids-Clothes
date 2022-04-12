import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminRegister } from '../redux/apiCalls';
import {
  Container,
  Wrapper,
  Form,
  Title,
  Input,
  Agreement,
  RegisterButton,
  Error,
  ToLink
} from './AdminRegister.styles';


const AdminRegister = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()
    const { isFetching, error } = useSelector(state => state.user)

    const handleClick = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            alert("Password don't match" )
            return false
        } 
        adminRegister(dispatch, { username, email, password })
    }

  return (
    <Container>
      <Wrapper>
          <Title>CREATE AN ACCOUNT (Admin)</Title>
            <Form>
              <Input 
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                /> 
              <Input 
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                /> 
              <Input 
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                /> 
              <Input 
                type="password"
                placeholder="confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                /> 

              <Agreement>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
              </Agreement>
              <RegisterButton onClick={handleClick} disabled={isFetching}>
                CREATE
              </RegisterButton>
          </Form>

          {error && <Error>Something went wrong</Error>}
          
          <Link to='/adminlogin' style={{ textDecoration: 'none', color: '#0d0d0d'}}>
            <ToLink>Already have an account</ToLink>
          </Link>

          <Link to='/login' style={{ textDecoration: 'none', color: '#0d0d0d'}}>
            <ToLink>Not An Admin</ToLink>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default AdminRegister