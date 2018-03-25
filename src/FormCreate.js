import React, {Component} from "react";

class FormCreate extends Component {
    render() {
        const {onCreate} = this.props;

        return (
            <form className="create">
                <input id="inputAdd" type="text" placeholder="Title..."/>
                <button onClick={this.handleOnClick.bind(this)} type="button" id="buttonAdd">Add</button>
            </form>
        );
    }

    handleOnClick() {
        console.log('bav');
    }
}

export default FormCreate;