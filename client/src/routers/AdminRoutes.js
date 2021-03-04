import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {NavbarAdmin} from "../admin/components/NavbarAdmin";
import {ContentList} from "../admin/pages/ContentList";
import {AddContent} from "../admin/pages/AddContent";
import {Filters} from "../admin/pages/Filters";
import EmailList from "../admin/pages/EmailList";
import {Password} from "../admin/pages/Password";
import '../admin/styles/admin.css';
import EmailDetail from "../admin/components/EmailDetail";


export const AdminRoutes = () => {
    document.body.classList.add('admin_body');

    return (
        <div className="admin_main">
            <NavbarAdmin/>

            <Switch>
                <Route exact path="/admin/contentlist" component={ContentList}/>
                <Route exact path="/admin/addcontent" component={AddContent}/>
                <Route exact path="/admin/emaillist" component={EmailList}/>
                <Route exact path="/admin/emaillist/:emailId" component={EmailDetail}/>
                <Route exact path="/admin/filters" component={Filters}/>
                <Route exact path="/admin/password" component={Password}/>


                <Redirect to="/admin/contentlist"/>
            </Switch>
        </div>
    )
}
