import React, { Component } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import Link from 'react-router-dom/Link';

export class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Button color='inherit' component={Link} to="/">Home</Button>
                    <Button color='inherit' component={Link} to="/login">Login</Button>
                    <Button color='inherit' component={Link} to="/signup">SignUp</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
