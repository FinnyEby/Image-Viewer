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
            counter: "",
            likeCounter: "",
            username: "",
            modalSrc: "",
            postCaption: "",
            modalIsOpen: false,
            PostModalIsOpen: false,
            realName: "Finny Ebenezer",
            updatedName: "",
            newName: "",
            updatedNameRequired: "dispNone",
            comment: "",
            tempComment: "",
            comments: [],
            liked: false,
            post: {
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

    openPostModel = (caption, url, user, likes, liked, counter) => {
        this.setState({ PostModalIsOpen: true })
        this.setState({ postCaption: caption })
        this.setState({ modalSrc: url})
        this.setState({username: user})
        this.setState({likeCounter: likes})
        this.setState({liked: liked})
        this.setState({counter: counter})
    }

    closePostModal = () => {
        this.setState({ PostModalIsOpen: false })
    }

    likeClickhandler = () => {
        this.state.liked ? this.setState({liked: false}) : this.setState({liked: true})
        this.props.updatelikeDetails(this.state.counter)
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
        let tempsrc
        let tempUsername
        let likeNumber
        let counter = 0
        let likeStatus

        return (
            <div>
                <Header displayUserProfileIcon={true} />
                <div className="profile">
                    <div className="profileContainer">
                        <div className="outer">
                            <div className="inner">
                                <div>
                                    <img className="profilePhoto" src={img} alt="profile" onClick={this.openPostModel.bind(this, "Temporary Test Post", img, "testUser", Math.floor(Math.random() * 20), false, 0 )} />
                                </div>
                                <div className="accountDetails">
                                    <div>
                                        <Typography variant="h4">{this.state.username}</Typography>
                                    </div>
                                    <div className="socialDetails">
                                        <div className="socials">
                                            <Typography variant="h6">Post: {this.props.posts.length}</Typography>
                                        </div>
                                        <div className="socials">
                                            <Typography variant="h6">Follows: {this.props.follows}</Typography>
                                        </div>
                                        <div className="socials">
                                            <Typography variant="h6">Followed By: {this.props.followedBy}</Typography>
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
                                    {this.props.posts.map(post => {
                                        likeNumber = this.props.likeList[counter]
                                        likeStatus = this.props.likeDetails[counter]
                                        counter++
                                        this.props.postDetails.forEach(thispost => {
                                            if(post.id === thispost.id ) {
                                                tempsrc = thispost.media_url
                                                tempUsername = thispost.username
                                            }
                                        })
                                        return <GridListTile key={post.id} className="gridTile">
                                            <img src={tempsrc} alt={post.caption} onClick={this.openPostModel.bind(this, post.caption, tempsrc, tempUsername, likeNumber, likeStatus, counter-1)} />
                                        </GridListTile>
                                    })}
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
                                                <img className="postImage" src={this.state.modalSrc} alt="alternate" />
                                            </div>
                                            <div className="rightDiv">
                                                <div className="userProfilePhotoAndName">
                                                    <img className="profilePhotoInPostModal" src={img} alt="profilePic" />
                                                    <Typography className="usernamePostModal" variant="h6">{this.state.username}</Typography>
                                                </div>
                                                <hr />
                                                <Typography variant="h5">{this.state.postCaption}</Typography>
                                                <div className="tags">#Tag1 #Tag2 #Tag3</div>
                                                <div className="commentSection">
                                                    <div>
                                                        <div id="comments" className="comments">
                                                            <div>
                                                                {this.state.post.comments.map(comment => {
                                                                    temp++
                                                                    return <div key={temp}>
                                                                        <span className="bold">{this.state.username}:</span>
                                                                        <span>{comment}</span>
                                                                    </div>
                                                                })}
                                                            </div>
                                                        </div>
                                                        <div className="rightBottomSection">
                                                            <div>
                                                                {
                                                                    this.state.liked ? <div className="likeSectionInProfilePage"><Favorite id={2} style={{ color: "red" }} className="likeButton"  onClick={this.likeClickhandler} /><span>{this.state.likeCounter+1} likes</span></div>  :
                                                                    <div className="likeSectionInProfilePage"><FavoriteBorderIcon id={2} className="likeButton" onClick={this.likeClickhandler} /><span>{this.state.likeCounter} likes</span></div> 
                                                                }
                                                            </div>
                                                            <div className="addCommentInProfilePage">
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