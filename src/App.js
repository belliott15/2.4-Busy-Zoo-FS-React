import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import OpenOrClosed from './Components/OpenOrClosed/OpenOrClosed.js';
import Parade from './Components/Parade/Parade.js';
import { useState } from 'react';
import './App.css';
import BattleArena from './Components/BattleArena/BattleArena.js';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [chimeraHealth, setChimeraHealth] = useState(10);
  const [griffinHealth, setGriffinHealth] = useState(10);
  const [mysticalCreatures, setMysticalCreatures] = useState(['mermaid']);


  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='App-main'>
        <div className='OpenOrClosed'>
          <OpenOrClosed isOpen={isOpen}/>
          <button onClick={() => setIsOpen(true)}>Open Zoo</button>
          <button onClick={() => setIsOpen(false)}>Close Zoo</button>
        </div>
        <BattleArena chimeraHealth={chimeraHealth} setChimeraHealth={setChimeraHealth} griffinHealth={griffinHealth} setGriffinHealth={setGriffinHealth} isOpen={isOpen}/>
        <Parade mysticalCreatures={mysticalCreatures} setMysticalCreatures={setMysticalCreatures} isOpen={isOpen}/>
      </main>
      <footer className='App-footer'>
        <Footer text={'ShowdownZoo@BattleReady.com'}/>
      </footer>
    </div>
  );
}

export default App;
