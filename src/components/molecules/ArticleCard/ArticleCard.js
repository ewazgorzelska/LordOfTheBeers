import React from "react";
import { Link } from "react-router-dom";
import {
  ArticleWrapper,
  Title,
  Image,
  Content,
  Button,
} from "./ArticleCardStyles";

const ArticleCard = ({ id, title, image = null, content }) => {
  return (
    <Link to={`article/${id}`}>
      <ArticleWrapper>
        <Title>{title}</Title>
        {image ? <Image src={image} alt="beer" /> : null}
        <Content>{content}</Content>
        <Button as={Link} to={`article/${id}`}>
          Read more
        </Button>
      </ArticleWrapper>
    </Link>
  );
};

export default ArticleCard;
