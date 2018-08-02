import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Hours = () => {
  return (
    <div className="time-item">
      <div className="time">00</div>
      <div className="smalltext">Hours</div>
    </div>
  );
};
const Minutes = () => {
  return (
    <div className="time-item">
      <div className="time">00</div>
      <div className="smalltext">Minutes</div>
    </div>
  );
};
const Seconds = () => {
  return (
    <div className="time-item">
      <div className="time">00</div>
      <div className="smalltext">Seconds</div>
    </div>
  );
};

const Controls = () => {
  return (
    <div className="controls">
      <button>Start</button>
      <button>Reset</button>
    </div>
  );
};

const Timer = () => {
  return (
    <React.Fragment>
      <div className="timer">
        <Hours />
        <Minutes />
        <Seconds />
      </div>
      <Controls />
    </React.Fragment>
  );
};

ReactDOM.render(<Timer />, document.querySelector("#root"));
