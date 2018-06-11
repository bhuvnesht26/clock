import React, { Component } from 'react';
import './components/Clock';
import './App.css';
import Clock from './components/Clock';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Clock"><Clock /></div>
      </div>
    );
  }
}

export default App;
