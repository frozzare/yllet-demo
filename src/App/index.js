import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from '../Router';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
          <h1 className="App-title">WordPress - Yllet demo</h1>
        </header>
        <div>
            <Router />
        </div>
      </div>
    );
  }
}

export default App;
