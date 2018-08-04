import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Controls from "./Controls";
import Timer from "./Timer";

class App extends Component {
  state = {
    start: false,
    seconds: 0,
    etat: "Start"
  };

  HandleReset = () => {
    this.setState(prevState => ({ start: false, seconds: 0, etat: "Start" }));
    clearInterval(this.interval);
  };

  // set interval in callback to get the value of the new state
  HandleStart = () => {
    this.setState(
      prevState => ({
        start: prevState.start === true ? false : true
      }),
      () => {
        //callback
        this.setState({ etat: this.state.start === false ? "Start" : "Pause" });
        if (this.state.start) {
          //lancer directement sans attendre 1 seconde
          const seconds = this.state.seconds + 1;
          this.setState({ seconds });
          //apres chaque seconde incremente
          this.interval = setInterval(() => {
            const seconds = this.state.seconds + 1;
            this.setState({ seconds });
          }, 1000);
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
        <Timer seconds={this.state.seconds} start={this.state.start} />
        <Controls
          onHandleStart={this.HandleStart}
          onHandleReset={this.HandleReset}
          etat={this.state.etat}
        />
      </div>
    );
  }
}
export default App;