import React, { Component } from "react";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };
  }

  onChangeTodoDescription(e) {
    this.setState({ todo_description: e.target.value });
  }

  onChangeTodoResponsible(e) {
    this.setState({ todo_responsible: e.target.value });
  }

  onChangeTodoPriority(e) {
    this.setState({ todo_priority: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p>Welcome to Create Todo Component</p>
      </div>
    );
  }
}
