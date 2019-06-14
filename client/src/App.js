import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodosList from "./components/todos-list.js";
import EditTodo from "./components/edit-todo.js";
import CreateTodo from "./components/create-todo.js";
import toast from "./components/toast.png";
import Timer from "./components/timer.js";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <a
            className="navbar-brand"
            href="https://github.com/sarahtam718?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={toast}
              style={{ width: 30, marginRight: 10 }}
              alt="sarahtam718-github"
            />
          </a>
          <Link to="/" className="navbar-brand">
            Todo Toast
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create Task
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Timer />
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
