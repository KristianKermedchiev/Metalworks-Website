import React, { useState, useEffect } from "react";
import "../Styles/CatalogPage.css";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function ColorMetals() {
  const [metals, setMetals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const metalCollection = collection(db, 'ColorMetals');
        const snapshot = await getDocs(metalCollection);
        console.log(snapshot)
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
        <h1>Цветни метали</h1>
        <p>
        КАТЕР 2004 ЕООД изкупува всички видове цветни метали, които могат да бъдат рециклирани. Предлагаме на нашите клиенти винаги актуално високa цена за изкупуване.
        </p>
        <p>Повече за нас може да откриете чрез бутона по-долу.</p>
        <Link to="/kontakti">
          <button>Виж повече</button>
        </Link>
      </div>
        <div className="table">
          <table>
            <tbody>
              <tr>
                <td className="table-header">Цветни Метали</td>
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

      <div className="bottom-part">
        <p className="thick">
        Обявените цени са за юридически лица. При предаване на отпадъци от физически лица дружеството удържа 10% от стойността на предадения отпадък с цел събиране на данък съгласно ЗДДФЛ.
        </p>
        <p>
        КАТЕР 2004 ЕООД изкупува всички видове цветни метали, които могат да бъдат рециклирани. Предлагаме винаги коректно измерване и актуални цени при изкупуване на Оловни акумулатори, Мед дебела (над 2 мм), Мед тънка, Месинг сборен, Месинг радиатори, Месинг стружки, Бронз, Калай, Алуминий сборен, Алуминиева дограма – чисти изрезки, Алуминиева дограма с термомост и/или с желязо, Aлуминиеви джанти, Алуминиеви плаки, Алуминиева жица, Алуминиев радиатор с медни тръби, Алуминиев авторадиатор, Олово чисто, Олово мръсно, Неръждавейка, Цам смесен, Цинк отпадък.
        </p>
      </div>
    </section>
  );
}

export default ColorMetals;