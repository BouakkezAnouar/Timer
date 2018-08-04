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
    let seconds = this.props.seconds;
    let hours = Math.floor(seconds / 3600);
    let days = Math.floor(hours / 24);
    hours %= 24;
    seconds %= 3600;
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return {
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
        {// si hours more than 24
        this.getTime().days != 0 && (
          <Unit of="days" time={this.getTime().days} />
        )}
        <Unit of="Hours" time={this.getTime().hours} />
        <Unit of="Minutes" time={this.getTime().minutes} />
        <Unit of="Seconds" time={this.getTime().seconds} />
      </div>
    );
  }
}

export default Timer;
