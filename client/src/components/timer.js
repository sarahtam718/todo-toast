import React, { Component } from "react";
import "./../App.css";

let timeLeft;

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isMounted: false,
      timeRemaining: "#werk",
      returnTime: "..."
    };
  }

  timer = seconds => {
    clearInterval(timeLeft);
    const now = Date.now();
    const later = now + seconds * 1000;
    this.displayTimeLeft(seconds);
    this.displayComeBack(later);

    timeLeft = setInterval(() => {
      const secondsLeft = Math.round((later - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(timeLeft);
        return;
      }

      this.displayTimeLeft(secondsLeft);
    }, 1000);
  };

  componentDidMount() {
    this.setState({ _isMounted: true });
    this.startPomodoroTimer = () => {
      this.timer(1500);
    };

    this.startQuickBreak = () => {
      this.timer(300);
    };
  }

  stopEverything = () => {
    clearInterval(timeLeft);
    this.setState({
      _isMounted: false,
      timeRemaining: "#werk",
      returnTime: "..."
    });
  };

  displayTimeLeft = seconds => {
    const mins = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const displayTime = `${mins}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
    this.setState({ timeRemaining: displayTime });
  };

  displayComeBack = timestamp => {
    const comeBack = new Date(timestamp);
    const hour = comeBack.getHours();
    const mins = comeBack.getMinutes();
    this.setState({
      returnTime: `${hour > 12 ? hour - 12 : hour}:${
        mins < 10 ? "0" : ""
      }${mins}`
    });
  };

  componentWillUnmount() {
    this.setState({
      _isMounted: false,
      timeRemaining: "#werk",
      returnTime: "..."
    });
  }

  render() {
    return (
      <div className="timer container">
        <div
          style={{
            display: "flex"
          }}
        >
          <button onClick={this.startPomodoroTimer}>Focused Work</button>
          <button onClick={this.startQuickBreak}>Brain Break</button>
          <button onClick={this.stopEverything}>Done!</button>
        </div>
        <div
          style={{
            display: "flex"
          }}
        >
          <h5>Time Left: {this.state.timeRemaining}</h5>
          <h5>Return by {this.state.returnTime}</h5>
        </div>
      </div>
    );
  }
}
