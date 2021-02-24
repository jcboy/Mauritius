import React, {useState, useEffect} from 'react';
import axios from "axios";
import Select from 'react-select';

import {Sidebar} from "../../common/Sidebar";
import {AddImage} from "./AddImage";

export const AddContent = () => {

    // -- CHOOSE TYPE OF CONTENT  -- //
    const [contentType, setContentType] = useState('activities');

    // -- IMAGE (main) -- //
    const [image, setImage] = useState('');

    // -- GET FILTERS FROM DATABASE  -- //
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/categories')
            .then((response) => {
                setData(response.data);
            })
    }, []);

    // -- GET VALUES FROM FORM  -- //
    const [inputValues, setInputValues] = useState({title: '', subtitle: '', shortDescription: '', description: ''});
    const handleInputChange = ({target}) => {
        setInputValues({...inputValues, [target.name]: target.value})
    }

    // -- FILTER SELECTOR  -- //
    const [selectedValue, setSelectedValue] = useState([]);
    const handleSelectChange = (e) => {
        setSelectedValue(e.map(x => x.value));
    }

    //console.dir();
    // -- RESET FORM  -- //
    const [emptyInput, setEmptyInput] = useState(false);
    const reset = (value) => emptyInput === true ? [] : value;
    const handleReset = () => {
        document.getElementById('fileSelector').value = "";

        setSelectedValue([]);

        setInputValues({title: '', subtitle: '', shortDescription: '', description: ''});

        setEmptyInput(!emptyInput); // On modifie l'état initial (false) pour le passer à true
        reset();  // execution de fn reset: les inputs sont réinitialisés
        setEmptyInput(!emptyInput); // Retour à l'état initial : les inputs ont bien été réinitialisés, on peut retourner à l'état normal
    }

    // -- SUBMIT FORM  -- //
    const [msgConfirm, setMsgConfirm] = useState(false);

    let endpoint = contentType === 'activities' ?  'activities/create' : 'actualities';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValues.title.trim().length > 3) {
            axios.post(`http://localhost:8080/${endpoint}`,
                {...inputValues, mainImage:image, tags: selectedValue }
                )
                .then((res) => {
                    console.log(res.status);
                    handleReset();
                    if(res.status === 200 || res.status === 201) {setMsgConfirm(!msgConfirm);}
                })
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
                                <select name="typeOfContent" onChange={(e) => setContentType(e.target.value)} id="monselect" className="form-select grey">
                                    <option value="activities">article</option>
                                    <option value="actualities">actualité</option>
                                </select>
                                <label>Sélectionner type de contenu</label>
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

                            <div className="col-md-4 mb-4 d-flex align-items-end">
                                <AddImage setImage={setImage}  />
                            </div>
                        </div>

                        {contentType === 'actualities' &&
                            <div className="row my-4">
                                <div className="col-md-8 form-floating shortDescription">
                                    <textarea name="shortDescription"
                                              onChange={handleInputChange}
                                              value={inputValues.shortDescription}
                                              className="grey form-control" placeholder="Courte description"/>
                                    <label>Courte description</label>
                                </div>
                            </div>
                        }

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

                                {/*<button type="button" className="pj2">
                                </button>*/}
                            </div>
                        </div>

                        <div className="row ">
                            <div className="offset-8 col text-end">
                                <button onClick={handleReset} type="button" className="btn btn-outline ">Annuler </button>
                                <button onClick={handleSubmit} type="button" className="btn-primary btn ms-4">Valider </button>
                            </div>
                        </div>

                    </form>

                    { msgConfirm &&
                        <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
                            <strong>Bonne nouvelle!</strong> Votre contenu a bien été crée.
                            <button type="button" onClick={() => { setMsgConfirm(!msgConfirm) }} className="btn-close" aria-label="Close">&nbsp;</button>
                        </div>
                    }
                </main>

                <div className="row footer mt-5">
                    <div className=" col text-center white">Copyright 2020 - mentions légales</div>
                </div>
            </div>
        </div>
    )
}

