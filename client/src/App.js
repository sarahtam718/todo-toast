import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodosList from "./components/todos-list.js.js";
import EditTodo from "./components/edit-todo.js.js";
import CreateTodo from "./components/create-todo.js.js";
import toast from "./components/toast.png";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <a
            className="navbar-brand"
            href="https://github.com/sarahtam718?tab=repositories"
            target="_blank"
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
        <Route path="/" exact component={TodosList} />
        {/* path that accepts parameter of id */}
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;