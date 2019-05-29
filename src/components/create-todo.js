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

  //   setting up our form to grab user input and send it to state

  onChangeTodoDescription = e => {
    this.setState({ todo_description: e.target.value });
  };

  onChangeTodoResponsible = e => {
    this.setState({ todo_responsible: e.target.value });
  };

  onChangeTodoPriority = e => {
    this.setState({ todo_priority: e.target.value });
  };

  //   when submitting form, we only want to send data to backend once, so preventDefault is used, plus we want to reset the state so user can submit new form (new todo)
  onSubmit = e => {
    e.preventDefault();
    console.log("form submitted");
    console.log("todo state: ", this.state);
    // need submit logic to send data to backend
    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    });
  };

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Task</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible</label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="PriorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="PriorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={this.state.todo_priority === "Medium"}
              onChange={this.onChangeTodoPriority}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="PriorityOptions"
              id="priorityHigh"
              value="High"
              checked={this.state.todo_priority === "High"}
              onChange={this.onChangeTodoPriority}
            />
            <label className="form-check-label">High</label>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
