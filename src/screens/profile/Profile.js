import React, { Component } from 'react';
import './Profile.css';
import Header from '../../common/header/Header';
import img from '../../assets/finn.jpg';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class Profile extends Component {
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
                                            <Typography variant="h5">Finny Ebenezer</Typography>
                                        </div>
                                        <div className="editNameButton">
                                            <Fab color="secondary" aria-label="edit">
                                                <EditIcon />
                                            </Fab>
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