import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return <div>Timer: {this.state.count}</div>;
  }
}
