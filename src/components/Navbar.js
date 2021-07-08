import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" exact="true" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link active" exact="true" to="/register">Register</Link>
                    </li>
                    <li>
                        <Link className="nav-link active" exact="true" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="nav-link active" exact="true" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
