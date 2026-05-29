import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Testimonials,
  Contact,
  Faq,
  Main,
  Services,
  ServiceDetail,
  Blog,
} from "./pages";
import Tiempos from "./assets/fonts/Tiempos-Regular.otf";
import { PageFrame } from "./components/PageFrame";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Tiempos';
    src: url(${Tiempos}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  html, body{
    width:100vw;
    user-select:none;
    box-sizing:border-box;
    margin:0;
    padding: 0;
    max-width: 100%;
    overflow-x: hidden;

    /* width */
    ::-webkit-scrollbar {
      width: 12px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: lightgray;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #062e64; 
    }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;

  margin-left: 18vw;
  margin-right: 18vw;

  @media (max-width: 768px) {
    margin: 0;
    padding-inline: 20px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <PageFrame>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/coach's-Notebook" element={<Blog />} />
          </Routes>
        </ContentWrapper>
      </PageFrame>
      <Footer />
    </>
  );
}

export default App;
