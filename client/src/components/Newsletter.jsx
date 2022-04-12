import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {
    Container,
    Title,
    Desc,
    InputContainer,
    Input,
    Button
} from './Newsletter.styles';


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