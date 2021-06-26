import React, { Component } from 'react'

/*
1-Error boundries are React component that catch JavaScript error
in their child component tree,log those errors, and display a fall-back UI.
2-The placement of the Error Boundry also atters,as it controls
if the entire app should have the fall back UI or just the component 
causing the problem.
*/

class ErrorBoundry extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    

    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }

    render() {
        if(this.state.hasError){
            return (<h1> Something went wrong</h1>        )
        }
        return  this.props.children
    }
}

export default ErrorBoundry
