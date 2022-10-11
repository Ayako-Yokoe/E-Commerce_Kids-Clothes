import styled from "styled-components"
import { mobile } from "../responsive"

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 500;
  ${mobile({ fontSize: 24 })}
`
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: transparent;
    color: #fff;
    transition: all 0.3s ease;
  }
`
