import React, { Component } from 'react'
import CompF from './CompF'
import UserContext from './userContext'


class CompE extends Component {
    render() {
        return (
            <div>
                Component E context {this.context}
                <CompF/>
            </div>
        )
    }
}

CompE.contextType = UserContext

export default CompE