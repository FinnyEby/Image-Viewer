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
            accessToken: "IGQVJWajJFZA0ZAJQ0xXZADVjRmp2cnA5UElxTkdKY2I2d21yWWtUdGFoNkRiaGk4ckZApS0UxdEkxeHBFeklrMkZAhTjA4ZAVhhYlJaVUVFSjlBTjBpYXhzM0pQZAGs1ZAmVxQzFyUmduYUtBMXlwd1dkbWhfSAZDZD"
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