import React from 'react'
import './myStyles.css'


function Stylesheets(props) {
    let propClass = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${propClass} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheets
