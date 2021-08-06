import React, { useState } from "react";
import * as newsData from "../data/news.json";
import styled from "styled-components";


const Newsstyle = styled.div`
  background-color: transparent;
  overflow-y: hidden;
  left: 0px;
`;

const Articlestyle = styled.div`
  border-width: 0px;
  padding: 10px;
  border-color: black;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 28px auto;
  display: grid;
  height: auto;
  width: 200px;
  grid-gap: 10px;
  grid-template-areas:
    "picture picture"
    "picture picture"
    "title title"
`;

const Imagestyle = styled.img`
  max-height: 100%;
  max-width: 100%;
  grid-area: picture;
`;

const Linkstyle = styled.a`
  color: black;
  text-decoration: none;
  font-size:1vw;
  grid-area: title;
  font-weight: bold;
  text-align: left;
`;

export default function NewsSample() {
  const [newsArticles, setArticles] = useState([]);
  const NewsAPI = require("newsapi");
  const newsapi = new NewsAPI("b5d49472ea5a4f008140bc0718c2e50b");
   newsapi.v2
     .everything({
       q: "covid-19",
       sources: "bbc-news,the-verge",
       domains: "bbc.co.uk, techcrunch.com",
       from: '2020-12-30',
       to: '2020-01-30',
       language: "en",
       sortBy: "relevancy",
       page: 2
     })
     .then((response) => {
       setArticles(response)

     });
  return (
    <Newsstyle id="news">
      {newsData.articles && newsData.articles.slice(0, 3).map((art) => (
          <Articlestyle id={Math.floor(Math.random() * 10000)}>
            <Linkstyle className="link" href={art["url"]}>{art["title"]}</Linkstyle>
            <Imagestyle src={art.urlToImage} alt="News image"></Imagestyle>
          </Articlestyle>
      ))}
    </Newsstyle>
    
  );
}
