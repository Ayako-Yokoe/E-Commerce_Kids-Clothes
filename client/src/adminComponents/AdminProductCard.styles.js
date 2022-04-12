import styled from 'styled-components';

export const Detail = styled.span`
    color: var(--gray);
`
export const Button = styled.button`
    font-size: 16px;
    padding: 0.3rem 0.5rem;
    margin: 10px 5px 0 0;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: var(--gray);
        color: #fff;
        border: 1px solid var(--gray);
    }
`