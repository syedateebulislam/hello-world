import React from 'react'

    const heading = {
        fontSize : '72px',
        color : 'blue'
    }

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
