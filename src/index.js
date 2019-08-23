import React from 'react';
import { render } from 'react-dom';
import Result from './App';

const App = () => (
  <div>
    <Result/>
  </div>
);

render(<App />, document.getElementById('root'));