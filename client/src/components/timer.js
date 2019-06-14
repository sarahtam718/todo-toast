import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 25
    };
  }

  // componentDidMount = () => {
  //   this.theInterval = setInterval(() => {
  //     this.setState({ count: this.state.count - 1 });
  //   }, 1000);

  //   if (this.state.count === 0) {
  //     clearInterval(this.theInterval);
  //   }
  // };

  //   refresh() {
  //       this.setState({count: this.state.count})
  //   }

  // componentWillUnmount = () => {
  //   clearInterval(this.theInterval);
  // };
  render() {
    // return <div>Timer: {this.state.count}</div>;
    return (
      <div class="timer">
        <div class="timer__controls">
          <button data-time="20" class="timer__button">
            20 Secs
          </button>
          <button data-time="300" class="timer__button">
            Work 5
          </button>
          <button data-time="900" class="timer__button">
            Quick 15
          </button>
          <button data-time="1200" class="timer__button">
            Snack 20
          </button>
          <button data-time="3600" class="timer__button">
            Lunch Break
          </button>
          <form name="customForm" id="custom">
            <input type="text" name="minutes" placeholder="Enter Minutes" />
          </form>
        </div>
        <div class="display">
          <h1 class="display__time-left" />
          <p class="display__end-time" />
        </div>
      </div>
    );
  }
}
