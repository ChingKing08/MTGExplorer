import React from 'react'; // get the React object from the react module

class HelloWorld extends React.Component {
  render() {
    return <p>Hello {this.props.name}, world!</p>;
  }
}
export default HelloWorld; // expose the HelloWorld component to other modules