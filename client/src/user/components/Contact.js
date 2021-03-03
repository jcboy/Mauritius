import React, {Component} from 'react';

class Contact extends Component {

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
                                    <input className="blue form-control" type="text" placeholder="Prénom"/>
                                    <label>Prénom</label>
                                </div>
                                <div className="col-md-6 form-floating">
                                    <input className="blue form-control" type="text" placeholder="Nom"/>
                                    <label>Nom</label>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 form-floating">
                                    <input className="blue form-control" type="text" placeholder="Email2"/>
                                    <label>Email2</label>
                                </div>
                                <div className="col-md-6 form-floating">
                                    <select className="form-select blue" id="monselect">
                                        <option value="valeur1">question</option>
                                        <option value="valeur2">proposer un article</option>
                                    </select>
                                    <label>Objet (« question » ou « proposer un article »)</label>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col form-floating">
                                    <textarea className="blue form-control" placeholder="Message"/>
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
                                    <button type="button" className="btn btn-outline ">Envoyer</button>
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

