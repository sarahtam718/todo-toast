import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 25
    };
  }

  componentDidMount = () => {
    this.theInterval = setInterval(() => {
      this.setState({ count: this.state.count - 1 });
    }, 1000);

    if (this.state.count === 0) {
      clearInterval(this.theInterval);
    }
  };

  //   refresh() {
  //       this.setState({count: this.state.count})
  //   }

  componentWillUnmount = () => {
    clearInterval(this.theInterval);
  };
  render() {
    return <div>Timer: {this.state.count}</div>;
  }
}
