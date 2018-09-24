import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          destination="Tokyo"
          country="Japan"
          photo="https://cdn.cnn.com/cnnnext/dam/assets/170606121226-japan---travel-destination---shutterstock-230107657.jpg"  
          distance="9 706 km"
        />
        <Travel
          destination="Innsbruk"
          country="Austria"
          photo="https://c1.staticflickr.com/5/4077/4931449327_9407692780_b.jpg"  
          distance="757 km"
        />
      </div>
    );
  }
}

export default App;