import React, {useState} from "react";
import {Component} from "react";
import {Link} from "react-router-dom";
import './../../styles/admin.css';





class EmailList2 extends Component {

    render() {


        let mails = [
            {id: 1, prenom:"Hadi1", nom:"Jamal Ahmad 1", date: "05/11/1997", mail: 'hadi1.jamalahmad@gmail.com', objet: "objet1", message: "Tempore1 quo primis auspiciis in mundanum fulgorem surgeret victura dum erunt homines Roma, ut augeretur sublimibus incrementis, foedere pacis aeternae Virtus convenit atque Fortuna plerumque dissidentes, quarum si altera defuisset, ad perfectam non venerat summitatem."},
            {id: 2, prenom:"Hadi2", nom:"Jamal Ahmad 2", date: "07/03/1964", mail: 'hadi2.jamalahmad@gmail.com', objet: "objet2", message: "Tempore2 quo primis auspiciis in mundanum fulgorem surgeret victura dum erunt homines Roma, ut augeretur sublimibus incrementis, foedere pacis aeternae Virtus convenit atque Fortuna plerumque dissidentes, quarum si altera defuisset, ad perfectam non venerat summitatem."},
            {id: 3, prenom:"Hadi3", nom:"Jamal Ahmad 3", date: "03/11/1999", mail: 'hadi3.jamalahmad@gmail.com', objet: "objet3", message: "Tempore3 quo primis auspiciis in mundanum fulgorem surgeret victura dum erunt homines Roma, ut augeretur sublimibus incrementis, foedere pacis aeternae Virtus convenit atque Fortuna plerumque dissidentes, quarum si altera defuisset, ad perfectam non venerat summitatem."},
            {id: 4, prenom:"Hadi4", nom:"Jamal Ahmad 4", date: "09/051997", mail: 'hadi4.jamalahmad@gmail.com', objet: "objet4", message: "Tempore4 quo primis auspiciis in mundanum fulgorem surgeret victura dum erunt homines Roma, ut augeretur sublimibus incrementis, foedere pacis aeternae Virtus convenit atque Fortuna plerumque dissidentes, quarum si altera defuisset, ad perfectam non venerat summitatem."},
        ];

        return (
            <div className="container mails">

                <div className="row titlerow col-md-12">
                    <div className="col-md-4">
                        <div className="offset-md-5">Date d'envoi</div>
                    </div>
                    <div className="col-md-4">
                        <div className="offset-md-5">Mail</div>
                    </div>
                    <div className="col-md-4">
                        <div className="offset-md-4">  0bjet</div>
                    </div>
                </div>

                {mails.map(item => (
                    <div className="item" key={mails}>
                        <Link type="button" className="btn btn-secondary  row mailrow hoverrow" to={'/admin/emaillist/' + item.id}>
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
                ))}

            </div>

    )


    }


    }

    export default EmailList2;
