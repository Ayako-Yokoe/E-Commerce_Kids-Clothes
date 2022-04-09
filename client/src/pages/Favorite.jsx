import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFavorite } from '../redux/favoriteRedux';
import { addProduct } from '../redux/cartRedux';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px 30px;
    max-width: 900px;
    min-height: 60vh;
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
const ProductPrice = styled.div`
    font-size: 20px;
    font-weight: 300;
    margin-right: 20px;
    ${mobile({ margin: '20px', fontSize: 18 })}
`
const Icon = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    ${mobile({ flexDirection: 'column', justifyContent: 'space-evenly' })}
`
const Hr = styled.hr`
    background-color: var(--gray);
    border: none;
    height: 1px;
    margin-bottom: 10px;
`


const Favorite = () => {
    const favorite = useSelector(state => state.favorite)
    const dispatch = useDispatch()

    const handleAddBtn = (id) => {
        const product = favorite.products.find(item => item._id === id)
        dispatch(addProduct({ ...product, quantity: 1}))
    }

    const handleDeleteBtn = (id) => {
        const product = favorite.products.find(item => item._id === id)
        dispatch(deleteFavorite({ ...product }))
    }

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Favorite Items</Title>
            <Top>
                <Link to='/'>
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
                    {favorite.products.map(product => (
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
                            <ShoppingCartOutlinedIcon onClick={() => handleAddBtn(product._id)} />
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