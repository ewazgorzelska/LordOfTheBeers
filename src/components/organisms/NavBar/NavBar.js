import React from "react";
import { NavLink } from "react-router-dom";
import { NavWrapper, NavList, ListItem, Logo } from "./NavBarStyles.js";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import { IconContext } from "react-icons";
import { TiHeartOutline, TiUserOutline, TiShoppingCart } from "react-icons/ti";

const NavBar = () => {
  return (
    <NavWrapper>
      <Logo as={NavLink} exact to="/" />
      <NavList>
        <ListItem as={NavLink} to="/category/1">
          Shop
        </ListItem>
        <ListItem as={NavLink} to="/blog">
          Blog
        </ListItem>
        <ListItem as={NavLink} to="/about">
          About Us
        </ListItem>
        <IconContext.Provider value={{ size: 32 }}>
          <ButtonIcon as={NavLink} to="/fav">
            <TiHeartOutline />
          </ButtonIcon>
          <ButtonIcon as={NavLink} to="/login">
            <TiUserOutline />
          </ButtonIcon>
          <ButtonIcon as={NavLink} to="/cart">
            <TiShoppingCart />
          </ButtonIcon>
        </IconContext.Provider>
      </NavList>
    </NavWrapper>
  );
};

export default NavBar;
