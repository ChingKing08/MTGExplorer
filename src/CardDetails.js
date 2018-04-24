import React from 'react';
import CardText from './CardText';
import CardType from './CardType';
import CardManaCost from './CardManaCost';

class CardDetails extends React.Component {
  render() {
    return (
      <div align="left" valign="top" >
        <h2>{this.props.name} <CardManaCost cost={this.props.cost}/></h2>
        <hr />
        <CardType type={this.props.type} subtype={this.props.subtype} />
        <hr />
        <CardText trigger={this.props.trigger} text={this.props.text} flavortext={this.props.flavortext} />
        <hr />
        <b>{this.props.power}/{this.props.toughness}</b>
      </div>);
  }
}

export default CardDetails;