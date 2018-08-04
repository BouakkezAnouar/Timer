import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.css";

const Unit = props => {
  return (
    <div className="time-item">
      <div className="time">{props.time}</div>
      <div className="smalltext">{props.of}</div>
    </div>
  );
};

class Timer extends Component {
  getTime = () => {
    let miliseconds = this.props.miliseconds;
    let seconds = Math.floor(miliseconds / 1000);
    miliseconds %= 1000;
    let hours = Math.floor(seconds / 3600);
    let days = Math.floor(hours / 24);
    hours %= 24;
    seconds %= 3600;
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return {
      miliseconds: this.formatTime(miliseconds),
      seconds: this.formatTime(seconds),
      hours: this.formatTime(hours),
      minutes: this.formatTime(minutes),
      days: this.formatTime(days)
    };
  };

  formatTime = time => {
    return time < 10 ? "0" + time : time;
  };

  render() {
    return (
      <div className="timer">
        {this.props.miliseconds >= 1000 * 60 * 60 * 24 && (
          <Unit of="days" time={this.getTime().days} />
        )}
        {this.props.miliseconds >= 1000 * 60 * 60 && (
          <Unit of="hours" time={this.getTime().hours} />
        )}
        {this.props.miliseconds >= 1000 * 60 && (
          <Unit of="minutes" time={this.getTime().minutes} />
        )}
        {this.props.miliseconds >= 1000 && (
          <Unit of="seconds" time={this.getTime().seconds} />
        )}
        <Unit of="miliseconds" time={this.getTime().miliseconds} />
      </div>
    );
  }
}

export default Timer;
