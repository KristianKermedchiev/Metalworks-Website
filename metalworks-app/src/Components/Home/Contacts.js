import React from 'react';
import '../../Styles/Contacts.css';
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <section className='Contacts-body'>
      <h2>Как да ни намерите</h2>
      <p>Телефон: 0885728726</p>
      <p>Адрес: ул. „Първа българска армия“ 11, София</p>
      <p>Работно време: 08.30 - 16.30 всеки делничен ден</p>

      <Link to="/contacts">
        <button>Виж повече</button>
      </Link>

      <div className='map-holder'>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed/v1/place?q=42.724701, 23.322697&key=AIzaSyA954Mp-b94PU899AlgE1j7fRQgx1fTy1Y"
          // frameBorder="0"
          style={{ border: '0', width: '100%', height: '100%' }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contacts;
