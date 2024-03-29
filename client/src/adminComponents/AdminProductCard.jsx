import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { deleteProduct } from "../redux/apiCalls"
import { Detail, Button } from "./AdminProductCard.styles"

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
          onClick={() => navigate("/adminproduct/" + props._id)}
          component="img"
          style={{ height: 250, width: 250, objectFit: "cover" }}
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
              {props.colors &&
                props.colors.map((color) => (
                  <span key={color}>
                    <Detail>Colors:</Detail> {color}
                  </span>
                ))}
            </Typography>
            <Typography style={{ fontSize: 16 }}>
              <Detail>Price:</Detail> ${props.price}
            </Typography>
            <Typography style={{ fontSize: 16 }}>
              <Detail>In Stock:</Detail> {props.inStock ? "Yes" : "No"}
            </Typography>
          </div>

          <Button
            className="productlist-btn"
            onClick={() => navigate("/adminproduct/" + props._id)}
          >
            Edit
          </Button>

          <Button
            className="productlist-btn"
            onClick={() => handleDelete(props._id)}
          >
            Delete
          </Button>
        </CardContent>
      </Card>
    </>
  )
}

export default AdminProductCard
