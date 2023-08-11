import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Catalog from './Components/Catalog';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='Content'>
        <Routes>
          <Route path="/" element={<MainWithCatalogAndContacts />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

function MainWithCatalogAndContacts() {
  return (
    <div className='Main'>
      <Main />
      <Catalog />
      <Contacts />
    </div>
  );
}

export default App;
