import React, { useState, useEffect } from "react";
import "../Styles/CatalogPage.css";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs, orderBy, query } from 'firebase/firestore';

function CatalogPage() {
  const [metals, setMetals] = useState([]);
  const [colorMetals, setColorMetals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const metalCollection1 = collection(db, 'Metals');
        const metalQuery = query(metalCollection1, orderBy('id'));
        const snapshot = await getDocs(metalQuery);
        const metalData = snapshot.docs.map(doc => doc.data());
        setMetals(metalData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const metalCollection2 = collection(db, 'ColorMetals');
        const metalQuery = query(metalCollection2, orderBy('id'));
        const snapshot = await getDocs(metalQuery);
        const metalData = snapshot.docs.map(doc => doc.data());
        setColorMetals(metalData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="CatalogPage">
      <div className="top-part">
       
       <h1>Ценоразпис</h1>

        <p>
          КАТЕР 2004 ЕООД изкупува изброените долу черни и цветни метали, които могат да бъдат рециклирани. Предлагаме на нашите клиенти винаги актуално високa цена за изкупуване. Фирмата разполага и със собствен транспорт.
        </p>

        <p>Повече за нас може да откриете чрез бутона по-долу.</p>

        <Link to="/kontakti">
          <button>Виж повече</button>
        </Link>

      </div>

      <h1>Черни метали</h1>

      <div className="table">
        <table>
          <tbody>
            <tr>
              <td className="table-header">Черни Метали</td>
              <td className="table-header">Цени</td>
            </tr>
            {metals.map((metal, index) => (
              <tr key={index}>
                <td>{metal.name}</td>
                <td>{metal.price} <bold>лв/тон</bold></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="Cvetni-Metali">Цветни метали</h1>

      <div className="table">
        <table>
          <tbody>
            <tr>
              <td className="table-header">Цветни Метали</td>
              <td className="table-header">Цени</td>
            </tr>
            {colorMetals.map((metal, index) => (
              <tr key={index}>
                <td>{metal.name}</td>
                <td>{metal.price} <bold>лв/кг</bold></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bottom-part">
        <p>
        КАТЕР 2004 ЕООД предлага винаги коректно измерване и актуални цени при изкупуване на изброените метали. За запитвания или при нужда от повече информация, можете да откриете нашите контакти чрез бутона по-долу.
        </p>

        <Link to="/kontakti">
          <button className="bottom-button">Свържете се с нас</button>
        </Link>

      </div>
    </section>
  );
}

export default CatalogPage;