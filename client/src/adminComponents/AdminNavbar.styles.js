import styled from "styled-components"
import { mobile } from "../responsive"

export const Container = styled.div`
  height: auto;
  background-color: var(--orange);
  color: #fff;
`
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  text-align: center;
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`
export const AdminTitle = styled.p`
  font-size: 16px;
  letter-spacing: 2px;
  ${mobile({ fontSize: 14 })}
`
export const Center = styled.div`
  flex: 1;
`
export const Logo = styled.h1`
  font-family: "Griffy", cursive;
  font-weight: bold;
  color: #fff;
  ${mobile({ fontSize: 20, margin: 5 })}
`
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ justifyContent: "flex-end" })}
`
export const ListItem = styled.div`
  display: inline-block;
  color: #fff;
  cursor: pointer;
  ${mobile({ display: "none" })}
`
export const Hamburgermenu = styled.div`
  visibility: hidden;
  ${mobile({ visibility: "visible", marginRight: 10 })}
`
