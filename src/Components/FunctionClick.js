import React from 'react'

function FunctionClick() {

    function changeMessage(){
        console.log('Button clicked by functional components')
    }

    return (
        <div>
            <button onClick={changeMessage}>Click Here</button>            
        </div>
    )
}

export default FunctionClick