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
            filteredPosts: [],
            showFilteredPosts: false,
            tempF: []
        }
    }

    componentDidMount() {
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
        this.setState({allPosts: this.state.posts})
    }

    // getPostDetailsById(id) {
    //     let postData = null;
    //     let xhrPost = new XMLHttpRequest();
    //     let tempPost;
    //     let tempF = this.state.tempF
    //     let flag = 0
    //     xhrPost.addEventListener("readystatechange", function() {
    //         if(this.readyState === 4) {
    //             tempPost = JSON.parse(this.responseText)
    //             tempF.push(tempPost)
    //             console.log(tempF)
    //         }
    //     })
    //     xhrPost.open("GET", this.state.postUrl.url1 + id + this.state.postUrl.url2 + this.state.accessToken);
    //     xhrPost.setRequestHeader("Cache-Control", "no-cache");
    //     xhrPost.send(postData);
    //     if(flag === 1) {
    //         this.setState({tempF: tempF})
    //         flag = 0 
    //     }
    // }

    filterCaptions = (str) => {
        this.setState({filteredPosts: this.state.posts})
        str.trim().length > 0 ? this.setState({showFilteredPosts : true}) : this.setState({showFilteredPosts : false})
        let temp = this.state.posts;
        let filtered = temp.filter(post => {
            return post.caption.toLowerCase().includes(str.trim().toLowerCase())
        })
        this.setState({filteredPosts : filtered})
    }

    render() {

        // this.state.posts.forEach(post => {
        //     this.getPostDetailsById(post.id)
        // })

        return (
            <Router>
                <div>
                    <Route exact path='/'><Login accessToken={this.state.accessToken} /></Route>
                    <Route exact path='/home'><Home showFilteredPosts={this.state.showFilteredPosts} filteredPosts={this.state.filteredPosts} posts={this.state.posts} filterCaptions={this.filterCaptions} /></Route>
                    <Route exact path='/profile'><Profile posts={this.state.posts} /></Route>
                </div>
            </Router>
        )
    }
}

export default Controller;