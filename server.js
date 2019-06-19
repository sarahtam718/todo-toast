const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = express.Router();
const PORT = process.env.PORT || 8000;
const path = require("path");

let Todo = require("./models/todo");

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

// connecting to db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/todos", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection successful!");
});

// extends from /todos route
// grabs all todo items
todoRoutes.route("/").get(function(req, res) {
  Todo.find(function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      // send data, pass in todos response object
      res.json(todos);
    }
  });
});

// grabs a todo item from db based on user choice
todoRoutes.route("/:id").get(function(req, res) {
  // how do we know which item the user wants? grab from url path aka req.params
  let id = req.params.id;
  Todo.findById(id, function(err, todo) {
    res.json(todo);
  });
});

// add new items to todo db
todoRoutes.route("/add").post(function(req, res) {
  // how do we know what user wants to add? grab from req.body & create new object based on model schema
  let todo = new Todo(req.body);
  todo
    .save()
    // callback function to make async
    .then(todo => {
      // send a success message if added
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch(err => {
      // send an error message if failed to add
      res.status(400).send("adding new todo failed");
    });
});

// edit/update todo based on id of specific item to edit
todoRoutes.route("/update/:id").post(function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
    // if not able to grab item...
    if (!todo) res.status(404).send("data not found");
    // objfromdb.key set to what was submitted in body (form)
    else todo.todo_description = req.body.todo_description;
    todo.todo_responsible = req.body.todo_responsible;
    todo.todo_priority = req.body.todo_priority;
    todo.todo_completed = req.body.todo_completed;

    // save to db
    todo
      .save()
      .then(todo => {
        res.json("Todo updated");
      })
      .catch(err => {
        res.status(400).send("update not possible");
      });
  });
});

// delete todo based on id of selected item
todoRoutes.route("/remove/:id").post(function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
    // if not able to grab item...
    if (!todo) res.status(404).send("data not found");
    // delete from db
    else
      todo
        .remove()
        .then(result => {
          res.json("Todo deleted");
        })
        .catch(err => {
          res.status(400).send("delete not possible");
        });
  });
});

app.use("/todos", todoRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT:" + PORT);
});
