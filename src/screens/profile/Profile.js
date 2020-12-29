import React, { Component } from 'react';
import './Profile.css';
import Header from '../../common/header/Header';
import img from '../../assets/finn.jpg';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            PostModalIsOpen: false,
            realName: "Finny Ebenezer",
            updatedName: "",
            newName: "",
            updatedNameRequired: "dispNone",
            comment: "",
            tempComment: "",
            comments: [],
            post: {
                id: "",
                caption: "Friendly Bird!",
                media_url: "",
                username: "FinnyEbby",
                timestamp: "2008-07-18T00:00:00+05:30",
                liked: true,
                likeCounter: 7,
                comments: [],
                comment: ""
            }
        }
    }

    openModel = () => {
        this.setState({ modalIsOpen: true })
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false })
        this.setState({ updatedNameRequired: "dispNone" })
    }

    updateRealName = () => {
        if (this.state.updatedName.trim().length === 0) {
            this.setState({ updatedNameRequired: "dispBlock" })
        } else {
            this.setState({ realName: this.state.updatedName, updatedNameRequired: "dispNone" })
            this.setState({ updatedName: "" })
            this.closeModal();
        }
    }

    newNameHandler = (e) => {
        this.setState({ updatedName: e.target.value })
    }

    gridTileClickHandler = (id) => {
        console.log(id)
    }

    openPostModel = () => {
        this.setState({ PostModalIsOpen: true })
    }

    closePostModal = () => {
        this.setState({ PostModalIsOpen: false })
    }

    likeClickhandler = () => {
        let tempPost = this.state.post;
        this.state.post.liked ? tempPost.liked = false : tempPost.liked = true
        this.state.post.liked ? tempPost.likeCounter-- : tempPost.likeCounter++
        this.setState(tempPost)
    }

    likeClickhandler = () => {
        let tempPost = this.state.post;
        this.state.post.liked ? tempPost.liked = false : tempPost.liked = true
        this.state.post.liked ? tempPost.likeCounter-- : tempPost.likeCounter++
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

        return (
            <div>
                <Header displayUserProfileIcon={true} />
                <div className="profile">
                    <div className="profileContainer">
                        <div className="outer">
                            <div className="inner">
                                <div>
                                    <img className="profilePhoto" src={img} alt="profile" onClick={this.openPostModel} />
                                </div>
                                <div className="accountDetails">
                                    <div>
                                        <Typography variant="h4">finnyebby</Typography>
                                    </div>
                                    <div className="socialDetails">
                                        <div className="socials">
                                            <Typography variant="h6">Post: 10</Typography>
                                        </div>
                                        <div className="socials">
                                            <Typography variant="h6">Follows: 10</Typography>
                                        </div>
                                        <div className="socials">
                                            <Typography variant="h6">Followed By: 10</Typography>
                                        </div>
                                    </div>
                                    <div className="ownerDetails">
                                        <div className="ownerName">
                                            <Typography variant="h5">{this.state.realName}</Typography>
                                        </div>
                                        <div className="editNameButton">
                                            <Fab color="secondary" aria-label="edit" onClick={this.openModel}>
                                                <EditIcon />
                                            </Fab>
                                            <Modal
                                                className="profileModal"
                                                open={this.state.modalIsOpen}
                                                onClose={this.closeModal}
                                                closeAfterTransition
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                    timeout: 500,
                                                }}
                                            >
                                                <div className="innerModalDiv" >
                                                    <div>
                                                        <Typography variant="h6">Edit</Typography>
                                                    </div><br />
                                                    <div>
                                                        <FormControl required>
                                                            <InputLabel>Full Name</InputLabel>
                                                            <Input id="newName" type="text" onChange={this.newNameHandler} />
                                                            <FormHelperText className={this.state.updatedNameRequired}>
                                                                <span className="red unselectable">required</span>
                                                            </FormHelperText>
                                                        </FormControl>
                                                    </div><br /><br />
                                                    <div>
                                                        <Button variant="contained" color="primary" onClick={this.updateRealName} >
                                                            UPDATE
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery">
                            <div className="gridSection">
                                <GridList cellHeight={160} className={"postLists"} cols={3}>
                                    {this.props.posts.map(post => (
                                        <GridListTile key={post.id} className="gridTile">
                                            <img src={img} alt={post.caption} onClick={this.openPostModel} />
                                        </GridListTile>
                                    ))}
                                </GridList>
                                <Modal
                                    className="profileModal"
                                    open={this.state.PostModalIsOpen}
                                    onClose={this.closePostModal}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <div className="innerModalDiv">
                                        <div className="postModal">
                                            <div className="leftDiv">
                                                <img className="postImage" src={img} alt="alternate" />
                                            </div>
                                            <div className="rightDiv">
                                                <div className="userProfilePhotoAndName">
                                                    <img className="profilePhotoInPostModal" src={img} alt="profilePic" />
                                                    <Typography className="usernamePostModal" variant="h6">username</Typography>
                                                </div>
                                                <hr />
                                                <Typography variant="h5">Post caption</Typography>
                                                <div className="tags">#Tag1 #Tag2 #Tag3</div>
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
                                                        <div className="rightBottomSection">
                                                            <div className="likeSection">
                                                                {this.state.post.liked ? <FavoriteBorderIcon id={2} className="likeButton" onClick={this.likeClickhandler} /> :
                                                                    <Favorite id={2} style={{ color: "red" }} className="likeButton" onClick={this.likeClickhandler} />}
                                                                <span>{this.state.post.likeCounter} likes</span>
                                                            </div>
                                                            <div className="addComment">
                                                                <FormControl className="commentInput" >
                                                                    <InputLabel htmlFor="commentTextBox">Add a comment</InputLabel>
                                                                    <Input id={"commentTextBox" + 1} type="text" value={this.state.post.comment} onChange={this.commentChangeHandler} />
                                                                </FormControl>
                                                                <Button className="addButton" variant="contained" color="primary" onClick={this.addCommentHandler}>
                                                                    ADD
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;