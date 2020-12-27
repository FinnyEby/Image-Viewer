import './Header.css';
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import img from '../../assets/finn.png'
import Avatar from '@material-ui/core/Avatar';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            showMenu: 0
        }
    }

    iconButtonClickHandler = () => {
        this.setState({ showMenu: 1 })
    }

    render() {
        return (
            <div className="header unselectable">
                <div className="innerHeader">
                    <div className="logo">
                        Image Viewer
                </div>
                    {this.props.dispalyUserOptions === true &&
                        <div className="loggedInUserOptions">
                            <div className="search">
                                <div className="searchIcon">
                                    <SearchIcon />
                                </div>
                                <Input disableUnderline={true} placeholder="Search…" />
                            </div>
                            <div>
                                <IconButton size="small" onClick={this.iconButtonClickHandler}>
                                    <Avatar src={img}></Avatar>
                                </IconButton>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Header; 