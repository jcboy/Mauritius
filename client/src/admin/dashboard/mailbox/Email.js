import React from 'react';
import {Sidebar} from "../../common/Sidebar";
import Email2 from "../mail/Email2";


export const Email = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

                    <Email2 />


                </main>
            </div>
        </div>
    )
}
