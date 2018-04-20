import React from 'react';
import CardImage from './CardImage';
import CardDetails from './CardDetails';

class Card extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <table><tr><td>
          <CardImage name={this.props.name} image={this.props.image} />
        </td><td align="left" valign="top">
            <CardDetails name={this.props.name} type={this.props.type} subtype={this.props.subtype} trigger={this.props.trigger} text={this.props.text} flavortext={this.props.flavortext} cost={this.props.cost} power={this.props.power} toughness={this.props.toughness} />
          </td></tr></table>
      </div>);
  }
}

export default Card;