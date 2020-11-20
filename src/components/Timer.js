import React, { useState, useEffect } from 'react';

function Timer(props) {
  const [seconds, setSeconds] = useState(props.countdownTime);

  useEffect(() => {
    console.log('hi')
    let interval = null;
    if (seconds > 0) {
          interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    }
    else {
      props.showAnswer()
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
      <div className="timer" style={timerStyle}>
        {seconds}s
      </div>
  );
};

export default Timer;

const timerStyle = {
  background: '#FCEEC2',
  border: '9px solid #EBCC68',
  fontFamily: 'KeeponTruckin',
  fontSize: '55px',
  color: '#EBCC68'
}