import React from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

class TaskList extends React.Component {
  state = {
    tasks: [],
    taskToShow: "all",
    toggleCompleteAll: true
  };

  addTask = task => {
    this.setState({
      tasks: [task, ...this.state.tasks]
    });
  };

  toggleComplete = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete
          };
        } else {
          return task;
        }
      })
    });
  };

  handleCompleteAllTasks = id => {
    this.setState({
      tasks: this.state.tasks.map(task => ({
        ...task,
        complete: this.state.toggleCompleteAll
      })),
      toggleCompleteAll: !this.state.toggleCompleteAll
    });
  };

  updateTaskToShow = s => {
    this.setState({
      taskToShow: s
    });
  };

  handleDeleteTask = id => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  };

  removeAllComplete = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.complete)
    });
  };

  removeAll = () => {
    window.confirm("This action will delete all your tasks");
    this.setState({
      tasks: this.state.tasks.filter(task => this.tasks)
    });
  };

  render() {
    console.log("sad");

    let tasks = [];

    if (this.state.taskToShow === "all") {
      tasks = this.state.tasks;
    } else if (this.state.taskToShow === "active") {
      tasks = this.state.tasks.filter(task => !task.complete);
    } else if (this.state.taskToShow === "complete") {
      tasks = this.state.tasks.filter(task => task.complete);
    }

    return (
      <div>
        <TaskForm onSubmit={this.addTask} />
        {/*{JSON.stringify(this.state.tasks)}*/}
        {tasks.map(task => (
          <Task
            toggleComplete={() => this.toggleComplete(task.id)}
            onDelete={() => this.handleDeleteTask(task.id)}
            key={task.id}
            task={task}
          />
        ))}
        <div>
          active tasks: {this.state.tasks.filter(task => !task.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTaskToShow("all")}>
            show all tasks
          </button>
          <button onClick={() => this.updateTaskToShow("active")}>
            show active tasks
          </button>
          <button onClick={() => this.updateTaskToShow("complete")}>
            show completed tasks
          </button>
        </div>
        {this.state.tasks.some(task => task.complete) ? (
          <div>
            <button onClick={this.removeAllComplete}>
              Delete All Completed Tasks
            </button>
          </div>
        ) : null}
        {this.state.tasks.some(task => task) ? (
          <div>
            <button onClick={this.removeAll}>Remove All Tasks</button>
          </div>
        ) : null}
        {this.state.tasks.some(task => task) ? (
          <div>
            <button onClick={this.handleCompleteAllTasks}>
              Complete all tasks
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default TaskList;
