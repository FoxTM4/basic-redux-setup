import React, { Component } from 'react';
import './App.css';
import TextContainer from './components/textContainer/TextContainer';

class App extends Component {
  render() {
    return (
      <div className="app--component">
        <h3>App</h3> 
        <hr/>
        <TextContainer/>
      </div>
    );
  }
}

export default App;
