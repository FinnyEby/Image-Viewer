import './Header.css';
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header unselectable">
                <div className="logo">
                    Image Viewer
                </div>
            </div>
        )
    }
}

export default Header; 