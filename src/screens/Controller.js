import React, { Component } from 'react';
import Login from './login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Controller extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/'><Login /></Route>
                </div>
            </Router>
        )
    }
}

export default Controller;