import React from 'react'

import {Paper, TextField} from '@material-ui/core'

export default class SearchBar extends React.Component {

    state = {
        seachTerm: '',
    }

    handleSubmit = (e) =>{
        const {seachTerm} = this.state
        const {onFormSubmit} = this.props

        onFormSubmit(seachTerm)

        e.preventDefault()
    }

    handleChange = (e) => this.setState({seachTerm: e.target.value})     

    render(){
        return (
            <Paper elevation={6} style={{ padding: "25px" }}>
                <form onSubmit = {this.handleSubmit}>
                    <TextField 
                    fullWidth 
                    label="Search..." 
                    onChange = {this.handleChange}
                    />
                </form>
            </Paper>
        )
    }
}