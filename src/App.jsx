import { useEffect, useState } from "react";
import "./App.css";
import CountdownTimer from "./components/CountDown";
import { Time, setProgress } from "./utils/time";

function App() {
  let [today, setToday] = useState(new Date().toDateString());
  let [now, setNow] = useState(new Date());
  let [prevScroll, setPrevScroll] = useState(window.scrollY);

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
      if (now.toDateString() !== today) setToday(new Date().toDateString());
    }, 1000);

    // window.addEventListener("scroll", (e) => {
    //   e.preventDefault();

    //   let currScroll = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //   let scroll = window.visualViewport.height;

    //   if (currScroll > prevScroll) {
    //     scroll *= 1
    //   } else {
    //     scroll = 0
    //   }

    //   window.scrollTo({
    //     top: scroll,
    //     left: 0,
    //   });
    //   setPrevScroll(currScroll)
      
    // });
  }, []);

  let vmin =
    window.visualViewport.height > window.visualViewport.width
      ? window.visualViewport.width
      : window.visualViewport.height;
  let radius = 0.28 * vmin;

  return (
<<<<<<< HEAD
    <div className="root d-flex flex-column justify-content-center align-items-center">
      <CountdownTimer targetDate={"2022-09-05"} />
      {/* <svg className="progress-ring">
        <circle
          className="seconds-ring"
          stroke="white"
          strokeWidth="4"
          strokeDasharray={radius * 2 * Math.PI}
          strokeDashoffset={setProgress(radius, now.getSeconds())}
          fill="transparent"
        />
      </svg>
      <div className="clock-row">
        <span id="date">{today}</span>
        <span id="ampm">
          {Time.getMeriadiam()}
        </span>
      </div>
      <div className="clock-row">
        <span id="hr" className="digit">
          {Time.getFormatedHours()}
        </span>
        <span className="seperator">:</span>
        <span id="min" className="digit">
          {Time.getFormatedMinutes()}
        </span>
      </div> */}
=======
    <div>
      <div className="root d-flex flex-column justify-content-center align-items-center">
        <svg className="progress-ring">
          <circle
            className="seconds-ring"
            stroke="white"
            strokeWidth="4"
            strokeDasharray={radius * 2 * Math.PI}
            strokeDashoffset={setProgress(radius, now.getSeconds())}
            fill="transparent"
          />
        </svg>
        <div className="clock-row">
          <span id="date">{today}</span>
          <span id="ampm">{Time.getMeriadiam()}</span>
        </div>
        <div className="clock-row">
          <span id="hr" className="digit">
            {Time.getFormatedHours()}
          </span>
          <span className="seperator">:</span>
          <span id="min" className="digit">
            {Time.getFormatedMinutes()}
          </span>
        </div>
      </div>
      <div className="root">test</div>
>>>>>>> 6473171a1ad2c31e97a520fb8755b8696857162d
    </div>
  );
}

export default App;
