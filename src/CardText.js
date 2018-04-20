import React from 'react';

class CardText extends React.Component {
  render() {
    var text = this.props.text;

    return (
      <div>
        {text.split("~").map(i => {
          return <p><i>{this.props.trigger}</i>{i}</p>;
        })}
        <p><i>{this.props.flavortext}</i></p>
      </div>);
  }
}

export default CardText;