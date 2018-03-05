import React, { Component } from 'react';
import './App.css';
import Header from './component/header.js';
import TodoTabs from './component/todoTabs.js';
import TodoInput from './component/todoInput.js';
import TodoItem from './component/todoItem.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, state: 1, text: 'Create todo-list' },
        { id: 1, state: 1, text: 'Learn React' }
      ],
      show: 1,
      nextId: 2
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.moveTo = this.moveTo.bind(this);
    this.changeShow = this.changeShow.bind(this);
  }

  addTodo(todo) {
    var todos = this.state.todos.slice();
    var nextId = this.state.nextId + 1;
    todos.push({
      id: nextId,
      state: 1,
      text: todo
    });
    this.setState({
      todos,
      nextId,
    });
  }

  removeTodo(id) {
    var todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  }

  moveTo(id, state) {
    var todos = this.state.todos.slice();
    for (let todo of todos) {
      if (todo.id === id) {
        if (todo.state === state) {
          return;
        }
        else {
          break;
        }
      }
    }
    todos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          state,
          text: todo.text
        }
      }
      return todo;
    });
    this.setState({ todos });
  }

  changeShow(id) {
    this.setState({ show: id });
  }

  render() {
    return (
      <div className="App">
        <div className="todos-wrap">
          <Header />
          <TodoInput addTodo={this.addTodo} />
          <TodoTabs changeShow={this.changeShow} />
          <ul>
            {
              this.state.todos.map((todo) => {
                if (todo.state !== this.state.show) {
                  return null;
                }
                return (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    todoItem={todo.text}
                    removeTodo={this.removeTodo}
                    moveTo={this.moveTo}
                  />);
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
