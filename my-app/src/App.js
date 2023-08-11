import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './Components/Footer';
import About from './Components/Home/About';
import Catalog from './Components/Home/Catalog';
import Contacts from './Components/Home/Contacts';
import ContactsPage from './Components/ContactsPage';
import AboutPage from './Components/AboutPage';
import CatalogPage from './Components/CatalogPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='Content'>
        <Routes>
          <Route path="/" element={<MainWithCatalogAndContacts />} />
          <Route path="/Catalog" element={<CatalogPageWithFooter />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contacts" element={<ContactsPageWithFooter />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainWithCatalogAndContacts() {
  return (
    <div className='Main'>
      <About />
      <Catalog />
      <Contacts />
      <Footer />
    </div>
  );
};

function CatalogPageWithFooter(){
  return (
    <>
    <div className='CatalogPage'>
      <CatalogPage />
    </div>
      <Footer />
      </>
  );
}

function ContactsPageWithFooter() {
  return (
    <div className='ContactsPage'>
      <ContactsPage />
      <Footer />
    </div>
  );
}

export default App;