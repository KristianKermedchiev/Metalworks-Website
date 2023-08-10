import React from 'react';

function Section({ title, content }) {
  return (
    <section className="section">
      <div className="container">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
}

export default Section;