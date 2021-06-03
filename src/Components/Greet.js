import React from 'react';


const Greet = (props) => {
    const {name,surname,children} = props
    return (
        <div>
        <h1>Hello Mr {name} {surname} via functional component</h1>
        <p>{children}</p>
        </div>
    )
}


export default Greet;