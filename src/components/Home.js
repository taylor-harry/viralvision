import React from "react";
// ^ you need to import React in this file, even though
//we are not using it we are still using JSX
import styled from "styled-components";

const Homestyle = styled.div`
  background-color: #efa730;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
`;

export default function Home() {
  return <Homestyle> HOME </Homestyle>;
}
