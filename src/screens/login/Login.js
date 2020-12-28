import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Link} from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            userInfoIncorrect: "dispNone",
            expectedUsername: "user123",
            expectedPassword: "passcode"
        }
    }

    usernameChangeHandler = (e) => {
        this.setState({ username: e.target.value })
    }

    passwordChangeHandler = (e) => {
        this.setState({ password: e.target.value })
    }

    loginHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" })
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" })
        this.state.username && this.state.password ?
            (this.state.username !== this.state.expectedUsername || this.state.password !== this.state.expectedPassword) ? 
                this.setState({ userInfoIncorrect: "dispBlock" }) : this.setState({ userInfoIncorrect: "dispNone"}) :
            this.setState({ userInfoIncorrect: "dispNone" })
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <Card className="LoginCardStyle">
                        <CardContent>
                            <Typography className="unselectable" variant="h5">LOGIN</Typography><br />
                            <FormControl required className="formControl">
                                <InputLabel className="unselectable" htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" onChange={this.usernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className="red unselectable">required</span>
                                </FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required className="formControl">
                                <InputLabel className="unselectable" htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" onChange={this.passwordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red unselectable">required</span>
                                </FormHelperText>
                            </FormControl><br /><br />
                            <FormHelperText className={this.state.userInfoIncorrect}>
                                <span className="red unselectable">Incorrect username and/or password</span>
                            </FormHelperText><br />
                            <Link style={{textDecoration:'none'}} to={(this.state.username === this.state.expectedUsername && this.state.password === this.state.expectedPassword) ? "/home" : "/"}>
                                <Button variant="contained" color="primary" onClick={this.loginHandler}>LOGIN</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;