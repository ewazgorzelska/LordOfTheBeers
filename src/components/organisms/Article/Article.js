import React, { useContext } from "react";
import { AppContext } from "context/AppContext";
import { Link } from "react-router-dom";
import {
  Title,
  Image,
  Wrapper,
  Container,
  StyledButton,
} from "./ArticleStyles";
import MainTemplate from "templates/MainTemplate/MainTemplate";

const Article = () => {
  const { articles, clicked } = useContext(AppContext);

  const articleTitle = articles.find((el) => el.id === clicked).title;
  const articleImage = articles.find((el) => el.id === clicked).image.url;
  const articleContent = articles.find((el) => el.id === clicked).content;

  return (
    <MainTemplate>
      <Container>
        <Title>{articleTitle}</Title>
        <Wrapper>
          <Image src={articleImage} alt="beer" />
          <p>{articleContent}</p>
        </Wrapper>
        <Link to={"/blog"}>
          <StyledButton isBig>Back to articles</StyledButton>
        </Link>
      </Container>
    </MainTemplate>
  );
};

export default Article;
