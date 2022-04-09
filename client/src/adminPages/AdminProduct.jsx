import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from'react-router-dom';
import { updateProduct } from '../redux/apiCalls';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from'../firebase';
import AdminNavbar from '../adminComponents/AdminNavbar';
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
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
const CreateNewButton = styled.button`
    font-size: 16px;
    padding: 0.3rem 0.5rem;
    margin: 1rem;
    background-color: #fff;
    border: 1px solid var(--gray);
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
        background-color: var(--gray);
        color: #fff;
        border: 1px solid var(--gray);
    }
`
const ProductDetail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    padding: 1rem;
    height: auto;
    width: 70%;
    background-color: #fff;
    ${mobile({ flexDirection: 'column' })}
`
const Left = styled.div`
    flex: 1;
    height: auto;
    ${mobile({ margin: '0 0 15px 0' })}
`
const ProductImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    max-width: 300px;
`
const ProductTitle = styled.p`
    font-size: 20px;
`
const ProductId = styled.p`
    font-size: 12px;
`
const ID = styled.span`
    font-size: 10px;
`
const Right = styled.div`
    flex: 1;
    height: auto;
    margin-left: 20px;
`
const FormDetail = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const FormCenter = styled.div`
    flex: 1;
`
const FormRight = styled.div`
    flex: 1;
`
const FormLabel = styled.label`
    font-size: 16px;
`
const FormInput = styled.input`
    padding: 0.3rem;
    margin-bottom: 0.3rem;
    font-size: 16px;
`
const InStock = styled.select`
    font-size: 16px;
    padding: 0.3rem;
    margin-bottom: 1.5rem;
`
const UploadFile = styled.div`
`
const Space = styled.div`
  margin: 0.5em 0;  
`

const AdminProduct = () => {
    const location = useLocation()
    const productId = location.pathname.split('/')[2]
    const product = useSelector(state => 
        state.product.products.find(product => product._id === productId))

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [category, setCategory] = useState([])
    const [size, setSize] = useState([])
    const [colors, setColors] = useState([])
    const [price, setPrice] = useState("")
    const [inStock, setInStock] = useState(true)
    const [file, setFile] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

  const inputTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [setTitle])

  const inputDesc = useCallback((e) => {
      setDesc(e.target.value)
    }, [setDesc])

  const inputCategory = useCallback((e) => {
      setCategory(e.target.value)
    }, [setCategory])

  const inputSize = useCallback((e) => {
      setSize(e.target.value)
    }, [setSize])

  const inputColors = (e) => {
      setColors(e.target.value.split(', '))
    }

  const inputPrice = useCallback((e) => {
      setPrice(e.target.value)
    }, [setPrice])

  const inputStock = useCallback((e) => {
      setInStock(e.target.value)
    }, [setInStock])

  const handleClick = (e) => {
      e.preventDefault()
      const fileName = new Date().getTime() + file
      const storage = getStorage(app)
      const storageRef = ref(storage, fileName)    
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on('state_changed', 
      (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
          case 'paused':
              console.log('Upload is paused');
              break;
          case 'running':
              console.log('Upload is running');
              break;
          default:
          }
      }, 
      (error) => {
        console.log(error)
      }, 
      () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const updatedProduct = { 
                img: downloadURL, title, desc, category, size, colors, price, inStock 
              }
              updateProduct(productId, updatedProduct, dispatch)
              navigate('/admin')
          });
        }
      );
  }

  
  return (
    <Container>
      <AdminNavbar />
      <Heading>Product</Heading>
      <Link to='/adminnewproduct' >
        <CreateNewButton>Create New</CreateNewButton>
      </Link>

      <ProductDetail>
        <Left>
          <ProductImage src={product.img} alt={product.title} />
          <ProductTitle>{product.title}</ProductTitle>
          <ProductId>ID: <ID>{product._id}</ID></ProductId>
        </Left>
        <Right>
            <form>
              <FormDetail>
                <FormCenter>
                  <FormLabel htmlFor='name'>Product Name</FormLabel><br/>
                  <FormInput type='text' name='title' id='name' placeholder={product.title}   onChange={inputTitle} /><br/>

                  <FormLabel htmlFor='description'>Description</FormLabel><br/>
                  <FormInput type='text' name='desc' id='description' placeholder={product.desc}  onChange={inputDesc} /><br/>

                  <FormLabel htmlFor='category'>Category</FormLabel><br/>
                  <FormInput type='text' name='category' id='category' placeholder={product.category}  onChange={inputCategory} /><br/>

                  <FormLabel htmlFor='size'>Size</FormLabel><br/>
                  <FormInput type='text' name='size' id='size' placeholder={product.size}  onChange={inputSize} /><br/>
                </FormCenter>

                <FormRight>
                  <FormLabel htmlFor='colors'>Colors</FormLabel><br/>
                  <FormInput type='text' name='colors' id='colors' placeholder={product.colors}  onChange={inputColors} /><br/>

                  <FormLabel htmlFor='price'>Price ($CAD)</FormLabel><br/>
                  <FormInput type='number' name='price' id='price' placeholder={product.price}  onChange={inputPrice} /><br/>

                  <FormLabel>In Stock</FormLabel><br/>
                  <InStock name='inStock' id='inStock' onChange={inputStock}>
                      <option value='true'>Yes</option>
                      <option value='false'>No</option>
                  </InStock>
              
                <UploadFile>
                  <FormLabel htmlFor='file'><UploadFileIcon /></FormLabel>
                  <FormInput type='file' id='file' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />                  
                </UploadFile>
                </FormRight>
              </FormDetail>
                <Space/>
                <Button 
                  color='success' 
                  variant='contained' 
                  onClick={handleClick}
                >
                Update
                </Button> 
          </form>
        </Right>
      </ProductDetail>
    </Container>
  )
}

export default AdminProduct