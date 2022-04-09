import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { addFavorite } from '../redux/favoriteRedux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styled from 'styled-components';


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    position: relative;

    &:hover ${Info}{
        opacity:  1;
    }
`
const Image = styled.img`
    height: 75%;
    width: 75%;
    object-fit: cover;
    z-index: 2;
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  
  &:hover {
      background-color: var(--orange);
      transform: scale(1.1);
  }
`


const Product = ({item}) => {
  const [product, setProduct] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
      const getProduct = async () => {
          try {
              const res = await publicRequest.get('/products/find/' + item._id)
              setProduct(res.data)
          } catch {}
        }
        getProduct()
    }, [item._id])

  const handleFavoriteButton = () => {
    dispatch(addFavorite({...product}))
  }

  return (
    <Container>
      <Image src={item.img} />
      <Info>
          <Icon>
            <Link to={`/product/${item._id}`} style={{ color: '#0d0d0d'}}>
              <ShoppingCartOutlinedIcon />
            </Link>
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`} style={{ color: '#0d0d0d'}}>
              <SearchOutlinedIcon />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlinedIcon onClick={handleFavoriteButton} />
          </Icon>
      </Info>
    </Container>
  )
}

export default Product