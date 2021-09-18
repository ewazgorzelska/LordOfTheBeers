import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AppContext } from "context/AppContext";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import ArticleCard from "../../components/molecules/ArticleCard/ArticleCard";
import { ArticlesList, Loading, Error } from "./BlogStyles";

const API_KEY = process.env.REACT_APP_DATOCMS_TOKEN;

const BLOG_QUERY = `{
  allArticles {
    content
    id
    title
    image {
      url
    }
  }
}`;

const Blog = () => {
  const { articles, setArticles } = useContext(AppContext);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: BLOG_QUERY,
        },
        {
          headers: {
            authorization: `Bearer ${API_KEY}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load articles for you`);
      });
  }, [setArticles]);

  return (
    <MainTemplate>
      {articles.length > 0 ? (
        <ArticlesList>
          {articles.map(({ id, title, image = null, content }) => (
            <ArticleCard
              key={id}
              title={title}
              image={image.url}
              content={content}
              id={id}
            />
          ))}
        </ArticlesList>
      ) : error ? (
        <Error>error</Error>
      ) : (
        <Loading>Loading ...</Loading>
      )}
    </MainTemplate>
  );
};

export default Blog;
