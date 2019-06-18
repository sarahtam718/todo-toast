import React, { Component } from "react";
import axios from "axios";

export default class DeleteTodo extends Component {
  componentDidMount(props) {
    axios
      .post("http://localhost:8000/todos/remove/" + this.props.match.params.id)
      .then(response => {
        console.log("delete working", response.data);
      })
      .catch(function(err) {
        console.log(err);
      });
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3 className="container">Delete Successful :D</h3>
      </div>
    );
  }
}
