import React, { useContext } from "react";
import { useParams } from "react-router-dom";
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
  const { articles } = useContext(AppContext);
  let { id } = useParams();
  const articleTitle = articles.find((el) => el.id.toString() === id).title;
  const articleImage = articles.find((el) => el.id.toString() === id).image.url;
  const articleContent = articles.find((el) => el.id.toString() === id).content;

  return (
    <MainTemplate>
      <Container>
        <Title>{articleTitle}</Title>
        <Wrapper>
          {articleImage ? <Image src={articleImage} alt="beer" /> : null}
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
