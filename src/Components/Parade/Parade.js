import React from 'react';
import MysticalEmoji from '../MysticalEmoji/MysticalEmoji.js';
import './Parade.css';

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
  return (
    <div className='parade-container'>
      <div className='parade-container'>
        {isOpen && <h2>Creature Parade</h2>}
        <div className='creatures'>
          {isOpen ? mysticalCreatures.map((mysticalCreature, i) => <MysticalEmoji key={mysticalCreature + i} mysticalCreature={mysticalCreature} />) : ''}
        </div>
        {isOpen ?
          <div className='parade-buttons'>
            <button onClick={() => handleFairy()}>Fairy</button>
            <button onClick={() => handleDragon()}>Dragon</button>
            <button onClick={() => handleMermaid()}>Mermaid</button>
            <button onClick={() => handleGenie()}>Genie</button>
            <button onClick={() => handleRemoveCreature()}>Remove Creature</button>
          </div>
          : ''}
      </div>
    </div>
  );
}
