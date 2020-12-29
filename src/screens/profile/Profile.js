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

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            realName: "Finny Ebenezer",
            updatedName: "",
            newName: "",
            updatedNameRequired: "dispNone"
        }
    }

    openModel = () => {
        this.setState({modalIsOpen: true})
    }
    
    closeModal = () => {
        this.setState({modalIsOpen: false})
        this.setState({updatedNameRequired: "dispNone"})
    }

    updateRealName = () => {
        if(this.state.updatedName.trim().length === 0) { 
            this.setState({updatedNameRequired: "dispBlock"})
        } else {
            this.setState({realName: this.state.updatedName, updatedNameRequired: "dispNone"})
            this.closeModal();
        } 
    }

    newNameHandler = (e) => {
        this.setState({updatedName: e.target.value})
    }

    render() {
        return (
            <div>
                <Header displayUserProfileIcon={true} />
                <div className="profile">
                    <div className="profileContainer">
                        <div className="outer">
                            <div className="inner">
                                <div>
                                    <img className="profilePhoto" src={img} alt="profile" />
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
                                                className="nameEditModal"
                                                aria-labelledby="transition-modal-title"
                                                open={this.state.modalIsOpen}
                                                onClose={this.closeModal}
                                                closeAfterTransition
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                  timeout: 500,
                                                }}
                                            >
                                                <div className= "nameEditModalDiv" >
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
                                        <GridListTile key={post.id} className="gridTile" >
                                            <img src={img} alt={post.caption} />
                                        </GridListTile>
                                    ))}
                                </GridList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;