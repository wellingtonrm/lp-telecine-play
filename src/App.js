import React, { Component } from 'react';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop'
import './assets/css/App.css';
import './assets/bootstrap/css/bootstrap.css';
import './assets/fontawesome/css/all.css';


class App extends Component {
  render() {
    return (
      <div id="App">
        <Desktop />
        <Mobile />
      </div >
    );
  }
}

export default App;

