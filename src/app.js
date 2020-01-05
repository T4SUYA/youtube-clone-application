import React from 'react'
import {Grid} from '@material-ui/core'

import Youtube from './api/Youtube'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'

export default class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    handleSubmit = async (searchTerm) => {
        const response = await Youtube.get('search', { 
            params: {
                part: 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_API_KEY,
                q: searchTerm,
            }
        })
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
        console.log(response)
    }
    OnVideoSelect = (video) => {
        this.setState({selectedVideo: video })
    }
    
    render(){
        const {videos,selectedVideo} = this.state
        return (
            <Grid style={{ justifyContent: "center" }} container spacing = {10}>
                <Grid item xs={11}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit = {this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video = { selectedVideo }/>
                        </Grid>
                        <Grid item xs = {4}>
                            <VideoList videoList = {videos} OnVideoSelect = {this.OnVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}