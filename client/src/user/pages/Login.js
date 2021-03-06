import React, {useState} from 'react';
import auth from "../../services/authentication"

export const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState(false)

    const login = async (e) => {
        e.preventDefault();
        try {
            await auth.login( {email, password},
                () => {
                    props.history.push("/admin");
                });
        } catch(err) {
            setAlert(!alert);
            console.log(err);
        }
    }

    return (
        <div className="login wrap d-flex flex-column justify-content-center">
            <form className="needs-validation">
                <div className="logo text-center logo-content mb-5 pb-2">
                    Mauritius
                </div>

                <div className="form-floating mb-2 error">
                    <input type="email" name="email" placeholder="Email2"
                           className="form-control mb-1" required
                           onChange={(event) => {
                               setEmail(event.target.value);
                           }}/>
                    <label htmlFor="floatingInput">Email</label>
                    {alert && <span className="text-danger fst-italic mt-1">Email2 incorrect</span> }
                </div>

                <div className="form-floating mb-3">
                    <input type="password" name="password" placeholder="Mot de passe"
                           className="form-control mb-1" required
                           onChange={(event) => {
                               setPassword(event.target.value)
                           }}/>
                    <label>Mot de passe</label>
                    {alert && <span className="text-danger fst-italic">Mot de pass incorrect</span> }
                </div>
                <div className=" mt-5 pt-2">
                    <button type="submit" className="btn w-100"
                            onClick={login}>
                        Connexion
                    </button>
                </div>
                {/* <p class="mt-4"><span class="fw-bold">Vous n'avez pas de compte ? </span>
                    <a href="">Enregistrez-vous</a>
                </p> */}
            </form>
        </div>
    )
}
