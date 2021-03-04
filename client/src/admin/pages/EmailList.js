import React from "react";
import {Link} from "react-router-dom";
import '../styles/admin.css';
import {Sidebar} from "../components/Sidebar";
import {useQuery} from "react-query";
import FetchMail from "../../admin/pages/"


const EmailList = () => {

    const {data : mails, status} = useQuery("email", FetchMail)

    return <div className="container-fluid">
        <div className="row">
            <Sidebar/>
            <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container mails">
                    <div className="row titlerow col-md-12">
                        <div className="col-md-4">
                            <div className="offset-md-5">Date d'envoi</div>
                        </div>
                        <div className="col-md-4">
                            <div className="offset-md-5">Mail</div>
                        </div>
                        <div className="col-md-4">
                            <div className="offset-md-4"> 0bjet</div>
                        </div>
                    </div>

                    {
                        mails.map(item => (
                            <div className="item" key={mails}>
                                <Link type="button" className="btn btn-secondary  row mailrow hoverrow"
                                      to={'/admin/emaillist/' + item.id}>
                                    <div className="row ">
                                        <div className="col-md-4">
                                            {item.date}
                                        </div>
                                        <div className="col-md-4">
                                            {item.mail}
                                        </div>
                                        <div className="col-md-4">
                                            {item.objet}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    </div>
}

export default EmailList;
