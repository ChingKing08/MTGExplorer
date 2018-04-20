import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import CardBox from './CardBox';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="MTG Explorer" />
    <CardBox />
  </div>
);

render(<App />, document.getElementById('root'));
