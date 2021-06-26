import React, { PureComponent } from 'react'

/*
A pure component implements the ShouldComponentUpdate lifecycle method,
by performing a shallow comparison on the props and the state of the
component.
If there is no difference, the component is not re-rendered - performance boost.
*/

class PureComp extends PureComponent {
    render() {
        console.log('purecomp logged')
        return (
            <div>
                pure component {this.props.name}
            </div>
        )
    }
}

export default PureComp