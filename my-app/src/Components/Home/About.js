import React from 'react';
import '../../Styles/About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="Main-body">
      <h2>За нас</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
        sit amet quam vitae faucibus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer viverra sagittis lectus, et mollis nisl
        imperdiet nec. Nam faucibus varius odio, sit amet hendrerit metus
        aliquet non. Sed fermentum tellus sit amet ligula fermentum, a euismod
        nisl imperdiet.
      </p>
      <Link to="/about">
        <button>Виж повече</button>
      </Link>
    </section>
  );
}

export default About;
