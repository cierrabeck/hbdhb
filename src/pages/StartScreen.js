import card from '../assets/card.png';
import './StartScreen.css';
import Header from '../components/Header'

function StartScreen() {
  return (
    <div className="startScreen">
        <Header/>
        <h1> The Bala Hailey birthday game </h1> 
        <img src={card} className="card" alt="card" />
        <p className="rule-header">
            How to play:
        </p>
        <ol className="rules">
            <li> Have a drink ready! The game - or Hala - will tell you when to drink </li>
            <li> “One drink” means a solid 1 second sip </li>
            <li> If you aren’t drinking, “one drink” means 10 exercises (jumping jacks, push ups, sit ups, or Hala's favorite hip thrusters) </li>
        </ol>
    </div>
  );
}

export default StartScreen;
