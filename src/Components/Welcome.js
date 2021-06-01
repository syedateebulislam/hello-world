import React, { Component } from 'react'

class Welcome extends Component{

    render(){

        return <h1>Hello Mr {this.props.name} {this.props.surname} via class component</h1>
        
    }

}

export default Welcome