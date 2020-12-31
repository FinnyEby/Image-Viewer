import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import img from '../../assets/finn.jpg';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            url: "",
            search: "",
            post: {
                liked: false,
                comments: [],
                comment: ""
            }
        }
    }

    likeClickhandler = () => {
        let tempPost = this.state.post;
        this.state.post.liked ? tempPost.liked = false : tempPost.liked = true
        this.setState(tempPost)
    }

    commentChangeHandler = (e) => {
        let tempComment = this.state.post
        tempComment.comment = e.target.value
        this.setState({ tempComment })
    }

    addCommentHandler = () => {
        if(this.state.post.comment.trim() !== "") {
            let temp = this.state.post.comments
            temp.push(this.state.post.comment)
            this.setState(temp)
            let tempComment = this.state.post
            tempComment.comment = ""
            this.setState({ tempComment })
        }
    }

    render() {

        let temp = 0

        let tempusername
        let tempSrc
        let tempTimeStamp
        let tempDate
        let tempMonth
        let tempYear
        let tempHour
        let tempMin
        let tempSec
        let likeNumber
        let counter = 0

        let displayPosts

        this.props.showFilteredPosts ? displayPosts = this.props.filteredPosts : displayPosts = this.props.posts

        return (
            <div className="outerContainer">
                <Header dispalySearchBar={true} displayUserProfileIcon={true} filterCaptions={this.props.filterCaptions} />
                <div className="home">
                    <div className="homeMain">
                        <div className="cardContainer">
                            {
                                displayPosts.map(post => {
                                    likeNumber = this.props.likeList[counter]
                                    counter++
                                    this.props.postDetails.forEach(thispost => {
                                        if(thispost.id === post.id) {
                                            tempusername = thispost.username
                                            tempSrc = thispost.media_url
                                            tempTimeStamp = new Date(thispost.timestamp)
                                            tempDate = tempTimeStamp.getDate()
                                            tempMonth = tempTimeStamp.getMonth() + 1
                                            tempYear = tempTimeStamp.getFullYear()
                                            tempHour = tempTimeStamp.getHours()
                                            tempMin = tempTimeStamp.getMinutes()
                                            tempSec = tempTimeStamp.getSeconds()
                                        }
                                    });
                                    return <Card key={post.id} id={post.id} className="cardStyle">
                                        <div>
                                            <CardHeader className="cardHeader" avatar={
                                                <Avatar className="avatar" src={img} sizes="small" />
                                            }
                                                title={tempusername}
                                                subheader={tempDate+"/"+tempMonth+"/"+tempYear+" "+tempHour+":"+tempMin+":"+tempSec} />
                                        </div>
                                        <div className="cardContent">
                                            <CardContent>
                                                <div className="imgSection">
                                                    <img className="image" src={tempSrc} alt={post.caption}/>
                                                </div>
                                                < hr />
                                                <div className="postDetails">
                                                    <div className="caption"><Typography variant="h5">{post.caption}</Typography></div>
                                                    <div className="tags">#Tag1 #Tag2 #Tag3</div>
                                                </div>
                                                <div>
                                                    {
                                                        this.state.post.liked ? <div className="likeSection"><Favorite id={2} style={{ color: "red" }} className="likeButton" onClick={this.likeClickhandler} /><span>{likeNumber+1} likes</span></div>  :
                                                        <div className="likeSection"><FavoriteBorderIcon id={2} className="likeButton" onClick={this.likeClickhandler} /><span>{likeNumber} likes</span></div> 
                                                    }
                                                </div>
                                                <div className="commentSection">
                                                    <div>
                                                        <div id="comments" className="comments">
                                                            <div>
                                                                {this.state.post.comments.map(comment => {
                                                                    temp++
                                                                    return <div key={temp}>
                                                                        <span className="bold">{this.state.post.username}:</span>
                                                                        <span>{comment}</span>
                                                                    </div>
                                                                })}
                                                            </div>
                                                        </div>
                                                        <div className="addComment">
                                                            <FormControl className="commentInput" >
                                                                <InputLabel htmlFor="commentTextBox">Add a comment</InputLabel>
                                                                <Input id={"commentTextBox"+post.id} type="text" value={this.state.post.comment} onChange={this.commentChangeHandler} />
                                                            </FormControl>
                                                            <Button className="addButton" variant="contained" color="primary" onClick={this.addCommentHandler}>
                                                                ADD
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </div>
                                    </Card>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;