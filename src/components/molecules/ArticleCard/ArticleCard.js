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
    
      <ArticleWrapper>
        <Link to={`article/${id}`}>
        <Title>{title}</Title>
        {image ? <Image src={image} alt="beer" /> : null}
        <Content>{content}</Content>
        </Link>
        <Button to={`article/${id}`}>
          Read more
        </Button>
      </ArticleWrapper>
    
  );
};

export default ArticleCard;
