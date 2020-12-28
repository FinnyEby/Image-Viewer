import React, { Component } from 'react';
import Login from './login/Login';
import Home from './home/Home';
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
            accessToken: "IGQVJWajJFZA0ZAJQ0xXZADVjRmp2cnA5UElxTkdKY2I2d21yWWtUdGFoNkRiaGk4ckZApS0UxdEkxeHBFeklrMkZAhTjA4ZAVhhYlJaVUVFSjlBTjBpYXhzM0pQZAGs1ZAmVxQzFyUmduYUtBMXlwd1dkbWhfSAZDZD",
            posts: [],
            postLists: [],
            nextpost: {},
            finalPostsList: [],
            filteredPosts: []
        }
    }

    UNSAFE_componentWillMount() {
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({ posts: JSON.parse(this.responseText).data });
            }
        });
        xhr.open("GET", this.state.baseUrl + this.state.accessToken);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    }

    // getPostDetails = (postId ) => {
    //     let postData = null;
    //     let xhrPost = new XMLHttpRequest();
    //     let that2 = this;
    //     let tempList = this.state.finalPostsList;
    //     xhrPost.addEventListener("readystatechange", function () {
    //         if (this.readyState === 4) {
    //             that2.setState({ nextpost: JSON.parse(this.response) })
    //         }
    //     })
    //     xhrPost.open("GET", this.state.postUrl.url1 + postId + this.state.postUrl.url2 + this.state.accessToken);
    //     xhrPost.setRequestHeader("Cache-Control", "no-cache");
    //     xhrPost.send(postData);
    // }

    render() {

        // this.state.posts.forEach(post => {
        //     this.getPostDetails(post.id)
        // })

        //this.getPostDetails(17889571087820338)

        return (
            <Router>
                <div>
                    <Route exact path='/'><Login accessToken={this.state.accessToken} /></Route>
                    <Route exact path='/home'><Home finalPostsList={this.state.finalPostsList} posts={this.state.filteredPosts} filterFunction={this.filterPosts} /></Route>
                    <Route exact path='/profile'><Profile finalPostsList={this.state.finalPostsList} posts={this.state.posts} /></Route>
                </div>
            </Router>
        )
    }
}

export default Controller;