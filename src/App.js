import React, {Component} from 'react';
import "./style.css";
import Header from "./Header";
import TodoList from "./TodoList";

class App extends Component {
    state = {
        todos: []
    };

    render() {
        const {todos} = this.state;

        return (
            <div className="TodoApp">
                <Header onCreate={this.handleOnCreate.bind(this)}/>
                <TodoList onDeleteTodo={this.handleDelete.bind(this)} todos={todos}/>
            </div>
        );
    }


    handleDelete() {
        console.log('');
    }

    handleOnCreate(text) {
        const {todos} = this.state;

        todos.push({
            text: text,
            completed: false
        });

        this.setState({
            todos: todos,
        });
    }
}

export default App;
