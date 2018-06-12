import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <div>
            <header>
              <h1 className="App-title">moodmap</h1>
            </header>
            <p className="App-intro">
                Web Application in React that maps the moods of various locations around the world based off of news for that location.

                Made By: John Stoermer and Yatharth Rawat
            </p>
          </div>
      </div>
    );
  }
}

export default App;
