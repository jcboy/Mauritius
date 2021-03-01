import React, {useState} from 'react';
import {Component} from 'react';
import ButtonFileUpload from "../ButtonFileUpload/ButtonFileUpload";
import axios from "axios";



 export  const Contact = ()=>  {

     // -- GET VALUES FROM FORM  -- //
     const [inputValues, setInputValues] = useState({firstname: '', lastname: '', mail: '', objet: '', message: '' });
     const handleInputChange = ({target}) => {
         setInputValues({...inputValues, [target.name]: target.value})
     }

     const handleSubmit = (event)=> {
         event.preventDefault();
         axios.post('http://localhost:8080/mails/store',{inputValues})
             .then((response) => {
                 console.log(response.data);
                 //        setMail(response.data);
             });
     }


      return (





                <div className="blockContact pt-3">
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
                                            <input className="blue form-control" type="text" name="firstname" value={inputValues.firstname} onChange={handleInputChange} placeholder="Prénom"/>
                                            <label>Prénom</label>
                                        </div>
                                        <div className="col-md-6 form-floating">
                                            <input className="blue form-control" type="text" name="lastname" value={inputValues.lastname} onChange={handleInputChange} placeholder="Nom"/>
                                            <label>Nom</label>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6 form-floating">
                                            <input className="blue form-control" type="text" name="mail" value={inputValues.mail} onChange={handleInputChange} placeholder="Email2"/>
                                            <label>Email2</label>
                                        </div>
                                        <div className="col-md-6 form-floating">
                                            <select className="form-select blue" id="monselect" name="objet" value={inputValues.objet} onChange={handleInputChange}>
                                                <option value="Question">Question</option>
                                                <option value="Proposer un article">Proposer un article</option>
                                            </select>
                                            <label>Objet (« question » ou « proposer un article »)</label>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col form-floating">
                                            <textarea className="blue form-control" name="message" value={inputValues.message} onChange={handleInputChange}  placeholder="Message"/>
                                            <label>Message</label>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col">
                                            <input className="form-control" type="file" id="formFile" />
                                            {/* <button type="button" className="pj">Pièce jointe <ButtonFileUpload/></button> */}
                                        </div>
                                    </div>

                                    <div className="row ">
                                        <div className=" col text-end">
                                            <button type="button" onClick={handleSubmit} className="btn btn-outline ">Envoyer</button>
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


 )


}

export default Contact;

