import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments: '',
             topic: 'React'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }
    
    handleCommentsChange = (event) => {
        this.setState({
            comments : event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }
    
    handleSubmit = (event) => {
        alert(`${this.state.username} ,${this.state.comments},${this.state.topic}`)
        event.preventDefault() //will prevent default submission of form & show data after alert
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>username</label>&nbsp;
                    <input 
                    type = 'text' 
                    value = {this.state.username} 
                    onChange={this.handleUsernameChange}
                    />
               </div>
               <div>
                    <label>comments</label>&nbsp;
                    <textarea 
                    type = 'text' 
                    value = {this.state.comments} 
                    onChange={this.handleCommentsChange}
                    />
                </div>
                <div>
                    <label>topics</label>&nbsp;
                    <select  value = {this.state.topic} onChange={this.handleTopicChange}>
                        <option value = 'React'> React </option>
                        <option value = 'Angular'> Angular </option>
                        <option value = 'Vue'> Vue </option>
                    </select>
                </div>
                <button type = 'submit' onClick> Submit </button>
                </form>
            </div>
        )
    }
}

export default Form
