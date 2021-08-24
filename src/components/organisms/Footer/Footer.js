import React from 'react';
import { 
    Container,
    Column,
    Row,
    SocialLinkWrapper,
    SocialLink
 } from './FooterStyles';
import { IconContext } from "react-icons";
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter  } from "react-icons/ti";

const Footer = () => {
    return (
        <Container>
            <Column>About
                <Row href="#">Careers</Row>
                <Row href="#">FAQ</Row>
                <Row href="#">Gifts</Row>
            </Column>
            <Column>Contact
                <Row href="#">Support</Row>
                <Row href="#">General</Row>
                <Row href="#">Media</Row>
            </Column>
            <Column>Follow Us
                <SocialLinkWrapper>
                    <IconContext.Provider value={{ size: 24 }}>
                        <SocialLink href="#"><TiSocialFacebook /></SocialLink>
                        <SocialLink href="#"><TiSocialInstagram /></SocialLink>
                        <SocialLink href="#"><TiSocialTwitter /></SocialLink>
                    </IconContext.Provider>
                </SocialLinkWrapper>
            </Column>
        </Container>
       
    )
}

export default Footer;
