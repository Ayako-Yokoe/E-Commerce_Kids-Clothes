import styled from "styled-components"
import { mobile } from "../responsive"

export const Container = styled.div`
  width: 50%;
  margin: 4rem auto;
  padding: 1rem;
  height: auto;
  background-color: #fff;
  ${mobile({ width: "80%", margin: "2rem auto" })}
`
export const Heading = styled.div`
  background-color: #f6e9d7;
  padding: 0.4em 0.5em;
  text-align: center;
  font-size: 20px;
  ${mobile({ fontSize: 14 })}
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
`
export const Space = styled.div`
  margin: 0.5em 0;
`
export const ImageTitle = styled.p`
  font-size: 18px;
  letter-spacing: 2px;
  padding: 0.5rem 0;
  ${mobile({ fontSize: 14 })}
`
export const ImageLabel = styled.label``
export const ImageInput = styled.input``
