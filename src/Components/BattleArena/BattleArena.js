import React from 'react';
import './BattleArena.css';

export default function BattleArena({ chimeraHealth, setChimeraHealth, griffinHealth, setGriffinHealth, isOpen }) {
  return (
    <div>
      {isOpen ? <h1>Welcome to Mythical Zoo</h1> : <h1>Come back when you are ready to believe</h1>}
      {isOpen ?
        <div className='battle-arena' >
          <div className='monster'>
            <img width={chimeraHealth * 12} src='./chimera.png' />
            <div className='button-container'>
              <button onClick={() => {chimeraHealth < 22 ? setChimeraHealth(chimeraHealth + 1) : setChimeraHealth(chimeraHealth + 0);}}>Increase Health</button>
              <button onClick={() => {griffinHealth > 3 ? setGriffinHealth(griffinHealth - 1) : setGriffinHealth(griffinHealth - 0);}}>Attack</button>
            </div>
          </div>
          <img className='vsImage' src='./vsImage.png' />
          <div className='monster'>
            <img width={griffinHealth * 12} src='./griffin.png' />
            <div className='button-container'>
              <button onClick={() => {griffinHealth < 21 ? setGriffinHealth(griffinHealth + 1) : setGriffinHealth(griffinHealth + 0); }}>Increase Health</button>
              <button onClick={() => {chimeraHealth > 3 ? setChimeraHealth(chimeraHealth - 1) : setChimeraHealth(chimeraHealth - 0);}}>Attack</button>
            </div>
          </div>
        </div>
        : ''}
    </div>
  );
}
