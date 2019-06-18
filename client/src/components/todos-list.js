import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <Link to={"/edit/" + props.todo._id}>Edit</Link>{" "}
      <Link to={"/delete/" + props.todo._id}>Delete</Link>
    </td>
  </tr>
);

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isMounted: false,
      todos: []
    };
  }

  componentDidMount() {
    this.setState({ _isMounted: true });
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
        console.log(err, "something is wrong in component did update");
      });
  }

  componentWillUnmount() {
    this.setState({ _isMounted: false });
  }

  todoList = () => {
    return this.state.todos.map(function(todoNow, i) {
      return <Todo todo={todoNow} key={i} />;
    });
  };

  render() {
    return (
      <div className="container">
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
      </div>
    );
  }
}
