import React, {useState} from 'react';
import {Sidebar} from "../components/Sidebar";
import admin from "../../services/admin";
import {queryCache, useMutation, useQuery} from "react-query";

export const Credentials = () => {

    const [alertEmail, setAlertEmail] = useState(false);
    const [alertPwd, setAlertPwd] = useState(false);
    const {data, status} = useQuery("userId", admin.getAdminById);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [emailMutation] = useMutation(admin.setEmail, {
        onSuccess: async (data) => {
            setAlertEmail(!alertEmail);
            await queryCache.setQueryData("userId", () => [data]);
            setTimeout(() => {
                setAlertEmail(false)
            }, 2000)
        }
    })

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>

                <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <div className="row">
                        <div className="col">
                            <h3 className="my-4">Information actuelle de l'administrateur : </h3>
                            {
                                (status === "success") &&
                                <h6 className="my-4 ">
                                    Email : {data[0].email}
                                </h6>
                            }
                        </div>
                    </div>
                    <h3 className="mt-4">Changer de mot de passe</h3>
                    <div className="row my-4 form">
                        <div className="col-md-4 form-floating">
                                <input type="text" id="email" placeholder="email" defaultValue="" className="form-control "
                                       onChange={
                                           (event) => {
                                               setEmail(event.target.value)
                                           }
                                       }
                                />
                            <label htmlFor=""> Email :</label>
                        </div>
                        <div className="col-md-4 d-flex align-items-end mt-3">
                            <button onClick={async () => {
                                await emailMutation(email);
                                return document.getElementById("email").value = "";
                            }} className="btn btn-primary">
                                Actualiser l'adresse mail
                            </button>
                        </div>
                    </div>
                    {alertEmail && <span className="alert text-center alert-success">Email actualisé</span>}


                    <div className="row my-4 form">
                        <div className="col-md-4 form-floating">
                                <input type="password" id="password" placeholder="password" defaultValue="" className="form-control "
                                       onChange={
                                           (event) => {
                                               setPassword(event.target.value)
                                           }}/>
                            <label htmlFor=""> Mot de passe :</label>
                        </div>
                        <div className="col-md-4 d-flex align-items-end mt-3">
                            <button onClick={async () => {
                                await admin.setPassword(password);
                                document.getElementById("password").value = "";
                                setAlertPwd(!alertPwd)
                                setTimeout(() => {
                                    setAlertPwd(false)
                                }, 2000)
                            }} className="btn btn-primary">
                                Actualiser le mot de passe
                            </button>
                        </div>
                    </div>
                    {alertPwd && <span className="alert text-center alert-success">Mot de passe actualisé</span>}
                </main>
            </div>
        </div>
    )
}
