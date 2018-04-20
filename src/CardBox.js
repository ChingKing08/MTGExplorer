import React from 'react';
import Card from './Card';

class CardBox extends React.Component {
  render() {
    const cards = this._getCards();
    return <div>
      {cards}
    </div>
  }

  _getCards() {
    const cardList = [
      { id: 1, name: 'Admiral Beckett Brass', image: 'https://img.scryfall.com/cards/large/en/xln/217.jpg', type: 'Legendary Creature', subtype: 'Human Pirate', trigger: '', text: 'Other Pirates you control get +1/+1.~At the beginning of your end step, gain control of target nonland permanent controlled by a player who was dealt combat damage by three or more Pirates this turn.', flavortext:'"You and your ship will make a fine addition to my fleet."', cost:'1UBR', power:'3', toughness:'3'},
      { id: 2, name: 'Charging Monstrosaur', image: 'https://img.scryfall.com/cards/large/en/xln/138.jpg', type: 'Creature', subtype: 'Dinosaur', trigger: '', text: 'Trample, haste', flavortext: '"I knew I should have stayed with the boat. Always stay with the boat!"', cost: '4R', power: '5', toughness: '5' },
      { id: 3, name: 'Ripjaw Raptor', image: 'https://img.scryfall.com/cards/large/en/xln/203.jpg', type: 'Creature', subtype: 'Dinosaur', trigger: 'Enrage', text: ' - Whenever Ripjaw Raptor is dealt damage, draw a card.', flavortext: 'Raptors are clever enough to tear away a hard metal shell to get at the tasty morsel inside.', cost: '2GG', power: '4', toughness: '5' }
    ]

    return cardList.map((card) => {
      return (<Card
        name={card.name}
        image={card.image}
        type={card.type}
        subtype={card.subtype}
        trigger={card.trigger}
        text={card.text}
        flavortext={card.flavortext}
        cost={card.cost}
        power={card.power}
        toughness={card.toughness}
        key={card.id} />
      );
    });
  }
}

export default CardBox;