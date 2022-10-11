import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { deleteFavorite } from "../redux/favoriteRedux"
import { addProduct } from "../redux/cartRedux"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductPrice,
  Icon,
  Hr,
} from "./Favorite.styles"

const Favorite = () => {
  const favorite = useSelector((state) => state.favorite)
  const dispatch = useDispatch()

  const handleAddBtn = (id) => {
    const product = favorite.products.find((item) => item._id === id)
    dispatch(addProduct({ ...product, quantity: 1 }))
  }

  const handleDeleteBtn = (id) => {
    const product = favorite.products.find((item) => item._id === id)
    dispatch(deleteFavorite({ ...product }))
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Favorite Items</Title>
        <Top>
          <Link to="/">
            <TopButton>Continue Shopping</TopButton>
          </Link>
          <TopTexts>
            <TopText>Favorite Items ({favorite.products.length})</TopText>
          </TopTexts>
          <Link to="/cart">
            <TopButton type="filled">Your Cart</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {favorite.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>{product.title}</ProductName>
                    <ProductColor color={product.colors} />
                    <ProductSize>{product.size}</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductPrice>$ {product.price}</ProductPrice>
                </PriceDetail>
                <Icon>
                  <ShoppingCartOutlinedIcon
                    onClick={() => handleAddBtn(product._id)}
                  />
                  <DeleteIcon onClick={() => handleDeleteBtn(product._id)} />
                </Icon>
              </Product>
            ))}
            <Hr />
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Favorite
