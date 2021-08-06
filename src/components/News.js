//b5d49472ea5a4f008140bc0718c2e50b
import React, { useState } from "react";
import * as newsData from "../data/news.json";
import styled from "styled-components";

const NewsWrapper = styled.ul`
  background-color: white;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  width: 100%;
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
`;

const NewsTitle = styled.h2`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: black;
  color: white;
  font-size: 42px;
  padding-left: 20px;
  padding-right: 20px;
`;

const NewsImage = styled.img`
  height: auto;
  width: 100%;
`;

const ArticleTitle = styled.a`
  color: black;
  text-decoration: none;
  font-size:1vw;
  grid-area: title;
  font-weight: bold;
`;

const ArticleImage = styled.img`
  max-height: 146.53px;
  width: 100%;
  grid-area: picture;
`;

const ArticleDescription = styled.p`
  grid-area: description;
  color: black;
  font-size:0.8vw;
`;


const NewsArticle = styled.li`
  border-width: 0px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  border-color: black;
  background-color: white;
  margin: 30px auto;
  display: grid;
  height: 280px;
  width:90%;
  grid-gap: 10px;
  grid-template-areas:
    "picture picture"
    "title title"
    "description description"
    "date date";
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
    <>
    <div style={{position: `relative`}}>
    <NewsImage className='news-image' src={'crowd.jpg'} alt="News image"></NewsImage>
    <NewsTitle>LATEST NEWS</NewsTitle>
    </div>
    <NewsWrapper>
      {newsData.articles && newsData.articles.map((art) => (
        <div style={{display:`inline-block`}}>
          <NewsArticle id={Math.floor(Math.random() * 10000)}>
            <ArticleTitle className='article-title' href={art["url"]}>{art["title"]}</ArticleTitle>
            <ArticleDescription>{art.description}</ArticleDescription>
            <ArticleImage src={art.urlToImage} alt="Article image"></ArticleImage>

          </NewsArticle>
        </div>
      ))}
    </NewsWrapper>
    </>
  );
}
