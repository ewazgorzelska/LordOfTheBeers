import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 60%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 15px;
  margin: 15px;
`;

export const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 300px;
  height: 200px;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  overflow: hidden;
  height: 50vh;
`;

export const Button = styled(Link)`
  width: 30%;
  height: 8vh;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.75em;
  border-radius: 10px;
  color: white;
  margin: 15px 0 15px 0;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;
