import React from 'react';
import '../../Styles/Catalog.css';
import { Link } from 'react-router-dom';


function Catalog() {
    return (
        <section className="Catalog-body">
            <h2>Каталог</h2>
            <p>
            КАТЕР 2004 ЕООД изкупува всички видове черни метали, които могат да бъдат рециклирани. Предлагаме на нашите клиенти винаги актуално високa цена за изкупуване.
            </p>
            <Link to="/catalog">
                <button>Виж повече</button>
            </Link>
        </section>
    );
};

export default Catalog;