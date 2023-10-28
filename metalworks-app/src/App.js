import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';

import Footer from './Components/Footer';
import About from './Components/Home/About';
import Catalog from './Components/Home/Catalog';
import Contacts from './Components/Home/Contacts';
import ContactsPage from './Components/ContactsPage';
import CatalogPage from './Components/CatalogPage';
import AboutPage from './Components/AboutPage';
import AdminPage from './Components/AdminPage';

function App() {
  return (
    <Router>
      <div className='Content'>
        <Routes>
          <Route path="/" element={<MainWithCatalogAndContacts />} />
          <Route path="/Catalog" element={<CatalogPageWithFooter />} />
          <Route path="/About" element={<AboutPageWithFooter />} />
          <Route path="/Contacts" element={<ContactsPageWithFooter />} />
          <Route path="/Admin" element={<AdminPageDisplay />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainWithCatalogAndContacts() {
  return (
    <div className='Main'>
      <Navbar />
      <About />
      <Catalog />
      <Contacts />
      <Footer />
    </div>
  );
};

function CatalogPageWithFooter(){
  return (
    <div className='Catalogue-Page'>
      <Navbar />
      <CatalogPage />
      <Footer />
    </div>
  );
}

function AboutPageWithFooter(){
  return (
    <div className='About-Page'>
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  );
}

function ContactsPageWithFooter() {
  return (
    <div className='Contacts-Page'>
      <Navbar />
      <ContactsPage />
      <Footer />
    </div>
  );
}


function AdminPageDisplay() {
  return (
    <div className='AdminPageDispaly'>
      <AdminPage />
    </div>
  );
}

export default App;