import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    ${mobile({ height: '50vh'})}
`
const Title = styled.h1`
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 20px;
    ${mobile({ fontSize: 28 })}
`
const Desc = styled.div`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 55px;
    ${mobile({ fontSize: 16, padding: '0 40px' })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 0.5px solid var(--orange);
    ${mobile({ width: '70%', height: 30 })}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    font-size: 16px;
    letter-spacing: 2px;
    ${mobile({ fontSize: 14 })}
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: var(--orange);
    color: #fff;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Desc>
        <InputContainer>
            <Input placeholder='Your email' />
            <Button>
                <EmailOutlinedIcon style={{ width: '0.8em', height: '0.8em' }} />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter