import React from 'react';

class CardManaCost extends React.Component {
  render() {

    return (
      <div>
        {this._convertManaCost()}
        <img width="25px" src="https://vignette.wikia.nocookie.net/mtg/images/d/da/Mana_W.png/revision/latest?cb=20130604114009" />
        <img width="25px" src="https://vignette.wikia.nocookie.net/mtg/images/a/a8/Mana_U.png/revision/latest?cb=20130604114015" />
        <img width="25px" src="https://vignette.wikia.nocookie.net/mtg/images/a/a6/Mana_B.png/revision/latest?cb=20130604114019" />
        <img width="25px" src="https://vignette.wikia.nocookie.net/mtg/images/c/ce/Mana_R.png/revision/latest?cb=20130604114022" />
        <img width="25px" src="https://vignette.wikia.nocookie.net/mtg/images/f/f7/Mana_G.png/revision/latest?cb=20130604114032" />
      </div>);
  }

  _convertManaCost() {
    var text = "1UBR";
    
    text = text.replace('W', '~W~');
    text = text.replace('U', '~U~');
    text = text.replace('B', '~B~');
    text = text.replace('R', '~R~');
    text = text.replace('G', '~G~');


    return <div>{text}</div>
  }

}

export default CardManaCost;