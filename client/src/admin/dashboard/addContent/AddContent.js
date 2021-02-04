import React, {Component} from 'react';
import {Sidebar} from "../../common/Sidebar";
import ButtonFileUploadAddContent from "../../common/ButtonFileUploadAddContent/ButtonFileUploadAddContent";
import ButtonFileUploadAddContentOtherImages
    from "../../common/ButtonFileUploadAddContentOtherImages/ButtonFileUploadAddContentOtherImages";

import axios from 'axios';

class AddContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalFilters : [],
            page: '/actualities',
            filters: []
        }
        this.changePage = this.changePage.bind(this)
        this.saveArticle = this.saveArticle.bind(this)
        this.getFilters = this.getFilters.bind(this)
    }

    componentDidMount() {
    }


    changePage(event) {
        const option = event.target.value;
        console.log(option);
    }

    saveArticle() {
        axios.post('http://localhost/' + this.state.page + 'create').then(() => {

        })
    }

    getFilters(event) {

    }

    render() {
        console.log(this.state.filters);
        return <div className="blockContact-AddContent pt-3 container-fluid">
            <div className="row">
                <Sidebar/>


                <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <div>
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-4 form-floating">
                                    <input className="grey form-control" type="text" placeholder="Titre"/>
                                    <label>Titre</label>
                                </div>
                                <div className="col-md-4 form-floating">
                                    <input className="grey form-control" type="text" placeholder="Sous-titre"/>
                                    <label>Sous-titre</label>
                                </div>


                                <div className="col-md-4 form-floating">
                                    <select className="form-select grey" id="monselect" onChange={this.changePage}>
                                        <option value="/actualities">actualities</option>
                                        <option value="/activities">activities</option>
                                    </select>
                                    <label>Sélectionner type de contenu ( article ou actu »)</label>
                                </div>


                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 form-floating">
                                    <label htmlFor="exampleDataList" className="form-label">Ajouter des filtres
                                        (apparait si article sélectionné)</label>
                                    <input className="form-control" onChange={this.getFilters} list="datalistOptions" id="exampleDataList"
                                           placeholder="Type to search..."/>
                                    <datalist id="datalistOptions" >
                                        <option value="Filter 1"></option>
                                        <option value="Filter 2"></option>
                                        <option value="Filter 3"></option>
                                        <option value="Filter 4"></option>
                                    </datalist>

                                </div>

                                <div className="col-md-4 form-floating">

                                    <button type="button" className="pj"><ButtonFileUploadAddContent/></button>
                                </div>

                            </div>
                            <div className="row mb-4">
                                <div className="col form-floating">
                                    <textarea className="grey form-control" placeholder="Courte description"/>
                                    <label>Courte description</label>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col form-floating">
                                    <textarea className="grey form-control" placeholder="Contenu"/>
                                    <label>Contenu</label>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-4">

                                    <button type="button" className="pj2"><ButtonFileUploadAddContentOtherImages/>
                                    </button>
                                </div>
                            </div>

                            <div className="row ">
                                <div className="offset-8 col text-end">
                                    <button type="button" className="btn btn-outline ">Annuler</button>
                                </div>
                                <div className=" col text-end">
                                    <button type="button" className="btn-b btn" onClick={this.saveArticle}>Envoyer
                                    </button>
                                </div>
                            </div>


                        </form>
                    </div>
                </main>
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

