import React, { Component } from "react";

let timeLeft;

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isMounted: false,
      timeRemaining: "#werk",
      returnTime: "keep moving forward"
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
      returnTime: "keep moving forward"
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
      returnTime: "keep moving forward"
    });
  }

  render() {
    return (
      <div className="timer">
        <button onClick={this.startPomodoroTimer}>Pomodoro Timer</button>
        <button onClick={this.startQuickBreak}>Quick Break</button>
        <button onClick={this.stopEverything}>Stop Everything</button>
        <div id="countdown">Time Left: {this.state.timeRemaining}</div>
        <div id="return">Return: {this.state.returnTime}</div>
      </div>
    );
  }
}
