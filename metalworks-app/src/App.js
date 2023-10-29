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
import AdminPage from './Components/AdminPage';
import AdminDashboard from './Components/AdminDashboard';

function App() {
  return (
    <Router>
      <div className='Content'>
        <Routes>
          <Route path="/" element={<MainWithCatalogAndContacts />} />
          <Route path="/catalog" element={<CatalogPageWithFooter />} />
          <Route path="/contacts" element={<ContactsPageWithFooter />} />
          <Route path="/admin" element={<AdminPageDisplay />} />
          <Route path="/admin/dashboard" element={<AdminDashboardDisplay />} />
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

function AdminDashboardDisplay() {
  return (
    <div className='AdminDashboard'>
      <AdminDashboard />
    </div>
  );
}

export default App;