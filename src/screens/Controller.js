import React, { Component } from 'react';
import Login from './login/Login';
import Home from  './home/Home';
import Profile from './profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Controller extends Component {
    constructor() {
        super();
        this.state = {
            baseUrl: "https://graph.instagram.com/me/media?fields=id,caption&access_token=",
            postUrl: {
                url1: "https://graph.instagram.com/",
                url2: "?fields=id,media_type,media_url,username,timestamp&access_token="
            },
            accessToken: "IGQVJVMXN2RS1xTkxRMzZAHYTJZAZAVFxYmZAXcmhpUW1Rcmg5eUI2Vk00YUNxZAGcxSXRtMkdqUEt5WFozUy1CdUhXWjZArbFJRQ0NRcEhpUkpHb2xzeGszYUgwc1AyU3NzcnRYMEU3QkdBVzhWeWZAHMDlVbgZDZD"
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/'><Login /></Route>
                    <Route exact path='/home'><Home baseUrl={this.state.baseUrl} accessToken={this.state.accessToken} postUrl={this.state.postUrl} /></Route>
                    <Route exact path='/profile'><Profile baseUrl={this.state.baseUrl} accessToken={this.state.accessToken} postUrl={this.state.postUrl} /></Route>
                </div>
            </Router>
        )
    }
}

export default Controller;