import React from 'react';
import {Redirect, Switch} from "react-router-dom";
import {NavbarAdmin} from "../admin/components/NavbarAdmin";
import {ArticleList} from "../admin/pages/ArticleList";
import {AddContent} from "../admin/pages/AddContent";
import {Filters} from "../admin/pages/Filters";
import EmailList from "../admin/pages/EmailList";
import {Credentials} from "../admin/pages/Credentials";
import '../admin/styles/admin.css';
import EmailItem from "../admin/components/EmailItem";
import ProtectedRoute from "../services/ProtectedRoute";


export const AdminRoutes = () => {
    document.body.classList.add('admin_body');

    return (
        <div className="admin_main">
            <NavbarAdmin/>

            <Switch>
                <ProtectedRoute exact path="/admin/contentlist" component={ArticleList}/>
                <ProtectedRoute exact path="/admin/addcontent" component={AddContent}/>
                <ProtectedRoute exact path="/admin/emaillist" component={EmailList}/>
                <ProtectedRoute exact path="/admin/emaillist/:emailId" component={EmailItem}/>
                <ProtectedRoute exact path="/admin/filters" component={Filters}/>
                <ProtectedRoute exact path="/admin/password" component={Credentials}/>


                <Redirect to="/admin/contentlist"/>
            </Switch>
        </div>
    )
}
