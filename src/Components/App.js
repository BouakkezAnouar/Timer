import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Controls from "./Controls";
import Timer from "./Timer";

class App extends Component {
  state = {
    start: false,
    miliseconds: 0,
    etat: "Start"
  };

  HandleReset = () => {
    this.setState({ start: false, miliseconds: 0, etat: "Start" });
    clearInterval(this.interval);
  };

  // set interval in callback to get the value of the new state
  HandleStart = () => {
    this.setState(
      // i use prevState because problem of Asynchron setState
      prevState => ({
        start: prevState.start ? false : true
      }),
      () => {
        //callback to get the new update of state
        this.setState({ etat: this.state.start === false ? "Start" : "Pause" });
        if (this.state.start) {
          //apres chaque miliseconds incremente
          this.interval = setInterval(() => {
            const miliseconds = this.state.miliseconds + 10;
            this.setState({ miliseconds });
          }, 10);
        } else {
          clearInterval(this.interval);
        }
      }
    );
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Timer miliseconds={this.state.miliseconds} start={this.state.start} />
        <Controls
          onHandleStart={this.HandleStart}
          onHandleReset={this.HandleReset}
          etat={this.state.etat}
          miliseconds={this.setState.miliseconds}
        />
      </div>
    );
  }
}
export default App;
