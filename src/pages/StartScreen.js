import card from '../assets/card.png';
import './StartScreen.css';

function StartScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={card} className="App-logo" alt="logo" />
        <p className="rules">
          The rules
        </p>
      </header>
    </div>
  );
}

export default StartScreen;
