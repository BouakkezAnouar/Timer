import React, { Component } from "react";

const Controls = props => {
  return (
    <div className="controls">
      <button
        onClick={props.onHandleStart}
        className={props.etat === "Start" ? "start" : "pause"}
      >
        {props.etat}
      </button>
      <button onClick={props.onHandleReset} className="reset">
        Reset
      </button>
    </div>
  );
};

export default Controls;
