import React, { Component } from 'react';
import './css/app.css';
import Trick from "./modules/Trick";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Trick/>
      </div>
    );
  }
}

export default App;
