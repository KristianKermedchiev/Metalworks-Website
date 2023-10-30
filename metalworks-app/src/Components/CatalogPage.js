import React, { useState, useEffect } from "react";
import "../Styles/CatalogPage.css";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function CatalogPage() {
  const [metals, setMetals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const metalCollection = collection(db, 'Metals');
        const snapshot = await getDocs(metalCollection);
        const metalData = snapshot.docs.map(doc => doc.data());
        setMetals(metalData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="CatalogPage">
      <div className="top-part">
        <h1>Черни метали</h1>
        <p>
        КАТЕР 2004 ЕООД изкупува всички видове черни метали, които могат да бъдат рециклирани. Предлагаме на нашите клиенти винаги актуално високa цена за изкупуване.
        </p>
        <p>Повече за нас може да откриете чрез бутона по-долу.</p>
        <Link to="/contacts">
          <button>Виж повече</button>
        </Link>
      </div>

      <div className="table">
        <table>
          <tbody>
            <tr>
              <td className="table-header">Черни Метали</td>
              <td className="table-header">Цена</td>
            </tr>
            {metals.map((metal, index) => (
              <tr key={index}>
                <td>{metal.name}</td> 
                <td>{metal.price}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bottom-part">
        <p className="thick">
        Обявените цени са за юридически лица. При предаване на отпадъци от физически лица дружеството удържа 10% от стойността на предадения отпадък с цел събиране на данък съгласно ЗДДФЛ.
        </p>
        <p>
        КАТЕР 2004 ЕООД изкупува всички видове черни метали, които могат да бъдат рециклирани. Предлагаме на нашите клиенти винаги актуално високa цена за изкупуване на Желязо дебело, Чугун, Желязо дебело извън размер, Оплетена арматура, Желязо тънко (под 4 мм), Желязо смесено (тънко и дебело), Отпадъци от големи домакински уреди, Отпадъци от малки домакински уреди, копирна и принтерна техника
        </p>
      </div>
    </section>
  );
}

export default CatalogPage;
