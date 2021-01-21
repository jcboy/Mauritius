import React from 'react';

export const Login = () => {
    return (
        <div className="login wrap d-flex flex-column justify-content-center">
            <form className="needs-validation" >
                <div className="logo text-center logo-content mb-5 pb-2">
                    Mauritius
                </div>

                <div className="form-floating mb-2">
                    <input type="email" name="email" placeholder="Email2" className="form-control mb-1" required />
                    <label htmlFor="floatingInput">Email2*</label>
                    {/* <span className="text-danger fst-italic mt-1">Email2 incorrect</span> */}
                </div>

                <div className="form-floating mb-3">
                    <input type="password" name="password" placeholder="Mot de passe" className="form-control mb-1" required />
                    <label>Mot de passe*</label>
                    {/* <span className="text-danger fst-italic">Mot de pass incorrect</span> */}
                </div>

                <div className=" mt-5 pt-2">
                    <button type="submit" className="btn w-100">Connexion</button>
                </div>
                {/* <p class="mt-4"><span class="fw-bold">Vous n'avez pas de compte ? </span>
                    <a href="">Enregistrez-vous</a>
                </p> */}
            </form>
        </div>
    )
}
