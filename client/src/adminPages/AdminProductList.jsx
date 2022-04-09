import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/apiCalls';
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminProductCard from '../adminComponents/AdminProductCard';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div``

const Heading = styled.h2`
    background-color: #f6e9d7;
    padding: 0.5em;
    font-size: 28px;
    font-weight: 500;
    ${mobile({ fontSize: 20 })}
`
const ProductListCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    margin: 10px auto;
    ${mobile({ flexDirection: 'column' })}
`

const AdminProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)

    useEffect(() => {
        getProducts(dispatch)
    }, [dispatch])

    
  return (
    <Container>
        <AdminNavbar />
        <Heading>Product List</Heading>

        <ProductListCard>
        {products.length > 0 && products.map(product => (
            <AdminProductCard
            key={product._id} img={product.img} title={product.title}
            desc={product.desc} category={product.category} 
            size={product.size} colors={product.colors}
            price={product.price} inStock={product.inStock} _id={product._id}
            />
            )
        )}
        </ProductListCard>

    </Container> 
  )
}

export default AdminProductList