import React, { Component, Fragment } from 'react';

import Toggle from './Components/Toggle/Toggle';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1 className="App-title">Toggle - Modal</h1>
            <span className="ScrollDown">Scroll Down</span>
          </div>
        </header>


        
      </div>
    );
  }
}

export default App;
