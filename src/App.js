import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'


export default function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}