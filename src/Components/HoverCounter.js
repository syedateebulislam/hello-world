import React, { Component } from 'react'
import WithCounter from './withCounter'

class HoverCounter extends Component {

    render() {
        const {count , incrementCounter} = this.props
        return ( 
            <p onMouseOver= {incrementCounter}>
            Hovered {count} times</p>)
    }
}

export default WithCounter(HoverCounter,3)