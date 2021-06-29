import React, { Component } from 'react'

class HoverCounterTwo extends Component {

    render() {
        const {count,incrementCount} = this.props
        return (
           <p onMouseOver={incrementCount}>
            Hovered {count} times
           </p>
        )
    }
}

export default HoverCounterTwo
