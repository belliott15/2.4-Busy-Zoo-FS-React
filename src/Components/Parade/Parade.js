import React from 'react';
import MysticalEmoji from '../MysticalEmoji/MysticalEmoji.js';
import './Parade.css';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

export default function Parade({ mysticalCreatures, isOpen, setMysticalCreatures }) {
  function handleFairy(){
    setMysticalCreatures([...mysticalCreatures, 'fairy']);
  }

  function handleDragon(){
    setMysticalCreatures([...mysticalCreatures, 'dragon']);
  }

  function handleMermaid(){
    setMysticalCreatures([...mysticalCreatures, 'mermaid']);
  }

  function handleGenie(){
    setMysticalCreatures([...mysticalCreatures, 'genie']);
  }

  function handleRemoveCreature(){
    mysticalCreatures.shift();
    setMysticalCreatures([...mysticalCreatures]);
  }

  const actions = [
    // {
    //   name: 'Mermaid',
    //   icon: '🧜‍♀️',
    //   tooltipTitle: 'Add Mermaid',
    // },
    {
      name: 'Fairy',
      icon: '🧚<',
      tooltipTitle: 'Add Fairy',
    },
    // {
    //   name: 'Dragon',
    //   icon: '🐉',
    //   tooltipTitle: 'Add Dragon',
    // },
    {
      name: 'Genie',
      icon: '🧞<',
      tooltipTitle: 'Add Genie',
    },
  ];

  return (
    <div className='parade-container'>
      <div className='parade-container'>
        {isOpen && <h2>Creature Parade</h2>}
        
        {isOpen ?
          <div className='parade-buttons'>
            <button onClick={() => handleFairy()}>Fairy</button>
            <button onClick={() => handleDragon()}>Dragon</button>
            <button onClick={() => handleMermaid()}>Mermaid</button>
            <button onClick={() => handleGenie()}>Genie</button>
            <button onClick={() => handleRemoveCreature()}>Remove Creature</button>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: 16, right: 16 }}
              direction='left'
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.name}
                  tooltipTitle={action.tooltipTitle}
                  onClick={'handle' + `${action.name}`}
                />
              ))}
            </SpeedDial>
          </div>
          : ''}
        <div className='creatures'>
          {isOpen ? mysticalCreatures.map((mysticalCreature, i) => <MysticalEmoji key={mysticalCreature + i} mysticalCreature={mysticalCreature} />) : ''}
        </div>
      </div>
    </div>
  );
}
