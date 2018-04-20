import React from 'react';

class CardType extends React.Component {
  render() {
    return (
      <div>
        <b>{this.props.type} - {this.props.subtype}</b>
      </div>);
  }
}

export default CardType;