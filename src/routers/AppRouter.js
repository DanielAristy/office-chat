import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/contact">
                    <h1>Contactanos</h1>
                </Route>
                <Route path="/login">
                    <h1>Login</h1>
                </Route>
                <Route path="/register">
                    <h1>Registrarse</h1>
                </Route>
                <Route exact path="/">
                    <h1>Home</h1>
                </Route>
                <Route path="/404">
                    <h1>404 Not Found</h1>
                </Route>
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </Router>
    )
}
