import * as React from "react";
import { Route, Routes } from "react-router-dom";
import styled from '@emotion/styled';
import { About } from './About';
import { Home } from './Home';

const Wrapper = styled.div`
  display: grid;
  @media(min-width: 42rem) {
    grid-template-columns: 42rem;
  }
  @media(max-width: 42rem) {
    grid-template-columns: 100vw;
  }
  grid-template-rows: 5.5rem 2rem 1fr 100px;
  min-height: 50rem;
  justify-content: space-around;
`;
const Header = styled.header`
  grid-column: span 1;
  text-align: center;
`;
const Nav = styled.nav`
  grid-column: span 1;
  line-height: 2rem;
  text-align: center;
`;
const Article = styled.article`
  background-color: rgba(0,0,0,0.3);
  display: flow-root;
`;
const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
`;
export const MainSection = styled.section`
`;

export function App() {
  return (
    <Wrapper>
      <Header>
        <h1>Diane's perty Template</h1>
      </Header>
      <Nav>
        Nav content goes here
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< About />} />
      </Routes>
      <Footer>
        Footer content goes here
      </Footer>
    </Wrapper>
  );
}