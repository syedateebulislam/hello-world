import React from 'react'
import ReactDOM from 'react-dom'

//Portals can be used to show modals,tooltips,etc.

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>
            Portals Demo
        </h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
