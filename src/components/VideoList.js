import React from 'react'
import VideoItem from './VideoItem'
import { Grid } from '@material-ui/core'

const VideoList = ({ videoList, OnVideoSelect }) => {
    const listOfVideos = videoList.map((video, id) => 
        <VideoItem
        key = {id} 
        video = {video}
        OnVideoSelect = {OnVideoSelect}
        />
    )
    return (
        <Grid container spacing = {10}>
            {listOfVideos}
        </Grid>
        
        )
}


export default VideoList