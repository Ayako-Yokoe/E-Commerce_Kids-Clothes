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
export const CreateNewButton = styled.button`
  font-size: 16px;
  padding: 0.3rem 0.5rem;
  margin: 1rem;
  background-color: #fff;
  border: 1px solid var(--gray);
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--gray);
    color: #fff;
    border: 1px solid var(--gray);
  }
`
export const ProductDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;
  height: auto;
  width: 70%;
  background-color: #fff;
  ${mobile({ flexDirection: "column" })}
`
export const Left = styled.div`
  flex: 1;
  height: auto;
  ${mobile({ margin: "0 0 15px 0" })}
`
export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: 300px;
`
export const ProductTitle = styled.p`
  font-size: 20px;
`
export const ProductId = styled.p`
  font-size: 12px;
`
export const ID = styled.span`
  font-size: 10px;
`
export const Right = styled.div`
  flex: 1;
  height: auto;
  margin-left: 20px;
`
export const FormDetail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const FormCenter = styled.div`
  flex: 1;
`
export const FormRight = styled.div`
  flex: 1;
`
export const FormLabel = styled.label`
  font-size: 16px;
`
export const FormInput = styled.input`
  padding: 0.3rem;
  margin-bottom: 0.3rem;
  font-size: 16px;
`
export const InStock = styled.select`
  font-size: 16px;
  padding: 0.3rem;
  margin-bottom: 1.5rem;
`
export const UploadFile = styled.div``
export const Space = styled.div`
  margin: 0.5em 0;
`
