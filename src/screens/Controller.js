import React, { Component } from 'react';
import Login from './login/Login';
import Home from  './home/Home';
import Profile from './profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Controller extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/'><Login /></Route>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/profile'><Profile /></Route>
                </div>
            </Router>
        )
    }
}

export default Controller;