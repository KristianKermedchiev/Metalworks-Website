import React from "react";
import "../Styles/CatalogPage.css";
import { Link } from "react-router-dom";

function CatalogPage() {
  return (
    <section className="CatalogPage">
      <div className="top-part">
        <h1>Черни метали</h1>
        <p>
        КАТЕР 2004 ЕООД изкупува всички видове черни метали, които могат да бъдат рециклирани. Предлагаме на нашите клиенти винаги актуално високa цена за изкупуване.
        </p>
        <Link to="/contacts">
          <button>Виж повече</button>
        </Link>
      </div>

      <div className="table">
        <table>
          <tbody>
            <tr>
              <td className="table-header">Cell 1</td>
              <td className="table-header">Cell 2</td>
            </tr>
            <tr>
              <td>cell1-1</td>
              <td>cell2-1</td>
            </tr>
            <tr>
              <td>cell1-2</td>
              <td>cell2-2</td>
            </tr>
            <tr>
              <td>cell1-3</td>
              <td>cell2-3</td>
            </tr>
            <tr>
              <td>cell1-4</td>
              <td>cell2-4</td>
            </tr>
            <tr>
              <td>cell1-5</td>
              <td>cell2-5</td>
            </tr>
            <tr>
              <td>cell1-6</td>
              <td>cell2-6</td>
            </tr>
            <tr>
              <td>cell1-6</td>
              <td>cell2-6</td>
            </tr>
            <tr>
              <td>cell1-6</td>
              <td>cell2-6</td>
            </tr>
            <tr>
              <td>cell1-6</td>
              <td>cell2-6</td>
            </tr>
            <tr>
              <td>cell1-6</td>
              <td>cell2-6</td>
            </tr>
            <tr>
              <td>cell1-6</td>
              <td>cell2-6</td>
            </tr>
            <tr>
              <td>cell1-6</td>
              <td>cell2-6</td>
            </tr>
            <tr>
              <td>cell1-6</td>
              <td>cell2-6</td>
            </tr>
            <tr>
              <td>cell1-6</td>
              <td>cell2-6</td>
            </tr>
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
