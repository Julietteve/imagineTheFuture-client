import React from 'react';
import { Header } from './components';
import {createGlobalStyle} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { About, Testimonials, Contact, Faq, Main, Services, ServiceDetail, Blog } from './pages';

const GlobalStyle = createGlobalStyle`
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
      border-radius:20px
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #000; 
    }
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
        <Route path='/services/:id' element={<ServiceDetail/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </>
  );
}

export default App;
