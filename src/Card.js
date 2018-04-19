import React from 'react';
import CardImage from './CardImage';
import CardDetails from './CardDetails';

export default ({ name, image, type, subtype, trigger, text, flavortext, power, toughness }) => <div> 
                              <hr />
                              <table><tr><td>
                              <CardImage name={name} image={image} />
                              </td><td align="left" valign="top">
                              <CardDetails name={name} type={type} subtype={subtype} trigger={trigger} text={text} flavortext={flavortext} power={power} toughness={toughness} />
                              </td></tr></table> 
                              </div>;