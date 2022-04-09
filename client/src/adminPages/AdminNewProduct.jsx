import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from'react-router-dom';
import { addProduct } from "../redux/apiCalls";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';
import AdminNavbar from '../adminComponents/AdminNavbar';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    width: 50%;
    margin: 4rem auto;
    padding: 1rem;
    height: auto;
    background-color: #fff;
    ${mobile({ width: '80%', margin: '2rem auto' })}
`
const Heading = styled.div`
    background-color: #f6e9d7;
    padding: 0.4em 0.5em;
    text-align: center;
    font-size: 20px;
    ${mobile({ fontSize: 14 })}
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
`
const Space = styled.div`
    margin: 0.5em 0;
`
const ImageTitle = styled.p`
    font-size: 18px;
    letter-spacing: 2px;
    padding: 0.5rem 0;
    ${mobile({ fontSize: 14 })}
`
const ImageLabel = styled.label``
const ImageInput = styled.input``


const AdminNewProduct = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState([])
    const [size, setSize] = useState([])
    const [colors, setColors] = useState([])
    const [price, setPrice] = useState('')
    const [inStock, setInStock] = useState(false)
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
        const fileName = new Date().getTime() + file.name
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
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                const product = { img: downloadURL, title, desc, category, size, colors, price, inStock }
                addProduct(product, dispatch)
                navigate('/admin')
            });
        }
        );
    }


  return (
      <>
        <AdminNavbar />
        <Container>
            <Heading>Add A New Product</Heading>
            <Form>
                <ImageTitle>Product Item Image</ImageTitle>
                <ImageLabel htmlFor='file'>
                    <ImageInput type='file' id='file' onChange={(e) => setFile(e.target.files[0])} />
                </ImageLabel>
                <Space />
                <TextField 
                    label='Product Name' variant='standard' required 
                    type='text' value={title} onChange={inputTitle}
                />
                <Space />
                <TextField 
                    label='Description' variant='standard' required multiline rows={3}
                    type='text' value={desc} onChange={inputDesc}
                />
                <Space />
                <FormControl>
                    <InputLabel id='category-label'>Category</InputLabel>
                    <Select
                        labelId="category-label"
                        value={category}
                        label="Category"
                        onChange={inputCategory}
                    >
                    <MenuItem value={'Baby-Boy'}>Baby-Boy</MenuItem>
                    <MenuItem value={'Baby-Girl'}>Baby-Girl</MenuItem>
                    <MenuItem value={'Toddler-Boy'}>Toddler-Boy</MenuItem>
                    <MenuItem value={'Toddler-Girl'}>Toddler-Girl</MenuItem>
                    </Select>
                </FormControl>
                <Space />
                <FormControl>
                    <InputLabel id='size-label'>Size</InputLabel>
                    <Select
                        labelId="size-label"
                        value={size}
                        label="Size"
                        onChange={inputSize}
                    >
                    <MenuItem value={'3M'}>3M</MenuItem>
                    <MenuItem value={'6M'}>6M</MenuItem>
                    <MenuItem value={'9M'}>9M</MenuItem>
                    <MenuItem value={'2T'}>2T</MenuItem>
                    <MenuItem value={'3T'}>3T</MenuItem>
                    <MenuItem value={'4T'}>4T</MenuItem>
                    </Select>
                </FormControl>
                <Space />
                
                <TextField 
                    label='Colors' variant='standard' required 
                    type='text' value={colors} onChange={inputColors}
                />
                <Space />
                <TextField 
                    label='Price' variant='standard' required 
                    type='number' value={price} onChange={inputPrice}
                />
                <Space />
                <FormControl>
                    <InputLabel id='stock-label'>Stock</InputLabel>
                    <Select
                        labelId="stock-label"
                        value={inStock}
                        label="Stock"
                        onChange={inputStock}
                    >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                </FormControl>
                <Space />
                <Button 
                    color='success' 
                    variant='contained' 
                    onClick={handleClick}
                >
                Add Product
                </Button> 
            </Form>
        </Container>
    </>
  )
}

export default AdminNewProduct