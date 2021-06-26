import React from 'react'

//Memo is functional component, with same features as PureComponent (class component)

function MemoComp({name}) {
    console.log('Rendering Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}
    
export default React.memo(MemoComp)
