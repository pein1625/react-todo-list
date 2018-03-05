import React from 'react';
import './todoinput.css';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addTodo(e) {
    const todo = this.state.value;
    // ensure the value isn't empty
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({ value: '' });
    }
    e.preventDefault();
  }

  render() {
    return (
      <form className="todo-form">
        <input
          type="text"
          className="todo-field"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Add todo here..." />
        <button
          type="submit"
          className="todo-btn"
          onClick={this.addTodo}>
          Submit
        </button>
      </form>
    );
  }
}
