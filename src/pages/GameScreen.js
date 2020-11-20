import small_card from '../assets/small_card.png';
import blank_card from '../assets/blank_card.png';
import './GameScreen.css';
import Header from '../components/Header'
import Timer from '../components/Timer'
import Next from '../components/Next'
import Questions from '../assets/questions.json'
import React, { useState } from 'react';

function GameScreen() {
    const question = Questions[0]

    const [answer, setAnswer] = useState(null);

    function getRule() {
        if (question['type']==='option') return 'Get the question wrong, take one drink. If everyone gets it right, Hala finishes her drink'
        if (question['type']==='rule') return 'Hala picks her favorite response, winner gives out 5 drinks'
        if (question['type']==='open') return ''
    }

    function getTime() {
        if (question['type']==='option') return 2
        if (question['type']==='rule') return 30
        if (question['type']==='open') return 60
    }

    function showAnswer() {
        setAnswer(question['answer'])
    }
    let button;
    if (answer === null) {
        button = <Timer countdownTime={getTime()} showAnswer={showAnswer}/>;
      } else {
        button = <Next/>;
      }

    return (
        <div className="startScreen">
            <Header/>
            <img src={small_card} className="small_card" alt="card" />
            <img src={blank_card} className="card" alt="card" />
            {button}
            <h1> {getRule()} </h1>
            <h1> {answer} </h1>
        </div>
      );
}

export default GameScreen;
