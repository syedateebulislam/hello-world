import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        //Binding of method(personal)
        //this.changeMessage = this.changeMessage.bind(this)
    }
    
    changeMessage(){
        this.setState({
            message: 'Bye'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.changeMessage}>State Change Button</button>*/}
                <button onClick={() => this.changeMessage()}>State Change Button</button>
            </div>
        )
    }
}

export default EventBind