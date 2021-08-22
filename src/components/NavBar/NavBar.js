import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import logo from 'assets/logo.png';
import { BsHeart, BsPerson } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";


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
    padding-right: 10px;
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
                
                <ButtonIcon as={NavLink} to="/fav" icon={BsHeart}></ButtonIcon>
                <ButtonIcon as={NavLink} to="/user" icon={BsPerson}></ButtonIcon>
                <ButtonIcon as={NavLink} to="/cart" icon={TiShoppingCart}></ButtonIcon>
            </NavList>          
        </NavWrapper>
    )
}

export default NavBar;