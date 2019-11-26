import React, { Component } from 'react';
import whithStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
    form: {
        textAling: 'center'
    },
    pageTitle: {
        margin: '0 auto',
        textAling: 'center'
    },
    image: {
        width: 100,
        margin: '20px auto 20px auto',
        textAling: 'center'
    }
}

class Login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <img src={AppIcon} alt="icon" className={classes.image}/>
                    <Typography variant="h3" color={'secondary'} className={classes.pageTitle}>
                        Login 
                    </Typography>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default whithStyles(styles)(Login);
