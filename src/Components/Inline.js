import React from 'react'

    const heading = {
        fontSize : '72px',
        color : 'blue'
    }

{/*
simple .css file can get overwrite or mishandled any time-like error class.
But .module.css file will only work within it's scope.Like its working on app.js but not here.
*/}

function Inline() {
    return (
        <div>
            <h1 className='error'>error</h1>
            {/*<h1 className={styles.success}>success</h1>*/}
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
