import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Register from '../components/Register'

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/" component={Home} />
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
