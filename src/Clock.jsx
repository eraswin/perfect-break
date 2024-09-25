import React, { useState, useEffect } from 'react';

function Clock({ setStudy, setGap, setPomodoro }) {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timerID;
    if (isActive) {
      timerID = setInterval(() => {
        setSecondsElapsed((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Cleanup the interval on component unmount or when the timer stops
    return () => clearInterval(timerID);
  }, [isActive]);

  // Calculate minutes and seconds
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;

  const handleStart = () => {
    setIsActive(true);
  };

  const handleGap = () => {
    setIsActive(false);
    setStudy((prevStudy) => prevStudy + minutes);
    setSecondsElapsed(0);
    setGap((prevGap) => prevGap + minutes/5);
    setPomodoro((prevPomo) => prevPomo + minutes/5);    
  }

  return (
    <div>
      <h2>Timer:</h2>
      <p>
        {minutes} minutes {seconds < 10 ? `0${seconds}` : seconds} seconds
      </p>
        <button onClick={handleStart}>
          Study
        </button>
        <button onClick={handleGap}>
          Break
        </button>
    </div>
  );
}

export default Clock;
