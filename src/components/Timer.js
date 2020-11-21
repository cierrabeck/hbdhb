import React, { useState, useEffect } from 'react';

function Timer(props) {
  const [seconds, setSeconds] = useState(props.countdownTime);

  useEffect(() => {
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
        <div style={textStyle}> {seconds}s </div>
      </div>
  );
};

export default Timer;

const timerStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: '#FCEEC2',
  border: '9px solid #EBCC68',
  fontFamily: 'KeeponTruckin',
  fontSize: '55px',
  color: '#EBCC68',
  justifyContent: 'center',
}

const textStyle = {
  paddingTop: '20px',
}