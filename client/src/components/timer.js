import React, { Component } from "react";

let timeLeft;

export default class Timer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0
  //   };
  // }

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
    console.log(displayTime);
  };

  displayComeBack = timestamp => {
    const comeBack = new Date(timestamp);
    const hour = comeBack.getHours();
    const mins = comeBack.getMinutes();
    console.log(
      `Be Back at ${hour > 12 ? hour - 12 : hour}:${
        mins < 10 ? "0" : ""
      }${mins}`
    );
  };

  startPomodoroTimer = () => {
    // console.log(this);
    this.timer(1500);
  };

  startQuickBreak = () => {
    this.timer(300);
  };

  // componentDidMount() {
  //   this.timer(124);
  // }

  render() {
    return (
      <div className="timer">
        <button
          data-time="20"
          className="timer__button"
          onClick={this.startPomodoroTimer}
        >
          Pomodoro Timer
        </button>
        <button
          data-time="20"
          className="timer__button"
          onClick={this.startQuickBreak}
        >
          Quick Break
        </button>
      </div>
    );
  }
}

// componentDidMount = () => {
// this.theInterval = setInterval(() => {
//   this.setState({ count: this.state.count - 1 });
// }, 1000);

// if (this.state.count === 0) {
//   clearInterval(this.theInterval);
// }
// };

//   refresh() {
//       this.setState({count: this.state.count})
//   }

// componentWillUnmount = () => {
//   clearInterval(this.theInterval);
// };
// return <div>Timer: {this.state.count}</div>;
