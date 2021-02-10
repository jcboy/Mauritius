import React, {useState, useEffect} from 'react';
import axios from "axios";
import Select from 'react-select';

import {Sidebar} from "../../common/Sidebar";

import ButtonFileUploadAddContent from "../../common/ButtonFileUploadAddContent/ButtonFileUploadAddContent";
import ButtonFileUploadAddContentOtherImages
    from "../../common/ButtonFileUploadAddContentOtherImages/ButtonFileUploadAddContentOtherImages";

export const AddContent = () => {

    const [data, setData] = useState ([]);
    useEffect( () => {
        axios.get('http://localhost:8080/categories')
            .then( (response)=>{
                setData(response.data);
            } )
    }, [] );

    const [inputValues, setInputValues] = useState({title: '', subtitle: '', shortDescription:'', description:''});
    const handleInputChange = ({target}) => {
        setInputValues({ ...inputValues, [target.name] : target.value })
    }

    const [selectedValue, setSelectedValue] = useState([]);
    const handleSelectChange = (e) =>{
        setSelectedValue( e.map(x => x.value) );

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValues.title.trim().length > 3  ){
            axios.post('http://localhost:8080/actualities', {...inputValues, filters: selectedValue} )
                .then((res) => {
                    console.log(res.status);
                    setInputValues( {title: '', subtitle: '', shortDescription:'', description:''} );
                    setSelectedValue([]);
                })
        }
    }


    const handleReset = () => {
        setSelectedValue([]);

        /* Select.defaultProps= {
            value: []
        } */

        // Select.current.select.clearValue();
        // Select.value( ()=> {});

        setInputValues( {title: '', subtitle: '', shortDescription:'', description:''} );
        // setSelectedValue(null);
    }

    return (
        <div className="blockContact-AddContent pt-3 container-fluid">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <h2>Nouveau contenu</h2>
                    <div>
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-4 form-floating">
                                    <input type="text"
                                           name="title"
                                           value={inputValues.title}
                                           onChange={handleInputChange}
                                           className="grey form-control" placeholder="Titre"/>
                                    <label>Titre</label>
                                </div>
                                <div className="col-md-4 form-floating">
                                    <input type="text"
                                           name="subtitle"
                                           value={inputValues.subtitle}
                                           onChange={handleInputChange}
                                           className="grey form-control"
                                           placeholder="Sous-titre"/>
                                    <label>Sous-titre</label>
                                </div>
                                <div className="col-md-4 form-floating">
                                    <select className="form-select grey" id="monselect">
                                        <option value="valeur1">article</option>
                                        <option value="valeur2">actu</option>
                                    </select>
                                    <label>Sélectionner type de contenu ( article  ou  actu )</label>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4 form-floating mb-4">
                                    <label htmlFor="exampleDataList" className="form-label">Ajouter des filtres (apparait si article sélectionné)</label>
                                    {/*<input className="form-control" list="datalistOptions" id="exampleDataList"
                                           placeholder="Type to search..."/>*/}
                                    <Select
                                        defaultValue={[]}
                                        name="data"
                                        // value={data.filter(obj => selectedValue.includes(obj.value))}
                                        options={data.map((cat, index)=>{
                                            return { value: cat.name, label: cat.name }
                                        })}
                                        onChange={handleSelectChange}
                                        className="basic-multi-select text-dark form-control"
                                        classNamePrefix="select"
                                        placeholder=""
                                        isMulti
                                    />

                                </div>{selectedValue}

                                <div className="col-md-4 form-floating">

                                    <button type="button" className="pj"><ButtonFileUploadAddContent/></button>
                                </div>

                            </div>
                            <div className="row my-4">
                                <div className="col form-floating">
                                    <textarea name="shortDescription"
                                              onChange={handleInputChange}
                                              value={inputValues.shortDescription}
                                              className="grey form-control"  placeholder="Courte description"/>
                                    <label>Courte description</label>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col form-floating">
                                    <textarea name="description"
                                              onChange={handleInputChange}
                                              value={inputValues.description}
                                              className="grey form-control"  placeholder="Contenu"/>
                                    <label>Contenu</label>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-4">

                                    <button type="button" className="pj2"><ButtonFileUploadAddContentOtherImages/></button>
                                </div>
                            </div>

                            <div className="row ">
                                <div className="offset-8 col text-end">
                                    <button onClick={handleReset} type="button" className="btn btn-outline ">Annuler</button>
                                </div>
                                <div className=" col text-end">
                                    <button onClick={handleSubmit} type="button" className="btn-b btn ">Envoyer</button>
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
    )
}

