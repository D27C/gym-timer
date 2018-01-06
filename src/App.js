import React, { Component } from 'react';
import './App.css';

let time = 60;


const startTimer = () => {
  time = time - 1;
  console.log({time});
}

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gym Timer</h1>
          <p className="timerStyle">{time}</p>
        </header>
        <p className="App-intro">
          How many second should be a timer?
          <input type="text" name="time" value={time} />
        </p>
        <p>
          <input onClick={startTimer()} className="button" type="button" name="start" value="START" />
          <input className="button" type="button" name="stop" value="STOP" />
        </p>
      </div>
    );
  }
}

export default App;
