import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import OpenOrClosed from './Components/OpenOrClosed/OpenOrClosed.js';
import { useState } from 'react';
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [chimeraHealth, setChimeraHealth] = useState(10);
  const [griffinHealth, setGriffinHealth] = useState(10);

  return (
    <div className="App">
      <header className="App-header">
        <Header text={'Welcome to Mythical Zoo'} />
      </header>
      <main className='App-main'>
        <OpenOrClosed isOpen={isOpen}/>
        <button onClick={() => setIsOpen(true)}>Open Zoo</button>
        <button onClick={() => setIsOpen(false)}>Close Zoo</button>
        <div className='battle-arena'>
          <div className='monster'>
            <img width={chimeraHealth * 10} src='./chimera.png' />
            <button onClick={() => setChimeraHealth(chimeraHealth + 1)}>Increase Health</button>
            <button onClick={() => setGriffinHealth(griffinHealth - 1)}>Attack</button>
          </div>
          <div className='monster'>
            <img width={griffinHealth * 10} src='./griffin.png' />
            <button onClick={() => setGriffinHealth(griffinHealth + 1)}>Increase Health</button>
            <button onClick={() => setChimeraHealth(chimeraHealth - 1)}>Attack</button>
          </div>
          
        </div>
      </main>
      <footer className='App-footer'>
        <Footer text={'ShowdownZoo@BattleReady.com'}/>
      </footer>
    </div>
  );
}

export default App;
