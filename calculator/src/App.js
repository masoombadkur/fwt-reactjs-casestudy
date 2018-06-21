import React, { Component } from 'react';
import './App.css';

import Calculator from './components/calculator';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Calculator />
      </div>
    );
  }
}

export default App;
