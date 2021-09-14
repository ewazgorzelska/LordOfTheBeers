import React from "react";
import styled from "styled-components";
import { dummyBlog as data } from "data/data";

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  max-height: 500px;
  overflow: hidden;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 15px;
  margin: 15px;
`;

const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 800;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
`;

const Content = styled.p``;

const Article = () => {
  return (
    <ArticleWrapper>
      <Title>{data.title}</Title>
      <Image src={data.image} />
      <Content>{data.content}</Content>
    </ArticleWrapper>
  );
};

export default Article;
