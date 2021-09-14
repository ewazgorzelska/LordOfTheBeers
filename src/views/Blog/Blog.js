import React from "react";
import styled from "styled-components";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Article from "./Article/Article";

const ArticlesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Blog = () => {
  return (
    <MainTemplate>
      <ArticlesList>
        <Article />
        <Article />
        <Article />
        <Article />
      </ArticlesList>
    </MainTemplate>
  );
};

export default Blog;
