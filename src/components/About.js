import React from "react";
// ^ you need to import React in this file, even though
//we are not using it we are still using JSX
import styled from "styled-components";

const Aboutstyle = styled.div`
  background-color: #ef7718;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  width: 50%;
`;

export default function About() {
  return <Aboutstyle> ABOUT </Aboutstyle>;
}
