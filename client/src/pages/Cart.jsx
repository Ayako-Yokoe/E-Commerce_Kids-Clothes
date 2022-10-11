import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import StripeCheckout from "react-stripe-checkout"
import DeleteIcon from "@mui/icons-material/Delete"
import { userRequest } from "../requestMethods"
import {
  addProduct,
  deleteProduct,
  decreaseQuantity,
  getTotal,
} from "../redux/cartRedux"
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
  ProductAmountContainer,
  Quantity,
  ProductAmount,
  ProductPrice,
  DeleteButton,
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./Cart.styles"

const KEY = process.env.REACT_APP_STRIPE

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const favorite = useSelector((state) => state.favorite)
  const [stripeToken, setStripeToken] = React.useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.totalAmount * 100,
        })
        navigate("/success", {
          stripeData: res.data,
          products: cart,
        })
      } catch (err) {
        console.log(err.message)
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken, cart.totalAmount, cart, navigate])

  useEffect(() => {
    dispatch(getTotal())
  }, [cart, dispatch])

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <Link to="/">
            <TopButton>Continue Shopping</TopButton>
          </Link>
          <TopTexts>
            <Link to="/favorite">
              <TopText>Favorite Items ({favorite.products.length})</TopText>
            </Link>
          </TopTexts>

          <StripeCheckout
            name="ABCstore"
            billingAddress
            shippingAddress
            description={`Your total is $${cart.totalAmount}`}
            amount={cart.totalAmount * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <TopButton type="filled">Checkout Now</TopButton>
          </StripeCheckout>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
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
                  <ProductAmountContainer>
                    <Quantity
                      onClick={() => dispatch(decreaseQuantity({ ...product }))}
                    >
                      -
                    </Quantity>
                    <ProductAmount>{product.productQty}</ProductAmount>
                    <Quantity
                      onClick={() => dispatch(addProduct({ ...product }))}
                    >
                      +
                    </Quantity>
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.productQty}
                  </ProductPrice>
                </PriceDetail>
                <DeleteButton>
                  <DeleteIcon
                    onClick={() => dispatch(deleteProduct({ ...product }))}
                  />
                </DeleteButton>
              </Product>
            ))}
            <Hr />
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.totalAmount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-$10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.totalAmount}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="ABCstore"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.totalAmount}`}
              amount={cart.totalAmount * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
