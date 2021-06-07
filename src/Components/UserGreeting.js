import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }

//conditional rendering - 3
    render() {
        return(
            this.state.isLoggedIn?
            <div> Welcome Ateeb </div>:
            <div> Welcome User  </div>    
        )
    }

//conditional rendering - 2
    // render() {
    //     let message
    //     if(this.state.isLoggedIn){
    //         message =  <div> Welcome Ateeb </div>
    //     }
    //     else
    //     {
    //         message = <div>  Welcome User  </div>
    //     }

    //     return <div>{message}</div>
    // }

//conditional rendering - 1
    // render() {
    //     if(this.state.isLoggedIn){
    //         return  <div> Welcome Ateeb </div>
    //     }
    //     else
    //     {
    //         return <div>  Welcome User  </div>
    //     }
    // }
}

export default UserGreeting