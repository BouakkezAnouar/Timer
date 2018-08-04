import React, { Component } from "react";

const Controls = props => {
  return (
    <div className="controls">
      <button onClick={props.onHandleStart}>{props.etat}</button>
      <button onClick={props.onHandleReset}>Reset</button>
    </div>
  );
};

export default Controls;
