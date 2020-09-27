import React from 'react'
import {Route, Redirect} from 'react-router-dom'

interface AuthenticatedRouteProps extends React.ComponentProps<typeof Route> {
    authenticated: boolean; 
    pass: JSX.Element
    fail?: JSX.Element
}

// Wrapper for <Route> that redirects to the login screen
// if the user is not yet authenticated.

export default function AuthenticatedRoute(props: AuthenticatedRouteProps) {
    const {authenticated, pass, fail, ...others} = props;
    const failComponent = fail || <Redirect to='/' />
    return (
        <Route {...others} render={() => authenticated ? pass : failComponent} />
    )
}