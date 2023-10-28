import React from 'react';
import '../../Styles/About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="Main-body">
      <h2>За нас</h2>
      <p>
      КАТЕР 2004 ЕООД 
      е основан през 2004 г. и сме активни основно в рециклирането и търговията с отпадъци от метали. Фирмата разполага с машини и персонал за третиране на отпадъци от производство на метали. През последните 20 години се превърнахме във важен партньор на множество фабрики, както в Европа, така и в Азия.
      </p>
      <Link to="/about">
        <button>Виж повече</button>
      </Link>
    </section>
  );
}

export default About;
