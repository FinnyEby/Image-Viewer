import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';

class Home extends Component {

    render() {
        return (
            <div>
                <Header dispalySearchBar={true} displayUserProfileIcon={true} />
                <div className="home">
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;