import React from 'react'

function ChildrenComponents(props) {
    return (
        <div>
        {/*Parent to child method passing flow*/}
        {/*<button onClick={props.greetHandler}>child btn</button> */}
       
        {/*Child to Parent method params passing flow */}
        <button onClick={() => props.greetHandler('child-1')}>child btn</button>    
        </div>
    )
}

export default ChildrenComponents