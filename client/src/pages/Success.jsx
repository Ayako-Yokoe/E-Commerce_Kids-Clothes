import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`
const Wrapper = styled.div`
    width: 50%;
    padding: 20px;
    background-color: #fff;
    ${mobile({ width: '75%' })}
`
const SuccessTitle = styled.h1`
    font-size: 18px;
    font-weight: 300;
    padding: 10px 0;
`
const SuccessPara = styled.p`
    font-size: 16px;
    font-weight: 300;
    padding: 10px 0;
`
const SuccessButton = styled.button`
    padding: 10px;
    margin: 15px 0;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid var(--black);
    background-color: #fff;
    color: var(--black);
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: var(--black);
        border: 1px solid var(--black);
        color: #fff;
    }
`

const Success = () => {
      return (
        <Container>
          <Wrapper>
            <SuccessTitle >Your Order Has Been Received</SuccessTitle >
            <SuccessPara>Thank you for your purchase</SuccessPara>
            <Link to='/'>
              <SuccessButton>Continue Shopping</SuccessButton>
            </Link>
          </Wrapper>
        </Container>
      );
    };
    
    export default Success;