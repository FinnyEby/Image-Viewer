import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';

class Home extends Component {

    render() {
        return (
            <div>
                <Header dispalySearchBar={true} displayUserProfileIcon={true} />
                <div className="home">Home Page</div>
            </div>
        )
    }
}

export default Home;