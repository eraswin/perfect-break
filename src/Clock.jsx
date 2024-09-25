import React, { useState, useEffect } from 'react';

function Clock({ study, gap, pomodoro, setStudy, setGap, setPomodoro }) {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('study'); // 'study', 'gap', or 'pomodoro'

  useEffect(() => {
    let timerID;
    if (isActive) {
      timerID = setInterval(() => {
        if (mode === 'study') {
          setSecondsElapsed((prevSeconds) => prevSeconds + 1);
        } else if (mode === 'gap') {
          if (gap > 0) {
            setGap(gap - 1/60); // Reduce the gap time in minutes
          } else {
            setMode('pomodoro');
          }
        } else if (mode === 'pomodoro') {
          if (pomodoro > 0) {
            setPomodoro(pomodoro - 1/60); // Reduce the pomodoro time in minutes
          } else {
            setIsActive(false); // Stop when Pomodoro finishes
          }
        }
      }, 1000);
    }

    return () => clearInterval(timerID);
  }, [isActive, mode, gap, pomodoro]);

  // Calculate minutes and seconds
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;

  const handleStartStudy = () => {
    setIsActive(true);
    setMode('study');
  };

  const handleStartBreak = () => {
    setIsActive(true);
    setStudy((prevStudy) => prevStudy + minutes); // Add the study minutes before switching
    setSecondsElapsed(0);
    setGap((prevGap) => prevGap + minutes/5); // Add the gap minutes before switching
    setPomodoro((prevPomo) => prevPomo + minutes/5); // Add the gap minutes before switching
    setMode('gap');
  };

  return (
    <div>
      <h2>Timer:</h2>
      <p>
        {mode === 'study' ? (
          <>
            {minutes} minutes {seconds < 10 ? `0${seconds}` : seconds} seconds
          </>
        ) : mode === 'gap' ? (
          <>
            {Math.floor(gap)} minutes {Math.floor((gap % 1) * 60)} seconds
          </>
        ) : (
          <>
            {Math.floor(pomodoro)} minutes {Math.floor((pomodoro % 1) * 60)} seconds
          </>
        )}
      </p>
      <button onClick={handleStartStudy}>
        Study
      </button>
      <button onClick={handleStartBreak}>
        Break
      </button>
    </div>
  );
}

export default Clock;
