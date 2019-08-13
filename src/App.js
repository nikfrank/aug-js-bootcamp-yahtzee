import React from 'react';
import './App.css';

import Die from './Die';

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
    held: [ false, false, false, false, false ],
    rollsRemaining: 2,
  }

  roll = ()=> {
    if( this.state.rollsRemaining === 0 ) return;

    const rerolls = this.state.held.filter(die => !die).length;

    const newDice = rollDice( rerolls );

    let nextDice = [];
    for(let i = 0; i < 5; i++){
      if( this.state.held[i] ) nextDice.push( this.state.dice[i] );
      else nextDice.push( newDice.pop() );
    }

    this.setState({
      dice: nextDice,
      rollsRemaining: this.state.rollsRemaining - 1,
    });
  }

  toggleDie = (index)=> {
    const held = this.state.held;
    held[index] = !held[index];

    this.setState({ held });
  }

  render() {
    return (
      <div className="App">
        <div className='game-container'>
          <div className='dice-container'>

            <div className={this.state.held[0] ? 'held' : ''}
                 onClick={()=> this.toggleDie(0)}>
              <Die number={this.state.dice[0]} />
            </div>

            <div className={this.state.held[1] ? 'held' : ''}
                 onClick={()=> this.toggleDie(1)}>
              <Die number={this.state.dice[1]} />
            </div>

            <div className={this.state.held[2] ? 'held' : ''}
                 onClick={()=> this.toggleDie(2)}>
              <Die number={this.state.dice[2]} />
            </div>

            <div className={this.state.held[3] ? 'held' : ''}
                 onClick={()=> this.toggleDie(3)}>
              <Die number={this.state.dice[3]} />
            </div>

            <div className={this.state.held[4] ? 'held' : ''}
                 onClick={()=> this.toggleDie(4)}>
              <Die number={this.state.dice[4]} />
            </div>
          </div>

          <button onClick={this.roll}>Roll Dice</button>

          <div className='scorecard'>
            <span>{ isYahtzee(this.state.dice) ? 'Yahtzee' : null }</span>
            <span>{ isFourOfAKind(this.state.dice) ? '4 of a kind' : null }</span>
            <span>{ isFullHouse(this.state.dice) ? 'Full House' : null }</span>
            <span>{ isThreeOfAKind(this.state.dice) ? '3 of a kind' : null }</span>
            <span>{ isSmallStraight(this.state.dice) ? 'Small Straight' : null }</span>
            <span>{ isLargeStraight(this.state.dice) ? 'Large Straight' : null }</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
