import React from 'react';
import {Component} from 'react';
import ButtonFileUploadAddContent from "../ButtonFileUploadAddContent/ButtonFileUploadAddContent";
import ButtonFileUploadAddContentOtherImages
    from "../ButtonFileUploadAddContentOtherImages/ButtonFileUploadAddContentOtherImages";


class AddContent extends Component {


    render() {

        let array = [ {id:1, title:'actu',  date:"05/11/1997", text:'oikdzfjplsdplsld psdplplsdl plsdpl', link:"okdfokok"},
            {id:2,  title:'actu',date:"07/03/1964", text:'oikdzfj odsokdok doksokdsk kodsodok', link:"odokfo"},
            {id:3, title:'actu', date:"03/11/1999", text:'oikdzfj dsodkosd kodskdokds okdsodsk ', link:"okfdsok"},
            {id:4,  title:'actu' ,date:"09/051997", text:'oikdzfjfd kfdodfok dokjfkdfo dfokdof', link:"okfdkf"},
        ];

        return <div className="blockContact-AddContent pt-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h1 className="white"> Mauritius  Admin </h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-2">
                    <div className="col-9 ">
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-4 form-floating">
                                    <input className="grey form-control" type="text" placeholder="Titre"/>
                                    <label>Prénom</label>
                                </div>
                                <div className="col-md-4 form-floating">
                                    <input className="grey form-control" type="text" placeholder="Sous-titre"/>
                                    <label>Nom</label>
                                </div>
                                <div className="col-md-4 form-floating">
                                    <select className="form-select grey" id="monselect">
                                        <option value="valeur1">article</option>
                                        <option value="valeur2">actu</option>
                                    </select>
                                    <label>Sélectionner type de contenu ( article  ou  actu »)</label>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 form-floating">
                                    <select className="form-select grey" id="monselect">
                                        <option value="valeur1">question</option>
                                        <option value="valeur2">proposer un article</option>
                                    </select>
                                    <label>Objet (« question » ou « proposer un article »)</label>
                                </div>

                                    <div className="col-md-6 form-floating">
                                        <input className="form-control" type="file" id="formFile" />
                                        {/* <button type="button" className="pj">Pièce jointe <ButtonFileUploadAddContent/></button> */}
                                    </div>

                            </div>
                            <div className="row mb-4">
                                <div className="col form-floating">
                                    <textarea className="grey form-control"  placeholder="Courte description"/>
                                    <label>Courte description</label>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col form-floating">
                                    <textarea className="grey form-control"  placeholder="Contenu"/>
                                    <label>Contenu</label>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <input className="form-control"  type="file" id="formFile" />
                                    {/* <button type="button" className="pj">Pièce jointe <ButtonFileUploadAddContentOtherImages/></button> */}
                                </div>
                            </div>

                            <div className="row ">
                                <div className="offset-8 col text-end">
                                    <button type="button" className="btn btn-outline ">Annuler</button>
                                </div>
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

export default AddContent;

