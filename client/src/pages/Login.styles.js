import styled from 'styled-components';
import { mobile } from '../responsive';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1511852365831-4c1b2b2b1325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const Wrapper = styled.div`
    width: 50%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    ${mobile({ width: '75%' })}
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Title = styled.h1`
    font-size: 26px;
    font-weight: 300;
    letter-spacing: 2px;
    ${mobile({ fontSize: 20 })}
`
export const Input = styled.input`
    flex: 1;
    width: 60%;
    margin : 10px 5px;
    padding: 10px;
    border: none;
    font-size: 18px;
    ${mobile({ fontSize: 14 })}

    &:focus {
        outline: none;
    }
`
export const LoginButton = styled.button`
    width: 40%;
    border: none;
    padding: 10px 20px;
    margin: 10px;
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
`
export const ToLink = styled.div`
    font-size: 12px;
    margin-top: 10px;
    cursor: pointer;
`