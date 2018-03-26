import React, {Component} from "react";

class Todo extends Component {
    render() {
        const {text, completed} = this.props.data;

        return (
            <li
                className={completed ? "completed" : ""}>
                <span onClick={this._handleClickToggle.bind(this)}>{text}</span>
                <span onClick={this._handleClickRemove.bind(this)}
                      className="close">x</span>
            </li>
        );
    }

    _handleClickToggle() {
        this.props.onToggle();
    }

    _handleClickRemove() {
        this.props.onRemove();
    }
}

export default Todo;