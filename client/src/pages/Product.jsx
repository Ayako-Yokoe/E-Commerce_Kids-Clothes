import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div``

const Wrapper = styled.div`
    height: 90vh;
    padding: 50px;
    display: flex;
    ${mobile({ padding: 30, flexDirection: 'column', height: 'auto', textAlign: 'center' })}
`
const ImgContainer = styled.div`
    flex: 1;
    padding: 10px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: '40vh', objectFit: 'contain' })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 10px 50px;
    ${mobile({ padding: 10 })}
`
const Title = styled.h1`
    font-size: 40px;
    font-weight: 300;
    letter-spacing: 2px;
    ${mobile({ fontSize: 30 })}
`
const Desc = styled.p`
    font-size: 26px;
    font-weight: 300;
    letter-spacing: 2px;
    margin: 20px 0;
    ${mobile({ fontSize: 20, margin: "10px 0" })}
`
const Price = styled.span`
    font-size: 26px;
    font-weight: 300;
    letter-spacing: 2px;
    padding: 5px 0;
    margin: 20px 0;
    ${mobile({ fontSize: 20, margin: "10px 0" })}
`
const FilterContainer = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: flex-start;
    ${mobile({ width: '100%', justifyContent: 'center', margin: "10px 0" })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 2px;
    ${mobile({ fontSize: 16 })}
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 0 0 8px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px 15px;
`
const FilterSizeOption = styled.option``

const Button = styled.button`
    margin: 40px 0;
    padding: 15px 20px;
    border: 1px solid var(--orange);
    background-color: #fff;
    font-size: 18px;
    cursor: pointer;
    font-weight: 300;
    ${mobile({ fontSize: 12, margin: "20px 0" })}

    &:hover {
        background-color: var(--orange);
        color: #fff;
        transition: all 0.3s ease;
    }
`

const Product = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [product, setProduct] = useState({})
    const [color, setColor] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/products/find/' + id)
                setProduct(res.data)
            } catch {}
        }
        getProduct()
    }, [id])

    const handleAddBtn = () => {
        dispatch(addProduct({ ...product, color }))
        navigate('/cart')
    }

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Price>$ {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.colors?.map(c => (
                            <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize >
                            {product.size?.map(s => (
                                <FilterSizeOption key={s} >{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <Button onClick={handleAddBtn}>ADD TO CART</Button>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product