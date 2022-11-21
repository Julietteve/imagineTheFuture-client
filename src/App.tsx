import React from 'react';
import { Header } from './components';
import {createGlobalStyle} from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { About, Testimonials, Contact, Faq, Main, Services } from './pages';

const GlobalStyle = createGlobalStyle`
  html, body{
    width:100vw;
    user-select:none;
    box-sizing:border-box;
    margin:0;
    padding: 0
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
      </Routes>
    </>
  );
}

export default App;
