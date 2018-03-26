import React, {Component} from 'react';
import "./style.css";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
            </Switch>
        );
    }
}

export default App;
