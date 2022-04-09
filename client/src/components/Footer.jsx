import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    display: flex;
    background-color: var(--orange);
    ${mobile({ flexDirection: 'column'})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({ backgroundColor: '#f6e9d7'})}
`
const Logo = styled.h2``

const Desc = styled.p`
    margin: 20px 0;
    ${mobile({ fontSize: 16, fontWeight: 300 })}
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none'})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.8em;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
 const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#ef9273'})}
 `
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ABC</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon><FacebookIcon /></SocialIcon>
                    <SocialIcon><InstagramIcon /></SocialIcon>
                    <SocialIcon><TwitterIcon /></SocialIcon>
                    <SocialIcon><PinterestIcon /></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Baby-Boy</ListItem>
                    <ListItem>Baby-Girl</ListItem>
                    <ListItem>Toddler-Boy</ListItem>
                    <ListItem>Toddler-Girl</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{ marginRight: 10 }} /> 123 Abc Ave, Vancouver BC
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{ marginRight: 10 }} /> 555-555-5555
                </ContactItem>
                <ContactItem>
                    <EmailIcon style={{ marginRight: 10 }} /> abc@example.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
}

export default Footer