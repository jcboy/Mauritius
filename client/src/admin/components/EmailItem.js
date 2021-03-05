import {Sidebar} from "./Sidebar";
import React from "react";
import {useParams} from "react-router-dom";

const EmailItem = () => {

    const {id} = useParams();


    return <div className="container-fluid">
        <div className="row">
            <Sidebar/>
            <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

            </main>
        </div>
    </div>

}

export default EmailItem;