import styled from 'styled-components';
import { mobile } from '../responsive';

export const Container = styled.div``

export const Wrapper = styled.div`
    height: 90vh;
    padding: 50px;
    display: flex;
    ${mobile({ padding: 30, flexDirection: 'column', height: 'auto', textAlign: 'center' })}
`
export const ImgContainer = styled.div`
    flex: 1;
    padding: 10px;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: '40vh', objectFit: 'contain' })}
`
export const InfoContainer = styled.div`
    flex: 1;
    padding: 10px 50px;
    ${mobile({ padding: 10 })}
`
export const Title = styled.h1`
    font-size: 40px;
    font-weight: 300;
    letter-spacing: 2px;
    ${mobile({ fontSize: 30 })}
`
export const Desc = styled.p`
    font-size: 26px;
    font-weight: 300;
    letter-spacing: 2px;
    margin: 20px 0;
    ${mobile({ fontSize: 20, margin: "10px 0" })}
`
export const Price = styled.span`
    font-size: 26px;
    font-weight: 300;
    letter-spacing: 2px;
    padding: 5px 0;
    margin: 20px 0;
    ${mobile({ fontSize: 20, margin: "10px 0" })}
`
export const FilterContainer = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: flex-start;
    ${mobile({ width: '100%', justifyContent: 'center', margin: "10px 0" })}
`
export const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`
export const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 2px;
    ${mobile({ fontSize: 16 })}
`
export const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 0 0 8px;
    cursor: pointer;
`
export const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px 15px;
`
export const FilterSizeOption = styled.option``

export const Button = styled.button`
    margin: 40px 0;
    padding: 15px 20px;
    border: 1px solid var(--orange);
    background-color: #fff;
    font-size: 18px;
    cursor: pointer;
    font-weight: 300;
    ${mobile({ fontSize: 12, margin: "20px 0" })}

    &:hover {
        background-color: var(--orange);
        color: #fff;
        transition: all 0.3s ease;
    }
`