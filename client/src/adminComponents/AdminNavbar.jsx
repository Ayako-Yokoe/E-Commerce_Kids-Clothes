import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { adminlogout } from '../redux/adminRedux';
import AdminClosableDrawer from './AdminClosableDrawer';
import {
    Container,
    Wrapper,
    Left,
    AdminTitle,
    Center,
    Logo,
    Right,
    ListItem,
    Hamburgermenu
} from './AdminNavbar.styles';


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