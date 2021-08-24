import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logo from 'assets/logo.png';
import { IconContext } from "react-icons";
import { TiHeartOutline, TiUserOutline, TiShoppingCart } from "react-icons/ti";


const NavWrapper = styled.nav`
    display: flex;
    width: 100%;
    background-color: #FFA500;
    justify-content: space-between;
    align-items: center;
`;

const NavList = styled.ul`
    display: flex;
    justify-content: flex-end;
`;

const ListItem = styled(NavLink)`
    font-size: 20px;
    font-family: 'Shrikhand', cursive;
    margin-right: 25px;
    cursor: pointer;
`;

const Logo = styled(NavLink)`
    width: 170px;
    height: 170px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 77% 77%;
    cursor: pointer;
`;

const NavBar = () => {

    return(
        <NavWrapper>
            <Logo as={NavLink} exact to="/"/>
            <NavList>
                <ListItem as={NavLink} to="/shop">Shop</ListItem>
                <ListItem as={NavLink} to="/blog">Blog</ListItem>
                <ListItem as={NavLink} to="/about">About Us</ListItem>
                <IconContext.Provider value={{ size: 32 }}>
                    <ButtonIcon as={NavLink} to="/fav"><TiHeartOutline /></ButtonIcon>
                    <ButtonIcon as={NavLink} to="/user"><TiUserOutline /></ButtonIcon>
                    <ButtonIcon as={NavLink} to="/cart"><TiShoppingCart /></ButtonIcon>
                </IconContext.Provider>
                    
        
            </NavList>          
        </NavWrapper>
    )
}

export default NavBar;