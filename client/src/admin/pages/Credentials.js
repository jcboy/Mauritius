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
                                <h5 className="my-4 px-5 text-center">
                                    Email : {data[0].email}
                                </h5>
                            }
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col">
                            <label htmlFor=""> Email :
                                <input type="text" id="email" placeholder="email" defaultValue=""
                                       onChange={
                                           (event) => {
                                               setEmail(event.target.value)
                                           }
                                       }
                                />
                            </label>
                        </div>
                        <div className="col">
                            <button onClick={async () => {
                                await emailMutation(email);
                                return document.getElementById("email").value = "";
                            }}>
                                Actualiser l'adresse mail
                            </button>
                        </div>
                    </div>
                    {alertEmail && <span className="alert text-center alert-success">Email actualisé</span>}


                    <div className="row my-4">
                        <div className="col">
                            <label htmlFor=""> Mot de passe :
                                <input type="password" id="password" placeholder="password" defaultValue=""
                                       onChange={
                                           (event) => {
                                               setPassword(event.target.value)
                                           }}/>
                            </label>
                        </div>
                        <div className="col">
                            <button onClick={async () => {
                                await admin.setPassword(password);
                                document.getElementById("password").value = "";
                                setAlertPwd(!alertPwd)
                                setTimeout(() => {
                                    setAlertPwd(false)
                                }, 2000)
                            }}>
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
