import React, {Component} from "react";

class Todo extends Component {
    render() {
        const {title, complete} = this.props.data;

        return (
            <li
                className={complete ? "completed" : ""}>
                <span onClick={this._handleClickToggle.bind(this)}>{title}</span>
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