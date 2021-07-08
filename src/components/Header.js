import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">OfficeChat</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-start" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link mr-3" exact to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link mr-3" to="/login">Sign In</Link>
                        <Link className="nav-item nav-link mr-3" to="/signup">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
