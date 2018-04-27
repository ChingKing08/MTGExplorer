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
    text = text.replace(/1/g, "~1~");
    text = text.replace(/2/g, "~2~");
    text = text.replace(/3/g, "~3~");
    text = text.replace(/4/g, "~4~");

    text = text.replace(
      /~W~/g,
      '<img width="25px" src="https://raw.githubusercontent.com/scryfall/manamoji-slack/master/emojis/mana-w.png />'
    );
    text = text.replace(
      /~U~/g,
      '<img width="25px" src="https://raw.githubusercontent.com/scryfall/manamoji-slack/master/emojis/mana-u.png" />'
    );
    text = text.replace(
      /~B~/g,
      '<img width="25px" src="https://raw.githubusercontent.com/scryfall/manamoji-slack/master/emojis/mana-b.png" />'
    );
    text = text.replace(
      /~R~/g,
      '<img width="25px" src="https://raw.githubusercontent.com/scryfall/manamoji-slack/master/emojis/mana-r.png" />'
    );
    text = text.replace(
      /~G~/g,
      '<img width="25px" src="https://raw.githubusercontent.com/scryfall/manamoji-slack/master/emojis/mana-g.png" />'
    );
    text = text.replace(
      /~1~/g,
      '<img width="25px" src="https://raw.githubusercontent.com/scryfall/manamoji-slack/master/emojis/mana-1.png" />'
    );
    text = text.replace(
      /~2~/g,
      '<img width="25px" src="https://raw.githubusercontent.com/scryfall/manamoji-slack/master/emojis/mana-2.png" />'
    );
    text = text.replace(
      /~3~/g,
      '<img width="25px" src="https://raw.githubusercontent.com/scryfall/manamoji-slack/master/emojis/mana-3.png" />'
    );
    text = text.replace(
      /~4~/g,
      '<img width="25px" src="https://raw.githubusercontent.com/scryfall/manamoji-slack/master/emojis/mana-4.png" />'
    );

    return (
      <div className="CardManaCost" dangerouslySetInnerHTML={{ __html: text }} />
    );
  }
}

export default CardManaCost;
