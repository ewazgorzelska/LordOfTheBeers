import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "assets/logo.png";

export const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  background-color: #ffa500;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

export const ListItem = styled(NavLink)`
  font-size: 20px;
  font-family: "Shrikhand", cursive;
  margin-right: 25px;
  cursor: pointer;
`;

export const Logo = styled(NavLink)`
  width: 170px;
  height: 170px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 77% 77%;
  cursor: pointer;
`;
