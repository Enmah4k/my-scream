import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Axios from 'axios';

// Components
import Scream from '../comps/Scream';

export class Home extends Component {
    state = { screams: null }

    componentDidMount(){
        Axios.get('/screams')
        .then(res => {
            this.setState({
                screams: res.data
            })
        }).catch(err => console.log(err))
    }

    render() {
        let recentScreamsMarkUp = this.state.screams ? (
            this.state.screams.map(scream => <Scream key={scream.screamId} scream={scream}/>)
        ) : <p>Loading...</p>

        return (
        <Grid container spacing={16}>
            <Grid item sm={8} xs={12}>
                {recentScreamsMarkUp}
            </Grid>
            <Grid item sm={4} xs={12}>
                <p>Profile</p>
            </Grid>
        </Grid>
        )
    }
}

export default Home
