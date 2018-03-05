import React from 'react';
import './todoBtn.css';

export default class TodoBtn extends React.Component {
  constructor(props) {
    super(props);
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick() {
    this.props.btnClick(this.props.id);
  }

  render() {
    return (
      <button
        className={"tab-btn " + this.props.active }
        onClick={this.btnClick}
      >
        {this.props.text}
      </button>
    );
  }
}
