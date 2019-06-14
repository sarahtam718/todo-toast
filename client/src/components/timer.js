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
    const now = Date.now();
    const later = now + seconds * 1000;
    this.displayTimeLeft(seconds);

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
    console.log({ mins, remainingSeconds });
  };

  componentDidMount() {
    this.timer(124);
  }

  render() {
    return (
      <div className="timer">
        <div className="timer__controls">
          <button data-time="20" className="timer__button">
            20 Secs
          </button>
          <button data-time="300" className="timer__button">
            Work 5
          </button>
          <button data-time="900" className="timer__button">
            Quick 15
          </button>
          <button data-time="1200" className="timer__button">
            Snack 20
          </button>
          <button data-time="3600" className="timer__button">
            Lunch Break
          </button>
          <form name="customForm" id="custom">
            <input type="text" name="minutes" placeholder="Enter Minutes" />
          </form>
        </div>
        <div className="display">
          <h1 className="display__time-left" />
          <p className="display__end-time" />
        </div>
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
