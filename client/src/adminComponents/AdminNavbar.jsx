import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminlogout } from '../redux/adminRedux';
import MenuIcon from '@mui/icons-material/Menu';
import AdminClosableDrawer from './AdminClosableDrawer';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    height: auto;
    background-color: var(--orange);
    color: #fff;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    text-align: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
`
const AdminTitle = styled.p`
    font-size: 16px;
    letter-spacing: 2px;
    ${mobile({ fontSize: 14 })}
`
const Center = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    font-family: 'Griffy', cursive;
    font-weight: bold;
    color: #fff;
    ${mobile({ fontSize: 20, margin: 5 })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${mobile({ justifyContent: 'flex-end'  })}
`
const ListItem = styled.div`
    display: inline-block;
    color: #fff;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`
const Hamburgermenu = styled.div`
    visibility: hidden;
    ${mobile({ visibility: 'visible', marginRight: 10 })}
`

const AdminNavbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const dispatch = useDispatch()
 
  const handleDrawerToggle = useCallback((event, isOpen) => {
      if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
          return
      }
      setSideBarOpen(isOpen)
  }, [setSideBarOpen])

return (
    <Container>
      <Wrapper>
          <Left>
            <AdminTitle>ADMIN</AdminTitle>
          </Left>
          <Center>
              <Link to='/admin' style={{ textDecoration: 'none', color: '#0d0d0d'}}>
                  <Logo>ABCstore</Logo>
              </Link>
          </Center>
          <Right>
          <Link to='/admin'><ListItem>Product List</ListItem></Link>
          <Link to='/adminnewproduct'><ListItem>Create New</ListItem></Link>
          <Link to="/adminlogin" >
                <ListItem onClick={() => dispatch(adminlogout())}>Log Out</ListItem>
        </Link>

          <Hamburgermenu onClick={(event) => handleDrawerToggle(event, true)}>
              <MenuIcon />
          </Hamburgermenu>
          </Right>
      </Wrapper>
      <AdminClosableDrawer open={sideBarOpen} onClose={handleDrawerToggle} /> 
    </Container>
  )
}

export default AdminNavbar