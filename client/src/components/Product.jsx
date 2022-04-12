import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { publicRequest } from '../requestMethods';
import { addFavorite } from '../redux/favoriteRedux';
import {
  Info,
  Container,
  Image,
  Icon
} from './Product.styles';


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