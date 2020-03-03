import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from'./Login';

class App extends Component {
  render() {
    const temp="Welcome React";
    return (
      <div className="App">
        <div className="App-header">
          <div>Hello</div>
          <div>world</div>
      <Login demotemp = {temp}/>
    
      </div>
      </div>
    );
  }
}

export default App;
