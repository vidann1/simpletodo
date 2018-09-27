import React, { Component } from "react";

import "./css/App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskList />
      </div>
    );
  }
}

export default App;
