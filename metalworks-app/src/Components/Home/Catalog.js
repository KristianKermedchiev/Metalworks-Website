import React from 'react';
import '../../Styles/Catalog.css';
import { Link } from 'react-router-dom';


function Catalog() {
    return (
        <section className="Catalog-body">
            <h2>Ценоразпис</h2>
            <p>
            КАТЕР 2004 ЕООД изкупува всички видове черни метали, които могат да бъдат рециклирани. Предлагаме на нашите клиенти винаги актуално високa цена за изкупуване.
            </p>
            <div className='buttons'>
            <Link to="/catalog">
                <button>Черни метали</button>
            </Link>
            <Link to="/catalog">
                <button>Цветни метали</button>
            </Link>
            </div>
        </section>
    );
};

export default Catalog;