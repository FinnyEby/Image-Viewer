import './Header.css';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import img from '../../assets/finn.png'
import Avatar from '@material-ui/core/Avatar';

const Header = (props) => {

    const [anchorEl, setAnchorE1] = React.useState(null)
    
    const handleClick = (event) => {
        setAnchorE1(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorE1(null);
    };

        return (
            <div className="header unselectable">
                <div className="innerHeader">
                    <div className="logo">
                        Image Viewer
                </div>
                    <div className="loggedInUserOptions">
                        {props.dispalySearchBar && <div className="search">
                            <div className="searchIcon">
                                <SearchIcon />
                            </div>
                            <Input disableUnderline={true} placeholder="Search…" />
                        </div>}
                        {props.displayUserProfileIcon && <div>
                            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} size="small" >
                                <Avatar src={img}></Avatar>
                            </IconButton>
                            <Menu
                                id="profileMenu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>My Account</MenuItem>
                                <hr />
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>}
                    </div>
                </div>
            </div>
        )
}

export default Header; 