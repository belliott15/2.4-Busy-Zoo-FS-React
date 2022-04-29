import React from 'react';
import './BattleArena.css';

export default function BattleArena({ chimeraHealth, setChimeraHealth, griffinHealth, setGriffinHealth, isOpen }) {
  return (
    <div>
      {isOpen ? <h1>Welcome to Mythical Zoo</h1> : <h1>Come back when you are ready to believe</h1>}
      {isOpen ?
        <div className='battle-arena' >
          <div className='monster'>
            <img width={chimeraHealth * 11} src='./chimera.png' />
            <button onClick={() => setChimeraHealth(chimeraHealth + 1)}>Increase Health</button>
            <button onClick={() => setGriffinHealth(griffinHealth - 1)}>Attack</button>
          </div>
          <img className='vsImage' src='./vsImage.png' />
          <div className='monster'>
            <img width={griffinHealth * 11} src='./griffin.png' />
            <button onClick={() => setGriffinHealth(griffinHealth + 1)}>Increase Health</button>
            <button onClick={() => setChimeraHealth(chimeraHealth - 1)}>Attack</button>
          </div>
        </div>
        : ''}
    </div>
  );
}
