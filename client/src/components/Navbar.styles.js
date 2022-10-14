import styled from "styled-components"
import { mobile } from "../responsive"

export const Container = styled.div`
  height: auto;
`
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ order: 2 })}
`
export const Select = styled.select`
  padding: 10px;
  margin: 10px 20px;
  width: 40%;
  border: 1px solid #fff;
  color: var(--gray);
  ${mobile({ margin: "10px 10px", padding: 5, width: "90%" })}
`
export const Option = styled.option``
export const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ order: 1 })}
`
export const Logo = styled.h1`
  font-family: "Griffy", cursive;
  font-weight: bold;
  color: var(--gray);
  ${mobile({ fontSize: 20, margin: 5 })}
`
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ position: "absolute", top: 40, right: 10 })}
`
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  align-items: center;
  ${mobile({ display: "none" })}
`
export const Hamburgermenu = styled.div`
  visibility: hidden;
  ${mobile({ visibility: "visible", marginRight: 10 })}
`
export const FavoriteIcon = styled.div`
  color: ${(props) => (props.length > 0 ? "red" : "#000")};
  margin: 5px 10px 0 10px;
`
