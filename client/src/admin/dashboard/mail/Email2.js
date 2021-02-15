import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import './../../styles/admin.css';



export const Email2 = () => {

    const [mail, setMail] = useState({});


    useEffect(() => {

        axios.get('http://localhost:8080/mails')
            .then(({data}) => {
                console.log(data);
                setMail(data);
            });
    }, []);


    return (
        <div className="container mails">

            <div className="row titlerow col-md-12">
                <div className="col-md-4">
                    <div className="offset-md-5">Date d'envoi</div>
                </div>
                <div className="col-md-4">
                    <div className="offset-md-5">Message</div>
                </div>
                <div className="col-md-4">
                    <div className="offset-md-4">0bjet</div>
                </div>
            </div>


            <div className="item" key={mail}>
                <Link type="button" className="btn btn-secondary  row mailrow hoverrow">
                    <div className="row ">
                        <div className="col-md-4">
                            {mail.date}
                        </div>
                        <div className="col-md-4">
                            {mail.message}
                        </div>
                        <div className="col-md-4">
                            {mail.object}
                        </div>
                    </div>
                </Link>
            </div>


        </div>

    )
}


export default Email2;









