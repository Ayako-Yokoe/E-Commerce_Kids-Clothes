import styled from "styled-components"
import { mobile } from "../responsive"

export const Container = styled.div``

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 20px 30px;
  ${mobile({ fontSize: 26 })}
`
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ justifyContent: "flex-start" })}
`
export const Filter = styled.div`
  margin: 20px 30px;
  flex: 1;
  ${mobile({ display: "flex", flexDirection: "column", margin: "0 0 0 30px" })}
`
export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;
  ${mobile({ marginRight: 0, fontSize: 16 })}
`
export const Left = styled.div`
  ${mobile({ display: "flex", flexDirection: "row" })}
`
export const Select = styled.select`
  padding: 10px;
  margin: 10px 20px 0 0;
  width: 40%;
  ${mobile({ margin: "10px 10px 0 0", padding: 5, width: "90%" })}
`
export const Right = styled.div``
export const Option = styled.option``
