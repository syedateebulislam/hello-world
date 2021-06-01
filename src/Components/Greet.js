import React from 'react';


const Greet = (props) => {
    return (
        <div>
        <h1>Hello Mr {props.name} {props.surname} via functional component</h1>
        <p>{props.children}</p>
        </div>
    )
}


export default Greet; 