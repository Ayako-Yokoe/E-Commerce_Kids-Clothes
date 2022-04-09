import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ClosableDrawer from './ClosableDrawer';
import { logout } from '../redux/userRedux';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    height: auto;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column'})}    
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({ order: 2 })} 
`
const Select = styled.select`
    padding: 10px;
    margin: 10px 20px;
    width: 40%;
    border: 1px solid #fff;
    color: var(--gray);
    ${mobile({ margin : '10px 10px', padding: 5, width: '90%' })}
`
const Option = styled.option`
`
const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ order: 1 })} 
`
const Logo = styled.h1`
    font-family: 'Griffy', cursive;
    font-weight: bold;
    color: var(--gray);
    ${mobile({ fontSize: 20, margin: 5 })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ position: 'absolute', top: 40, right: 10 })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    align-items: center;
    ${mobile({ display: 'none'})}
`
const Hamburgermenu = styled.div`
    visibility: hidden;
    ${mobile({ visibility: 'visible', marginRight: 10 })}
`
const FavoriteIcon = styled.div`
    color: ${props => props.length > 0 ? "red" : "#000"};
    margin: 0 10px;
`


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