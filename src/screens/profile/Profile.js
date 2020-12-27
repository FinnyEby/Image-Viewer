import React, {Component} from 'react';
import './Profile.css';
import Header from '../../common/header/Header';

class Profile extends Component {
    render() {
        return (
            <div>
                <Header displayUserProfileIcon={true} />
                <div className="profile">Profile Page</div>
            </div>
        )
    }
}

export default Profile;