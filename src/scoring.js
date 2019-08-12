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



const depIsFourOfAKind = (dice)=> {
  let diffs = 0;

  for(let i = 0; i < (dice.length); i++){
    if( dice[i] !== dice[0] ){
      diffs++;
    }
  }

  if( diffs <= 1 ) return true;

  diffs = 0;

  for(let i = 0; i < (dice.length); i++){
    if( dice[i] !== dice[1] ){
      diffs++;
    }
  }

  if( diffs <= 1 ) return true;

  return false;
};

export const rollDice = ()=> {
  const dice = [];

  for(let i=0; i<5; i++){
    dice.push( Math.ceil( Math.random() * 6 ) );
  }

  return dice;
};
