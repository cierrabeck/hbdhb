import './App.css';
import StartScreen from './pages/StartScreen'
import GameScreen from './pages/GameScreen'
import SignUp from './pages/SignUp'

function getAppState() {
  if (true) {
    return <StartScreen/>
  }
  else if (false) {
    return <GameScreen/>
  }
  else if (false) {
    return <SignUp/>
  }

}

function App() {
  return (
    <div className="App">
      {getAppState()}
    </div>
  );
}

export default App;
