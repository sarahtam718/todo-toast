import React, { Component } from "react";

let timeLeft;

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  displayTimeLeft = seconds => {
    const mins = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const displayTime = `${mins}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
    // console.log({ mins, remainingSeconds });
    // console.log(displayTime);
    this.setState({ timeRemaining: displayTime });
    // console.log(this.state.timeRemaining);
  };

  displayComeBack = timestamp => {
    const comeBack = new Date(timestamp);
    const hour = comeBack.getHours();
    const mins = comeBack.getMinutes();
    // console.log(
    //   `Be Back at ${hour > 12 ? hour - 12 : hour}:${
    //     mins < 10 ? "0" : ""
    //   }${mins}`
    // );
    this.setState({
      returnTime: `${hour > 12 ? hour - 12 : hour}:${
        mins < 10 ? "0" : ""
      }${mins}`
    });
    console.log(this.state.returnTime);
  };

  startPomodoroTimer = () => {
    // console.log(this);
    this.timer(1500);
  };

  startQuickBreak = () => {
    this.timer(300);
  };

  componentDidMount() {
    console.log("mounted");
  }

  render() {
    return (
      <div className="timer">
        <button onClick={this.startPomodoroTimer}>Pomodoro Timer</button>
        <button onClick={this.startQuickBreak}>Quick Break</button>
        <div id="countdown">Time Left: {this.state.timeRemaining}</div>
        <div id="return">Return: {this.state.returnTime}</div>
      </div>
    );
  }
}
