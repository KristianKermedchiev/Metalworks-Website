import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Main from './Components/Main';
import Catalog from './Components/Catalog';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Catalog />
      <Contacts/>
      <Footer />
    </>
  );
}

export default App;
