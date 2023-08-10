import React from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import Section from './Components/Section';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Section
        title="Welcome to My Website"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit."
      />
      <Section
        title="About Us"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit."
      />
      <Section
        title="Our Services"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit."
      />
      <Section
        title="Contact Us"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit."
      />
    </AppContainer>
  );
}

export default App;
