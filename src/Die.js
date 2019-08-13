import React from 'react';

const Die = ({ number })=> (
  <svg viewBox='0 0 100 100'>
    {
      number === 1 ? (
        <circle cx={50} cy={50} r={8} fill='black' />
      ) : number === 2 ? (
        <g>
          <circle cx={25} cy={25} r={8} fill='black' />
          <circle cx={75} cy={75} r={8} fill='black' />
        </g>
      ) : number === 3 ? (
        <g>
          <circle cx={25} cy={25} r={8} fill='black' />
          <circle cx={50} cy={50} r={8} fill='black' />
          <circle cx={75} cy={75} r={8} fill='black' />
        </g>
      ) : number === 4 ? (
        <g>
          <circle cx={25} cy={25} r={8} fill='black' />
          <circle cx={25} cy={75} r={8} fill='black' />
          <circle cx={75} cy={25} r={8} fill='black' />
          <circle cx={75} cy={75} r={8} fill='black' />
        </g>
      ) : number === 5 ? (
        <g>
          <circle cx={25} cy={25} r={8} fill='black' />
          <circle cx={25} cy={75} r={8} fill='black' />
          <circle cx={75} cy={25} r={8} fill='black' />
          <circle cx={75} cy={75} r={8} fill='black' />
          <circle cx={50} cy={50} r={8} fill='black' />
        </g>
      ) : number === 6 ? (
        <g>
          <circle cx={25} cy={25} r={8} fill='black' />
          <circle cx={25} cy={75} r={8} fill='black' />
          <circle cx={75} cy={25} r={8} fill='black' />
          <circle cx={75} cy={75} r={8} fill='black' />
          <circle cx={25} cy={50} r={8} fill='black' />
          <circle cx={75} cy={50} r={8} fill='black' />
        </g>
      ) : null
    }

  </svg>
);

export default Die;
