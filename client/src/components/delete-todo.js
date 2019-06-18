import React, { Component } from "react";
import axios from "axios";

export default class DeleteTodo extends Component {
  componentDidMount(props) {
    axios
      .get("http://localhost:8000/todos/delete/" + this.props.match.params.id)
      .then(response => {
        console.log("delete working", response);
      })
      .catch(function(err) {
        console.log(err);
      });
    // console.log("hello from delete component", this.props.match.params);
  }

  render() {
    return (
      <div>
        <h3>Delete Successful :D</h3>
      </div>
    );
  }
}
