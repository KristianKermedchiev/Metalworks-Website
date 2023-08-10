import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Main from './Components/Main';
import Catalog from './Components/Catalog';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      
      <Main />
      <Catalog />
      <Contacts/>
      <Footer />
      </Routes>

      </div>
  );
}

export default App;


import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Services } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;