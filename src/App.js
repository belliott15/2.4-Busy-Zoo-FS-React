
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header text={'Welcome to Showdown Zoo'} />
      </header>
      <main className='App-main'>
      </main>
      <footer className='App-footer'>
        <Footer text={'ShowdownZoo@BattleReady.com'}/>
      </footer>
    </div>
  );
}

export default App;
