import React, {Component} from "react";

class Todo extends Component {
    render() {
        const {text, completed} = this.props.data;

        return (
            <li className={completed ? "completed" : ""}>{text} <span className="close">x</span></li>
        );
    }
}

export default Todo;