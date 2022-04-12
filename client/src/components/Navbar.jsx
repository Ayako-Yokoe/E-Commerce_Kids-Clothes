import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ClosableDrawer from './ClosableDrawer';
import { logout } from '../redux/userRedux';
import {
    Container,
    Wrapper,
    Left,
    Select,
    Option,
    Center,
    Logo,
    Right,
    MenuItem,
    Hamburgermenu,
    FavoriteIcon
} from './Navbar.styles';


const Navbar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [search, setSearch] = useState("")
    const quantity = useSelector(state => state.cart.totalQuantity)
    const favorite = useSelector(state => state.favorite)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleDrawerToggle = useCallback((event, isOpen) => {
        if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
            return
        }
        setSideBarOpen(isOpen)
    }, [setSideBarOpen])

    useEffect(() => {
        search &&
        navigate(`/products/${search}`)
    }, [search, navigate])


  return (
    <Container>
      <Wrapper>
          <Left>
            <Select onChange={e => setSearch(e.target.value)} >
                <Option checked>Search</Option>
                <Option value='Baby-Boy'>Baby-Boy</Option>
                <Option value='Baby-Girl'>Baby-Girl</Option>
                <Option value='Toddler-Boy'>Toddler-Boy</Option>
                <Option value='Toddler-Girl'>Toddler-Girl</Option>
            </Select>
          </Left>
            <Center>
                <Link to='/' style={{ textDecoration: 'none', color: '#0d0d0d'}}>
                    <Logo>ABCstore</Logo>
                </Link>
            </Center>
          <Right>
            <Link to="/favorite">
                <FavoriteIcon length={favorite.products.length}>
                    <FavoriteBorderOutlinedIcon />
                </FavoriteIcon>
            </Link>
            <Link to="/cart">
                <MenuItem style={{ color: '#0d0d0d'}}>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </MenuItem>
            </Link>
            <Link 
                to="/login" 
                style={{ textDecoration: 'none', color: '#0d0d0d'}}
                >
                <MenuItem onClick={() => dispatch(logout())}>LOG OUT</MenuItem>
            </Link>

            <Hamburgermenu onClick={(event) => handleDrawerToggle(event, true)}>
                <MenuIcon />
            </Hamburgermenu>
          </Right>
        </Wrapper>
        <ClosableDrawer open={sideBarOpen} onClose={handleDrawerToggle} /> 
    </Container>
  )
}

export default Navbar