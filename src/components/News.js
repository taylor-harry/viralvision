//b5d49472ea5a4f008140bc0718c2e50b
import React, { useState } from "react";
import * as newsData from "../data/news.json";
import styled from "styled-components";

const Newsstyle = styled.div`
  background-color: black;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  width: 60%;
  display: inline-block;
`;
const Imagestyle = styled.img`
  height: 100%;
  width: 100%;
  grid-area: picture;
`;

const Descriptionstyle = styled.p`
  grid-area: description;
  color: white;
  font-size: 16px;
`;

const Datestyle = styled.p`
  grid-area: date;
  color: white;
  font-size: 10px;
`;

const Articlestyle = styled.div`
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  border-color: black;
  background-color: #171717;
  margin: 30px 0;
  display: grid;
  height: 280px;
  grid-gap: 10px;
  grid-template-areas:
    "title title"
    "picture description"
    "picture description"
    "picture description"
    "picture description"
    "picture date";
`;
const Linkstyle = styled.a`
  color: white;
  text-decoration: none;
  font-size: 20px;
  grid-area: title;
  font-weight: bold;
`;

export default function News() {
  //require()  Node.js, it's a built-in function with a special purpose: to load modules.
  const [newsArticles, setArticles] = useState([]);
  const NewsAPI = require("newsapi");
  const newsapi = new NewsAPI("b5d49472ea5a4f008140bc0718c2e50b");
  // To query /v2/top-headlines
  // All options passed to topHeadlines are optional, but you need to include at least one of them
  newsapi.v2
    .everything({
      q: "covid-19",
      sources: "bbc-news,the-verge",
      domains: "bbc.co.uk, techcrunch.com",
      from: "2020-04-28",
      to: "2020-04-28",
      language: "en",
      sortBy: "relevancy",
      page: 2,
    })
    .then((response) => {
      setArticles(response);
      /*
      {
        status: "ok",
        articles: [...]
      }
    */
    });
  return (
    <Newsstyle>
      {newsData["articles"].map((art) => (
        <ul>
          <Articlestyle>
            <Linkstyle href={art["url"]}>{art["title"]}</Linkstyle>
            <Descriptionstyle>{art.description}</Descriptionstyle>
            <Imagestyle src={art.urlToImage} alt="News image"></Imagestyle>
            <Datestyle>{art.publishedAt}</Datestyle>
          </Articlestyle>
        </ul>
      ))}
    </Newsstyle>
  );
}
