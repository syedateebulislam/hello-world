import React, { Component } from 'react'

//The refs are used to auto focus form elements at page loading,using current DOM node.

class Refs extends Component {

    constructor(props) {
        super(props)
        //step-1
        this.inputRef = React.createRef();
    }
    
    //step-3
    componentDidMount(){
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>                       {/*step-2*/}
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default Refs