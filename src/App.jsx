import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Calculator from './components/calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default hot(module)(App);
