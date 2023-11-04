import React, { useState, useEffect } from "react";
import "../Styles/CatalogPage.css";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function CatalogPage() {
  const [metals, setMetals] = useState([]);
  const [colorMetals, setColorMetals] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const metalCollection = collection(db, 'ColorMetals');
        const snapshot = await getDocs(metalCollection);
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
          КАТЕР 2004 ЕООД изкупува изброените долу черни и цветни метали, които могат да бъдат рециклирани. Предлагаме на нашите клиенти винаги актуално високa цена за изкупуване.
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
                <td>{metal.price}</td>
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
        КАТЕР 2004 ЕООД предлага винаги коректно измерване и актуални цени при изкупуване на изброените метали. За запитвания или при нужда от повече информация, можете да откриете нашите контакти тук.
        </p>

        <Link to="/kontakti">
          <button className="bottom-button">Свържете се с нас</button>
        </Link>

      </div>
    </section>
  );
}

export default CatalogPage;