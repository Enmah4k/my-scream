import React, { Component } from 'react';
import whithStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import AppIcon from '../images/icon.png'
import Typography from '@material-ui/core/Typography'

const styles = {
    form: {
        textAling: 'center'
    },

    pageTitle: {
        margin: 'auto'
    }
}

class Login extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid container className={classes.form}>
                <Grid item sm></Grid>
                <Grid item sm>
                    <img src={AppIcon} alt="icon"></img>
                    <Typography variant="h1" className={classes.pageTitle}>
                        Login 
                    </Typography>
                </Grid>
                <Grid item sm></Grid>
            </Grid>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default whithStyles(styles)(Login);
