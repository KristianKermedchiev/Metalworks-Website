import React from 'react';
import '../../Styles/Catalog.css';
import { Link } from 'react-router-dom';


function Catalog() {
    return (
        <section className="Catalog-body">
            <h2>Ценоразпис</h2>
            <p>
            КАТЕР 2004 ЕООД изкупува различни видове черни метали, които могат да бъдат рециклирани. Предлагаме на нашите клиенти винаги коректно измерване и актуални цени при изкупуване на черни и цветни метали. Фирмата разполага и със собствен транспорт. 
            </p>
            <div className='buttons'>
            <Link to="/cenorazpis">
                <button>Ценоразпис</button>
            </Link>
            </div>
        </section>
    );
};

export default Catalog;