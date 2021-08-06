import React from "react";
import styled from "styled-components";
import About from "./About";
import NewsSample from "./NewsSample";


const HomeWrapper = styled.div`
  height: 800px;
  width: 100%;
  background-color: white;
  color: black;
  background-image: url("covid.jpg");
  background-size: 250px;
`;

export default function Home() {

  return(
    <HomeWrapper>
      <div style={{
        height:"100%", 
        display:`flex`,
        justifyContent: `space-around`, 
        backgroundColor: `rgba(255, 255, 255, 0.85)`
        }}>
      <About></About>
      <div style={{
        padding: `5px`, 
        float: `right`, 
        overflowY:`hidden`}
        }>
        <NewsSample></NewsSample>
      </div>
      </div>
    </HomeWrapper>
  ) 

}
