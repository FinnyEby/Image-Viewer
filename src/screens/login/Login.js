import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Card>
                        <CardContent>
                            <Typography variant="headline" component="h2">LOGIN</Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;