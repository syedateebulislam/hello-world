import React from 'react'

function Person({personProp}) {
    return (
        <div>
            <h2>Hi my name is {personProp.name} & i know {personProp.skill}</h2>
        </div>
    )
}

export default Person