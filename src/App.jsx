import { useEffect, useState } from "react";
import "./App.css";
import { Time, setProgress } from "./utils/time";

function App() {
  let [today, setToday] = useState(new Date().toDateString());
  let [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
      if (now.toDateString() !== today) setToday(new Date().toDateString());
    }, 1000);
  }, []);

  return (
    <div className="root d-flex flex-column justify-content-center align-items-center">
      <svg className="progress-ring">
        <circle
          className="seconds-ring"
          stroke="white"
          strokeWidth="4"
          strokeDasharray={52 * 2 * Math.PI}
          strokeDashoffset={setProgress(now.getSeconds())}
          fill="transparent"
          r="52"
          cx="60"
          cy="60"
        />
      </svg>
      <span id="date">{today}</span>
      <div className="img-container">
        <span id="hr" className="digit">
          {Time.getFormatedHours()}
        </span>
        <span className="digit">:</span>
        <span id="min" className="digit">
          {Time.getFormatedMinutes()}
        </span>
        <span id="ampm" className="digit">
          {Time.getMeriadiam()}
        </span>
      </div>
    </div>
  );
}

export default App;
