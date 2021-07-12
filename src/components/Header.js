import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../service/firebase'
import { CONSTANTS } from './Constants'


export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">{CONSTANTS.OFFICE_CHAT}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-start" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        {auth().currentUser ?
                            <Link className="nav-item nav-link mr-3" exact="true" to="/company">{CONSTANTS.NEW_COMPANY}</Link>
                            : <Link className="nav-item nav-link mr-3" exact="true" to="/contact">{CONSTANTS.CONTACT}</Link>
                        }

                    </div>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {auth().currentUser
                            ? <div className="navbar-nav">
                                <Link className="nav-item nav-link mr-3" to="/chat">{CONSTANTS.CHAT_ONLINE}</Link>
                                <button className="btn btn-primary mr-3" onClick={() => auth().signOut()}>{CONSTANTS.LOGOUT}</button>
                            </div>
                            : <div className="navbar-nav">
                                <Link className="nav-item nav-link mr-3" to="/login">{CONSTANTS.SIGN_IN}</Link>
                                <Link className="nav-item nav-link mr-3" to="/signup">{CONSTANTS.SIGN_UP}</Link>
                            </div>}
                    </div>
                </div>
            </nav>
        </header>
    )
}
