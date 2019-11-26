import React, { Component } from 'react';
import PropTupes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI imports
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

// Icons

export class Profile extends Component {
    render() {
        const { 
            classes, 
            user: {
                credentials: { handle, createdAt, imageUrl, bio, website, location},
                loading
            }
        } = this.props;
        return (
            <div/>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

Profile.prototype = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}
export default connect(mapStateToProps)(withStyles(styles)(Profile))
