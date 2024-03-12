import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Footer from './Components/Footer';
import About from './Components/Home/About';
import Catalog from './Components/Home/Catalog';
import Contacts from './Components/Home/Contacts';
import ContactsPage from './Components/ContactsPage';
import CatalogPage from './Components/CatalogPage';
import AdminPage from './Components/AdminPage';
import AdminDashboard from './Components/AdminDashboard';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase';
import AboutPage from './Components/AboutPage';

function App() {

  const auth = getAuth(app);

  const [hasUser, setHasUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (!authUser) {
        setHasUser(false);
      } else {
        setHasUser(true);
      }
    });
    return unsubscribe;
  }, [auth]);

  return (
    <Router>
      <div className='Content'>
        <Routes>
          <Route path="/" element={<MainWithCatalogAndContacts />} />
          <Route path="/cenorazpis" element={<CatalogPageWithFooter />} />
          <Route path="/kontakti" element={<ContactsPageWithFooter />} />
          <Route path="/za-nas" element={<AboutPageWithFooter />} />
          <Route path="/admin" element={<AdminPageDisplay />} />
          <Route path="/admin/dashboard" element={<AdminDashboardDisplay hasUser={hasUser} />} />
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

function CatalogPageWithFooter() {
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

function AboutPageWithFooter(){
  return (
    <div className='AboutUs-Page'>
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  )
}

function AdminPageDisplay() {
  return (
    <div className='AdminPageDispaly'>
      <AdminPage />
    </div>
  );
}

function AdminDashboardDisplay({ hasUser }) {

  const navigate = useNavigate();

  useEffect(() => {
    if (!hasUser) {
      navigate('/');
    }
  }, );

  if (!hasUser) {
    return;
  }

  return (
    <div className='AdminDashboard'>
      <AdminDashboard />
    </div>
  );

}

export default App;