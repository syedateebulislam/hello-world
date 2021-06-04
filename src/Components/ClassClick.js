import React, { Component } from 'react'

class ClassClick extends Component {
    
    changeMessage(){
        console.log('Button clicked by class components')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.changeMessage}>Class Button</button>
            </div>
        )
    }
}

export default ClassClick
