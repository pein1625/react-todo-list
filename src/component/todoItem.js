import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
  render() {
    return (
      <li className="todo-item">
        <span className="todo-item-name">{this.props.todoItem}</span>
        <button
          className="todo-item-btn"
          onClick={()=>{this.props.removeTodo(this.props.id)}}
        >
          Delete
        </button>
        <button
          className="todo-item-btn"
          onClick={()=>{this.props.moveTo(this.props.id, 3)}}
        >
          Done
        </button>
        <button
          className="todo-item-btn"
          onClick={()=>{this.props.moveTo(this.props.id, 2)}}
        >
          In Process
        </button>
        <button
          className="todo-item-btn"
          onClick={()=>{this.props.moveTo(this.props.id, 1)}}
        >
          Todo
        </button>
      </li>
    );
  }
}
