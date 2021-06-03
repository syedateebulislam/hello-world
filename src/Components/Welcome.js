import React, { Component } from 'react'

class Welcome extends Component {

    render() {
        const { name, surname } = this.props

        return (
            <div>
                <h1>Hello Mr {name} {surname} via class component</h1>
            </div>

        )
    }

}

export default Welcome