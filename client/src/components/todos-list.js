import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Timer from "./timer.js";

const Todo = props => (
  <tr>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_description}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_responsible}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_priority}
    </td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
);

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/todos/")
      .then(response => {
        // console.log("working get req", response.data);
        this.setState({ todos: response.data });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:8000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  todoList = () => {
    return this.state.todos.map(function(todoNow, i) {
      return <Todo todo={todoNow} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <h3>Task List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Time Allotted</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
        <Timer />
      </div>
    );
  }
}
