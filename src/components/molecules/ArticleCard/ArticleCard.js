import React, { useContext } from "react";
import { AppContext } from "context/AppContext";
import {
  ArticleWrapper,
  Title,
  Image,
  Content,
  Button,
} from "./ArticleCardStyles";

const ArticleCard = ({ id, title, image = null, content }) => {
  const { setArticleClicked } = useContext(AppContext);

  const handleClicked = (id) => {
    setArticleClicked(id);
  };

  return (
    <ArticleWrapper>
      <Title>{title}</Title>
      {image ? <Image src={image} alt="beer" /> : null}
      <Content>{content}</Content>
      <Button to={`blog/${id}`}>
        <button id={id} onClick={() => handleClicked(id)}>
          Read more
        </button>
      </Button>
    </ArticleWrapper>
  );
};

export default ArticleCard;
