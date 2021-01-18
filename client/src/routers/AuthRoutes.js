import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import {Login} from "../admin/auth/Login";

export const AuthRoutes = () => {
    document.body.classList.add('auth_body');

    return (
        <div className="auth_main">
            <Switch>
                <Route exact path="/login" component={ Login }/>

                <Redirect to="/login" />
            </Switch>
        </div>
    )
}