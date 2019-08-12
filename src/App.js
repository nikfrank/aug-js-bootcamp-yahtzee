import React from 'react';
import './App.css';

import {
  isYahtzee,
  isFourOfAKind,
  isFullHouse,
  rollDice,
} from './scoring';

class App extends React.Component {

  state = {
    dice: [1, 1, 1, 2, 2], //rollDice(),
  }

  roll = ()=> {
    this.setState({
      dice: rollDice(),
    });
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.dice[0]}</div>
        <div>{this.state.dice[1]}</div>
        <div>{this.state.dice[2]}</div>
        <div>{this.state.dice[3]}</div>
        <div>{this.state.dice[4]}</div>
        <span>{ isYahtzee(this.state.dice) ? 'Yahtzee' : null }</span>
        <span>{ isFourOfAKind(this.state.dice) ? '4 of a kind' : null }</span>
        <span>{ isFullHouse(this.state.dice) ? 'Full House' : null }</span>
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    );
  }
}

export default App;
