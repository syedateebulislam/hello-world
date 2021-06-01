import React, { Component } from 'react'

export class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0 
        }
    }
    
    increment(){
        // // Lesson 1- Always make use of setState and never modify the state directly.
        // //this.state = this.state +1
        // this.setState(
        // {
        //     count: this.state.count + 1
        // },
        // () => {
        //     /* Lesson 2 - If any code need to be called after the setState method, 
        //      Place that code in the call back function which is the second
        //     argument to the setState method.*/
        //     console.log('callback value',this.state.count)
        // }
        // )=
        // console.log(this.state.count)

        /*When state need to be updated based on previous state value,
        pass in a function as an argument instead of the regular object*/
        this.setState((prevState,props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
            <div>Counter - {this.state.count}</div>
            <button onClick={() =>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter