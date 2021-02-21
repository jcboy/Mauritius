import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {Login} from "../admin/auth/Login";

export const AuthRoutes = () => {

    return (
        <div className="auth_main">
            {
                document.body.classList.add('auth_body')
            }
            <Switch>
                <Route exact path="/login" component={Login}/>

                <Redirect to="/login"/>
            </Switch>
        </div>
    )
}