import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Left,
  Select,
  Right,
  Option
} from './ProductList.styles';


const ProductList = () => {
  const location = useLocation()
  const category = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState('new')

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
          <Filter>
            <FilterText>Search By:</FilterText>
            <Left>
              <Select name='colors' onChange={handleFilters}>
                <Option>Color</Option>
                <Option>white</Option>
                <Option>pink</Option>
                <Option>red</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
                <Option>green</Option>
                <Option>brown</Option>
              </Select>
              <Select name='size' onChange={handleFilters}>
                <Option>Size</Option>
                <Option>3M</Option>
                <Option>6M</Option>
                <Option>9M</Option>
                <Option>2T</Option>
                <Option>3T</Option>
                <Option>4T</Option>
              </Select>
            </Left>
          </Filter>
          <Filter>
            <FilterText>Sort By:</FilterText>
            <Right>
              <Select onChange={e => setSort(e.target.value)}>
                <Option value='new'>New Arrivals</Option>
                <Option value='asc'>Price (low)</Option>
                <Option value='desc'>Price (high)</Option>
              </Select>
            </Right>
          </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList