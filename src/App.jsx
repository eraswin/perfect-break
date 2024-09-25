import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Clock from './Clock';

function App() {
  const [study, setStudy] = useState(0);
  const [gap, setGap] = useState(0);  // Initial gap is 5 minutes
  const [pomodoro, setPomodoro] = useState(0); // Initial Pomodoro break is 10 minutes

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Perfect Break</h1>
      <div className="card">
        <Clock
          study={study}
          gap={gap}
          pomodoro={pomodoro}
          setStudy={setStudy}
          setGap={setGap}
          setPomodoro={setPomodoro}
        />
        <p>
          Total Study Time: {study} minutes
        </p>
        <p>
          Total Short Break Time: {gap > 0 ? gap.toFixed(2) : 0} minutes
        </p>
        <p>
          Total Pomodoro Break Time: {pomodoro > 0 ? pomodoro.toFixed(2) : 0} minutes
        </p>
      </div>
    </>
  );
}

export default App;
