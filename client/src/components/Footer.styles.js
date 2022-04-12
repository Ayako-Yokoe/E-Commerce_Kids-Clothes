import styled from 'styled-components';
import { mobile } from '../responsive';

export const Container = styled.div`
    display: flex;
    background-color: var(--orange);
    ${mobile({ flexDirection: 'column'})}
`
export const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({ backgroundColor: '#f6e9d7'})}
`
export const Logo = styled.h2``

export const Desc = styled.p`
    margin: 20px 0;
    ${mobile({ fontSize: 16, fontWeight: 300 })}
`
export const SocialContainer = styled.div`
    display: flex;
`
export const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none'})}
`
export const Title = styled.h3`
    margin-bottom: 30px;
`
export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.8em;
`
export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
export const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#ef9273'})}
`
export const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
export const Payment = styled.img`
    width: 50%;
`