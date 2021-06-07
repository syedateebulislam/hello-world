import React, { Component } from 'react'
import ChildrenComponents from './ChildrenComponents'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'parent-1'
        }

        this.greetParent = this.greetParent.bind(this)
    }
 
    // Parent to child method passing flow
    // greetParent(){
    //     alert(`Hello ${this.state.parentName}`)
    // }
    

    // Child to Parent method params passing flow
    greetParent(childParam){
        alert(`Hello ${this.state.parentName} from ${childParam}`)
    }

    render() {
        return (
            <div>
                <ChildrenComponents greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent