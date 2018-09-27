import React from "react";
import shortid from "shortid";
class TaskForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),

      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ""
    });
  };

  handleClick = e => {};

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="task"
          />
          <button onClick={this.handleSubmit}>submit</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
