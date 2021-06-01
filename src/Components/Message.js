import React, { Component } from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message : 'Special message for you'
        }
    }

    changeMessage(){
        this.setState(
            {
                message : 'hi bruuhhh!!'
            }
        )
    }

    render(){

        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
                </div>
        ) 
        
    }

}

export default Message