import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Header from '../components/Header'
import NotFound from '../pages/NotFound'
import SignUp from '../pages/Signup'

export default function AppRouter() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route exact path="/" component={Home} />
                <Route path="/404" component={NotFound} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </Router>
    )
}
