import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
