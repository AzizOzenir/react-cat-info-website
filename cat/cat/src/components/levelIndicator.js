import React from 'react';

const LevelIndicator = ({ level ,characteristic}) => {
  const totalLevels = 5;
  const renderedLevels = Math.min(level, totalLevels);

  const squares = [];
  for (let i = 0; i < renderedLevels; i++) {
    squares.push(
      <div
        key={i}
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'lightgreen',
          margin: '5px',
        }}
      ></div>
    );
  }

  const transparentBoxes = [];
  for (let i = renderedLevels; i < totalLevels; i++) {
    transparentBoxes.push(
      <div
        key={i}
        style={{
          width: '20px',
          height: '20px',
          border: '5px solid lightgreen',
          margin: '5px',
          backgroundColor: 'lightgreen',
          opacity: '0.2',
        }}
      ></div>
    );
  }

  return <div style={{ display: 'flex' }}> <h3 style={{ marginRight:"5px" }}> ◍ </h3>   <h3>{characteristic+" : "}</h3>{squares.concat(transparentBoxes)}</div>;
};

export default LevelIndicator;