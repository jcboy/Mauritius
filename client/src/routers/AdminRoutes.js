import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import {NavbarAdmin} from "../admin/common/NavbarAdmin";
import {ContentList} from "../admin/dashboard/contentListe/ContentList";
import AddContent from "../admin/dashboard/addcontent/AddContent";
import {Filters} from "../admin/dashboard/filters/Filters";
import {EmailList} from "../admin/dashboard/mailbox/EmailList";
import {Email} from "../admin/dashboard/mailbox/Email";
import {Password} from "../admin/dashboard/password/Password";
import '../admin/styles/admin.css';


export const AdminRoutes = () => {
    document.body.classList.add('admin_body');

    return (
        <div className="admin_main">
            <NavbarAdmin/>

            <Switch>
                <Route exact path="/admin/contentlist" component={ ContentList }/>
                <Route exact path="/admin/addcontent" component={ AddContent }/>
                <Route exact path="/admin/emaillist" component={ EmailList }/>
                <Route exact path="/admin/emaillist/:emailId" component={ Email }/>
                <Route exact path="/admin/filters" component={ Filters }/>
                <Route exact path="/admin/password" component={ Password }/>


                <Redirect to="/admin/contentlist" />
            </Switch>
        </div>
    )
}
