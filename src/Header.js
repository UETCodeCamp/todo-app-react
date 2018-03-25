import React, {Component} from "react";
import FormCreate from "./FormCreate";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Code Camp's Todo List</h1>

                <form className="create">
                    <input id="inputAdd" type="text" placeholder="Title..."/>
                    <button onClick={this.handleOnClick.bind(this)} type="button" id="buttonAdd">Add</button>
                </form>
            </div>
        );
    }

    handleOnClick() {
        this.props.onCreate('ABC');
    }
}

export default Header;