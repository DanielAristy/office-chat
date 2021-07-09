import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../service/firebase'


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
                        <Link className="nav-item nav-link mr-3" exact="true" to="/contact">Contact</Link>
                        {auth().currentUser ?
                            (<Link className="nav-item nav-link mr-3" exact="true" to="/register">Register</Link>)
                            : null
                        }

                    </div>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {auth().currentUser
                            ? <div className="navbar-nav">
                                <Link className="nav-item nav-link mr-3" to="/chat">Chat Online</Link>
                                <button className="btn btn-primary mr-3" onClick={() => auth().signOut()}>Logout</button>
                            </div>
                            : <div className="navbar-nav">
                                <Link className="nav-item nav-link mr-3" to="/login">Sign In</Link>
                                <Link className="nav-item nav-link mr-3" to="/signup">Sign Up</Link>
                            </div>}
                    </div>
                </div>
            </nav>
        </header>
    )
}
