const countDice = (dice)=> {
  let counts = [];

  for(let i = 1; i <= 6; i++){
    let counter = 0;
    for(let d = 0; d < (dice.length); d++){
      if( dice[d] === i ) counter++;
    }
    counts.push( counter );
  }

  return counts;
};


export const isYahtzee = (dice)=> {
  for(let i = 1; i < (dice.length); i++){
    if( dice[i] !== dice[0] ) return false;
  }
  return true;
};

export const isFourOfAKind = (dice)=> {
  const counts = countDice( dice );

  for(let i = 0; i < (counts.length); i++){
    if( counts[i] >= 4 ) return true;
  }

  return false;
};

export const isFullHouse = (dice)=> {
  const counts = countDice( dice );

  return ( counts.includes(2) && counts.includes(3) );
};

export const isThreeOfAKind = (dice)=> {
  const counts = countDice( dice );

  for(let i = 0; i < (counts.length); i++){
    if( counts[i] >= 3 ) return true;
  }

  return false;
};


let person = { name: 'nik', age: undefined };

const { name, age, anything } = person;

const displayPerson = ({ name, age })=> (name+' is '+age+' years old');
displayPerson(person);

export const isSmallStraight = (dice)=> {
  const uniqueSortedDice = Array.from( new Set(dice.sort()) );
  let combo = 0;

  for(let i = 0; i < (uniqueSortedDice.length - 1); i++){
    if( uniqueSortedDice[i] === uniqueSortedDice[i+1] -1 ) combo++;
    else combo = 0;

    if( combo === 3 ) return true;
  }
  return false;
};

export const isLargeStraight = (dice)=> {
  const sortedDice = dice.sort();

  for(let i = 0; i < (sortedDice.length - 1); i++){
    if( sortedDice[i] !== sortedDice[i+1] -1 ) return false;
  }
  return true;
};


export const rollDice = ()=> {
  const dice = [];

  for(let i=0; i<5; i++){
    dice.push( Math.ceil( Math.random() * 6 ) );
  }

  return dice;
};
