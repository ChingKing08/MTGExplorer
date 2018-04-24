import React from "react";

class CardManaCost extends React.Component {
  render() {
    return <div>{this._convertManaCost()}</div>;
  }

  _convertManaCost() {
    var text = `${this.props.cost}`;

    text = text.replace(/W/g, "~W~");
    text = text.replace(/U/g, "~U~");
    text = text.replace(/B/g, "~B~");
    text = text.replace(/R/g, "~R~");
    text = text.replace(/G/g, "~G~");

    text = text.replace(
      /~W~/g,
      '<img width="25px" src="https://vignette.wikia.nocookie.net/mtg/images/d/da/Mana_W.png/revision/latest?cb=20130604114009" />'
    );
    text = text.replace(
      /~U~/g,
      '<img width="25px" src="https://vignette.wikia.nocookie.net/mtg/images/a/a8/Mana_U.png/revision/latest?cb=20130604114015" />'
    );
    text = text.replace(
      /~B~/g,
      '<img width="25px" src="https://vignette.wikia.nocookie.net/mtg/images/a/a6/Mana_B.png/revision/latest?cb=20130604114019" />'
    );
    text = text.replace(
      /~R~/g,
      '<img width="25px" src="https://vignette.wikia.nocookie.net/mtg/images/c/ce/Mana_R.png/revision/latest?cb=20130604114022" />'
    );
    text = text.replace(
      /~G~/g,
      '<img width="25px" src="https://vignette.wikia.nocookie.net/mtg/images/f/f7/Mana_G.png/revision/latest?cb=20130604114032" />'
    );

    return (
      <div className="CardManaCost" dangerouslySetInnerHTML={{ __html: text }} />
    );
  }
}

export default CardManaCost;
