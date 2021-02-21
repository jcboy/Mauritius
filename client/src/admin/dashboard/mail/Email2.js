import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link,useParams} from "react-router-dom";
import './../../styles/admin.css';
import FileUploadMailAttachement from "./FileUploadMailAttachement";



export const Email2 = () => {

    const [mail, setMail] = useState({});



    let {mailId} = useParams();

    useEffect(() => {

        axios.get(`http://localhost:8080/mails/${mailId}`)
            .then((response) => {
                console.log(response.data);
                setMail(response.data);
            });
    }, []);


    return (
        <div className="container mails">

            <div className="row titlerow col-md-12">
                <div className="col-md-4">
                    <div className="offset-md-4"></div>
                </div>
                <div className="col-md-4">
                    <div className="offset-md-5">Message de {mail.prenom}  {mail.nom}</div>
                </div>
                <div className="col-md-4">
                    <div className="offset-md-4"></div>
                </div>
            </div>


               <div className="item" key={mail}>
               <Link  className="btn btn-secondary  row mailrow hoverrow">
                    <div className="row ">
                        <div className="col-md-4" className="row">
                           Envoyé le  { mail.Date }
                            <div className="row">
                                Objet:  {mail.object}

                            </div>
                            <div className="row">
                              Contenu:   {mail.message}
                            </div>
                            <div className="row">
                                Pièce jointe : {  }
                                <div className="offset-md-7" className="row">
                                    <FileUploadMailAttachement/>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">


                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>
                </Link>
            </div>


        </div>

    )
}


export default Email2;









