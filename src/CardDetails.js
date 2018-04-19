import React from 'react';
import CardText from './CardText';
import CardType from './CardType';

export default ({ name, type, subtype, trigger, text, flavortext, cost, power, toughness }) => 
  <div align="left" valign="top" >
        <h2>{name}  {cost}</h2> 
        <hr />
        <CardType type={type} subtype={subtype} />
        <hr />
        <CardText trigger={trigger} text={text} flavortext={flavortext} />
        <hr />
        <b>{power}/{toughness}</b>
</div>;