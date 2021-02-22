import React, {useState, useEffect} from "react";
import axios from "axios";
import {Sidebar} from "../../common/Sidebar";
import {Component} from "react";
import {Link} from "react-router-dom";
import './../../styles/admin.css';
import moment from 'moment';


export const EmailList2 = () => {

    const [mails, setMails] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/mails')
            .then((response) => {
                console.log(response.data);
                setMails(response.data);
            });
    }, []);

    /*
    const deleteMail = (id) => {
        axios.delete( 'http://localhost:8080/mails/'+id )
            .then((response) => {
                console.log(response);
                const messages = [...mails]; // 1. new array messages
                // 2. idx = index de le message supprimé // 3. cherche le message qui a un id égal à celui qu'on cliqué
                const idx = messages.findIndex( (mail)=>mail._id === id );
                // mise à jour du tableau en supprimant le message dont l'index on a trouvé
                messages.splice(idx, 1);
                // on mat à jour le state du tableau on créant un nvo tableau
                setMails([...messages]);
            });
    }


     */

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
                    <div className="offset-md-4">0bjet</div>
                </div>
            </div>

            {mails.map((item,index) => (
                <div className="item" key={index}>
                    <Link type="button" className="btn btn-secondary  row mailrow hoverrow" to={`/admin/mails/${item._id}`}>
                        <div className="row ">
                            <div className="col-md-4">
                                 {moment(item.Date).format('DD/MM/YYYY')}
                            </div>
                            <div className="col-md-4">
                                {item.mail}
                            </div>
                            <div className="col-md-4">
                                {item.object}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}

        </div>

    )
}


/*
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
                        <div className="offset-md-4">0bjet</div>
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
    
 */

    export default EmailList2;
