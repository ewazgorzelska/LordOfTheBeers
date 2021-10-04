import React from "react";
import { screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Blog, { BLOG_QUERY } from "./Blog";
import { renderWithProviders } from "helpers/renderWithProviders/renderWithProviders";
import { selectHttpOptionsAndBody } from "@apollo/client";

const mock = new MockAdapter(axios);

describe("Blog", () => {
 
  afterEach(() => {
    mock.reset();
  });

  it("Displays error when articles are not loaded correctly", async () => {
    mock.onPost("https://graphql.datocms.com/", { BLOG_QUERY }).reply(500);
    renderWithProviders(<Blog />);
    await screen.findByText(/Sorry/);
  });

    it("Displays the articles", async () => {
    
      mock.onPost("https://graphql.datocms.com/", { BLOG_QUERY }).reply(200, {
            data: {
              allArticles: [
                  {
                    content: "Test lorem ipsum",
                    id: "57557535",
                    title: "Test",
                    image: { url: "https://placebear.com/g/200/300" },
                  },
                ],
          },
        });
      renderWithProviders(<Blog />);
      
      const text = await screen.findAllByText(/Test/);
      expect(text).toBeInTheDocument();
      
    });
});

