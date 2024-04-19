import React from 'react'

function AppHeader() {
    return (
        <nav className="main-header navbar navbar-expand navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href={()=>{}} role="button"><i className="fas fa-bars"></i></a>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button type="submit" className="btn btn-primary signupbtn">Sign Up</button>
                </li>
            </ul>
        </nav>
    )
}

export default AppHeader
