import React from 'react';
import './App.css';

import {
  isYahtzee,
  isFourOfAKind,
  isFullHouse,
  isThreeOfAKind,
  isSmallStraight,
  isLargeStraight,
  rollDice,
} from './scoring';

class App extends React.Component {

  state = {
    dice: rollDice(),
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
        <span>{ isThreeOfAKind(this.state.dice) ? '3 of a kind' : null }</span>
        <span>{ isSmallStraight(this.state.dice) ? 'Small Straight' : null }</span>
        <span>{ isLargeStraight(this.state.dice) ? 'Large Straight' : null }</span>
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    );
  }
}

export default App;
