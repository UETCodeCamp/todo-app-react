import React, {Component} from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

class TodoList extends Component {
    render() {
        const {todos} = this.props;

        const TodoComponents = [];

        for (let i=0; i<todos.length; i++) {
            const todo = todos[i];
            TodoComponents.push(<Todo key={i} data={todo}/>);
        }

        return (
            <div className="main">
                <ul id="list">
                    {TodoComponents}
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array
};

export default TodoList;