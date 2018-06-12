import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
      document.title = "moodmap";
      return (
      <div>
          <div>
              <h1>moodmap</h1>
              <p>Web Application in React that maps the moods of various locations around the world based off of news for that location.</p>
              <p>Made By: John Stoermer and Yatharth Rawat</p>
          </div>
      </div>
      );
  }
}

export default App;
