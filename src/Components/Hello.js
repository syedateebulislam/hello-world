import React from 'react'

const Hello = () => {
    //Below is JSX -
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Ateeb</h1>
    //     </div>
    // )

    //this is element generation without JSX(its being called always in backend during JSX)
    return React.createElement(
        'div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,'Hello Ateeb')
        
    )
}

export default Hello