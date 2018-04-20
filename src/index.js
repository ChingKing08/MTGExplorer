import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Card from './Card';
import Helloworld from './Helloworld';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="MTG Explorer" />
    <Helloworld name="MTG Explorer" />
    <Card 
      name="Charging Monstrosaur" 
      image="https://img.scryfall.com/cards/large/en/xln/138.jpg"
      type="Creature" 
      subtype="Dinosaur"
      text="Trample, haste"
      flavortext="&quot;I knew I should have stayed with the boat. Always stay with the boat!&quot;"
      cost="4R"
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
      cost="2GG"
      power="4"
      toughness="5"
    />
    <Card
      name="Admiral Beckett Brass"
      image="https://img.scryfall.com/cards/large/en/xln/217.jpg"
      type="Legendary Creature"
      subtype="Human Pirate"
      trigger=""
      text="Other Pirates you control get +1/+1.~At the beginning of your end step, gain control of target nonland permanent controlled by a player who was dealt combat damage by three or more Pirates this turn."
      flavortext="&quot;You and your ship will make a fine addition to my fleet.&quot;"
      cost="1UBR"
      power="3"
      toughness="3"
    />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
