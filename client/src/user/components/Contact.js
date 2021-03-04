import React, {Component} from 'react';
import FetchMail from "../../services/fetchMail";

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            prenom: "",
            nom: "",
            mail: "",
            object: "question",
            message: "",
        }
    }

    async postMail() {
        try {
            const response = await FetchMail.postMail(this.state);
            if (response) {
                this.setState({
                    prenom: "",
                    nom: "",
                    mail: "",
                    object: "question",
                    message: "",
                });
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    render() {
        return <div className="blockContact pt-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h1 className="white"> Mauritius - Contact </h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-2">
                    <div className="col-9 ">
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6 form-floating">
                                    <input className="blue form-control"
                                           id="prenom" type="text"
                                           placeholder="Prénom"
                                           onChange={(event) => {
                                               this.setState({
                                                   prenom: event.target.value
                                               })
                                           }}
                                    />
                                    <label>Prénom</label>
                                </div>
                                <div className="col-md-6 form-floating">
                                    <input className="blue form-control"
                                           id="nom" type="text" placeholder="Nom"
                                           onChange={(event) => {
                                               this.setState({
                                                   nom: event.target.value
                                               })
                                           }}
                                    />
                                    <label>Nom</label>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 form-floating">
                                    <input className="blue form-control"
                                           id="mail" type="text" placeholder="EmailList"
                                           onChange={(event) => {
                                               this.setState({
                                                   mail: event.target.value
                                               })
                                           }}
                                    />
                                    <label>EmailList</label>
                                </div>
                                <div className="col-md-6 form-floating">
                                    <select className="form-select blue" id="object"
                                            onChange={(event) => {
                                                this.setState({
                                                    object: event.target.value
                                                })
                                            }}>
                                        <option value="question">question</option>
                                        <option value="suggestion">proposer un article</option>
                                    </select>
                                    <label>Objet (« question » ou « suggestion »)</label>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col form-floating">
                                    <textarea className="blue form-control"
                                              id="message" placeholder="Message"
                                              onChange={(event) => {
                                                  this.setState({
                                                      message: event.target.value
                                                  })
                                              }}/>
                                    <label>Message</label>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <input className="form-control" type="file" id="formFile"/>
                                    {/* <button type="button" className="pj">Pièce jointe <ButtonFileUpload/></button> */}
                                </div>
                            </div>
                            <div className="row ">
                                <div className=" col text-end">
                                    <button type="button"
                                            className="btn btn-outline"
                                            onClick={this.postMail.bind(this)}>Envoyer
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row footer">
                    <div className=" col text-center">
                        <a className="nav-link white" href="https://fr.lipsum.com/feed/html">Copyright 2020 -
                            mentions légales</a>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Contact;

