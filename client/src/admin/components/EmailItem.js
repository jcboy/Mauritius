import React from "react";
import {useParams} from "react-router-dom";
import '../styles/admin.css';
import {useQuery} from "react-query";
import fetchMail from "../../services/fetchMail";
import moment from "moment";
import {Sidebar} from "./Sidebar";

export const EmailItem = () => {

    let {id} = useParams();
    const {data: mail, status} = useQuery(id, fetchMail.getMailById);

    return <div className="container-fluid mails" style={{textAlign: "center"}}>
        <div className="row">
            <Sidebar/>
            {(status === "success") && <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="row titlerow justify-content-center">
                    <div className="col">
                        <span> Message de {mail.prenom} {mail.nom} </span>
                    </div>
                </div>

                <div className="row btn btn-secondary item mailrow hoverrow">
                    <div className="col">
                        Envoyé le : {moment(mail.Date).format('DD/MM/YYYY')}
                        <div className="row" style={{display: "flex", flexFlow: "column", textAlign: "left"}}>
                            <div className="col">
                                Objet: {mail.object}
                            </div>
                            <div className="col">
                                Contenu: {mail.message}
                            </div>
                            <div className="col">
                                Pièce jointe : {mail.pieceJointe || "Pas de pièce jointe"}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            }
        </div>
    </div>
}


export default EmailItem;
