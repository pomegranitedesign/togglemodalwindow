import React, { Component, Fragment } from 'react';

import Toggle from './Components/Toggle/Toggle';
import Modal from './Components/Modal/Modal';
import logo from './logo.svg';
import assignedClass from './App.css';

class App extends Component {
  state = {}

  render() {
    const { toggle } = this.props;

    return (
      <div className={assignedClass.App}>
        <header className={assignedClass.AppHeader}>
          <img src={logo} className={assignedClass.AppLogo} alt="logo" />
          <div>
            <h1 className={assignedClass.AppTitle}>Toggle - Modal</h1>
          </div>

          <Toggle
            className={assignedClass.Toggle}
          >
            {({on, toggle}) => (
              <Fragment>
                {on ? 
                  <Modal 
                    toggle={toggle} 
                    on={on}
                  /> : 
                  <button 
                    onClick={toggle}
                    className={assignedClass.ToggleButton}
                  >
                    Read More
                  </button>
                }
              </Fragment>
            )}
          </Toggle>
        </header>

      </div>
    );
  }
}

export default App;
