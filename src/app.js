import React from 'react'
import {Grid} from '@material-ui/core'

import Youtube from './api/Youtube'
import {SearchBar, VideoDeatail, VideoList} from './components'
export default class App extends React.Component {
    
    render(){
        return (
            <Grid justify = 'center' container spacing = {16}>
                <Grid item xs={12}>
                    <Grid container xs={16}>
                        <Grid item xs={12}>
                            {/* Search Bar */}
                        </Grid>
                        <Grid item xs={8}>
                            {/* Video Detail */}
                        </Grid>
                        <Grid item xs = {4}>
                            {/* Video List */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}