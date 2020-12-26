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


class Login extends Component {
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
                                <Input id="username" type="text"/>
                            </FormControl><br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password"/>
                            </FormControl><br /><br />
                            <Button variant="contained" color="primary">LOGIN</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;