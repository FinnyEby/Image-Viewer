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


class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            usernameRequired: "dispNone",
            passwordRequired: "dispNone"
        }
    }

    usernameChangeHandler = (e) => {
        this.setState({username: e.target.value})
    }

    passwordChangeHandler = (e) => {
        this.setState({password: e.target.value})
    }

    loginHandler = () => {
        this.state.username == "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"})
        this.state.password == "" ? this.setState({passwordRequired: "dispBlock"}) : this.setState({passwordRequired: "dispNone"})
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">LOGIN</Typography><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" onChange={this.usernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" onChange={this.passwordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl><br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginHandler}>LOGIN</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;