import React, { Component } from 'react'
import WithCounter from './withCounter'

class ClickCounterz extends Component {

    render() {
        const {count , incrementCounter} = this.props
        return ( 
            <button onClick= {incrementCounter}>
            {this.props.name} Clicked {count} times
            </button>)
    }
}

export default WithCounter(ClickCounterz,2)