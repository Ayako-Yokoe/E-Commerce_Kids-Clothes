import styled from "styled-components"
import { mobile } from "../responsive"

export const Container = styled.div``

export const Heading = styled.h2`
  background-color: #f6e9d7;
  padding: 0.5em;
  font-size: 28px;
  font-weight: 500;
  ${mobile({ fontSize: 20 })}
`
export const ProductListCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin: 10px auto;
  ${mobile({ flexDirection: "column" })}
`
