import React, {useState, useEffect} from 'react';
import axios from "axios";
import Select from 'react-select';

import {Sidebar} from "../../common/Sidebar";

import ButtonFileUploadAddContentOtherImages
    from "../../common/ButtonFileUploadAddContentOtherImages/ButtonFileUploadAddContentOtherImages";

import {StartUploading} from "./StartUploading";

export const AddContent = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/categories')
            .then((response) => {
                setData(response.data);
            })
    }, []);

    const [inputValues, setInputValues] = useState({title: '', subtitle: '', shortDescription: '', description: ''});
    const handleInputChange = ({target}) => {
        setInputValues({...inputValues, [target.name]: target.value})
    }

    // -- FILTER SELECTOR  -- //
    const [selectedValue, setSelectedValue] = useState([]);
    const handleSelectChange = (e) => {
        setSelectedValue(e.map(x => x.value));
    }

    // -- RESET FORM  -- //
    const [emptyInput, setEmptyInput] = useState(false);
    const reset = (value) => emptyInput === true ? [] : value;
    const handleReset = () => {
        setSelectedValue([]);

        setEmptyInput(!emptyInput);
        reset();
        setEmptyInput(!emptyInput);

        setInputValues({title: '', subtitle: '', shortDescription: '', description: ''});
    }

    // -- SUBMIT FORM  -- //
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValues.title.trim().length > 3) {
            axios.post('http://localhost:8080/actualities', {...inputValues, filters: selectedValue})
                .then((res) => {
                    console.log(res.status);
                    handleReset()
                })
        }
    }

    const [contentType, setContentType] = useState('activities');

    // -- IMAGE SELECTOR  -- //
    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if(file) {
            return StartUploading (file);
        }
    }

    return (
        <div className="blockContact-AddContent pt-3 container-fluid">
            <div className="row">
                <Sidebar/>
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <h2>Nouveau contenu - {contentType}</h2>

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
                                <select name="typeOfContent" onChange={(e) => setContentType(e.target.value)}
                                        className="form-select grey"
                                        id="monselect">
                                    <option value="activities">article</option>
                                    <option value="actualities">actu</option>
                                </select>
                                <label>Sélectionner type de contenu ( article ou actu )</label>
                            </div>
                        </div>

                        <div className="row mb-3">
                            {contentType === 'activities' && (
                                <div className="col-md-4 form-floating mb-4">
                                    <label htmlFor="exampleDataList" className="form-label">Ajouter des filtres à votre article</label>
                                    <Select
                                        defaultValue={[]}
                                        name="data"
                                        value={reset()}
                                        options={data.map((cat, index) => {
                                            return {value: cat.name, label: cat.name}
                                        })}
                                        onChange={handleSelectChange}
                                        className="basic-multi-select text-dark form-control"
                                        classNamePrefix="select"
                                        placeholder=""
                                        isMulti
                                    />
                                </div>
                                )
                            }

                            <div className="col-md-4 form-floating">
                                <button onClick={handlePictureClick} type="button" className="btn btn-primary">ddd</button>
                                <input id="fileSelector" name="file" type="file"  onChange={handleFileChange} />
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md-8 form-floating shortDescription">
                                <textarea name="shortDescription"
                                          onChange={handleInputChange}
                                          value={inputValues.shortDescription}
                                          className="grey form-control" placeholder="Courte description"/>
                                <label>Courte description</label>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col form-floating">
                                <textarea name="description"
                                          onChange={handleInputChange}
                                          value={inputValues.description}
                                          className="grey form-control" placeholder="Contenu"/>
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
                                <button onClick={handleReset} type="button"
                                        className="btn btn-outline m-e-4">Annuler
                                </button>

                                <button onClick={handleSubmit} type="button" className="btn-primary btn ">Valider
                                </button>
                            </div>
                        </div>

                    </form>

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

