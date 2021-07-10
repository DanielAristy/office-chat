import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { auth } from '../service/firebase'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Header from '../components/Header'
import NotFound from '../pages/NotFound'
import SignUp from '../pages/Signup'
import Chat from '../pages/Chat'
import Register from '../pages/Register'

export default class AppRouter extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true
    };
  }
  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
  }

  render() {
    return (this.state.loading === true ? (
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <Router>
        <Header />
        <Switch>
          <PublicRoute path="/contact" 
          component={Contact}
          authenticated={this.state.authenticated}
          />
          <PublicRoute
            path="/login"
            component={Login}
            authenticated={this.state.authenticated}
          />
          <PublicRoute
            path="/signup"
            component={SignUp}
            authenticated={this.state.authenticated}
          />
          <PrivateRoute
            path="/chat"
            component={Chat}
            authenticated={this.state.authenticated}
          />
          <PrivateRoute
            path="/register"
            component={Register}
            authenticated={this.state.authenticated}
          />
          <Route exact path="/" component={Home} />
          <Route path="/404" component={NotFound} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    )
    )
  }
}
