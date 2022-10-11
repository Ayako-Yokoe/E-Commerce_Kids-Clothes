import React from "react"
import { Link } from "react-router-dom"
import {
  Container,
  Wrapper,
  SuccessTitle,
  SuccessPara,
  SuccessButton,
} from "./Success.styles"

const Success = () => {
  return (
    <Container>
      <Wrapper>
        <SuccessTitle>Your Order Has Been Received</SuccessTitle>
        <SuccessPara>Thank you for your purchase</SuccessPara>
        <Link to="/">
          <SuccessButton>Continue Shopping</SuccessButton>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Success
