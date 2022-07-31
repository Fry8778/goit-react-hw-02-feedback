import React from 'react';

const Controls = ({ onGood, onNeutral, onBad }) => (
  <div>
    <button onClick={onGood}>Good</button>
    <button onClick={onNeutral}>Neutral</button>
    <button onClick={onBad}>Bad</button>
  </div>
);

export default Controls;