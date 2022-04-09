import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div``

const Title = styled.h1`
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 20px 30px;
    ${mobile({ fontSize: 26 })}
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ justifyContent: 'flex-start' })}
`
const Filter = styled.div`
    margin: 20px 30px;
    flex: 1;
    ${mobile({ display: 'flex', flexDirection: 'column', margin: '0 0 0 30px' })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;
    ${mobile({ marginRight: 0, fontSize: 16 })}
`
const Left = styled.div`
  ${mobile({ display: 'flex', flexDirection: 'row' })}
`
const Select = styled.select`
    padding: 10px;
    margin: 10px 20px 0 0;
    width: 40%;
    ${mobile({ margin : '10px 10px 0 0', padding: 5, width: '90%' })}
`
const Right = styled.div`
`
const Option = styled.option`
`

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