import React from "react";
import {Link} from "react-router-dom";
import '../styles/admin.css';
import {Sidebar} from "../components/Sidebar";
import {queryCache, useMutation, useQuery} from "react-query";
import FetchMail from "../../services/mails";
import fetchMail from "../../services/mails";

const mailStyle = {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center"
}


const EmailList = () => {

    const {data: mails, status} = useQuery("mails", FetchMail.getMails);

    const [deleteMail] = useMutation(fetchMail.deleteMailById, {
        onSuccess: (response) => {
            queryCache.setQueryData("mails", (current) => current.filter((email) => {
                    return email._id !== response.data._id;
                })
            )
        }
    })


    return <div className="container-fluid">
        <div className="row">
            <Sidebar/>
            <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container mails">
                    <div className="row titlerow col-md-12 d-flex no-wrap">
                        <div className="col text-center">Date d'envoi</div>
                        <div className="col text-center">Mail</div>
                        <div className="col text-center"> Objet</div>
                        <div className="text-center" style={{width: "6.7em"}}> &nbsp; </div>
                    </div>
                    {
                        (status === "success") && mails.map((mail) => (
                            <div key={mail._id} className="btn btn-secondary row d-flex no-wrap mailrow">
                                <div className="col" style={mailStyle}>
                                    {mail.createdAt.slice(0, 10)}
                                </div>
                                <div className="col" style={mailStyle}>
                                    {mail.mail}
                                </div>
                                <div className="col" style={mailStyle}>
                                    {mail.object}
                                </div>
                                <div className="col-md-1" style={mailStyle}>
                                    <button type="button"
                                            className="btn btn-outline hoverrow"
                                            onClick={async () => {
                                                return await deleteMail(mail._id)
                                            }}>Supprimer btn
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    </div>
}

export default EmailList;
