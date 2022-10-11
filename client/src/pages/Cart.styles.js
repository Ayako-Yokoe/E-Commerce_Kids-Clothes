import styled from "styled-components"
import { mobile } from "../responsive"

export const Container = styled.div``

export const Wrapper = styled.div`
  padding: 20px 30px;
  max-width: 900px;
  margin: 0 auto;
  ${mobile({ padding: "15px 20px" })}
`
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  ${mobile({ fontSize: 26 })}
`
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: 10 })}
`
export const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "1px solid #0d0d0d"};
  background-color: ${(props) =>
    props.type === "filled" ? "#0d0d0d" : "#fff"};
  color: ${(props) => props.type === "filled" && "#fff"};
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid var(--gray);
    background-color: white;
    color: var(--gray);
  }
`
export const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`
export const TopText = styled.span`
  font-size: 14px;
  letter-spacing: 2px;
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
  color: var(--black);
`
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", marginTop: 20 })}
`
export const Info = styled.div`
  flex: 3;
`
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", marginBottom: 30 })}
`
export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  flex: 1;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 10px 0;
`
export const Details = styled.div`
  flex: 1;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ProductName = styled.span`
  font-size: 20px;
  margin-bottom: 0.5rem;
  ${mobile({ fontSize: 16 })}
`
export const ProductColor = styled.div`
  width: 15px;
  height: 15px;
  margin-bottom: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`
export const ProductSize = styled.span`
  font-size: 20px;
  margin-bottom: 0.5rem;
  ${mobile({ fontSize: 16 })}
`
export const PriceDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "row", justifyContent: "space-around" })}
`
export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const Quantity = styled.span`
  font-size: 1.5em;
  padding: 8px;
  cursor: pointer;
`
export const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px 10px;
  ${mobile({ margin: "5px 15px", fontSize: 18 })}
`
export const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-right: 20px;
  ${mobile({ marginBottom: "20px", fontSize: 18 })}
`
export const DeleteButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${mobile({ justifyContent: "flex-end" })}
`
export const Hr = styled.hr`
  background-color: var(--gray);
  border: none;
  height: 1px;
  margin-bottom: 10px;
`
export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: auto;
  background-color: #fff;
`
export const SummaryTitle = styled.h1`
  font-size: 18px;
  font-weight: 300;
`
export const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "1.2em"};
`
export const SummaryItemText = styled.span``

export const SummaryItemPrice = styled.span``

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0d0d0d;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid var(--gray);
    background-color: #fff;
    color: var(--gray);
  }
`
