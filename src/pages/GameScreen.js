import small_card from '../assets/small_card.png';
import './GameScreen.css';
import Header from '../components/Header'
import Timer from '../components/Timer'
import Next from '../components/Next'
import OptionCard from '../components/OptionCard'
import Questions from '../assets/questions.json'
import React, { useState } from 'react';

function GameScreen() {
    const question = Questions[0]

    const [answer, setAnswer] = useState(null);

    function getRule() {
        if (question['type']==='option') return 'Get the question wrong, take one drink. If everyone gets it right, Hala finishes her drink'
        if (question['type']==='open') return 'Hala picks her favorite response, winner gives out 5 drinks'
        if (question['type']==='rule') return question['rule']
        if (question['type']==='photo') return 'Hala picks her favorite caption, winner gives out 5 drinks. Hala takes 1 drink for every person who correctly identifies photo location'
    }

    function getCard() {
        if (question['type']==='option') return <OptionCard question={question}/>
        if (question['type']==='open') return <OptionCard question={question}/>
        if (question['type']==='rule') return <OptionCard question={question}/>
        if (question['type']==='photo') return <OptionCard question={question}/>
    }

    function getTime() {
        if (question['type']==='option') return 1
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
            <div className="content">
                <img src={small_card} className="smallCard" alt="card" />
                {getCard()}
                {button}
            </div>

            <h1> {getRule()} </h1>
            <h1> {answer} </h1>
        </div>
      );
}

export default GameScreen;
