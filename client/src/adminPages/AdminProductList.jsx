import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/apiCalls';
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminProductCard from '../adminComponents/AdminProductCard';
import {
    Container,
    Heading,
    ProductListCard
} from './AdminProductList.styles';


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