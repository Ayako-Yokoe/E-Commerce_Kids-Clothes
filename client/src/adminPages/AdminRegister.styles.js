import styled from 'styled-components';
import { mobile } from '../responsive';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1626082372862-4d53520c4588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjEyMTI2OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080') center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const Wrapper = styled.div`
    width: 50%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.6);
    ${mobile({ width: '75%' })}
`
export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    ${mobile({ flexDirection: 'column'})}
`
export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 2px;
    margin: 10px;
    ${mobile({ fontSize: 12, fontWeight: 500 })}
`
export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin : 10px 5px;
    padding: 10px;
    border: none;
    font-size: 18px;
    ${mobile({ fontSize: 14, width: '90%' })}

    &:focus {
        outline: none;
    }
`
export const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 25px;
    text-align: justify;
    ${mobile({ fontSize: 8, margin: '10px 25px' })}
`
export const RegisterButton = styled.button`
    width: 40%;
    border: none;
    padding: 10px 20px;
    background-color: teal;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    ${mobile({ fontSize: 12, width: '50%'})}

    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`
export const Error = styled.div`
    color: red;
    margin-top: 5px;
`
export const ToLink = styled.div`
    font-size: 12px;
    margin-top: 10px;
    cursor: pointer;
`