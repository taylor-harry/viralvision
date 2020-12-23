import React from "react";
import Home from "./Home";
import News from "./News";
import About from "./About";
import Topics from "./Topics";
import styled from "styled-components";
import Map from "./Map";
import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import {
  //these 3 are just components!
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom";

const Footer = styled.footer`
  background-color: #303030;
  font-size: 12px;
`;

const Wrapper = styled.div`
  background-color: #000000;
  width: 100%;
  height: auto;
  color: #ffffff;
  text-align: center;
`;

const Navigation = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #303030;
  border-right: 0.5em solid #303030;
  border-left: 0.5em solid #303030;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const Navlink = styled.a`
  display: block;
  padding: 0.25em 1em;
  color: #ffffff !important;
  text-decoration: none;
  text-align: center;
`;

const NavItem = styled.li`
  flex: 1 0 auto;
`;

const LogoCombo = styled.ul`
  flex: 1 0 auto;
  padding: 0.25em 1em;
`;

const UserCombo = styled.ul`
  flex: 1 0 auto;
  padding: 0.25em 1em;
`;

const NavTitle = styled.a`
  font-size: 18px;
`;

const RoutePages = styled.ul`
  margin: 0;
`;

const items = [
  { value: "John Smith", id: 1 },
  { value: "Account Details", id: 2 },
  { value: "Logout", id: 3 },
];

function App() {
  return (
    //parent must be wrapped in BrowserRouter
    <BrowserRouter>
      <Wrapper>
        <Navigation>
          <NavItem>
            <LogoCombo>
              <FontAwesomeIcon icon={faVirus} color="#cc0000" />
              <NavTitle>ViralVision</NavTitle>
            </LogoCombo>
          </NavItem>
          <NavItem>
            <Navlink>
              <Link to="/">Home</Link>
            </Navlink>
          </NavItem>
          <NavItem>
            <Navlink>
              <Link to="/news">News</Link>
            </Navlink>
          </NavItem>
          <NavItem>
            <Navlink>
              <Link to="/maps">Map</Link>
            </Navlink>
          </NavItem>
          <NavItem>
            <UserCombo>
              <User title="user information" items={items}></User>
            </UserCombo>
          </NavItem>
        </Navigation>
        <RoutePages>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/maps" component={Map} />
        </RoutePages>
        <Footer>powered by NewsAPI.org</Footer>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
