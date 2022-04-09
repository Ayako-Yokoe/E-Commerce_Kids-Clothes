import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { userRequest } from '../requestMethods';
import StripeCheckout from 'react-stripe-checkout';
import { addProduct, deleteProduct, decreaseQuantity, getTotal } from '../redux/cartRedux';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';
import { mobile } from '../responsive';


const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px 30px;
    max-width: 900px;
    margin: 0 auto;
    ${mobile({ padding: '15px 20px' })}
`
const Title = styled.h1`
    font-size: 28px;
    font-weight: 300;
    text-align: center;
    ${mobile({ fontSize: 26 })}
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    ${mobile({ padding: 10 })}
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    border: ${props => props.type === "filled" && "1px solid #0d0d0d"};
    background-color: ${props => props.type === "filled" ? "#0d0d0d" : "#fff"};
    color: ${props => props.type === "filled" && "#fff"};
    transition: all 0.2s ease-in-out;

    &:hover {
        border: 1px solid var(--gray);
        background-color: white;
        color: var(--gray);
    }
`
const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`
const TopText = styled.span`
    font-size: 14px;
    letter-spacing: 2px;
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
    color: var(--black);
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column", marginTop: 20 })}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column", marginBottom: 30 })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    flex: 1;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 10px 0;
`
const Details = styled.div`
    flex: 1;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ProductName = styled.span`
    font-size: 20px;
    margin-bottom: 0.5rem;
    ${mobile({ fontSize: 16 })}
`
const ProductId = styled.span``

const ProductColor = styled.div`
    width: 15px;
    height: 15px;
    margin-bottom: 0.5rem;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const ProductSize = styled.span`
    font-size: 20px;
    margin-bottom: 0.5rem;
    ${mobile({ fontSize: 16 })}
`
const PriceDetail = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mobile({ flexDirection: 'row', justifyContent: 'space-around' })}
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Quantity = styled.span`
    font-size: 1.5em;
    padding: 8px;
    cursor: pointer;
` 
const ProductAmount = styled.div`
    font-size: 20px;
    margin: 5px 10px;
    ${mobile({ margin: '5px 15px', fontSize: 18 })}
`
const ProductPrice = styled.div`
    font-size: 20px;
    font-weight: 300;
    margin-right: 20px;
    ${mobile({ marginBottom: '20px', fontSize: 18 })}
`
const DeleteButton = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${mobile({ justifyContent: 'flex-end' })}
`
const Hr = styled.hr`
    background-color: var(--gray);
    border: none;
    height: 1px;
    margin-bottom: 10px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: auto;
    background-color: #fff;
`
const SummaryTitle = styled.h1`
    font-size: 18px;
    font-weight: 300;
`
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "1.2em"};
`
const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #0d0d0d;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        border: 1px solid var(--gray);
        background-color: #fff;
        color: var(--gray);
    }
`


const Cart = () => {
    const cart = useSelector(state => state.cart)
    const favorite = useSelector(state => state.favorite)
    const [stripeToken, setStripeToken] = React.useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post('/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: cart.totalAmount*100,
                })
                navigate('/success', {
                    stripeData: res.data,
                    products: cart
                })
            } catch(err) {
                console.log(err.message)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken, cart.totalAmount])

    useEffect(() => {
        dispatch(getTotal())
    }, [cart])


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
                    <Link to='/favorite'>
                        <TopText>Favorite Items ({favorite.products.length})</TopText>
                    </Link>
                </TopTexts>
                
                <StripeCheckout
                        name='ABCstore'
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.totalAmount}`}
                        amount={cart.totalAmount*100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                    <TopButton type="filled">Checkout Now</TopButton>
                </StripeCheckout>
                
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(product => (
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
                                <Quantity onClick={() => dispatch(decreaseQuantity({ ...product }))}>-</Quantity>
                                <ProductAmount>
                                    {product.productQty}
                                </ProductAmount>
                                <Quantity onClick={() => dispatch(addProduct({ ...product }))}>+</Quantity>
                            </ProductAmountContainer>
                            <ProductPrice>$ {product.price * product.productQty}</ProductPrice>
                        </PriceDetail>
                        <DeleteButton>
                            <DeleteIcon onClick={() => dispatch(deleteProduct({ ...product }))} />
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
                        name='ABCstore'
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.totalAmount}`}
                        amount={cart.totalAmount*100}
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