import React from 'react';
import './todoTabs.css';
import TodoBtn from './todoBtn.js';

export default class todoTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1
    };
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(id) {
    if (this.state.active === id) {
      return;
    }
    this.setState({ active: id });
    this.props.changeShow(id);
  }

  render() {
    return (
      <div className="todo-tab">
        <TodoBtn
          id={1}
          text="Todo"
          active={ this.state.active === 1 ? " active" : ""}
          btnClick={this.onBtnClick}
        />
        <TodoBtn
          id={2}
          text="In process"
          active={ this.state.active === 2 ? " active" : ""}
          btnClick={this.onBtnClick}
        />
        <TodoBtn
          id={3}
          text="Done"
          active={ this.state.active === 3 ? " active" : ""}
          btnClick={this.onBtnClick}
        />
      </div>
    );
  }
}
