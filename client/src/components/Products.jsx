import React, { useState, useEffect } from "react"
import axios from "axios"
import Product from "./Product"
import { Container } from "./Products.styles"

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `https://kids-clothes.vercel.app/api/products?category=${category}`
            : "https://kids-clothes.vercel.app/api/products"
        )
        setProducts(res.data)
      } catch (err) {}
    }
    getProducts()
  }, [category])

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      )
  }, [products, category, filters])

  useEffect(() => {
    if (sort === "new") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if (sort === "asc") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  )
}

export default Products
