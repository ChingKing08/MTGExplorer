import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Card from './Card';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <Card 
      name="Charging Monstrosaur" 
      image="https://img.scryfall.com/cards/large/en/xln/138.jpg"
      type="Creature" 
      subtype="Dinosaur"
      text="Trample, haste"
      flavortext="&quot;I knew I should have stayed with the boat. Always stay with the boat!&quot;"
      power="5"
      toughness="5"
     />
    <Card
      name="Ripjaw Raptor"
      image="https://img.scryfall.com/cards/large/en/xln/203.jpg"
      type="Creature"
      subtype="Dinosaur"
      trigger="Enrage"
      text=" - Whenever Ripjaw Raptor is dealt damage, draw a card."
      flavortext="Raptors are clever enough to tear away a hard metal shell to get at the tasty morsel inside."
      power="4"
      toughness="5"
    />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
