import React from 'react';
import '../Styles/Contacts.css';

function Contacts() {
  return (
    <div className='map-holder'>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed/v1/place?q=42.721233, 23.332194&key=AIzaSyA954Mp-b94PU899AlgE1j7fRQgx1fTy1Y"
        frameBorder="0"
        style={{ border: '0', width: '100%', height: '100%' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Contacts;
