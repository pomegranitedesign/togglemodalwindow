import React, { Component, Fragment } from 'react';

import Toggle from './Components/Toggle/Toggle';
import Modal from './Components/Modal/Modal';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}

  render() {
    const { toggle } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1 className="App-title">Toggle - Modal</h1>
            <span className="ScrollDown">Scroll Down</span>
          </div>
          
          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                {on ? <Modal /> : <button onClick={toggle}>Read More</button>}
              </Fragment>
            )}
          </Toggle>
        </header>

      </div>
    );
  }
}

export default App;
