import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import img from '../../assets/finn.png';
import img2 from '../../assets/bird.jpeg';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            post: {
                id: "",
                caption: "Friendly Bird!",
                media_url: "",
                username: "FinnyEbby",
                timestamp: "2008-07-18T00:00:00+05:30",
                liked: true,
                likeCounter: 7,
                comment: "new comment"
            }
        }
    }

    /*componentWillMount() {
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    posts: JSON.parse(this.responseText).data
                });
            }
        });

        xhr.open("GET", this.props.baseUrl + this.props.accessToken);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    }

    getPostDetails = (postId) => {
        let postData = null;
        let xhrPost = new XMLHttpRequest();
        let that2 = this;
        xhrPost.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that2.setState({
                    post: JSON.parse(this.response)
                })
            }
        })
        xhrPost.open("GET", this.props.postUrl.url1 + postId + this.props.postUrl.url2 + this.props.accessToken);
        xhrPost.setRequestHeader("Cache-Control", "no-cache");
        xhrPost.send(postData);
    }*/

    likeClickhandler = () => {
        let tempPost = this.state.post;
        this.state.post.liked ? tempPost.liked = false : tempPost.liked = true
        this.state.post.liked ? tempPost.likeCounter-- : tempPost.likeCounter++
        this.setState(tempPost)
    }

    render() {

        return (
            <div>
                <Header dispalySearchBar={true} displayUserProfileIcon={true} />
                <div className="home">
                    <div className="homeMain">
                        <Card className="cardStyle">
                            <div>
                                <CardHeader className="cardHeader" avatar={
                                    <Avatar className="avatar" src={img} sizes="small" />
                                }
                                    title={this.state.post.username}
                                    subheader={new Date().toDateString()} />
                            </div>
                            <div className="cardContent">
                                <CardContent>
                                    <img className="image" src={img2} alt={this.state.post.caption} />
                                    < hr/>
                                    <div className="postDetails">
                                        <div className="caption">{this.state.post.caption}</div>
                                        <div className="tags">#Tag1 #Tag2 #Tag3</div>
                                    </div>
                                    <div className="likeSection">
                                        {this.state.post.liked ? <FavoriteBorderIcon className="likeButton" onClick={this.likeClickhandler} /> : 
                                        <Favorite  style={{color: "red"}} className="likeButton" onClick={this.likeClickhandler}/> }
                                        <span>{this.state.post.likeCounter} likes</span>
                                    </div>
                                    <div className="commentSection">
                                        <div id="comments" className="comments">
                                            <div>
                                                <span className="bold">{this.state.post.username}:</span>
                                                <span>Dummy comment</span>
                                            </div>
                                        </div>
                                        <div className="addComment">
                                            <FormControl className="commentInput" >
                                                <InputLabel htmlFor="commentTextBox">Add a comment</InputLabel>
                                                <Input id="commentTextBox" type="text" />
                                            </FormControl>
                                            <Button className="addButton" variant="contained" color="primary" >
                                                ADD
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;