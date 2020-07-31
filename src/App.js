import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills'


export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}