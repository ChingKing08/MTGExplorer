import React from 'react';

class CardImage extends React.Component {
  render() {
    return (
      <div>
        <img alt={this.props.name} width="250px" src={this.props.image} />
      </div>);
    }
}

export default CardImage;