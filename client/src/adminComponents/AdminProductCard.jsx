import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../redux/apiCalls';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const Detail = styled.span`
    color: var(--gray);
`
const Button = styled.button`
    font-size: 16px;
    padding: 0.3rem 0.5rem;
    margin: 10px 5px 0 0;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: var(--gray);
        color: #fff;
        border: 1px solid var(--gray);
    }
`

const AdminProductCard = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        deleteProduct(id, dispatch)
    }

  return (
    <>
        <Card style={{ maxWidth: 250, margin: 5 }}>
            <CardMedia
                image={props.img}
                onClick={() => navigate('admin/product/' + props._id)}
                component='img'
                style={{ height: 250, width: 250, objectFit: 'cover' }}
            />
            <CardContent>
                <div>
                    <Typography style={{ fontSize: 16 }}>
                        <Detail>Name:</Detail> {props.title}
                    </Typography>
                    <Typography style={{ fontSize: 16 }}>
                        <Detail>Description:</Detail> {props.desc}
                    </Typography>
                    <Typography style={{ fontSize: 16 }}>
                        <Detail>Category:</Detail> {props.category}
                    </Typography>
                    <Typography style={{ fontSize: 16 }}>
                        <Detail>Size:</Detail> {props.size}
                    </Typography>
                    <Typography style={{ fontSize: 16 }}>
                        { props.colors?.map(color => (
                            <span key={color}><Detail>Colors:</Detail> {color}</span>
                        ))}
                    </Typography>
                    <Typography style={{ fontSize: 16 }}>
                        <Detail>Price:</Detail> ${props.price}
                    </Typography>
                    <Typography style={{ fontSize: 16 }}>
                        <Detail>In Stock:</Detail> {props.inStock ? 'Yes' : 'No'}
                    </Typography>
                </div>

                <Button className='productlist-btn' onClick={() => navigate('/adminproduct/' + props._id)}>
                    Edit
                </Button>

                <Button className='productlist-btn' onClick={() => handleDelete(props._id)}>
                    Delete
                </Button>

            </CardContent>
        </Card>
    </>
  )
}

export default AdminProductCard