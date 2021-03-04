import React from 'react';
import {Sidebar} from "../Sidebar";
import EmailList2 from "./EmailList2";

export const EmailList = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

                    <EmailList2 />

                </main>
            </div>
        </div>
    )
}
