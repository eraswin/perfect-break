import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Clock from './Clock';

function App() {
  const [study, setStudy] = useState(null);

  const [gap, setGap] = useState(null);
  const [pomodoro, setPomodoro] = useState(null);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Perfect Break</h1>
      <div className="card">
        <Clock setStudy={setStudy} setGap={setGap} setPomodoro={setPomodoro} />
        <p>
          Total Study Time: {study} minutes
        </p>
        <p>
          Total Short Break Time: {gap} minutes
        </p>
        <p>
          Total Pomodoro Break Time: {pomodoro} minutes
        </p>
      </div>
    </>
  );
}

export default App;
